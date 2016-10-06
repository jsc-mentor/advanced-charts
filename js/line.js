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
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
