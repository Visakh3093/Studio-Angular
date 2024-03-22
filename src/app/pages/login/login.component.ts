import { Component, OnInit } from '@angular/core';
import { PagetitleComponent } from '../../components/pagetitle/pagetitle.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { inputField, FormData } from "../../model/login.interface"
import { isEmpty } from 'lodash';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PagetitleComponent,RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  errorObj:{ [key: string]: string } = {}
   title="Login"
   emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   success:boolean=false
   constructor(){}
   formData = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.pattern(this.emailRegex)]),
    password: new FormControl('',[Validators.required])
   })

   getObjectKeys(obj: Object) {
    return Object.keys(this.errorObj);
  }

   inputData:inputField[] = [
    {
      label: "Email",
      type: "email",
      key: "email",
      placeholder: "Type Your Email",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      key: "password",
      placeholder: "Type Your Password",
      required: true,
    },
   ]

   isEmptyObj() {
    if (!isEmpty(this.errorObj)) {
      return this.errorObj;
    } else {
      return null;
    }
  }

  ngOnInit(): void {
    this.errorObj = {}
    this.success = false
  }

   handleValidate()
   {
      this.inputData.map((item:inputField)=>{
              if(item.required)
              {
                if(this.formData.get(item.key)?.errors?.['required'])
                {
                  this.errorObj[item.key] = item.label+' is required'
                }
                if(this.formData.get(item.key)?.errors?.['pattern'])
                {
                  this.errorObj[item.key] = "invalid " + item.label
                }
              }
      })

      return this.errorObj
   }

   handleSubmit()
   { 
    this.errorObj = {}
    
    
    this.success=false
    this.handleValidate()

    if(isEmpty(this.errorObj))
    {
    
      this.success=true
    }
    else
    {
    
       this.success = false
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
