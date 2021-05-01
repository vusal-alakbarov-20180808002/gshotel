let dailyChart = document.getElementById('daily-income').getContext('2d');
let monthlyChart = document.getElementById('monthly-income').getContext('2d');
Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = '#221f1f';

let dailyIncomeChart = new Chart(dailyChart, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Income',
            data: [
                1481,
                2012,
                1905,
                2013,
                1905,
                2000,
                1905
            ],
            backgroundColor: ['#91092d', '#fd9b02', '#91092d', '#fd9b02', '#91092d', '#fd9b02', '#91092d'],
            hoverBorderWidth: 2,
            hoverBorderColor: '#221f1f'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Daily Income',
            fontSize: 24,
        },
        legend: {
            display: false,
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        }
    }
});

let monthlyIncomeChart = new Chart(monthlyChart, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Income',
            data: [
                59000,
                60000,
                67500,
                62000,
                65000,
                65000,
                70000,
                60000,
                64000,
                72000,
                67000,
                60000,
            ],
            backgroundColor: ['#91092d', '#fd9b02', '#91092d', '#fd9b02', '#91092d', '#fd9b02', '#91092d', '#fd9b02', '#91092d', '#fd9b02', '#91092d', '#fd9b02',],
            hoverBorderWidth: 2,
            hoverBorderColor: '#221f1f'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Monthly Income',
            fontSize: 22,
        },
        legend: {
            display: false,
        },
        layout: {
            padding: {
                left: 34,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        }
    }
});