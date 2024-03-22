import { Component, OnInit } from '@angular/core';
import { PagetitleComponent } from "../pagetitle/pagetitle.component"
import { LowerImgComponent } from "../lower-img/lower-img.component"
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RadioOption, inputField } from '../../model/login.interface';
import { isEmpty } from 'lodash';
import { GetApiService } from '../../services/get-api.service';
import { environment } from '../../../environments/environment';
import { SubscriberesponseModel } from '../../model/home.interface';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [PagetitleComponent,LowerImgComponent,RouterLink,ReactiveFormsModule],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent implements OnInit {
  
  constructor(private data:GetApiService){}
  ngOnInit(): void {
    this.success = false
    this.errorObj ={}
  }

  success:boolean = false
  errorObj:{[key:string]:string} = {}
  title:string = 'Subscribe'
  mobilePattern: RegExp = /^[0-9]{8}$/;
  emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  url:string = `${environment.apiUrl}/webform_rest/submit?_format=json`
  formData = new FormGroup({
    agree:new FormControl("",[Validators.required]),
    best_describe:new FormControl("",[Validators.required]),
    best_describe_other:new FormControl("",[Validators.required]),
    email_address:new FormControl("",[Validators.required,Validators.pattern(this.emailRegex)]),
    mobile_number:new FormControl("",[Validators.required,Validators.pattern(this.mobilePattern)]),
    name:new FormControl("",[Validators.required]),
    terms_of_service: new FormControl("1",[Validators.required]),
    webform_id:new FormControl("subscribe",[Validators.required]),

  })
  radioOption : RadioOption[] = [
    { value: "School_representative", label: "School representative" },
    { value: "Parents", label: "Parents" },
    { value: "Student", label: "Student" },
    { value: "_other", label: "_other" },
  ];

  

  inputData:inputField[] = [
    {type:"text",key:"name",label:"Name",placeholder:"Type your name",required:true},
    {type:"email",key:"email_address",label:"Email",placeholder:"Type your email",required:true},
    {type:"mobile",key:"mobile_number",label:"Mobile Number",placeholder:"Mobile Number",required:true},
    {type:"radio",key:"best_describe",label:"describe yourself",placeholder:"",required:true,options:this.radioOption},
    {type:"checkbox",key:"agree",label:"agree to the studio 5",placeholder:"",required:true}
  ]

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

  handleValidate ()
  {
    this.errorObj ={ }
    this.inputData.map((item:inputField)=>{
      if(item.required)
      {
        if(this.formData.get(item.key)?.errors?.["required"])
        {
         this.errorObj[item.key] = item.label + " is required"
        }
        if(this.formData.get(item.key)?.errors?.["pattern"])
        {
          this.errorObj[item.key] = "invalid "+item.label
        }
      }
    })
    return this.errorObj
  }

  handleSubmit()
  {
    this.success = false
    this.errorObj ={}
    this.handleValidate()
    if(isEmpty(this.errorObj))
    {
       this.data.postData(this.url,this.formData.value).subscribe((res:Partial<SubscriberesponseModel>)=>{
        
              this.success = true
       })
    }
    else
    {
      setTimeout(() => {
        const firstErrorElement = document.querySelector(
          ".error-container .error"
        ) as HTMLElement;

        if (firstErrorElement) {
          firstErrorElement.focus();
        }
      }, 0);
    }
    }
    
  }

