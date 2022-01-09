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

var optionsChart12 = {
    series: [
        {
            name: "React",
            data: [44, 55, 41, 67, 22, 43, 21, 41, 67, 22, 43, 21],
        },
    ],
    chart: {
        type: "line",
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
        type: "solid",
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

};

var chart12 = new ApexCharts(
    document.querySelector("#chart-12"),
    optionsChart12
);
chart12.render();

var optionsChart13 = {
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
};

var chart13 = new ApexCharts(
    document.querySelector("#chart-13"),
    optionsChart13
);
chart13.render();

var optionsChart14 = {
    series: [
        {
            name: "React",
            data: [44, 55, 41, 67, 22, 43, 21, 41, 67, 22, 43, 21, 34, 55],
        },
        {
            name: "Node.js",
            data: [11, 32, 45, 32, 34, 52, 41, 31, 40, 28, 51, 42, 60, 55],
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
        width: 3,
    },
    colors: ["#158df7", "#1BC5BD"],
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
    legend: {
        show: true,
        position: "top",
        horizontalAlign: "right",
    },
};

var chart14 = new ApexCharts(
    document.querySelector("#chart-14"),
    optionsChart14
);
chart14.render();

// Chart 15
var dataSeries = [
    [
        {
            date: "2014-01-01",
            value: 20000000,
        },
        {
            date: "2014-01-02",
            value: 10379978,
        },
        {
            date: "2014-01-03",
            value: 30493749,
        },
        {
            date: "2014-01-04",
            value: 10785250,
        },
        {
            date: "2014-01-05",
            value: 33901904,
        },
        {
            date: "2014-01-06",
            value: 11576838,
        },
        {
            date: "2014-01-07",
            value: 14413854,
        },
        {
            date: "2014-01-08",
            value: 15177211,
        },
        {
            date: "2014-01-09",
            value: 16622100,
        },
        {
            date: "2014-01-10",
            value: 17381072,
        },
        {
            date: "2014-01-11",
            value: 18802310,
        },
        {
            date: "2014-01-12",
            value: 15531790,
        },
        {
            date: "2014-01-13",
            value: 15748881,
        },
        {
            date: "2014-01-14",
            value: 18706437,
        },
        {
            date: "2014-01-15",
            value: 19752685,
        },
        {
            date: "2014-01-16",
            value: 21016418,
        },
        {
            date: "2014-01-17",
            value: 25622924,
        },
        {
            date: "2014-01-18",
            value: 25337480,
        },
        {
            date: "2014-01-19",
            value: 22258882,
        },
        {
            date: "2014-01-20",
            value: 23829538,
        },
        {
            date: "2014-01-21",
            value: 24245689,
        },
        {
            date: "2014-01-22",
            value: 26429711,
        },
        {
            date: "2014-01-23",
            value: 26259017,
        },
        {
            date: "2014-01-24",
            value: 25396183,
        },
        {
            date: "2014-01-25",
            value: 23107346,
        },
        {
            date: "2014-01-26",
            value: 28659852,
        },
        {
            date: "2014-01-27",
            value: 25270783,
        },
        {
            date: "2014-01-28",
            value: 26270783,
        },
        {
            date: "2014-01-29",
            value: 27270783,
        },
        {
            date: "2014-01-30",
            value: 28270783,
        },
        {
            date: "2014-01-31",
            value: 29270783,
        },
        {
            date: "2014-02-01",
            value: 30270783,
        },
        {
            date: "2014-02-02",
            value: 31270783,
        },
        {
            date: "2014-02-03",
            value: 32270783,
        },
        {
            date: "2014-02-04",
            value: 33270783,
        },
        {
            date: "2014-02-05",
            value: 28270783,
        },
        {
            date: "2014-02-06",
            value: 27270783,
        },
        {
            date: "2014-02-07",
            value: 35270783,
        },
        {
            date: "2014-02-08",
            value: 34270783,
        },
        {
            date: "2014-02-09",
            value: 28270783,
        },
        {
            date: "2014-02-10",
            value: 35270783,
        },
        {
            date: "2014-02-11",
            value: 36270783,
        },
        {
            date: "2014-02-12",
            value: 34127078,
        },
        {
            date: "2014-02-13",
            value: 33124078,
        },
        {
            date: "2014-02-14",
            value: 36227078,
        },
        {
            date: "2014-02-15",
            value: 37827078,
        },
        {
            date: "2014-02-16",
            value: 36427073,
        },
        {
            date: "2014-02-17",
            value: 37570783,
        },
        {
            date: "2014-02-18",
            value: 38627073,
        },
        {
            date: "2014-02-19",
            value: 37727078,
        },
        {
            date: "2014-02-20",
            value: 38827073,
        },
        {
            date: "2014-02-21",
            value: 40927078,
        },
        {
            date: "2014-02-22",
            value: 41027078,
        },
        {
            date: "2014-02-23",
            value: 42127073,
        },
        {
            date: "2014-02-24",
            value: 43220783,
        },
        {
            date: "2014-02-25",
            value: 44327078,
        },
        {
            date: "2014-02-26",
            value: 40427078,
        },
        {
            date: "2014-02-27",
            value: 41027078,
        },
        {
            date: "2014-02-28",
            value: 45627078,
        },
        {
            date: "2014-03-01",
            value: 44727078,
        },
        {
            date: "2014-03-02",
            value: 44227078,
        },
        {
            date: "2014-03-03",
            value: 45227078,
        },
        {
            date: "2014-03-04",
            value: 46027078,
        },
        {
            date: "2014-03-05",
            value: 46927078,
        },
        {
            date: "2014-03-06",
            value: 47027078,
        },
        {
            date: "2014-03-07",
            value: 46227078,
        },
        {
            date: "2014-03-08",
            value: 47027078,
        },
        {
            date: "2014-03-09",
            value: 48027078,
        },
        {
            date: "2014-03-10",
            value: 47027078,
        },
        {
            date: "2014-03-11",
            value: 47027078,
        },
        {
            date: "2014-03-12",
            value: 48017078,
        },
        {
            date: "2014-03-13",
            value: 48077078,
        },
        {
            date: "2014-03-14",
            value: 48087078,
        },
        {
            date: "2014-03-15",
            value: 48017078,
        },
        {
            date: "2014-03-16",
            value: 48047078,
        },
        {
            date: "2014-03-17",
            value: 48067078,
        },
        {
            date: "2014-03-18",
            value: 48077078,
        },
        {
            date: "2014-03-19",
            value: 48027074,
        },
        {
            date: "2014-03-20",
            value: 48927079,
        },
        {
            date: "2014-03-21",
            value: 48727071,
        },
        {
            date: "2014-03-22",
            value: 48127072,
        },
        {
            date: "2014-03-23",
            value: 48527072,
        },
        {
            date: "2014-03-24",
            value: 48627027,
        },
        {
            date: "2014-03-25",
            value: 48027040,
        },
        {
            date: "2014-03-26",
            value: 48027043,
        },
        {
            date: "2014-03-27",
            value: 48057022,
        },
        {
            date: "2014-03-28",
            value: 49057022,
        },
        {
            date: "2014-03-29",
            value: 50057022,
        },
        {
            date: "2014-03-30",
            value: 51057022,
        },
        {
            date: "2014-03-31",
            value: 52057022,
        },
        {
            date: "2014-04-01",
            value: 53057022,
        },
        {
            date: "2014-04-02",
            value: 54057022,
        },
        {
            date: "2014-04-03",
            value: 52057022,
        },
        {
            date: "2014-04-04",
            value: 55057022,
        },
        {
            date: "2014-04-05",
            value: 58270783,
        },
        {
            date: "2014-04-06",
            value: 56270783,
        },
        {
            date: "2014-04-07",
            value: 55270783,
        },
        {
            date: "2014-04-08",
            value: 58270783,
        },
        {
            date: "2014-04-09",
            value: 59270783,
        },
        {
            date: "2014-04-10",
            value: 60270783,
        },
        {
            date: "2014-04-11",
            value: 61270783,
        },
        {
            date: "2014-04-12",
            value: 62270783,
        },
        {
            date: "2014-04-13",
            value: 63270783,
        },
        {
            date: "2014-04-14",
            value: 64270783,
        },
        {
            date: "2014-04-15",
            value: 65270783,
        },
        {
            date: "2014-04-16",
            value: 66270783,
        },
        {
            date: "2014-04-17",
            value: 67270783,
        },
        {
            date: "2014-04-18",
            value: 68270783,
        },
        {
            date: "2014-04-19",
            value: 69270783,
        },
        {
            date: "2014-04-20",
            value: 70270783,
        },
        {
            date: "2014-04-21",
            value: 71270783,
        },
        {
            date: "2014-04-22",
            value: 72270783,
        },
        {
            date: "2014-04-23",
            value: 73270783,
        },
        {
            date: "2014-04-24",
            value: 74270783,
        },
        {
            date: "2014-04-25",
            value: 75270783,
        },
        {
            date: "2014-04-26",
            value: 76660783,
        },
        {
            date: "2014-04-27",
            value: 77270783,
        },
        {
            date: "2014-04-28",
            value: 78370783,
        },
        {
            date: "2014-04-29",
            value: 79470783,
        },
        {
            date: "2014-04-30",
            value: 80170783,
        },
    ],
    [
        {
            date: "2014-01-01",
            value: 150000000,
        },
        {
            date: "2014-01-02",
            value: 160379978,
        },
        {
            date: "2014-01-03",
            value: 170493749,
        },
        {
            date: "2014-01-04",
            value: 160785250,
        },
        {
            date: "2014-01-05",
            value: 167391904,
        },
        {
            date: "2014-01-06",
            value: 161576838,
        },
        {
            date: "2014-01-07",
            value: 161413854,
        },
        {
            date: "2014-01-08",
            value: 152177211,
        },
        {
            date: "2014-01-09",
            value: 140762210,
        },
        {
            date: "2014-01-10",
            value: 144381072,
        },
        {
            date: "2014-01-11",
            value: 154352310,
        },
        {
            date: "2014-01-12",
            value: 165531790,
        },
        {
            date: "2014-01-13",
            value: 175748881,
        },
        {
            date: "2014-01-14",
            value: 187064037,
        },
        {
            date: "2014-01-15",
            value: 197520685,
        },
        {
            date: "2014-01-16",
            value: 210176418,
        },
        {
            date: "2014-01-17",
            value: 196122924,
        },
        {
            date: "2014-01-18",
            value: 207337480,
        },
        {
            date: "2014-01-19",
            value: 200258882,
        },
        {
            date: "2014-01-20",
            value: 186829538,
        },
        {
            date: "2014-01-21",
            value: 192456897,
        },
        {
            date: "2014-01-22",
            value: 204299711,
        },
        {
            date: "2014-01-23",
            value: 192759017,
        },
        {
            date: "2014-01-24",
            value: 203596183,
        },
        {
            date: "2014-01-25",
            value: 208107346,
        },
        {
            date: "2014-01-26",
            value: 196359852,
        },
        {
            date: "2014-01-27",
            value: 192570783,
        },
        {
            date: "2014-01-28",
            value: 177967768,
        },
        {
            date: "2014-01-29",
            value: 190632803,
        },
        {
            date: "2014-01-30",
            value: 203725316,
        },
        {
            date: "2014-01-31",
            value: 218226177,
        },
        {
            date: "2014-02-01",
            value: 210698669,
        },
        {
            date: "2014-02-02",
            value: 217640656,
        },
        {
            date: "2014-02-03",
            value: 216142362,
        },
        {
            date: "2014-02-04",
            value: 201410971,
        },
        {
            date: "2014-02-05",
            value: 196704289,
        },
        {
            date: "2014-02-06",
            value: 190436945,
        },
        {
            date: "2014-02-07",
            value: 178891686,
        },
        {
            date: "2014-02-08",
            value: 171613962,
        },
        {
            date: "2014-02-09",
            value: 157579773,
        },
        {
            date: "2014-02-10",
            value: 158677098,
        },
        {
            date: "2014-02-11",
            value: 147129977,
        },
        {
            date: "2014-02-12",
            value: 151561876,
        },
        {
            date: "2014-02-13",
            value: 151627421,
        },
        {
            date: "2014-02-14",
            value: 143543872,
        },
        {
            date: "2014-02-15",
            value: 136581057,
        },
        {
            date: "2014-02-16",
            value: 135560715,
        },
        {
            date: "2014-02-17",
            value: 122625263,
        },
        {
            date: "2014-02-18",
            value: 112091484,
        },
        {
            date: "2014-02-19",
            value: 98810329,
        },
        {
            date: "2014-02-20",
            value: 99882912,
        },
        {
            date: "2014-02-21",
            value: 94943095,
        },
        {
            date: "2014-02-22",
            value: 104875743,
        },
        {
            date: "2014-02-23",
            value: 116383678,
        },
        {
            date: "2014-02-24",
            value: 125028841,
        },
        {
            date: "2014-02-25",
            value: 123967310,
        },
        {
            date: "2014-02-26",
            value: 133167029,
        },
        {
            date: "2014-02-27",
            value: 128577263,
        },
        {
            date: "2014-02-28",
            value: 115836969,
        },
        {
            date: "2014-03-01",
            value: 119264529,
        },
        {
            date: "2014-03-02",
            value: 109363374,
        },
        {
            date: "2014-03-03",
            value: 113985628,
        },
        {
            date: "2014-03-04",
            value: 114650999,
        },
        {
            date: "2014-03-05",
            value: 110866108,
        },
        {
            date: "2014-03-06",
            value: 96473454,
        },
        {
            date: "2014-03-07",
            value: 104075886,
        },
        {
            date: "2014-03-08",
            value: 103568384,
        },
        {
            date: "2014-03-09",
            value: 101534883,
        },
        {
            date: "2014-03-10",
            value: 115825447,
        },
        {
            date: "2014-03-11",
            value: 126133916,
        },
        {
            date: "2014-03-12",
            value: 116502109,
        },
        {
            date: "2014-03-13",
            value: 130169411,
        },
        {
            date: "2014-03-14",
            value: 124296886,
        },
        {
            date: "2014-03-15",
            value: 126347399,
        },
        {
            date: "2014-03-16",
            value: 131483669,
        },
        {
            date: "2014-03-17",
            value: 142811333,
        },
        {
            date: "2014-03-18",
            value: 129675396,
        },
        {
            date: "2014-03-19",
            value: 115514483,
        },
        {
            date: "2014-03-20",
            value: 117630630,
        },
        {
            date: "2014-03-21",
            value: 122340239,
        },
        {
            date: "2014-03-22",
            value: 132349091,
        },
        {
            date: "2014-03-23",
            value: 125613305,
        },
        {
            date: "2014-03-24",
            value: 135592466,
        },
        {
            date: "2014-03-25",
            value: 123408762,
        },
        {
            date: "2014-03-26",
            value: 111991454,
        },
        {
            date: "2014-03-27",
            value: 116123955,
        },
        {
            date: "2014-03-28",
            value: 112817214,
        },
        {
            date: "2014-03-29",
            value: 113029590,
        },
        {
            date: "2014-03-30",
            value: 108753398,
        },
        {
            date: "2014-03-31",
            value: 99383763,
        },
        {
            date: "2014-04-01",
            value: 100151737,
        },
        {
            date: "2014-04-02",
            value: 94985209,
        },
        {
            date: "2014-04-03",
            value: 82913669,
        },
        {
            date: "2014-04-04",
            value: 78748268,
        },
        {
            date: "2014-04-05",
            value: 63829135,
        },
        {
            date: "2014-04-06",
            value: 78694727,
        },
        {
            date: "2014-04-07",
            value: 80868994,
        },
        {
            date: "2014-04-08",
            value: 93799013,
        },
        {
            date: "2014-04-09",
            value: 99042416,
        },
        {
            date: "2014-04-10",
            value: 97298692,
        },
        {
            date: "2014-04-11",
            value: 83353499,
        },
        {
            date: "2014-04-12",
            value: 71248129,
        },
        {
            date: "2014-04-13",
            value: 75253744,
        },
        {
            date: "2014-04-14",
            value: 68976648,
        },
        {
            date: "2014-04-15",
            value: 71002284,
        },
        {
            date: "2014-04-16",
            value: 75052401,
        },
        {
            date: "2014-04-17",
            value: 83894030,
        },
        {
            date: "2014-04-18",
            value: 90236528,
        },
        {
            date: "2014-04-19",
            value: 99739114,
        },
        {
            date: "2014-04-20",
            value: 96407136,
        },
        {
            date: "2014-04-21",
            value: 108323177,
        },
        {
            date: "2014-04-22",
            value: 101578914,
        },
        {
            date: "2014-04-23",
            value: 115877608,
        },
        {
            date: "2014-04-24",
            value: 112088857,
        },
        {
            date: "2014-04-25",
            value: 112071353,
        },
        {
            date: "2014-04-26",
            value: 101790062,
        },
        {
            date: "2014-04-27",
            value: 115003761,
        },
        {
            date: "2014-04-28",
            value: 120457727,
        },
        {
            date: "2014-04-29",
            value: 118253926,
        },
        {
            date: "2014-04-30",
            value: 117956992,
        },
    ],
    [
        {
            date: "2014-01-01",
            value: 50000000,
        },
        {
            date: "2014-01-02",
            value: 60379978,
        },
        {
            date: "2014-01-03",
            value: 40493749,
        },
        {
            date: "2014-01-04",
            value: 60785250,
        },
        {
            date: "2014-01-05",
            value: 67391904,
        },
        {
            date: "2014-01-06",
            value: 61576838,
        },
        {
            date: "2014-01-07",
            value: 61413854,
        },
        {
            date: "2014-01-08",
            value: 82177211,
        },
        {
            date: "2014-01-09",
            value: 103762210,
        },
        {
            date: "2014-01-10",
            value: 84381072,
        },
        {
            date: "2014-01-11",
            value: 54352310,
        },
        {
            date: "2014-01-12",
            value: 65531790,
        },
        {
            date: "2014-01-13",
            value: 75748881,
        },
        {
            date: "2014-01-14",
            value: 47064037,
        },
        {
            date: "2014-01-15",
            value: 67520685,
        },
        {
            date: "2014-01-16",
            value: 60176418,
        },
        {
            date: "2014-01-17",
            value: 66122924,
        },
        {
            date: "2014-01-18",
            value: 57337480,
        },
        {
            date: "2014-01-19",
            value: 100258882,
        },
        {
            date: "2014-01-20",
            value: 46829538,
        },
        {
            date: "2014-01-21",
            value: 92456897,
        },
        {
            date: "2014-01-22",
            value: 94299711,
        },
        {
            date: "2014-01-23",
            value: 62759017,
        },
        {
            date: "2014-01-24",
            value: 103596183,
        },
        {
            date: "2014-01-25",
            value: 108107346,
        },
        {
            date: "2014-01-26",
            value: 66359852,
        },
        {
            date: "2014-01-27",
            value: 62570783,
        },
        {
            date: "2014-01-28",
            value: 77967768,
        },
        {
            date: "2014-01-29",
            value: 60632803,
        },
        {
            date: "2014-01-30",
            value: 103725316,
        },
        {
            date: "2014-01-31",
            value: 98226177,
        },
        {
            date: "2014-02-01",
            value: 60698669,
        },
        {
            date: "2014-02-02",
            value: 67640656,
        },
        {
            date: "2014-02-03",
            value: 66142362,
        },
        {
            date: "2014-02-04",
            value: 101410971,
        },
        {
            date: "2014-02-05",
            value: 66704289,
        },
        {
            date: "2014-02-06",
            value: 60436945,
        },
        {
            date: "2014-02-07",
            value: 78891686,
        },
        {
            date: "2014-02-08",
            value: 71613962,
        },
        {
            date: "2014-02-09",
            value: 107579773,
        },
        {
            date: "2014-02-10",
            value: 58677098,
        },
        {
            date: "2014-02-11",
            value: 87129977,
        },
        {
            date: "2014-02-12",
            value: 51561876,
        },
        {
            date: "2014-02-13",
            value: 51627421,
        },
        {
            date: "2014-02-14",
            value: 83543872,
        },
        {
            date: "2014-02-15",
            value: 66581057,
        },
        {
            date: "2014-02-16",
            value: 65560715,
        },
        {
            date: "2014-02-17",
            value: 62625263,
        },
        {
            date: "2014-02-18",
            value: 92091484,
        },
        {
            date: "2014-02-19",
            value: 48810329,
        },
        {
            date: "2014-02-20",
            value: 49882912,
        },
        {
            date: "2014-02-21",
            value: 44943095,
        },
        {
            date: "2014-02-22",
            value: 104875743,
        },
        {
            date: "2014-02-23",
            value: 96383678,
        },
        {
            date: "2014-02-24",
            value: 105028841,
        },
        {
            date: "2014-02-25",
            value: 63967310,
        },
        {
            date: "2014-02-26",
            value: 63167029,
        },
        {
            date: "2014-02-27",
            value: 68577263,
        },
        {
            date: "2014-02-28",
            value: 95836969,
        },
        {
            date: "2014-03-01",
            value: 99264529,
        },
        {
            date: "2014-03-02",
            value: 109363374,
        },
        {
            date: "2014-03-03",
            value: 93985628,
        },
        {
            date: "2014-03-04",
            value: 94650999,
        },
        {
            date: "2014-03-05",
            value: 90866108,
        },
        {
            date: "2014-03-06",
            value: 46473454,
        },
        {
            date: "2014-03-07",
            value: 84075886,
        },
        {
            date: "2014-03-08",
            value: 103568384,
        },
        {
            date: "2014-03-09",
            value: 101534883,
        },
        {
            date: "2014-03-10",
            value: 95825447,
        },
        {
            date: "2014-03-11",
            value: 66133916,
        },
        {
            date: "2014-03-12",
            value: 96502109,
        },
        {
            date: "2014-03-13",
            value: 80169411,
        },
        {
            date: "2014-03-14",
            value: 84296886,
        },
        {
            date: "2014-03-15",
            value: 86347399,
        },
        {
            date: "2014-03-16",
            value: 31483669,
        },
        {
            date: "2014-03-17",
            value: 82811333,
        },
        {
            date: "2014-03-18",
            value: 89675396,
        },
        {
            date: "2014-03-19",
            value: 95514483,
        },
        {
            date: "2014-03-20",
            value: 97630630,
        },
        {
            date: "2014-03-21",
            value: 62340239,
        },
        {
            date: "2014-03-22",
            value: 62349091,
        },
        {
            date: "2014-03-23",
            value: 65613305,
        },
        {
            date: "2014-03-24",
            value: 65592466,
        },
        {
            date: "2014-03-25",
            value: 63408762,
        },
        {
            date: "2014-03-26",
            value: 91991454,
        },
        {
            date: "2014-03-27",
            value: 96123955,
        },
        {
            date: "2014-03-28",
            value: 92817214,
        },
        {
            date: "2014-03-29",
            value: 93029590,
        },
        {
            date: "2014-03-30",
            value: 108753398,
        },
        {
            date: "2014-03-31",
            value: 49383763,
        },
        {
            date: "2014-04-01",
            value: 100151737,
        },
        {
            date: "2014-04-02",
            value: 44985209,
        },
        {
            date: "2014-04-03",
            value: 52913669,
        },
        {
            date: "2014-04-04",
            value: 48748268,
        },
        {
            date: "2014-04-05",
            value: 23829135,
        },
        {
            date: "2014-04-06",
            value: 58694727,
        },
        {
            date: "2014-04-07",
            value: 50868994,
        },
        {
            date: "2014-04-08",
            value: 43799013,
        },
        {
            date: "2014-04-09",
            value: 4042416,
        },
        {
            date: "2014-04-10",
            value: 47298692,
        },
        {
            date: "2014-04-11",
            value: 53353499,
        },
        {
            date: "2014-04-12",
            value: 71248129,
        },
        {
            date: "2014-04-13",
            value: 75253744,
        },
        {
            date: "2014-04-14",
            value: 68976648,
        },
        {
            date: "2014-04-15",
            value: 71002284,
        },
        {
            date: "2014-04-16",
            value: 75052401,
        },
        {
            date: "2014-04-17",
            value: 83894030,
        },
        {
            date: "2014-04-18",
            value: 50236528,
        },
        {
            date: "2014-04-19",
            value: 59739114,
        },
        {
            date: "2014-04-20",
            value: 56407136,
        },
        {
            date: "2014-04-21",
            value: 108323177,
        },
        {
            date: "2014-04-22",
            value: 101578914,
        },
        {
            date: "2014-04-23",
            value: 95877608,
        },
        {
            date: "2014-04-24",
            value: 62088857,
        },
        {
            date: "2014-04-25",
            value: 92071353,
        },
        {
            date: "2014-04-26",
            value: 81790062,
        },
        {
            date: "2014-04-27",
            value: 105003761,
        },
        {
            date: "2014-04-28",
            value: 100457727,
        },
        {
            date: "2014-04-29",
            value: 98253926,
        },
        {
            date: "2014-04-30",
            value: 67956992,
        },
    ],
];

var _seed = 42;
Math.random = function () {
    _seed = (_seed * 16807) % 2147483647;
    return (_seed - 1) / 2147483646;
};
var ts1 = 1388534400000;
var ts2 = 1388620800000;
var ts3 = 1389052800000;

var dataSet = [[], [], []];

for (var i = 0; i < 12; i++) {
    ts1 = ts1 + 86400000;
    var innerArr = [ts1, dataSeries[2][i].value];
    dataSet[0].push(innerArr);
}
for (var i = 0; i < 18; i++) {
    ts2 = ts2 + 86400000;
    var innerArr = [ts2, dataSeries[1][i].value];
    dataSet[1].push(innerArr);
}
for (var i = 0; i < 12; i++) {
    ts3 = ts3 + 86400000;
    var innerArr = [ts3, dataSeries[0][i].value];
    dataSet[2].push(innerArr);
}

var optionsChart15 = {
    series: [
        {
            name: "Stock: <span class='fw-bold'>3000</span>",
            data: dataSet[0],
        },
        {
            name: "Stock: <span class='fw-bold'>120</span>",
            data: dataSet[1],
        },
        {
            name: "Stock: <span class='fw-bold'>150</span>",
            data: dataSet[2],
        },
    ],
    chart: {
        type: "area",
        stacked: false,
        height: 350,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    markers: {
        size: 0,
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100],
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: "#8e8da4",
            },
            offsetX: 0,
            formatter: function (val) {
                return (val / 1000000).toFixed(2);
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    xaxis: {
        type: "datetime",
        tickAmount: 8,
        min: new Date("01/01/2014").getTime(),
        max: new Date("01/20/2014").getTime(),
        labels: {
            rotate: -15,
            rotateAlways: true,
            formatter: function (val, timestamp) {
                return moment(new Date(timestamp)).format("DD MMM YYYY");
            },
        },
    },
    tooltip: {
        shared: true,
    },
    legend: {
        position: "top",
        horizontalAlign: "right",
        offsetX: -10,
    },
    grid: {
        show: true,
        borderColor: "#d7f4ff",
        strokeDashArray: 5,
    },
};

var chart15 = new ApexCharts(
    document.querySelector("#chart-15"),
    optionsChart15
);
chart15.render();

var optionsChart16 = {
    series: [
        {
            name: "PRODUCT A",
            data: [44, 55, 41, 67, 22, 43],
        },
        {
            name: "PRODUCT B",
            data: [13, 23, 20, 8, 13, 27],
        },
        {
            name: "PRODUCT C",
            data: [11, 17, 15, 15, 21, 14],
        },
        {
            name: "PRODUCT D",
            data: [21, 7, 25, 13, 22, 8],
        },
    ],
    chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: true,
        },
    },
    responsive: [
        {
            breakpoint: 480,
            options: {
                legend: {
                    position: "bottom",
                    offsetX: -10,
                    offsetY: 0,
                },
            },
        },
    ],
    plotOptions: {
        bar: {
            horizontal: false,
        },
    },
    xaxis: {
        type: "datetime",
        categories: [
            "01/01/2011 GMT",
            "01/02/2011 GMT",
            "01/03/2011 GMT",
            "01/04/2011 GMT",
            "01/05/2011 GMT",
            "01/06/2011 GMT",
        ],
    },
    legend: {
        position: "right",
        offsetY: 40,
    },
    fill: {
        opacity: 1,
    },
    grid: {
        show: true,
        borderColor: "#d7f4ff",
        strokeDashArray: 5,
    },
};

var chart16 = new ApexCharts(
    document.querySelector("#chart-16"),
    optionsChart16
);
chart16.render();

var optionsChart17 = {
    series: [
        {
            name: "TEAM A",
            type: "column",
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        },
        {
            name: "TEAM B",
            type: "area",
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },
        {
            name: "TEAM C",
            type: "line",
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        },
    ],
    chart: {
        height: 350,
        type: "line",
        stacked: false,
        toolbar: {
            show: false,
        },
    },
    stroke: {
        width: [0, 2, 5],
        curve: "smooth",
    },
    plotOptions: {
        bar: {
            columnWidth: "50%",
        },
    },

    fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
        },
    },
    labels: [
        "01/01/2003",
        "02/01/2003",
        "03/01/2003",
        "04/01/2003",
        "05/01/2003",
        "06/01/2003",
        "07/01/2003",
        "08/01/2003",
        "09/01/2003",
        "10/01/2003",
        "11/01/2003",
    ],
    markers: {
        size: 0,
    },
    xaxis: {
        type: "datetime",
    },
    yaxis: {
        title: {
            text: "Points",
        },
        min: 0,
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;
            },
        },
    },
    grid: {
        show: true,
        borderColor: "#d7f4ff",
        strokeDashArray: 5,
    },
};

