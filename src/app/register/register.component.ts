import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

enum CitizenshipType {
  NATIVES = 'natives',
  FOREIGN = 'foreign',
}
const occupations = [
  { id: 1, value: 'teacher', label: '老師' },
  { id: 2, value: 'doctor', label: '醫師' },
  { id: 3, value: 'lawyer', label: '律師' },
];

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  idName = '身分證字號';
  hadSubmited = false;
  citizenshipType = CitizenshipType;
  occupations = occupations;
  form!: FormGroup;

  submit(): void {
    this.hadSubmited = true;
    console.log(this.form.value);
  }
  initForm() {
    this.form = this.fb.group({
      [this.formkey.account]: ['', { validators: [Validators.required] }],
      [this.formkey.password]: ['', Validators.required],
      [this.formkey.citizenship]: ['', Validators.required],
      [this.formkey.idNumber]: ['', Validators.required],
      [this.formkey.occupation]: [this.fb.array([])],
    });
    const occupationArray = this.form.controls[
      this.formkey.occupation
    ] as FormArray;
    occupationArray.clear();
    this.occupations.forEach((o) => {
      occupationArray.push(this.fb.control(false));
    });
  }
  formkey = {
    account: 'account',
    password: 'password',
    citizenship: 'citizenship',
    idNumber: 'idNumber',
    occupation: 'occupation',
  };

  ngOnInit(): void {
    this.initForm();
    this.form.get('citizenship')?.valueChanges.subscribe((c) => {
      this.idName = c === CitizenshipType.NATIVES ? '身分證字號' : '居留證號碼';
    });
  }
}
