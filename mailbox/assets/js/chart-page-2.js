"use strict";

/*--------------------------------------------------------
    ApexChart
---------------------------------------------------------*/

var optionsChart20 = {
    series: [
        {
            name: "<span class='fw-bold'>Web Development</span>",
            data: [44, 55, 41, 67, 22, 43, 21, 10, 33, 16, 50, 30],
        },
        {
            name: "<span class='fw-bold'>+10% New York</span>",
            data: [13, 23, 20, 8, 13, 27, 33, 67, 22, 43, 21, 10],
        },
        {
            name: "<span class='fw-bold'>React Developer</span>",
            data: [11, 17, 15, 15, 21, 14, 15, 27, 33, 67, 22, 43],
        },
    ],
    chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "100%",
        toolbar: {
            show: false,
        },
    },
    stroke: {
        width: 0,
    },
    fill: {
        opacity: 1,
        colors: ["#6b48ff", "#fed05a", "#d4d4ff"],
    },
    xaxis: {
        position: "bottom",
        offsetY: 10,
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
        ],
        axisBorder: {
            show: false,
        },
    },
    grid: {
        show: true,
        borderColor: "#d7f4ff",
        strokeDashArray: 5,
    },
    legend: {
        position: "top",
        horizontalAlign: "left",
        markers: {
            width: 8,
            height: 8,
            radius: 8,
            fillColors: ["#6b48ff", "#fed05a", "#d4d4ff"],
        },
        itemMargin: {
            horizontal: 15,
            vertical: 0,
        },
    },
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        bar: {
            columnWidth: "10%",
        },
    },
};

var chart20 = new ApexCharts(
    document.querySelector("#chart-20"),
    optionsChart20
);
chart20.render();

var optionsChart21 = {
    series: [
        {
            data: [5, 15, 10, 25, 20, 35, 10],
        },
    ],
    chart: {
        type: "area",
        height: 350,
        toolbar: {
            show: false,
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
        categories: ["Fri", "Sat", "Sun", "Mon", "Wed", "Tue", "Thu"],
        axisBorder: {
            show: false,
        },
    },
    yaxis: {
        min: 0,
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        show: true,
        borderColor: "#d7f4ff",
        strokeDashArray: 5,
    },
};

var chart21 = new ApexCharts(
    document.querySelector("#chart-21"),
    optionsChart21
);
chart21.render();

var optionsChart22 = {
    series: [44, 55, 41, 17, 15],
    chart: {
        width: "100%",
        type: "donut",
    },
    plotOptions: {
        pie: {
            startAngle: -45,
            donut: {
                size: "40%",
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        type: "gradient",
    },
    legend: {
        show: false,
    },
    markers: {
        offsetY: top,
    },
};

var chart22 = new ApexCharts(
    document.querySelector("#chart-22"),
    optionsChart22
);
chart22.render();

var optionsChart23 = {
    series: [
        {
            name: "<span class='fw-bold'>Cost</span>",
            data: [44, 55, 41, 67, 22, 43, 21],
        },
        {
            name: "<span class='fw-bold'>Current</span>",
            data: [13, 23, 20, 8, 13, 27, 33],
        },
        {
            name: "<span class='fw-bold'>Highest</span>",
            data: [11, 17, 15, 15, 21, 14, 15],
        },
    ],
    chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "100%",
        toolbar: {
            show: false,
        },
    },
    stroke: {
        width: 0,
    },
    fill: {
        opacity: 1,
        colors: ["#6b48ff", "#fed05a", "#d4d4ff"],
    },
    xaxis: {
        position: "bottom",
        offsetY: 10,
        categories: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
        axisBorder: {
            show: false,
        },
    },
    grid: {
        show: true,
        borderColor: "#d7f4ff",
        strokeDashArray: 5,
    },
    legend: {
        position: "top",
        horizontalAlign: "right",
        markers: {
            width: 8,
            height: 8,
            radius: 8,
            fillColors: ["#6b48ff", "#fed05a", "#d4d4ff"],
        },
        itemMargin: {
            horizontal: 15,
            vertical: 0,
        },
    },
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        bar: {
            columnWidth: "10%",
        },
    },
};

var chart23 = new ApexCharts(
    document.querySelector("#chart-23"),
    optionsChart23
);
chart23.render();

var optionsChart24 = {
    series: [44, 55, 67, 83],
    chart: {
        width: "100%",
        type: "radialBar",
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: "22px",
                },
                value: {
                    fontSize: "16px",
                },
                total: {
                    show: true,
                    label: "Total",
                    formatter: function (w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return 249;
                    },
                },
            },
        },
    },
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
};

