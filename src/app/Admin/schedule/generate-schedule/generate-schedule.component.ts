import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { RouteServiceService } from '../../../services/route-service.service';


@Component({
  selector: 'app-generate-schedule',
  templateUrl: './generate-schedule.component.html',
  styleUrls: ['./generate-schedule.component.scss']
})
export class GenerateScheduleAdminComponent implements OnInit {

  scheduleForm: FormGroup;
  validTextType: boolean = false;
  routeList:any;

  constructor(private formBuilder: FormBuilder,private routeService: RouteServiceService) { }


  ngOnInit() {

    this.getRoutes();

    this.scheduleForm = this.formBuilder.group({
        generation: [null, Validators],
        population: [null, Validators],
        crossover: [null, Validators],
        mutation: [null, Validators],
        startTime: [null, Validators.required],
        endTime: [null, Validators.required],
        interval:[null,Validators.required],
        routeNo:[null,Validators.required],


      });
      
  }
  getRoutes() {
    this.routeService.getRoutes().subscribe((data) => {
      this.routeList = data.data;
    })
  }
  settings(){

    this.scheduleForm.patchValue({
        generation: 250,
        population: 15,
        crossover: 0.6,
        mutation: 0.1
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

    const schedule = {
        generation: this.scheduleForm.value.generation,
        population: this.scheduleForm.value.population,
        crossover: this.scheduleForm.value.crossover,
        mutation: this.scheduleForm.value.mutation,
        startTime: this.scheduleForm.value.startTime,
        endTime: this.scheduleForm.value.endTime,
        interval: this.scheduleForm.value.interval,
        routeNo: this.scheduleForm.value.routeNo,
        
      };
      console.log(schedule)
  }

}
