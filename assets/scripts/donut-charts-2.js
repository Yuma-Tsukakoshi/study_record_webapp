'use strict';

{
  var options = {
    series: [40,20, 40],
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
  labels: ["N予備校", "ドットインストール", "POSSE課題"],

  colors: ['#0042e5', '#0070B9', '#01BDDB'], 

  states: {
    hover: {
      filter: 'none'
    }
  },

  legend: {
    position: 'bottom',
    horizontalAlign: 'left', //左寄せ 
    fontSize: '15px',
  },
  
  responsive: [{
    breakpoint: 480,
    options: {
      plotOptions: {
        pie: {
        offsetY: 0,
        }
      },
      title: {
        style: {
          fontSize: '13px',
          color: '#263238'
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

  var chart = new ApexCharts(document.querySelector("#circle-charts2"), options);
  chart.render();
}