import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule , FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'



@NgModule({
  declarations: [],
  imports: [    
    CommonModule,
    ReactiveFormsModule ,
    FormsModule,
    FontAwesomeModule,

    MaterialModule]
,  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule ,
    FormsModule ,
    FontAwesomeModule

  ]

})
export class AppSharedModule { }
