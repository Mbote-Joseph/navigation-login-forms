import { Component, OnInit } from '@angular/core';
import {TemplateModel} from '../models/template.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  template: TemplateModel =new TemplateModel();

  templateForm: any = FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.templateForm = this.formBuilder.group({

      'templateName':[this.template.templateName,[Validators.required]],
      'templateDesc':[this.template.templateDesc,[Validators.required]],
      'templateFilename':[this.template.templateFilename,[Validators.required]],
     

    });
  }

  onTemplateSubmit(){
    alert(this.template.templateName + ' ' + this.template.templateDesc +' '+ this.template.templateFilename);
  }
}