"use strict";

var optionsChart44 = {
    series: [
        {
            name: "React",
            data: [44, 55, 41, 67, 22, 43, 21, 41, 67, 22, 43, 21],
        },
    ],
    chart: {
        type: "area",
        height: 350,
        toolbar: false,
    },
    grid: {
        show: true,
        borderColor: "#d7f4ff",
        strokeDashArray: 5,
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
        ],
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
    subtitle: {
        text:
            "Annual Taxes EMS",
        offsetX: 0,
        offsetY: 0,
        style: {
            fontSize: "13px",
            color: "#374a5e",
        },
    },
};

var chart44 = new ApexCharts(
    document.querySelector("#chart-44"),
    optionsChart44
);
chart44.render();
var optionsChart46 = {
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
        show: false,
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisBorder: {
            show: false,
        },
        labels: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    grid: {
        show: false,
    },
    legend: {
        position: "top",
        horizontalAlign: "right",
        markers: {
            width: 12,
            height: 12,
            radius: 12,
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

var chart46 = new ApexCharts(
    document.querySelector("#chart-46"),
    optionsChart46
);
chart46.render();

var optionsChart47 = {
    series: [
        {
            name: "React",
            data: [44, 55, 41, 67, 22, 43, 21, 41, 67, 22, 43, 21],
        },
    ],
    chart: {
        type: "area",
        height: 350,
        toolbar: false,
    },
    grid: {
        show: true,
        borderColor: "#d7f4ff",
        strokeDashArray: 5,
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
            opacityFrom: 0.6,
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
        ],
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
};

var chart47 = new ApexCharts(
    document.querySelector("#chart-47"),
    optionsChart47
);
chart47.render();