import { Component, OnInit } from '@angular/core';
import { GettasksService } from "../gettasks.service";
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.sass']
})
export class TodolistComponent implements OnInit {

  searchWord:any;
  sorter:any;
  constructor(
    private Obj:GettasksService
  ) { }

  ngOnInit(): void {

    // this.Obj.getById(this.searchWord).subscribe( (tmp:any) =>{
    //   this.searched = tmp[0];
    //   console.log(this.searched);
    // })

  }
  // API LINK: http://tasksapi.docelove.cf

  // DABLA DAWERILI KODI UNDA GADAVIDES SHESABAMIS CHILD COMPONENTSHI

  sorting = false;
  sortingDrop = "";
  editMode = false;
  checkAll = false;
  createNew = false;

  // DABLA MOCEMULI TASK -> ARRAY UNDA CHAANACVLO API -TI MOTANILI DATA-TI

  Tasks = [
  {title:"Workout",description:" Lorem tu ragac",done:false,starts:"02:35",ends:"03:35", id:1},
  {title:"Murder",description:" Lorem tu ragac",done:false,starts:"02:35",ends:"03:35", id:2},
  {title:"Blowjob",description:" Lorem tu ragac",done:false,starts:"02:35",ends:"03:35", id:3},
  {title:"Escape",description:" Lorem tu ragac",done:true,starts:"02:35",ends:"03:35", id:4}
  ];

  CheckAll(){
    for (let i = 0; i < this.Tasks.length; i++)
      this.Tasks[i].done = false;

    for (let i = 0; i < this.Tasks.length; i++)
      this.Tasks[i].done = this.checkAll;

    this.checkAll = !this.checkAll;
  }

  Done(){
    for (let i = 0; i < this.Tasks.length; i++) {
      if (this.Tasks[i]["done"] == false) {
        this.Tasks[i]["done"] == true;
        console.log(this.Tasks[i]["done"])
      }
    }
  }
  Undone(){
    for (let i = 0; i < this.Tasks.length; i++) {
      if (this.Tasks[i]["done"] == true) {
        this.Tasks[i]["done"] == false;
        console.log(this.Tasks[i]["done"])
      }
    }
  }
  Clear(){
    for (let i = 0; i < this.Tasks.length; i++) {
      if (this.Tasks[i]["done"] == true) {
      }
    }
  }
  sort(argumen:any){
    this.sorter =argumen;
  }

  edit(newName:any, taskName:any){
    for (let i = 0; i < this.Tasks.length; i++) {
      if (taskName == this.Tasks[i]["title"]) {
        this.Tasks[i]["title"] = newName.target.value;
      }
    }
  }

  search(value:any){
    var searchWord = value.target.value;
    for (let i = 0; i < this.Tasks.length; i++) {
      if (searchWord == this.Tasks[i]["id"]) {
        this.searchWord = this.Tasks[i];
      }
    }
  }

}
