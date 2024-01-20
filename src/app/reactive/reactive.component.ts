import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit{

  clary!:FormGroup

  constructor(private form:FormBuilder){}
  ngOnInit(): void {
    this.clary=this.form.group({
      name:['',[Validators.required,Validators.pattern("^[A-Z]*$" )]],
      age:['',[Validators.required,Validators.pattern("^(1[8-9]|[2-9][0-9]|[1-9][0-9]{2,})$")]],
      mail:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      address:['',[Validators.required]]
  
    })
  }
  get f(){
    return this.clary.controls
  }

  submitted:boolean=false
  submit(){

    this.submitted=true
    console.log(this.f);
    console.log(this.f['phone']);
    

    
  }
}
