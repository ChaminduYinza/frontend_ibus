import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-generate-schedule',
  templateUrl: './generate-schedule.component.html',
  styleUrls: ['./generate-schedule.component.scss']
})
export class GenerateScheduleAdminComponent implements OnInit {

  scheduleForm: FormGroup;
  validTextType: boolean = false;
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {

    this.scheduleForm = this.formBuilder.group({
        generation: [null, Validators],
        population: [null, Validators],
        crossover: [null, Validators],
        mutation: [null, Validators],
        startTime: [null, Validators.required],
        endTime: [null, Validators.required],
        interval:[null,Validators.required],
        route:[null,Validators.required],
        buses:[null,Validators.required],

      });
      
  }
  public chartType:string = 'line';

  public chartDatasets:Array<any> = [
      {data: [20, 30,32,30,30,29,35,28,30,32], label: 'Fitness score'}
  ];

  public chartLabels:Array<any> = ['1', '2', '3','4','5', '6', '7','8','9','10'];

  public chartColors:Array<any> = [

      {
          backgroundColor: 'rgba(151,187,205,0.2)',
          borderColor: 'rgba(151,187,205,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(151,187,205,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(151,187,205,1)'
      }
  ];

  public chartOptions:any = {
      responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  generateSchedule(){
    console.log(this.scheduleForm.value.buses);
  }

}
