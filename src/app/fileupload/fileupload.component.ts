import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent {
  upload!:FormGroup
constructor(private fb:FormBuilder){}

ngOnInit(){
this.upload=this.fb.group({
  file:['']
})
}
  changing(event:any){
    console.log(event.target.files[0]);
    const files=event.target.files[0]
    if(files)
    {
      const fileName=files.name
      console.log(fileName);
      const formData=new FormData()
      formData.append('sudais image',files)
      console.log(formData);
      this.upload.patchValue({
        file:files
      })
    }
    console.log(event);
  }
  submitted(){
    console.log(this.upload); 
  }
}
