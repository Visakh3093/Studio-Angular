import { Component, OnInit } from '@angular/core';
import { PagetitleComponent } from '../pagetitle/pagetitle.component';
import { RouterLink } from '@angular/router';
import { inputField,ForgottPasswordModel } from '../../model/login.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { isEmpty } from 'lodash';
import { GetApiService } from '../../services/get-api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-forgottpassword',
  standalone: true,
  imports: [PagetitleComponent,RouterLink,ReactiveFormsModule],
  templateUrl: './forgottpassword.component.html',
  styleUrl: './forgottpassword.component.scss'
})
export class ForgottpasswordComponent implements OnInit {
  constructor(private data:GetApiService){}
  title:string = "Forgot password"
  errorObj: {[key:string]:string} = {}
  emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  success:boolean = false
  url:string = `${environment.apiUrl}/api/forgotpassword?_format=json`
  formData = new FormGroup({
    email : new FormControl("",[Validators.required,Validators.pattern(this.emailRegex)])
  })

  inputData:inputField[] = [
    { type: "email", label: "Email", key: "email", placeholder: "Type Your Email", required: true }
  ]
  ngOnInit(): void {
    this.errorObj = {}
    this.success = false
  }

  getObjectKeys(obj: Object) {
    return Object.keys(this.errorObj);
  }
  isEmptyObj() {
    if (!isEmpty(this.errorObj)) {
      return this.errorObj;
    } else {
      return null;
    }
  }


  handleValidate()
  {
    this.inputData.map((item:inputField )=>{
      if(item.required)
      {
        if(this.formData.get(item.key)?.errors?.['required'])
        {
           this.errorObj[item.key] = item.label + " is required"
        }
        if(this.formData.get(item.key)?.errors?.["pattern"])
        {
          this.errorObj[item.key] = "invalid "+ item.label
        }
      }

      return this.errorObj
    })
    
  }

  handleSubmit()
  {
    this.success = false
    this.handleValidate()
  
    
    if(isEmpty(this.errorObj))
    {
    this.data.postData(this.url,this.formData.value).subscribe((res:Partial<ForgottPasswordModel>)=>{
                  console.log("res: ",res);
                  alert(res?.error?.en)
    }, (err)=>{
       
      
      
    })
        
    }
    else
    {
      setTimeout(() => {
        const firstErrorElement = document.querySelector(
          ".error-container .error"
        ) as HTMLElement;

        if   (firstErrorElement) {
          firstErrorElement.focus();
        }
      }, 0);
    }
  }

}