var chart17 = new ApexCharts(
    document.querySelector("#chart-17"),
    optionsChart17
);
chart17.render();

var optionsChart18 = {
    series: [
        {
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
            name: "Free Cash Flow",
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
    ],
    chart: {
        type: "bar",
        height: 350,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
    },
    xaxis: {
        categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
        ],
    },
    yaxis: {
        title: {
            text: "$ (thousands)",
        },
    },
    fill: {
        opacity: 1,
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands";
            },
        },
    },
    grid: {
        show: true,
        borderColor: "#d7f4ff",
        strokeDashArray: 5,
    },
};

var chart18 = new ApexCharts(
    document.querySelector("#chart-18"),
    optionsChart18
);
chart18.render();

var optionsChart19 = {
    series: [
        {
            name: "Income",
            type: "column",
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
        },
        {
            name: "Cashflow",
            type: "column",
            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
        },
        {
            name: "Revenue",
            type: "line",
            data: [20, 29, 37, 36, 44, 45, 50, 58],
        },
    ],
    chart: {
        height: 350,
        type: "line",
        stacked: false,
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: [1, 1, 4],
    },
    xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    yaxis: [
        {
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: "#008FFB",
            },
            labels: {
                style: {
                    colors: "#008FFB",
                },
            },
            title: {
                text: "Income (thousand crores)",
                style: {
                    color: "#008FFB",
                },
            },
            tooltip: {
                enabled: true,
            },
        },
        {
            seriesName: "Income",
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: "#00E396",
            },
            labels: {
                style: {
                    colors: "#00E396",
                },
            },
            title: {
                text: "Operating Cashflow (thousand crores)",
                style: {
                    color: "#00E396",
                },
            },
        },
        {
            seriesName: "Revenue",
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: "#FEB019",
            },
            labels: {
                style: {
                    colors: "#FEB019",
                },
            },
            title: {
                text: "Revenue (thousand crores)",
                style: {
                    color: "#FEB019",
                },
            },
        },
    ],
    tooltip: {
        fixed: {
            enabled: true,
            position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60,
        },
    },
    legend: {
        horizontalAlign: "left",
        offsetX: 40,
    },
    grid: {
        show: true,
        borderColor: "#d7f4ff",
        strokeDashArray: 5,
    },
};

var chart19 = new ApexCharts(
    document.querySelector("#chart-19"),
    optionsChart19
);
chart19.render();
