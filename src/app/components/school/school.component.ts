import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../../services/get-api.service';
import { environment } from '../../../environments/environment';
import { volunteerModel } from '../../model/volunteer.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { isEmpty } from 'lodash';
import { SchoolResModel, schoolData } from '../../model/schooldata.interface';


@Component({
  selector: 'app-school',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './school.component.html',
  styleUrl: './school.component.scss'
})
export class SchoolComponent implements OnInit {
  optionData:Partial<schoolData> = {}
  errorObj:{[key:string]:string} = {}
  success:boolean = false
  mobilePattern: RegExp = /^[0-9]{8}$/;
  emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  postUrl:string = `${environment.apiUrl}/api/schoolrepresentativepost?_format=json`
  constructor(private data:GetApiService){
    this.data.getData(this.schoolUrl).subscribe((res:schoolData)=>{
    
      this.optionData = res
      
 },(err:Error)=>{
  
   
 })
  }
  schoolUrl:string = `${environment.apiUrl}/api/snames?_format=json&lang=en`
  ngOnInit(): void { }


  formData = new FormGroup({
    field_reference: new FormGroup({ target_id: new FormControl("") }),
    target_id: new FormControl(""),
    field_representative_name_arabic: new FormControl(""),
    field_school_reps_qid: new FormControl("",[Validators.required]),
    mail: new FormControl(""),
    name: new FormControl(""),
    position: new FormControl("",[Validators.required]),
    rep_mob: new FormControl("",[Validators.required]),
    repmail: new FormControl("",[Validators.required]),
    repname: new FormControl("",[Validators.required]),
    roles: new FormGroup ({ target_id:new FormControl("school") }),
    school_email: new FormControl("",[Validators.required]),
    school_id: new FormGroup({ target_id:new FormControl("0") , target_type: new FormControl("taxonomy_term" ) }),
    school_mob: new FormControl("",[Validators.required]),
    school_name: new FormControl("",[Validators.required]),
    agree:new FormControl("",[Validators.required]),
  })

 
  inputData:volunteerModel[] = [
    {
      label: "School Name ",
      type: "select",
      key: "school_id",
      
      required: true,
      placeholder: "",
    },
    {
      label: "School Name",
      
      type: "text",
      key: "school_name",
      required: true,
      placeholder: "Type Your School Name"
    },
    {
      label: "School Phone number",
      type: "mobile",
      
      key: "school_mob",
      required: true,
      placeholder: "Type School Phone number"
    },
    {
      label: "School Email Address",
      type: "text",
     
      key: "school_email",
      required: true,
      placeholder: "Type Your School Email"
    },
    {
      label: "Name in English",
      type: "text",
      key: "repname",
      required: true,
      placeholder: "Type Name in English",
    },
    {
      label: "Name in Arabic",
      type: "text",
      key: "field_representative_name_arabic",
      required: false,
      placeholder: "Type Your name in Arabic",
    },
    {
      label: "QID",
      type: "text",
      key: "field_school_reps_qid",
      required: true,
      placeholder: "Type your QID",
    },
    {
      label: "Position ",
      type: "text",
      key: "position",
      required: true,
      placeholder:"Type Your Position",
    },
    {
      label:"Mobile Number ",
      type: "mobile",
      key: "rep_mob",
      required: true,
      placeholder: "Type Mobile number"
    },
    {
      label: "Email",
      type: "email",
      key: "repmail",
      required: true,
      placeholder: "Type Your Email",
    },
    {
      label: "I agree to the studio 5",
      type: "checkbox",
      key: "agree",
      required: true,
      placeholder: "",
    },
  ];

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


  handleValidation ()
  {
    this.inputData.map((item:volunteerModel)=>{
         if(item.required)
         {
          if(this.formData.get(item.key)?.errors?.['required'])
          {
            this.errorObj[item.key] = item.label + " is required"
          }
          if(this.formData.get(item.key)?.errors?.["pattern"])
          {
            this.errorObj[item.key] = "invalid " + item.label
          }
         }
    })
    return this.errorObj
  }

handleSubmit(){
  this.errorObj = {}
  this.success = false
  const updatedFormData = {...this.formData.value,name:this.formData.value.repmail,mail:this.formData.value.repmail}
  this.handleValidation()
  if(isEmpty(this.errorObj))
  {
     this.data.postData(this.postUrl,updatedFormData).subscribe((res:Partial<SchoolResModel>)=>{
      this.success = true
     })
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
