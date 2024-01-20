import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'change-form-data',
  templateUrl: './change-form-data.component.html',
  styleUrls: ['./change-form-data.component.css']
})
export class ChangeFormDataComponent {

  datas!:FormGroup
  constructor(private data:FormBuilder){}

  ngOnInit(){
    this.datas=this.data.group({
      name:[''],
      age:[''],
      job:['']
    })
  }

  get f(){
   return this.datas.controls
  }


  submitting(){
    console.log(this.datas);
    console.log(this.datas.value);

    console.log("sudais");
    
    
  }

  updateFormData(){


    this.datas.patchValue({
      name:"mirshad",
      age:26,
    })

    console.log(this.datas.value);
    
  }

  setFormData(){
    this.datas.setValue({
      name:"sudais",
      age:23,
      job:"developer"
    })
    console.log(this.datas.value);

  }


}
