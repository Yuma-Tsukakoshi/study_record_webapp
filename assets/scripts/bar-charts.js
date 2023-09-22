'use strict';

{
  var options = {
    series: [{
      name: 'hour',
      data: [3, 4, 5, 3, 0, 0, 4, 2, 2, 8, 8, 2, 2, 1, 7, 4, 4, 3, 3, 3, 2, 2, 6, 2, 2, 1, 1, 1, 7, 8]
    }
    ],
    chart: {
      type: 'bar',
      height: 420,
      toolbar:{
        show:false
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: 5, 
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      axisTicks: {
        show:false //x軸の値区切り.-.
      },
      axisBorder:{
        show:false
      },
    
      labels: {
        formatter: function (value) {
          if (value !== undefined) {
            const categories = value.split(" ")
            const day = categories[0]
            return day % 2 == 1 ? "" : value;
          }
        },
        style: {
          colors:'#6ba0f0'
        },
      },
    },  

    grid: {
      xaxis:{
        lines:{
          show:false
        },
      },
      yaxis: { 
          lines: {
              show: false
          },
      }, 
    },
    
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "h";
        },
        style: {
          colors: '#6ba0f0',
        }
      },
      type:'category',
      axisTicks: {
        show: false,
        width: 1,
      }
    },

    labels : ['1', '2', '3', '4', '5', '6', '7', '8', '9',   '10', '11', '12', '13', '14', '15', '16', '17', '18',   '19', '20', '21', '22', '23', '24', '25', '26', '27',   '28', '29', '30'],

    fill: {
        colors:["#1174BD"],
        type: 'gradient', 
        gradient: {
        type: 'vertical', //上垂直にグラデーション 
        gradientToColors: ['#3BCFFF'], 
      }
    },

    responsive: [
      {
      breakpoint: 480,
      options: {
          xaxis: {
              labels: {
                  offsetY: -7,
                  style: {
                      fontSize: '7.5px',
                  }
              }
          },
          chart: {
              height: 200,
          }
      },
      }
    ]
  };  

  var chart = new ApexCharts(document.querySelector("#bar-charts"), options);
  chart.render();
}  