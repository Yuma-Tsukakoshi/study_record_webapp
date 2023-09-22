'use strict';

{
  var options = {
    series: [30,20,10,5,5,20,20,10],
    chart: {
    height: 500,
    type: 'donut',
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        size:'45px',
        labels: {
          show: true,
          total: {
            showAlways: false,
            show: false
          }
        }
      }
    }
  },
  labels: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "SQL", "SHELL","情報システム基礎知識(その他)"],

  colors: ['#0042e5', '#0070B9', '#01BDDB', '#02CDFA', '#B29DEE', '#6C43E5', '#460AE8', '#2C00B9'],

  dataLabels: {
    style: {
      fontSize: '0.8rem',
    }
  },

  states: {
    hover: {
      filter: 'none'
    }
  },
  
  legend: {
    position: 'bottom',
    horizontalAlign: 'left', 
    fontSize: '15px',
  },

  responsive: [{
    breakpoint: 480,
    options: {
      plotOptions: {
        pie: {
        offsetY: 0
        }
      },
      title: {
        style: {
          fontSize: '13px',
          color:  '#263238'
        }
      },
    chart: {
    },
    legend: {
        position: 'bottom',
        fontSize: '8px',
    }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#circle-charts1"), options);
  chart.render();
}