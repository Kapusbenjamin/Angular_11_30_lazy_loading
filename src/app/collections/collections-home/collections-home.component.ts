import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data: any[] = [
    {
      name: "James", age: 24, job: "Designer", employed: true
    },
    {
      name: "Jill", age: 27, job: "Engineer", employed: true
    },
    {
      name: "Elyse", age: 22, job: "Designer", employed: false
    }
  ]
  headers: any[] = [
    {
      key: "employed", label: "Has a job?"
    },
    {
      key: "name", label: "Name"
    },
    {
      key: "age", label: "Age"
    },
    {
      key: "job", label: "Job"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
