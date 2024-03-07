import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  public isShowRegistrationForm:boolean = false

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private store: Store,
    private toastr: ToastrService
  ) {}

  openRegistrationForm() {
    this.isShowRegistrationForm = true;
    console.log('re')
  }

  closeRegistrationModal(){
    this.isShowRegistrationForm = false
  }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin-products']);
    }

    this.auth.getRegistrationUsers();
  }

  loginForm = this.fb.nonNullable.group({
    password: ['', Validators.required],
    email: ['', [Validators.required]],
  });

  onSubmit() {
    this.auth.login(this.loginForm.value).subscribe((response) => {});
    const request = this.loginForm.getRawValue();
    this.store.dispatch(authActions.login({ request }));
    this.toastr.success('You are successful login!');
    this.loginForm.reset();
  }
}
