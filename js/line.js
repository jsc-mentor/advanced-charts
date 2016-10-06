$("#button").click(function() {
  series.addPoint([i, i]);
  i++;
})

// Declare the chart properties //
$(function () {
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
            name: 'Widgets',
            data: [7.0, 6.9, 9.5, 14.5]
        }]
    });
});
