import * as Utils from "./utils.js";

(function() {
    fetch("./data/herpine.json")
        .then(function(response){
            return response.json();
        })
        .then(function(myJson) {
            // get data from json
            const data = Object.values(myJson).slice(-10);
            // define labels
            const labels = [];
            const keys = Object.keys(myJson).slice(-10);
            keys.forEach((element) => {
                labels.push(Utils.parseISODate(element, "DDDD"));
            });
            // create chart
            const ctxTimeSeries = document.getElementById('timeseries10days').getContext('2d');
            new Chart(ctxTimeSeries, {
                type: "line",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: "Besucherzahl 2021",
                            // data: [ 100, 55, 20, 40, 100, 20, 30, 40, 50, 60 ],
                            data: data,
                            borderColor: Utils.CHART_COLORS.blue,
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            tension: 0.3,
                        },
                    ]
                }
        });
    });
})();

(function() {
    const ctxWeekdays = document.getElementById('meanWeekday').getContext('2d');
    const WeekdayChart = new Chart(ctxWeekdays, {
        type: 'bar',
        data: {
            labels: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
            datasets: [{
                label: 'Durchschnittliche Anzahl Besucher je Wochentag',
                data: [12, 19, 3, 5, 30, 50, 45],
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
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
})();
