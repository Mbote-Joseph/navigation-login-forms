import { Component, OnInit } from '@angular/core';
import { SocialsModel } from '../models/socials.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {
  socials: SocialsModel =new SocialsModel();

  socialsForm: any = FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.socialsForm = this.formBuilder.group({

      'socialName':[this.socials.socialName,[Validators.required]],
      'socialLink':[this.socials.socialLink,[Validators.required]],
      'socialDesc':[this.socials.socialDesc,[Validators.required]],
      
     

    });
  }

  onSocialsSubmit(){
    alert(this.socials.socialName + ' ' + this.socials.socialLink +' '+ this.socials.socialDesc);
  }
}
