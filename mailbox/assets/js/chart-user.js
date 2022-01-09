"use strict";
var optionsChart42 = {
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
    subtitle: {
        text:
            "Max_one Basic button group examples component with a variety of options.",
        offsetX: 0,
        offsetY: 0,
        style: {
            fontSize: "13px",
            color: "#374a5e",
        },
    },
    legend: {
        show: true,
        position: "top",
        horizontalAlign: "right",
    },
};

var chart42 = new ApexCharts(
    document.querySelector("#chart-42"),
    optionsChart42
);
chart42.render();

am4core.ready(function () {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var continents = {
        AF: 0,
        AN: 1,
        AS: 2,
        EU: 3,
        NA: 4,
        OC: 5,
        SA: 6,
    };

    // Create map instance
    var chart = am4core.create("chart-43", am4maps.MapChart);
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series for world map
    var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
    worldSeries.useGeodata = true;
    worldSeries.geodata = am4geodata_worldLow;
    worldSeries.exclude = ["AQ"];

    var worldPolygon = worldSeries.mapPolygons.template;
    worldPolygon.tooltipText = "{name}";
    worldPolygon.nonScalingStroke = true;
    worldPolygon.strokeOpacity = 0.5;
    worldPolygon.fill = am4core.color("#eee");
    worldPolygon.propertyFields.fill = "color";

    var hs = worldPolygon.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(9);

    // Create country specific series (but hide it for now)
    var countrySeries = chart.series.push(new am4maps.MapPolygonSeries());
    countrySeries.useGeodata = true;
    countrySeries.hide();
    countrySeries.geodataSource.events.on("done", function (ev) {
        worldSeries.hide();
        countrySeries.show();
    });

    var countryPolygon = countrySeries.mapPolygons.template;
    countryPolygon.tooltipText = "{name}";
    countryPolygon.nonScalingStroke = true;
    countryPolygon.strokeOpacity = 0.5;
    countryPolygon.fill = am4core.color("#eee");

    var hs = countryPolygon.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(9);

    // Set up click events
    worldPolygon.events.on("hit", function (ev) {
        ev.target.series.chart.zoomToMapObject(ev.target);
        var map = ev.target.dataItem.dataContext.map;
        if (map) {
            ev.target.isHover = false;
            countrySeries.geodataSource.url =
                "https://www.amcharts.com/lib/4/geodata/json/" + map + ".json";
            countrySeries.geodataSource.load();
        }
    });

    // Set up data for countries
    var data = [];
    for (var id in am4geodata_data_countries2) {
        if (am4geodata_data_countries2.hasOwnProperty(id)) {
            var country = am4geodata_data_countries2[id];
            if (country.maps.length) {
                data.push({
                    id: id,
                    color: chart.colors.getIndex(
                        continents[country.continent_code]
                    ),
                    map: country.maps[0],
                });
            }
        }
    }
    worldSeries.data = data;

    // Zoom control
    chart.zoomControl = new am4maps.ZoomControl();

    var homeButton = new am4core.Button();
    homeButton.events.on("hit", function () {
        worldSeries.show();
        countrySeries.hide();
        chart.goHome();
    });

    homeButton.icon = new am4core.Sprite();
    homeButton.padding(7, 5, 7, 5);
    homeButton.width = 30;
    homeButton.icon.path =
        "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
    homeButton.marginBottom = 10;
    homeButton.parent = chart.zoomControl;
    homeButton.insertBefore(chart.zoomControl.plusButton);
}); // end am4core.ready()