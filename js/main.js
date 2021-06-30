import * as Utils from "./utils.js";

(function() {
    fetch("./data/herpine.json")
        .then(function(response){
            return response.json();
        })
        .then(function(myJson) {
            // define labels
            const labels = [];
            const keys = Object.keys(myJson).slice(-10);
            keys.forEach((element) => {
                labels.push(Utils.parseISODate(element, "DDDD"));
            });
            
            // get data from json
            const herpineData = Object.values(myJson).slice(-10);
            const guests = herpineData.map(a => a.DIFF_ABS);
            const watertemp = herpineData.map(a => a.WATERTEMP); 
            console.log(guests);
            console.log(watertemp);

            const data = {
                labels: labels,
                datasets: [
                    {
                        label: "Besucherzahl 2021",
                        data: guests,
                        borderColor: Utils.CHART_COLORS.blue,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        tension: 0.3,
                        fill: true,
                        yAxisID: 'y',
                    },
                    {
                        label: "Wassertemperatur 2021",
                        data: watertemp,
                        borderColor: Utils.CHART_COLORS.yellow,
                        backgroundColor: Utils.CHART_COLORS.yellow,
                        tension: 0.3,
                        fill: false,
                        yAxisID: 'y1',
                    },
                ]
            };
            const config = {
                responsive: true,
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        scaleLabel: {
                            display: true,
                            labelString: 'USD',
                            beginAtZero: true,
                        },
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                
                        // grid line settings
                        grid: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                    },
                },
            };
            
            // create chart
            const ctxTimeSeries = document.getElementById('timeseries10days').getContext('2d');
            new Chart(ctxTimeSeries, {
                type: "line",
                data: data,
                options: config,
            })
    });
})();

(function() {
    fetch("./data/herpine_weekdaymean.json")
        .then(function(response){
            return response.json();
        })
        .then(function(myJson) {
            // get data from json
            const weeklyData = [
                myJson.Montag.GUESTS,
                myJson.Dienstag.GUESTS,
                // myJson.Mittwoch.GUESTS,
                0,
                // myJson.Freitag.GUESTS,
                0,
                // myJson.Donnerstag.GUESTS,
                0,
                // myJson.Freitag.GUESTS,
                0,
                myJson.Sonntag.GUESTS,
            ];
            console.log(weeklyData);

            const data = {
                labels: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
                datasets: [
                    {
                        label: 'Durchschnittliche Anzahl Besucher je Wochentag',
                        data: weeklyData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }
                ]
            };
            const config = {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            };

            const ctxWeekdays = document.getElementById('meanWeekday').getContext('2d');
            new Chart(ctxWeekdays, {
                type: 'bar',
                data: data,
                options: config
            });
        });
})();

(function() {
    fetch("./data/update.txt")
        .then(function(response) {
            return response.text();
        })
        .then(function(text) {
            console.log(text);
            const updateTime = text;
            document.getElementById("update1").textContent=Utils.parseISODate(updateTime, "f");
            document.getElementById("update2").textContent=Utils.parseISODate(updateTime, "f");
        })
})();