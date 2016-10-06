$(function drawCharts(numberOfPoints) {

// function for button
$("#button").click(function() {
  series.addPoint([i, i]);
  i++;
})

// Declare the chart properties //
$(document).ready(function() {
    $('#hcContainer').highcharts({
        title: {
            text: 'Widget Generator',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: paul-franz.com',
            x: -20
        },
        xAxis: {
            categories: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {
            title: {
                text: 'Units'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'MW'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
        name: 'Random data',
        data: (function() {
          // generate an array of random data
          var data = [],
            time = (new Date()).getTime(),
            i, preValue;

          for (i = 0; i < numberOfPoints; i += 1) {
            if (i == 0) {
              data.push({
                x: i,
                y: 10
              });
            } else {
              data.push({
                x: i,
                y: chartData["wealth"][0][i]
              });
            }
          }
          showMsg(data);
          console.log(data);
          return data;
        }())
      }]
      });
});
});
