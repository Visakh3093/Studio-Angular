import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../../services/get-api.service';
import { VolunteerResModel, volunteerModel } from "../../model/volunteer.interface"
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { isEmpty } from 'lodash';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './volunteer.component.html',
  // styleUrl: './volunteer.component.scss'
})
export class VolunteerComponent implements OnInit {
  errorObj: { [key: string]: string } = {}
  constructor(private data: GetApiService) {
    this.success = false
    this.errorObj = {}
  }
  mobilePattern: RegExp = /^[0-9]{8}$/;
  emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  postUrl: string = `${environment.apiUrl}/api/volenteerpost?_format=json`
  success: boolean = false

  ngOnInit(): void {
    this.success = false
    this.errorObj = {}
  }
  formData = new FormGroup({
    field_gender: new FormControl("", [Validators.required]),
    field_qid: new FormControl("", [Validators.required]),
    field_student_dob: new FormControl("", [Validators.required]),
    field_volenteer_email: new FormControl("", [Validators.required, Validators.pattern(this.emailRegex)]),
    field_volenteer_mobile: new FormControl("", [Validators.required, Validators.pattern(this.mobilePattern)]),
    field_volenteer_name: new FormControl("", [Validators.required]),
    field_volenteer_name_arabic: new FormControl(""),
    mail: new FormControl(""),
    name: new FormControl(""),
    roles: new FormGroup({ target_id: new FormControl("volenteer") }),
    target_id: new FormControl("volenteer"),
    agree: new FormControl("", [Validators.required]),
  })
  radioOption = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  inputData: volunteerModel[] = [
    {
      label: "Name in English ",
      key: "field_volenteer_name",
      type: "text",
      required: true,
      placeholder: "Type Name in English",
    },
    {
      label: "Name in Arabic",
      key: "field_volenteer_name_arabic",
      type: "text",
      required: false,
      placeholder: "Type name in arabic",
    },
    {
      label: "QID",
      key: "field_qid",
      type: "text",
      required: true,
      placeholder: "Type Your QID",
    },
    {
      label: "Gender",
      option: this.radioOption,
      key: "field_gender",
      type: "radio",
      required: true,
      placeholder: "",
    },
    {
      label: "Date of Birth",
      key: "field_student_dob",
      type: "date",
      required: true,
      placeholder: "",
    },
    {
      label: "Email",
      key: "field_volenteer_email",
      type: "email",
      required: true,
      placeholder: "Type your email",
    },
    {
      label: "Mobile Number",
      key: "field_volenteer_mobile",
      type: "mobile",
      required: true,
      placeholder: "Type your mobile number",
    },
    {
      label: "Agree terms and conditions",
      type: "checkbox",
      key: "agree",
      required: true,
      placeholder: "",
    }
  ];

  handleValidate() {
    this.inputData.map((item: volunteerModel) => {
      if (item.required) {
        if (this.formData.get(item.key)?.errors?.["required"]) {
          this.errorObj[item.key] = item.label + " is required"
        }
        if (this.formData.get(item.key)?.errors?.["pattern"]) {
          this.errorObj[item.key] = "invalid " + item.label
        }
      }

    })
    return this.errorObj
  }
  handleSubmit() {
   
    this.errorObj = {}
    this.success = false
    this.handleValidate()
    const updatedFormData = {...this.formData.value,mail:this.formData.value.field_volenteer_email,name:this.formData.value.field_volenteer_email}
    if (isEmpty(this.errorObj)) {
      this.data.postData(this.postUrl, updatedFormData).subscribe((res:  Partial<VolunteerResModel>) => {
    
        this.success = true
      },(err:Error)=>{
       
        
      })
    }
    else {
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
