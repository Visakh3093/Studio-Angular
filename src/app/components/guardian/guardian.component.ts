import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../../services/get-api.service';
import { InputData } from '../../model/contact.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { isEmpty } from 'lodash';
import { environment } from '../../../environments/environment';
import { GuardianModel } from "../../model/guardian.interface"

@Component({
  selector: 'app-guardian',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './guardian.component.html',
  styleUrl: './guardian.component.scss'
})
export class GuardianComponent implements OnInit {
  mobilePattern: RegExp = /^[0-9]{8}$/;
  emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  errorObj:{[key:string]:string} = {}
  constructor(private data: GetApiService) { }
  success:boolean = false
  url:string = `${environment.apiUrl}/api/parentpost?_format=json`
  ngOnInit(): void {
    this.success = false
    this.errorObj = {}
  }
  formData = new FormGroup({
    field_parent_email: new FormControl("", [Validators.required,Validators.pattern(this.emailRegex)]),
    field_parent_name: new FormControl("", [Validators.required]),
    parent_mobile_number: new FormControl("", [Validators.required,Validators.pattern(this.mobilePattern)]),
    field_qid: new FormControl("", [Validators.required]),
    existing_students_data: new FormControl([]),
    mail: new FormControl(""),
    name: new FormControl(""),
    non_existing_students_data: new FormControl([]),
    roels: new FormGroup({
      target_id: new FormControl("parent")
    }),
    agree: new FormControl(false, [Validators.required]),
  })


  

  inputData: InputData[] = [
    {
      label: "Guardian name in English",
      type: "text",
      required: true,
      placeholder: "Type guardian name in English",
      key: "field_parent_name",

    },
    {
      label: "Guardian QID",
      type: "text",
      placeholder: "Type your ID",
      required: true,
      key: "field_qid",

    },
    {
      label: "Guardian Email Address",
      placeholder: "Type your email",
      required: true,
      key: "field_parent_email",
      type: "email",

    },
    {
      label: "Guardian Mobile",
      placeholder: "Type Your Mobile Number",
      required: true,
      key: "parent_mobile_number",
      type: "mobile",

    },
    {
      label: "Agree terms and conditions",
      type: "checkbox",
      key: "agree",
      required: true,
      placeholder: "",
    },
  ];

  handleValidate()
  {
    this.inputData.map((item:InputData)=>{
        if(item.required)
        {
          if(this.formData.get(item.key)?.errors?.["required"])
          {
            this.errorObj[item.key] = item.label+" is required"
          }
        if(this.formData.get(item.key)?.errors?.["pattern"])
        {
           this.errorObj[item.key] = "invalid "+ item.label
        }
        }
    })

    return this.errorObj
  }

async handleSubmit()
{  this.errorObj = {}
  this.success = false
 
  await this.handleValidate()
 
  
  if(isEmpty(this.errorObj))
  {
      const updatedFormData = {...this.formData.value,mail:this.formData.value.field_parent_email, name:this.formData.value.field_parent_email}

      this.data.postData(this.url,updatedFormData).subscribe((res:Partial<GuardianModel>)=>{
       
        if(!res)
        {
           this.success = true
        }
        else
        {
          this.errorObj = {"error":"Data already exist!!"}
          this.success = false
        }
        
      },(err:Error)=>{
       
        
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
}

