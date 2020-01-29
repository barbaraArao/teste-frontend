import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { VerificarCPF } from '../shared/validators/validator-cpf';


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
    private userService : UserService,
    private router: Router,

  ) { }

	ngOnInit() {
		this.registerForm = this.fb.group({
			fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
			login: ['', Validators.required],
      cpf: ['', [Validators.required, VerificarCPF]],
      phone: ['', Validators.required],

    });
    
    
  }


  
  onSubmit(){
    this.loading = true;
    if (this.registerForm.invalid) {
			return;
    }
    this.userService.registerProfile(this.registerForm.value).subscribe(
      success=>{
        this.router.navigate([''])
      }, 
      error=>{
        this.loading = false;
        alert('Usuário não cadastrado, tente novamente.')
      }
    )
  }
}
