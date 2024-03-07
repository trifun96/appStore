import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/core/services/api-service.service';
import { AuthService } from 'src/app/core/services/auth-service.service';
import { IState } from 'src/app/shared/models/store.interface';
import { authActions } from '../../store/actions';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  @Output() closeEvent = new EventEmitter<boolean>(false);
constructor(
  private formBuilder: FormBuilder,
  private store:Store<IState>,
  ) {}

  formGroup = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    surname: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(){
    this.formGroup.getRawValue();

    const request = this.formGroup.getRawValue();
    this.formGroup.reset();
    
    this.store.dispatch(authActions.registerTest({request}))
  }


  closeRegistrationForm() {
    this.closeEvent.emit(true);
  }
}
