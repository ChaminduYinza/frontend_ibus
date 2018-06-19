import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus-status',
  templateUrl: './bus-status.component.html',
  styleUrls: ['./bus-status.component.scss']
})
export class BusStatusComponent implements OnInit {
  option: any;
  routes = [
    '120 - Colombo - Horana',
    '120 - Colombo - Kesbewa',
    '138 - Colombo - Kottawa',
    '157 - Piliyandala - Madapatha'
  ];

  constructor() { }

  ngOnInit() {
    this.loadEChart();
  }



  loadEChart() {
    this.option = {
      color: ["#4CAF50", "#FFA000", "#EF5350"],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        // orient: 'vertical',
        // top: 'middle',o
        bottom: 10,
        left: 'center',
        data: ["On Going", "Idle", "Not Functioning"]
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: '',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: 335, name: 'On Going' },
            { value: 310, name: 'Idle' },
            { value: 274, name: 'Not Functioning' }
          ],
          roseType: 'radius',
          label: {
            normal: {
              textStyle: {
                color: '#000000'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: '#000000'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          },
          itemStyle: {
            normal: {
              shadowBlur: 25,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelayUpdate: function (idx) {
            return idx * 225;
          }
        }
      ]
    };
  }
}

