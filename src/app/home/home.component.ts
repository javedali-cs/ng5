import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import{style,trigger,transition,animate,keyframes,query,stagger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount:number ;
  goalText="";
  goals = [];
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res=>this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  AddItems(){
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  RemoveItem(i){
    this.goals.splice(i,1);
    this._data.changeGoal(this.goals);
  }

}
