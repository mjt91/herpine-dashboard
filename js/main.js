import * as Utils from "./utils.js";


let data = [20, 50, 70];

const startDate = new Date(2020, 0, 1);
const labels = [];
for (let i = -7; i < 3; i++) {
  const date = Utils.newDateStringDate(i);
  labels.push(date.toString());
}

console.log(labels);


const ctxTimeSeries = document.getElementById('timeseries10days').getContext('2d');



const ctxWeekdays = document.getElementById('meanWeekday').getContext('2d');
const myChart = new Chart(ctxWeekdays, {
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
