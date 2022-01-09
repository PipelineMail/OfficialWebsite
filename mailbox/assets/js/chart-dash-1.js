"use strict";

/*--------------------------------------------------------
    ApexChart
---------------------------------------------------------*/
var randomizeArray = function (arg) {
    var array = arg.slice();
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

// data for the sparklines that appear below header area
var sparklineData = [
    47,
    45,
    54,
    38,
    56,
    24,
    65,
    31,
    37,
    39,
    62,
    51,
    35,
    41,
    35,
    27,
    93,
    53,
    61,
    27,
    54,
    43,
    19,
    46,
];

var optionsChart1 = {
    series: [
        {
            data: randomizeArray(sparklineData),
        },
    ],
    chart: {
        type: "area",
        height: 160,
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: ["#1BC5BD"],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.8,
            opacityTo: 0.1,
            stops: [0, 95, 100],
        },
    },
    xaxis: {
        crosshairs: {
            width: 1,
        },
    },
    yaxis: {
        min: 0,
    },
    subtitle: {
        text: "50%",
        offsetX: 30,
        offsetY: 0,
        style: {
            fontSize: "12px",
            color: "#1BC5BD",
        },
    },
};

var chart1 = new ApexCharts(document.querySelector("#chart-1"), optionsChart1);
chart1.render();

var optionsChart2 = {
    series: [
        {
            data: randomizeArray(sparklineData),
        },
    ],
    chart: {
        type: "area",
        height: 160,
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: ["#ff9f43"],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.8,
            opacityTo: 0.1,
            stops: [0, 95, 100],
        },
    },
    xaxis: {
        crosshairs: {
            width: 1,
        },
    },
    yaxis: {
        min: 0,
    },
    subtitle: {
        text: "30%",
        offsetX: 30,
        offsetY: 0,
        style: {
            fontSize: "12px",
            color: "#ff9f43",
        },
    },
};

var chart2 = new ApexCharts(document.querySelector("#chart-2"), optionsChart2);
chart2.render();

var optionsChart3 = {
    series: [
        {
            data: randomizeArray(sparklineData),
        },
    ],
    chart: {
        type: "area",
        height: 160,
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: ["#158df7"],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.8,
            opacityTo: 0.1,
            stops: [0, 95, 100],
        },
    },
    xaxis: {
        crosshairs: {
            width: 1,
        },
    },
    yaxis: {
        min: 0,
    },
    subtitle: {
        text: "16%",
        offsetX: 30,
        offsetY: 0,
        style: {
            fontSize: "12px",
            color: "#158df7",
        },
    },
};

var chart3 = new ApexCharts(document.querySelector("#chart-3"), optionsChart3);
chart3.render();

var optionsChart4 = {
    series: [
        {
            data: randomizeArray(sparklineData),
        },
    ],
    chart: {
        type: "area",
        height: 160,
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: ["#F64E60"],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.8,
            opacityTo: 0.1,
            stops: [0, 95, 100],
        },
    },
    xaxis: {
        crosshairs: {
            width: 1,
        },
    },
    yaxis: {
        min: 0,
    },
    subtitle: {
        text: "67%",
        offsetX: 30,
        offsetY: 0,
        style: {
            fontSize: "12px",
            color: "#F64E60",
        },
    },
};

var chart4 = new ApexCharts(document.querySelector("#chart-4"), optionsChart4);
chart4.render();

var optionsChart5 = {
    series: [
        {
            name: "React",
            data: [44, 55, 41, 67, 22, 43, 21],
        },
        {
            name: "Javascript",
            data: [13, 23, 20, 8, 13, 27, 33],
        },
        {
            name: "Node.js",
            data: [11, 17, 15, 15, 21, 14, 15],
        },
    ],
    chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "100%",
        toolbar: {
            show: false
          }
        
    },
    stroke: {
        width: 0,
    },
    fill: {
        opacity: 1,
        colors: ["#ff808b", "#4d4cac", "#d4d4ff"],
    },
    xaxis: {
        position: 'top',
        offsetY: -10,
        categories: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
        ],
        axisBorder: {
            show: false
        }
    },
    yaxis: {
        show: false
    },
    title: {
        text: "Time Spent on lerning",
        offsetX: 0,
        offsetY: 0,
        style: {
            fontSize: "18px"
        },
    },
    grid: {
        show: false,
    },
    legend: {
        // position: 'top'
        markers: {
            width: 12,
            height: 12,
            radius: 12,
            fillColors: ["#ff808b", "#4d4cac", "#d4d4ff"]
        },
        itemMargin: {
            horizontal: 15,
            vertical: 0
        }
    },
    dataLabels: {
        enabled: false
    },
    plotOptions:{
        bar: {
            columnWidth: '10%'
        }
    }
    
};

var chart5 = new ApexCharts(document.querySelector("#chart-5"), optionsChart5);
chart5.render();

var optionsChart6 = {
    series: [
        {
            data: randomizeArray(sparklineData),
        },
    ],
    chart: {
        type: "area",
        height: 350,
        toolbar: {
            show: false
          }
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: ["#ff9f43"],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.8,
            opacityTo: 0.1,
            stops: [0, 95, 100],
        },
    },
    xaxis: {
        crosshairs: {
            width: 1,
        },
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "App",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar",
            "App",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ]
    },
    yaxis: {
        min: 0,
    },
    title: {
        text: "Time Admitted",
        offsetX: 0,
        offsetY: 0,
        style: {
            fontSize: "18px"
        },
    },
    dataLabels: {
        enabled: false
    },
    
};

var chart6 = new ApexCharts(document.querySelector("#chart-6"), optionsChart6);
chart6.render();
/*ApexChart End --------------------------------------*/
