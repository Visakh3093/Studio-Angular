import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../../services/get-api.service';
import { environment } from '../../../environments/environment';
import { schoolData, schoolInputData } from '../../model/schooldata.interface'
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { isEmpty } from 'lodash';
import { StudentResModel } from "../../model/student.interface"

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent implements OnInit {
  schoolUrl: string = `${environment.apiUrl}/api/snames?_format=json&lang=en`
  mobilePattern: RegExp = /^[0-9]{8}$/;
  emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  success: boolean = false
  schoolData: Partial<schoolData> = {}
  errorObj: { [key: string]: string } = {}
  postUrl: string = `${environment.apiUrl}/api/studentpost?_format=json`
  constructor(private data: GetApiService) { }

  ngOnInit(): void {
    this.success = false
    this.data.getData(this.schoolUrl).subscribe(
       (res: schoolData) => {
        this.schoolData = res
      


      },  (err: Error) => {
       

      }
    )
  }

  formData = new FormGroup({
    field_gender: new FormControl('', [Validators.required]),
    field_grade: new FormControl('', [Validators.required]),
    field_nationality: new FormControl('', [Validators.required]),
    field_parent_email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
    field_parent_mobile_number: new FormControl('', [Validators.required, Validators.pattern(this.mobilePattern)]),
    field_parent_mobile_number_2: new FormControl('', [Validators.required, Validators.pattern(this.mobilePattern)]),
    field_parent_name: new FormControl('', [Validators.required]),
    field_parent_qid: new FormControl('', [Validators.required]),
    field_qid: new FormControl('', [Validators.required]),
    field_reference: new FormGroup({
      target_id: new FormControl('')
    }),
    field_relation_to_the_student: new FormControl('', [Validators.required]),
    field_student_dob: new FormControl('', [Validators.required]),
    field_student_email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
    field_student_mobile: new FormControl('', [Validators.required, Validators.pattern(this.mobilePattern)]),
    field_student_name: new FormControl('', [Validators.required]),
    field_student_name_arabic: new FormControl(''),
    mail: new FormControl(''),
    name: new FormControl(''),
    roles: new FormGroup({
      target_id: new FormControl('student')
    }),
    school_id: new FormGroup({
      target_id: new FormControl('0'),
      target_type: new FormControl('taxonomy_term')
    }),
    school_name: new FormControl('', [Validators.required]),
    agree: new FormControl('', [Validators.required])
  })

  nationalityOptions = [
    { value: "", sname: "Select Nationality" },
    { value: 1, sname: "Afghanistan" },
    { value: 2, sname: "Albania" },
    { value: 4, sname: "Algeria" },
    { value: 5, sname: "American Samoa" },
    { value: 6, sname: "Andorra" },
    { value: 7, sname: "Angola" },
    { value: 189, sname: "Anguilla" },
    { value: 3, sname: "Antarctica" },
    { value: 8, sname: "Antigua and Barbuda" },
    { value: 10, sname: "Argentina" },
    { value: 16, sname: "Armenia" },
    { value: 152, sname: "Aruba" },
    { value: 11, sname: "Australia" },
    { value: 12, sname: "Austria" },
    { value: 9, sname: "Azerbaijan" },
    { value: 13, sname: "Bahamas" },
    { value: 14, sname: "Bahrain" },
    { value: 15, sname: "Bangladesh" },
    { value: 17, sname: "Barbados" },
    { value: 34, sname: "Belarus" },
    { value: 18, sname: "Belgium" },
    { value: 26, sname: "Belize" },
    { value: 59, sname: "Benin" },
    { value: 19, sname: "Bermuda" },
    { value: 20, sname: "Bhutan" },
    { value: 21, sname: "Bolivia, Plurinational State of" },
    { value: 22, sname: "Bosnia and Herzegovina" },
    { value: 23, sname: "Botswana" },
    { value: 25, sname: "Brazil" },
    { value: 30, sname: "Brunei Darussalam" },
    { value: 31, sname: "Bulgaria" },
    { value: 241, sname: "Burkina Faso" },
    { value: 33, sname: "Burundi" },
    { value: 35, sname: "Cambodia" },
    { value: 36, sname: "Cameroon" },
    { value: 37, sname: "Canada" },
    { value: 38, sname: "Cape Verde" },
    { value: 40, sname: "Central African Republic" },
    { value: 42, sname: "Chad" },
    { value: 43, sname: "Chile" },
    { value: 44, sname: "China" },
    { value: 48, sname: "Colombia" },
    { value: 49, sname: "Comoros" },
    { value: 51, sname: "Congo" },
    { value: 52, sname: "Congo, the Democratic Republic of the" },
    { value: 53, sname: "Cook Islands" },
    { value: 54, sname: "Costa Rica" },
    { value: 55, sname: "Croatia" },
    { value: 56, sname: "Cuba" },
    { value: 57, sname: "Cyprus" },
    { value: 58, sname: "Czech Republic" },
    { value: 109, sname: "Côte d'Ivoire" },
    { value: 60, sname: "Denmark" },
    { value: 79, sname: "Djibouti" },
    { value: 61, sname: "Dominica" },
    { value: 62, sname: "Dominican Republic" },
    { value: 63, sname: "Ecuador" },
    { value: 233, sname: "Egypt" },
    { value: 64, sname: "El Salvador" },
    { value: 65, sname: "Equatorial Guinea" },
    { value: 67, sname: "Eritrea" },
    { value: 68, sname: "Estonia" },
    { value: 66, sname: "Ethiopia" },
    { value: 69, sname: "Faroe Islands" },
    { value: 72, sname: "Fiji" },
    { value: 73, sname: "Finland" },
    { value: 75, sname: "France" },
    { value: 76, sname: "French Guiana" },
    { value: 77, sname: "French Polynesia" },
    { value: 80, sname: "Gabon" },
    { value: 82, sname: "Gambia" },
    { value: 81, sname: "Georgia" },
    { value: 84, sname: "Germany" },
    { value: 85, sname: "Ghana" },
    { value: 86, sname: "Gibraltar" },
    { value: 88, sname: "Greece" },
    { value: 89, sname: "Greenland" },
    { value: 90, sname: "Grenada" },
    { value: 91, sname: "Guadeloupe" },
    { value: 92, sname: "Guam" },
    { value: 93, sname: "Guatemala" },
    { value: 94, sname: "Guinea" },
    { value: 178, sname: "Guinea-Bissau" },
    { value: 95, sname: "Guyana" },
    { value: 96, sname: "Haiti" },
    { value: 98, sname: "Holy See (Vatican City State)" },
    { value: 99, sname: "Honduras" },
    { value: 100, sname: "Hong Kong" },
    { value: 101, sname: "Hungary" },
    { value: 102, sname: "Iceland" },
    { value: 103, sname: "India" },
    { value: 104, sname: "Indonesia" },
    { value: 105, sname: "Iran, Islamic Republic of" },
    { value: 106, sname: "Iraq" },
    { value: 107, sname: "Ireland" },
    { value: 108, sname: "Italy" },
    { value: 110, sname: "Jamaica" },
    { value: 111, sname: "Japan" },
    { value: 113, sname: "Jordan" },
    { value: 112, sname: "Kazakhstan" },
    { value: 114, sname: "Kenya" },
    { value: 87, sname: "Kiribati" },
    { value: 115, sname: "Korea, Democratic People's Republic of" },
    { value: 116, sname: "Korea, Republic of" },
    { value: 117, sname: "Kuwait" },
    { value: 118, sname: "Kyrgyzstan" },
    { value: 119, sname: "Lao People's Democratic Republic" },
    { value: 122, sname: "Latvia" },
    { value: 120, sname: "Lebanon" },
    { value: 121, sname: "Lesotho" },
    { value: 123, sname: "Liberia" },
    { value: 124, sname: "Libya" },
    { value: 125, sname: "Liechtenstein" },
    { value: 126, sname: "Lithuania" },
    { value: 127, sname: "Luxembourg" },
    { value: 128, sname: "Macao" },
    { value: 129, sname: "Madagascar" },
    { value: 130, sname: "Malawi" },
    { value: 131, sname: "Malaysia" },
    { value: 132, sname: "Maldives" },
    { value: 133, sname: "Mali" },
    { value: 134, sname: "Malta" },
    { value: 167, sname: "Marshall Islands" },
    { value: 135, sname: "Martinique" },
    { value: 136, sname: "Mauritania" },
    { value: 137, sname: "Mauritius" },
    { value: 138, sname: "Mexico" },
    { value: 141, sname: "Moldova, Republic of" },
    { value: 139, sname: "Monaco" },
    { value: 140, sname: "Mongolia" },
    { value: 142, sname: "Montenegro" },
    { value: 143, sname: "Montserrat" },
    { value: 144, sname: "Morocco" },
    { value: 145, sname: "Mozambique" },
    { value: 32, sname: "Myanmar" },
    { value: 147, sname: "Namibia" },
    { value: 148, sname: "Nauru" },
    { value: 149, sname: "Nepal" },
    { value: 150, sname: "Netherlands" },
    { value: 155, sname: "New Caledonia" },
    { value: 157, sname: "New Zealand" },
    { value: 158, sname: "Nicaragua" },
    { value: 159, sname: "Niger" },
    { value: 160, sname: "Nigeria" },
    { value: 161, sname: "Niue" },
    { value: 164, sname: "Northern Mariana Islands" },
    { value: 163, sname: "Norway" },
    { value: 146, sname: "Oman" },
    { value: 169, sname: "Pakistan" },
    { value: 168, sname: "Palau" },
    { value: 83, sname: "Palestine" },
    { value: 170, sname: "Panama" },
    { value: 171, sname: "Papua New Guinea" },
    { value: 172, sname: "Paraguay" },
    { value: 173, sname: "Peru" },
    { value: 174, sname: "Philippines" },
    { value: 176, sname: "Poland" },
    { value: 177, sname: "Portugal" },
    { value: 180, sname: "Puerto Rico" },
    { value: 181, sname: "Qatar" },
    { value: 183, sname: "Romania" },
    { value: 184, sname: "Russian Federation" },
    { value: 185, sname: "Rwanda" },
    { value: 182, sname: "Réunion" },
    { value: 188, sname: "Saint Kitts and Nevis" },
    { value: 190, sname: "Saint Lucia" },
    { value: 193, sname: "Saint Vincent and the Grenadines" },
    { value: 246, sname: "Samoa" },
    { value: 194, sname: "San Marino" },
    { value: 195, sname: "Sao Tome and Principe" },
    { value: 196, sname: "Saudi Arabia" },
    { value: 197, sname: "Senegal" },
    { value: 198, sname: "Serbia" },
    { value: 199, sname: "Seychelles" },
    { value: 200, sname: "Sierra Leone" },
    { value: 201, sname: "Singapore" },
    { value: 202, sname: "Slovakia" },
    { value: 204, sname: "Slovenia" },
    { value: 28, sname: "Solomon Islands" },
    { value: 205, sname: "Somalia" },
    { value: 206, sname: "South Africa" },
    { value: 208, sname: "Spain" },
    { value: 41, sname: "Sri Lanka" },
    { value: 210, sname: "Sudan" },
    { value: 212, sname: "Suriname" },
    { value: 214, sname: "Swaziland" },
    { value: 215, sname: "Sweden" },
    { value: 216, sname: "Switzerland" },
    { value: 217, sname: "Syria" },
    { value: 45, sname: "Taiwan, Province of China" },
    { value: 218, sname: "Tajikistan" },
    { value: 238, sname: "Tanzania, United Republic of" },
    { value: 219, sname: "Thailand" },
    { value: 179, sname: "Timor-Leste" },
    { value: 220, sname: "Togo" },
    { value: 222, sname: "Tonga" },
    { value: 223, sname: "Trinidad and Tobago" },
    { value: 225, sname: "Tunisia" },
    { value: 226, sname: "Turkey" },
    { value: 227, sname: "Turkmenistan" },
    { value: 229, sname: "Tuvalu" },
    { value: 230, sname: "Uganda" },
    { value: 231, sname: "Ukraine" },
    { value: 224, sname: "United Arab Emirates" },
    { value: 234, sname: "United Kingdom" },
    { value: 239, sname: "United States" },
    { value: 242, sname: "Uruguay" },
    { value: 243, sname: "Uzbekistan" },
    { value: 156, sname: "Vanuatu" },
    { value: 244, sname: "Venezuela, Bolivarian Republic of" },
    { value: 203, sname: "Viet Nam" },
    { value: 29, sname: "Virgin Islands, British" },
    { value: 240, sname: "Virgin Islands, U.S." },
    { value: 245, sname: "Wallis and Futuna" },
    { value: 211, sname: "Western Sahara" },
    { value: 247, sname: "Yemen" },
    { value: 248, sname: "Zambia" },
    { value: 207, sname: "Zimbabwe" },
  ];
  gradeOptions = [
    { value: "", sname: "select grade" },
    { value: "Grade 1", sname: "Grade 1" },
    { value: "Grade 2", sname: "Grade 2" },
    { value: "Grade 3", sname: "Grade 3" },
    { value: "Grade 4", sname: "Grade 4" },
    { value: "Grade 5", sname: "Grade 5" },
    { value: "Grade 6", sname: "Grade 6" },
    { value: "Grade 7", sname: "Grade 7" },
    { value: "Grade 8", sname: "Grade 8" },
    { value: "Grade 9", sname: "Grade 9" },
    { value: "Grade 10", sname: "Grade 10" },
    { value: "Grade 11", sname: "Grade 11" },
    { value: "Grade 12", sname: "Grade 12" },
  ];

  relationOptions = [
    { value: "", sname: "Select Relation" },
    { value: "Father", sname: "Father" },
    { value: "Mother", sname: "Mother" },
    { value: "Sister", sname: "Sister" },
    { value: "Brother", sname: "Brother" },
    { value: "Grandmother", sname: "Grandmother" },
    { value: "Grandfather", sname: "Grandfather" },
    { value: "Guardian", sname: "Guardian" },
  ];

  radioOption = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];


  inputData: schoolInputData[] = [
    { type: "text", key: "field_student_name", label: "Student name in English", placeholder: "Type Student name in English", required: true },
    { type: "text", key: "field_student_name_arabic", label: "Student name in Arabic", placeholder: "Type Student name in Arabic", required: false },
    { type: "date", key: "field_student_dob", label: "Date of Birth", placeholder: "DD-mm-YY", required: true },
    { type: "select", key: "field_nationality", label: "Nationality", placeholder: "select your nationality", required: true, options: this.nationalityOptions },
 
    { type: "text", refKey: "school_id", refValue: "Other", key: "school_name", label: "School Name", placeholder: "Type Your Schoolname", required: true },
    { type: "text", key: "field_qid", label: "QID", placeholder: "Type Your QID", required: true },
    { type: "radio", key: "field_gender", label: "Gender", placeholder: "", required: true, options: this.radioOption },
    { type: "select", key: "field_grade", label: "Grade", placeholder: "", required: true, options: this.gradeOptions },
    { type: "email", key: "field_student_email", label: "Email", placeholder: "Type Your Email", required: true },
    { type: "mobile", key: "field_student_mobile", label: "Mobile Number", placeholder: "Type Your Mobile number", required: true },
    { type: "text", key: "field_parent_qid", label: "Guardian QID", placeholder: "type guardian QID", required: true },
    { type: "text", key: "field_parent_name", label: "Guardian Name", placeholder: "Type your guardian Name", required: true },
    { type: "select", key: "field_relation_to_the_student", label: "Relation", placeholder: "", required: true, options: this.relationOptions },
    { type: "mobile", key: "field_parent_mobile_number", label: "Guardian Mobile 1", placeholder: "Type guardian mobile number", required: true },
    { type: "mobile", key: "field_parent_mobile_number_2", label: "Guardian Mobile 2", placeholder: "Type guardian mobile Number 2", required: true },
    { type: "email", key: "field_parent_email", label: "Guardian Email Address", placeholder: "Type Guardian email address", required: true },
    { type: "checkbox", key: "agree", label: "I agree to the studio 5", placeholder: "", required: true }
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

  handleValidate() {
    this.inputData.map((item: schoolInputData) => {
      if (item.required) {
        if (this.formData.get(item.key)?.errors?.["required"]) {
          this.errorObj[item.key] = item.label + " is required"
        }
        if (this.formData.get(item.key)?.errors?.["pattern"]) {
          this.errorObj[item.key] = "invalid " + item.label
        }
      }
      return this.errorObj
    })
  }

  handleSubmit() {
    this.errorObj = {}
    this.success = false
    const updatedFormData = { ...this.formData.value, mail: this.formData.value.field_student_email, name: this.formData.value.field_student_email }
 
    this.handleValidate()
    if (isEmpty(this.errorObj)) {
      this.data.postData(this.postUrl, updatedFormData).subscribe((res: Partial<StudentResModel>) => {
       
          this.success = true
        }, (err: Error) => {
        

        
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



}
