import { Component, OnInit } from '@angular/core';
import { LowerImgComponent } from '../../components/lower-img/lower-img.component';
import { PagetitleComponent } from '../../components/pagetitle/pagetitle.component';
import { FormDataModel, InputData } from '../../model/contact.interface'
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { isEmpty } from "lodash";
import { GetApiService } from '../../services/get-api.service';
import { environment } from '../../../environments/environment';
import { Obj } from '@popperjs/core';
import { CommonModule } from '@angular/common';
import { ContactResponseModel } from "../../model/contact.interface"

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LowerImgComponent, PagetitleComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  title: string = "Contact us"
  url: string = `${environment.apiUrl}/webform_rest/submit`
  mobilePattern: RegExp = /^[0-9]{8}$/;
  emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  ErrorObj: { [key: string]: string } = {}
  success: boolean = false
  constructor(private data: GetApiService) { }

  formData = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.pattern(this.emailRegex)]),
    mobile_number: new FormControl("", [Validators.required, Validators.pattern(this.mobilePattern)]),
    message: new FormControl("", [Validators.required]),
    agree: new FormControl('', [Validators.requiredTrue]),
    webform_id: new FormControl("contact_us")
  })

  getObjectKeys(obj: Object) {
    return Object.keys(this.ErrorObj);
  }

  isEmptyObj() {
    if (!isEmpty(this.ErrorObj)) {
      return this.ErrorObj;
    } else {
      return null;
    }
  }


  inputData: InputData[] = [
    { type: "text", label: "Name", key: "name", placeholder: "Type Your Name", required: true },
    { type: "email", label: "Email", key: "email", placeholder: "Type Your Email", required: true },
    { type: "mobile", label: "Mobile Number", key: "mobile_number", placeholder: "Type Your number", required: true },
    { type: "textarea", label: "Message", key: "message", placeholder: "Type Your Message", required: true },
    { type: "checkbox", label: "I agree to the studio 5", key: "agree", placeholder: "", required: true }
  ]

  handleValidate() {
    const errorData: { [key: string]: string } = {}
  
    this.inputData.map((item: InputData) => {
      if (item.required) {
        if (this.formData.get(item.key)?.errors?.['required']) {
          errorData[item.key] = item.label + ' is required'
        }
        if (this.formData.get(item.key)?.errors?.['pattern']) {
          errorData[item.key] = "invalid " + item.label
        }
      }
    })

    
    return errorData

  }



  submitForm() {
    this.success = false
    this.ErrorObj = this.handleValidate()
    if (isEmpty(this.ErrorObj)) {
      
      this.data.postData(this.url, this.formData.value).subscribe( (res: Partial<ContactResponseModel>) => {
         
          this.success = true
        }
      )
    }
    else {
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
  ngOnInit(): void {
     this.success = false
     this.ErrorObj = {}
  }


}
