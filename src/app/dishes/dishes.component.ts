import { Component, EventEmitter, Input, OnChanges,OnInit } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import{RouterModule} from '@angular/router';
import {DishesService} from '../services/dishes.service';
import {Dish} from '../model/dishes';
import {EmitterService} from '../emitter.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {DishesBoxComponent} from './dishes-box/dishes-box.component';
import{DishesFormComponent} from './dishes-form/dishes-form.component';
//import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector:'dishes',
  templateUrl:'./dishes.component.html',
//styleUrls: ['./dishes.component.scss']
})


export class DishesComponent{       }