var chart24 = new ApexCharts(
    document.querySelector("#chart-24"),
    optionsChart24
);
chart24.render();

var optionsChart25 = {
    series: [
        {
            name: "<span class='fw-bold'>Cost</span>",
            data: [44, 55, 41, 67, 22, 43, 21],
        },
        {
            name: "<span class='fw-bold'>Current</span>",
            data: [13, 23, 20, 8, 13, 27, 33],
        },
        {
            name: "<span class='fw-bold'>Highest</span>",
            data: [11, 17, 15, 15, 21, 14, 15],
        },
    ],
    chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "100%",
        toolbar: {
            show: false,
        },
    },
    stroke: {
        width: 0,
    },
    fill: {
        opacity: 1,
        colors: ["#F64E60", "#544fff", "#1BC5BD"],
    },
    xaxis: {
        position: "top",
        offsetY: -10,
        categories: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
        axisBorder: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    grid: {
        show: false,
        borderColor: "#d7f4ff",
        strokeDashArray: 5,
    },
    legend: {
        position: "bottom",
        horizontalAlign: "center",
        markers: {
            width: 8,
            height: 8,
            radius: 8,
            fillColors: ["#F64E60", "#544fff", "#1BC5BD"],
        },
        itemMargin: {
            horizontal: 15,
            vertical: 0,
        },
    },
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        bar: {
            columnWidth: "10%",
        },
    },
};

var chart25 = new ApexCharts(
    document.querySelector("#chart-25"),
    optionsChart25
);
chart25.render();

var optionsChart26 = {
    series: [
        {
            data: [10, 25, 15, 30, 15, 45, 10],
        },
    ],
    chart: {
        type: "area",
        height: 350,
        toolbar: {
            show: false,
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
        categories: ["Fri", "Sat", "Sun", "Mon", "Wed", "Tue", "Thu"],
        axisBorder: {
            show: false,
        },
    },
    yaxis: {
        min: 0,
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        show: true,
        borderColor: "#d7f4ff",
        strokeDashArray: 5,
    },
};

var chart26 = new ApexCharts(
    document.querySelector("#chart-26"),
    optionsChart26
);
chart26.render();

var optionsChart27 = {
    series: [25, 55],
    chart: {
        type: "donut",
        width: "100%",
        sparkline: {
            enabled: false,
        },
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        pie: {
            donut: {
                size: "30%",
            },
        },
    },
    fill: {
        colors: ["#544fff", "#e7edff"],
    },
};

var chart27 = new ApexCharts(
    document.querySelector("#chart-27"),
    optionsChart27
);
chart27.render();

var optionsChart28 = {
    series: [75, 25],
    chart: {
        type: "donut",
        width: "100%",
        sparkline: {
            enabled: false,
        },
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        pie: {
            donut: {
                size: "30%",
            },
        },
    },
    fill: {
        colors: ["#1BC5BD", "#e7edff"],
    },
};

var chart28 = new ApexCharts(
    document.querySelector("#chart-28"),
    optionsChart28
);
chart28.render();

var optionsChart29 = {
    series: [
        {
            name: "desktop",
            data: [30, 41, 35, 51],
        },
    ],
    chart: {
        type: "line",
        height: 250,
        toolbar: {
            show: false,
        },
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr"],
        axisBorder: {
            show: false,
        },
    },
    stroke: {
        curve: "smooth",
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        show: true,
        borderColor: "#d7f4ff",
        strokeDashArray: 5,
    },
};
var chart29 = new ApexCharts(
    document.querySelector("#chart-29"),
    optionsChart29
);
chart29.render();

var optionsChart30 = {
    series: [15, 25, 45, 15],
    chart: {
        type: "donut",
        width: "100%",
        sparkline: {
            enabled: true,
        },
    },
};
var chart30 = new ApexCharts(
    document.querySelector("#chart-30"),
    optionsChart30
);
chart30.render();
