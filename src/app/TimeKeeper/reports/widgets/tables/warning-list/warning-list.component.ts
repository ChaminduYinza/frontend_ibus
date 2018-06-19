import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-list',
  templateUrl: './warning-list.component.html',
  styleUrls: ['./warning-list.component.scss']
})
export class WarningListComponent implements OnInit {
  public scrollbarOptions = { axis: "y", theme: "dark-thin" };
  warningList = [{
    name: "Chamindu Thiranjaya",
    weight: 1,
    busNo: "B001"
  },
  {
    name: "Randika Rushan",
    weight: 2,
    busNo: "B008"
  },
  {
    name: "Prabath Udayanga",
    weight: 20,
    busNo: "B0010"
  }, {
    name: "Chamindu Thiranjaya",
    weight: 1,
    busNo: "B001"
  }, {
    name: "Chamindu Thiranjaya",
    weight: 1,
    busNo: "B001"
  }, {
    name: "Chamindu Thiranjaya",
    weight: 1,
    busNo: "B001"
  }, {
    name: "Chamindu Thiranjaya",
    weight: 1,
    busNo: "B001"
  }, {
    name: "Chamindu Thiranjaya",
    weight: 1,
    busNo: "B001"
  },]
  constructor() { }

  ngOnInit() {
  }

}
