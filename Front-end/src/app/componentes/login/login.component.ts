import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
form: FormGroup;
constructor (private FormBuilder: FormBuilder ){
this.form=this.FormBuilder.group(
  {
     
  }
)
}
ngOnInit(): void{

}
}
