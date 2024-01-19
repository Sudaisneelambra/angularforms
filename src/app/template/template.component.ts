import { AfterViewInit, Component, OnInit, ViewChild ,} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit ,AfterViewInit{
  
  @ViewChild ('form') val!:NgForm

  ngAfterViewInit(): void {
   console.log(this.val);
    
  }
  
  ngOnInit(): void {
   console.log(this.val);
   
    
  }

  data={
    name:"",
    age:'',
    mail:"",
    phone:'',
    address:""

  }

 
  onsubmit(form:NgForm){
    console.log(this.data);

    console.log(form.controls['name'].hasError('required'));
    console.log(form.controls['name'].hasError('pattern'));
    console.log(form.submitted);
    console.log(form);



    
    
  }

}

