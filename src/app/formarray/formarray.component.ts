import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder ,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit{
  array!:FormGroup

  constructor(private builder:FormBuilder){}

  ngOnInit(): void {
    this.array=this.builder.group({
      emails:this.builder.array([])
    })

    console.log(this.array.controls['emails']);
    
  }

  get emailControls() {
    return (this.array.get('emails') as FormArray).controls;
  }
  addEmail() {
    const emailControl = this.builder.control('', [Validators.required, Validators.email]);
    (this.array.get('emails') as FormArray).push(emailControl);
    console.log(this.emailControls  );
    
  }

  removeEmail(index: number) {
    (this.array.get('emails') as FormArray).removeAt(index);
  }

  onSubmit(){

  }

}
