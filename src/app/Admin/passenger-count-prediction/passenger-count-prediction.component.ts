import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators, FormGroup } from '@angular/forms';
import { DateServiceService } from '../../services/date-service.service'
import { PredictionServiceService } from '../../services/prediction-service.service'

@Component({
  selector: 'app-passenger-count-prediction',
  templateUrl: './passenger-count-prediction.component.html',
  styleUrls: ['./passenger-count-prediction.component.scss']
})
export class PassengerCountPredictionComponent implements OnInit {
  dateForm: FormGroup;
  public chartType: string = 'line';
  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: '-' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: '-' }
  ];

  public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(220,220,220,0.2)',
      borderColor: 'rgba(220,220,220,1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(220,220,220,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(220,220,220,1)'
    },
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

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  constructor(private formBuilder: FormBuilder, private dateService: DateServiceService, private predictionService: PredictionServiceService) { }

  ngOnInit() {
    this.dateForm = this.formBuilder.group({
      'date': [null, Validators.required]
    });
  }

  loadPredictionData() {
    let date = this.dateService.formatDateToYYYYMMDD(this.dateForm.get('date').value)
    this.predictionService.getPredictionData({ start_date: date }).subscribe((data) => {
      console.log(data.data[0].realData.predictedData)
      this.chartDatasets = [
        { data: data.data[0].realData.predictedData, label: 'Real dataset' },
        { data: data.data[0].predictedData.predictedData, label: 'Predicted dataset' }
      ];

      this.chartLabels = data.data[0].realData.dateTime


      console.log(data)
    })
  }


}
