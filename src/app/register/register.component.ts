import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
  ) { }

	ngOnInit() {
		this.registerForm = this.fb.group({
			fullname: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
			login: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],

		});

  }
}
