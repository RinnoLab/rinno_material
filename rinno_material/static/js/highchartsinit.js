
 $(window).on('load', function () {


	var chart = new Highcharts.Chart({

	    chart: {
	        renderTo: 'container2',
	        type: 'column',
	        options3d: {
	            enabled: true,
	            alpha: 15,
	            beta: 15,
	            depth: 50,
	            viewDistance: 25
	        }
	    },
	     credits: {
	      enabled: false
	    },

	    title: {
	        text: 'Ejemplo gráfico 3D'
	    },
	    subtitle: {
	        text: 'Texto de ejemplo'
	    },
	    plotOptions: {
	        column: {
	            depth: 25
	        }
	    },
	    series: [{
	        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
	    }]
	});

	function showValues() {
	    $('#alpha-value').html(chart.options.chart.options3d.alpha);
	    $('#beta-value').html(chart.options.chart.options3d.beta);
	    $('#depth-value').html(chart.options.chart.options3d.depth);
	}

	// Activate the sliders
	$('#sliders input').on('input change', function () {
	    chart.options.chart.options3d[this.id] = parseFloat(this.value);
	    showValues();
	    chart.redraw(false);
	});

	showValues();
	    Highcharts.chart('container', {

	    title: {
	        text: 'Demo de gráfico, 2010-2016'
	    },

	    subtitle: {
	        text: 'ejemplo: texto test'
	    },

	    yAxis: {
	        title: {
	            text: 'ejemplo info'
	        }
	    },
	    legend: {
	        layout: 'vertical',
	        align: 'right',
	        verticalAlign: 'middle'
	    },
	     credits: {
	      enabled: false
	    },

	    plotOptions: {
	        series: {
	            pointStart: 2010
	        }
	    },

	    series: [{
	        name: 'ejemplo ',
	        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
	    }, {
	        name: 'ejemplo 2',
	        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
	    }, {
	        name: 'ejemplo 3',
	        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
	    }, {
	        name: 'ejemplo 4',
	        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
	    }, {
	        name: 'ejemplo 5',
	        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
	    }]

	});


	Highcharts.chart('container3', {
	    chart: {
	        type: 'pie',
	        options3d: {
	            enabled: false,
	            alpha: 45,
	            beta: 0
	        }
	    },
	    title: {
	        text: 'Grafico torta ejemplo'
	    },
	    tooltip: {
	        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	    },
	    credits: {
	      enabled: false
	    },
	    plotOptions: {
	        pie: {
	            allowPointSelect: true,
	            cursor: 'pointer',
	            depth: 35,
	            dataLabels: {
	                enabled: true,
	                format: '{point.name}'
	            }
	        }
	    },
	    series: [{
	        type: 'pie',
	        name: 'Browser share',
	        data: [
	            ['Firefox', 45.0],
	            ['IE', 26.8],
	            {
	                name: 'Chrome',
	                y: 12.8,
	                sliced: true,
	                selected: true
	            },
	            ['Safari', 8.5],
	            ['Opera', 6.2],
	            ['Others', 0.7]
	        ]
	    }]
	});

			// Create the chart
	Highcharts.chart('container1', {
	    chart: {
	        type: 'column'
	    },
	    title: {
	        text: 'Ejemplo gráfico barras basico'
	    },
	    subtitle: {
	        text: 'texto test'
	    },
	    xAxis: {
	        type: 'category'
	    },
	    yAxis: {
	        title: {
	            text: 'Total percent market share'
	        }

	    },
	    credits:{
	    	enabled:false
	    },
	    legend: {
	        enabled: false
	    },
	    plotOptions: {
	        series: {
	            borderWidth: 0,
	            dataLabels: {
	                enabled: true,
	                format: '{point.y:.1f}%'
	            }
	        }
	    },

	    tooltip: {
	        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
	        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
	    },

	    series: [{
	        name: 'Brands',
	        colorByPoint: true,
	        data: [{
	            name: 'Microsoft Internet Explorer',
	            y: 56.33,
	            drilldown: 'Microsoft Internet Explorer'
	        }, {
	            name: 'Chrome',
	            y: 24.03,
	            drilldown: 'Chrome'
	        }, {
	            name: 'Firefox',
	            y: 10.38,
	            drilldown: 'Firefox'
	        }, {
	            name: 'Safari',
	            y: 4.77,
	            drilldown: 'Safari'
	        }, {
	            name: 'Opera',
	            y: 0.91,
	            drilldown: 'Opera'
	        }, {
	            name: 'Proprietary or Undetectable',
	            y: 0.2,
	            drilldown: null
	        }]
	    }],
	    drilldown: {
	        series: [{
	            name: 'Microsoft Internet Explorer',
	            id: 'Microsoft Internet Explorer',
	            data: [
	                [
	                    'v11.0',
	                    24.13
	                ],
	                [
	                    'v8.0',
	                    17.2
	                ],
	                [
	                    'v9.0',
	                    8.11
	                ],
	                [
	                    'v10.0',
	                    5.33
	                ],
	                [
	                    'v6.0',
	                    1.06
	                ],
	                [
	                    'v7.0',
	                    0.5
	                ]
	            ]
	        }, {
	            name: 'Chrome',
	            id: 'Chrome',
	            data: [
	                [
	                    'v40.0',
	                    5
	                ],
	                [
	                    'v41.0',
	                    4.32
	                ],
	                [
	                    'v42.0',
	                    3.68
	                ],
	                [
	                    'v39.0',
	                    2.96
	                ],
	                [
	                    'v36.0',
	                    2.53
	                ],
	                [
	                    'v43.0',
	                    1.45
	                ],
	                [
	                    'v31.0',
	                    1.24
	                ],
	                [
	                    'v35.0',
	                    0.85
	                ],
	                [
	                    'v38.0',
	                    0.6
	                ],
	                [
	                    'v32.0',
	                    0.55
	                ],
	                [
	                    'v37.0',
	                    0.38
	                ],
	                [
	                    'v33.0',
	                    0.19
	                ],
	                [
	                    'v34.0',
	                    0.14
	                ],
	                [
	                    'v30.0',
	                    0.14
	                ]
	            ]
	        }, {
	            name: 'Firefox',
	            id: 'Firefox',
	            data: [
	                [
	                    'v35',
	                    2.76
	                ],
	                [
	                    'v36',
	                    2.32
	                ],
	                [
	                    'v37',
	                    2.31
	                ],
	                [
	                    'v34',
	                    1.27
	                ],
	                [
	                    'v38',
	                    1.02
	                ],
	                [
	                    'v31',
	                    0.33
	                ],
	                [
	                    'v33',
	                    0.22
	                ],
	                [
	                    'v32',
	                    0.15
	                ]
	            ]
	        }, {
	            name: 'Safari',
	            id: 'Safari',
	            data: [
	                [
	                    'v8.0',
	                    2.56
	                ],
	                [
	                    'v7.1',
	                    0.77
	                ],
	                [
	                    'v5.1',
	                    0.42
	                ],
	                [
	                    'v5.0',
	                    0.3
	                ],
	                [
	                    'v6.1',
	                    0.29
	                ],
	                [
	                    'v7.0',
	                    0.26
	                ],
	                [
	                    'v6.2',
	                    0.17
	                ]
	            ]
	        }, {
	            name: 'Opera',
	            id: 'Opera',
	            data: [
	                [
	                    'v12.x',
	                    0.34
	                ],
	                [
	                    'v28',
	                    0.24
	                ],
	                [
	                    'v27',
	                    0.17
	                ],
	                [
	                    'v29',
	                    0.16
	                ]
	            ]
	        }]
	    }
	});
	

 	
     
 });
