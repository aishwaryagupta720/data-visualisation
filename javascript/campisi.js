document.addEventListener('DOMContentLoaded', function () {
    // Filter data for Campisi 
    const buildingData = wasteData.filter(item => item.Building.toLowerCase() === 'campisi');

    // Extract unique dates from the filtered data
    const uniqueDates = [...new Set(buildingData.map(item => item.Date.split('T')[0]))];

    // Populate the dropdown with unique dates
    const datePicker = document.getElementById('datePicker');
    if (uniqueDates.length === 0) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'No data available';
        datePicker.appendChild(option);
    } else {
        uniqueDates.forEach(date => {
            const option = document.createElement('option');
            option.value = date;
            option.textContent = date;
            datePicker.appendChild(option);
        });
    }

    // Initialize charts
    const ctx = document.getElementById('wasteChart').getContext('2d');
    const wasteChart = createChart(ctx);

    const recyclingPieCtx = document.getElementById('recyclingPieChart').getContext('2d');
    const compostPieCtx = document.getElementById('compostPieChart').getContext('2d');
    const landfillPieCtx = document.getElementById('landfillPieChart').getContext('2d');

    const recyclingPieChart = createPieChart(recyclingPieCtx, "Misplaced in Recycling (in lbs)");
    const compostPieChart = createPieChart(compostPieCtx, "Misplaced in Compost (in lbs)");
    const landfillPieChart = createPieChart(landfillPieCtx, "Misplaced in Landfill (in lbs)");

    // Function to create a new bar chart
    // Function to create a new bar chart
    function createChart(ctx) {
        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Recycling', 'Compost', 'Landfill'],
                datasets: []
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        stacked: true,
                        title: {
                            display: true,
                            text: 'Streams'
                        }
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Weight in lbs'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Waste Data Visualization for Campisi (For each Month)',
                        font: {
                            size: 24
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right',
                        align: "start",  // or 'left', 'right', 'bottom'
                        labels: {
                            boxWidth: 20,
                            padding: 15
                        }
                    }
                }
            }
        });
    }

    // Function to create a new pie chart
    function createPieChart(ctx, titleText) {
        return new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [],
                datasets: [{
                    data: [],
                    backgroundColor: [],
                    borderColor: [],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    title: {
                        display: true,
                        text: titleText,
                        font: {
                            size: 15
                        }
                    },
                    legend: {
                        display: false,
                        position: 'bottom',
                        align: "start",  // or 'left', 'right', 'bottom'
                        labels: {
                            boxWidth: 15,
                            padding: 5
                        }
                    }
                }
            }
        });

    }


    // Function to update chart data
    function updateChart(chart, data, baseColors) {
        const datasets = [
            {
                label: 'Recycling',
                data: [data.recycling, 0, 0],
                backgroundColor: baseColors.recycling[0],
                borderColor: baseColors.recycling[1],
                borderWidth: 1
            },
            {
                label: 'Compost in Recycling',
                data: [data['compost in recycling'], 0, 0],
                backgroundColor: baseColors.compostInRecycling[0],
                borderColor: baseColors.compostInRecycling[1],
                borderWidth: 1
            },
            {
                label: 'Landfill in Recycling',
                data: [data['landfill in recycling'], 0, 0],
                backgroundColor: baseColors.landfillInRecycling[0],
                borderColor: baseColors.landfillInRecycling[1],
                borderWidth: 1
            },
            {
                label: 'Reusables in Recycling',
                data: [data['reusables in recycling'], 0, 0],
                backgroundColor: baseColors.reusablesInRecycling[0],
                borderColor: baseColors.reusablesInRecycling[1],
                borderWidth: 1
            },
            {
                label: 'Compost',
                data: [0, data.compost, 0],
                backgroundColor: baseColors.compost[0],
                borderColor: baseColors.compost[1],
                borderWidth: 1
            },
            {
                label: 'Landfill in Compost',
                data: [0, data['landfill in compost'], 0],
                backgroundColor: baseColors.landfillInCompost[0],
                borderColor: baseColors.landfillInCompost[1],
                borderWidth: 1
            },
            {
                label: 'Recycling in Compost',
                data: [0, data['recycling in compost'], 0],
                backgroundColor: baseColors.recyclingInCompost[0],
                borderColor: baseColors.recyclingInCompost[1],
                borderWidth: 1
            },
            {
                label: 'Reusables in Compost',
                data: [0, data['reusables in compost'], 0],
                backgroundColor: baseColors.reusablesInCompost[0],
                borderColor: baseColors.reusablesInCompost[1],
                borderWidth: 1
            },
            {
                label: 'Landfill',
                data: [0, 0, data.landfill],
                backgroundColor: baseColors.landfill[0],
                borderColor: baseColors.landfill[1],
                borderWidth: 1
            },
            {
                label: 'Compost in Landfill',
                data: [0, 0, data['compost in landfill']],
                backgroundColor: baseColors.compostInLandfill[0],
                borderColor: baseColors.compostInLandfill[1],
                borderWidth: 1
            },
            {
                label: 'Recycling in Landfill',
                data: [0, 0, data['recycling in landfill']],
                backgroundColor: baseColors.recyclingInLandfill[0],
                borderColor: baseColors.recyclingInLandfill[1],
                borderWidth: 1
            },
            {
                label: 'Reusables in Landfill',
                data: [0, 0, data['reusables in landfill']],
                backgroundColor: baseColors.reusablesInLandfill[0],
                borderColor: baseColors.reusablesInLandfill[1],
                borderWidth: 1
            }
        ];

        chart.data.datasets = datasets;
        chart.update();
    }

    // Function to update pie chart data
    function updatePieChart(chart, data, labels) {
        const colors = labels.map(label => colorMapping[label.toLowerCase()]);
        chart.data.labels = labels;
        chart.data.datasets[0].data = data;
        chart.data.datasets[0].backgroundColor = colors.map(color => color[0]);
        chart.data.datasets[0].borderColor = colors.map(color => color[1]);
        chart.update();
    }

    // Function to prepare data
    function prepareData(filteredData) {
        const data = {
            'recycling': 0,
            'compost': 0,
            'landfill': 0,
            'recycling in landfill': 0,
            'recycling in compost': 0,
            'compost in landfill': 0,
            'landfill in recycling': 0,
            'compost in recycling': 0,
            'reusables in landfill': 0,
            'reusables in recycling': 0,
            'reusables in compost': 0
        };

        filteredData.forEach(item => {
            const stream = item.Stream.toLowerCase();
            if (data.hasOwnProperty(stream)) {
                data[stream] += item.Weight;
            }
        });

        return data;
    }

    // Function to prepare pie chart data
    function preparePieChartData(filteredData, streams) {
        const substreams = {};
        filteredData.forEach(item => {
            if (streams.includes(item.Stream.toLowerCase())) {
                if (!substreams[item.Substream]) {
                    substreams[item.Substream] = 0;
                }
                substreams[item.Substream] += item.Weight;
            }
        });

        return substreams;
    }

    // Add event listener to update charts on date change
    datePicker.addEventListener('change', (event) => {
        const date = event.target.value;
        const filteredData = buildingData.filter(d => d.Date.startsWith(date));
        const data = prepareData(filteredData);

        updateChart(wasteChart, data, {
            'recycling': ['rgba(54, 162, 235, 0.8)', 'rgba(54, 162, 235, 1)'],
            'compostInRecycling': ['rgba(54, 162, 235, 0.6)', 'rgba(54, 162, 235, 1)'],
            'landfillInRecycling': ['rgba(54, 162, 235, 0.4)', 'rgba(54, 162, 235, 1)'],
            'reusablesInRecycling': ['rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 1)'],
            'compost': ['rgba(0, 128, 0, 0.8)', 'rgba(0, 128, 0, 1)'],
            'landfillInCompost': ['rgba(0, 128, 0, 0.6)', 'rgba(0, 128, 0, 1)'],
            'recyclingInCompost': ['rgba(0, 128, 0, 0.4)', 'rgba(0, 128, 0, 1)'],
            'reusablesInCompost': ['rgba(0, 128, 0, 0.2)', 'rgba(0, 128, 0, 1)'],
            'landfill': ['rgba(99, 99, 99, 0.8)', 'rgba(99, 99, 99, 1)'],
            'compostInLandfill': ['rgba(99, 99, 99, 0.6)', 'rgba(99, 99, 99, 1)'],
            'recyclingInLandfill': ['rgba(99, 99, 99, 0.4)', 'rgba(99, 99, 99, 1)'],
            'reusablesInLandfill': ['rgba(99, 99, 99, 0.2)', 'rgba(99, 99, 99, 1)']
        });

        const recyclingSubstreams = preparePieChartData(filteredData, ['compost in recycling', 'landfill in recycling', 'reusables in recycling']);
        console.log(Object.keys(recyclingSubstreams))
        updatePieChart(recyclingPieChart, Object.values(recyclingSubstreams), Object.keys(recyclingSubstreams));

        const compostSubstreams = preparePieChartData(filteredData, ['recycling in compost', 'landfill in compost', 'reusables in compost']);
        console.log(Object.keys(compostSubstreams))
        updatePieChart(compostPieChart, Object.values(compostSubstreams), Object.keys(compostSubstreams));

        const landfillSubstreams = preparePieChartData(filteredData, ['recycling in landfill', 'compost in landfill', 'reusables in landfill']);
        console.log(Object.keys(landfillSubstreams))
        updatePieChart(landfillPieChart, Object.values(landfillSubstreams), Object.keys(landfillSubstreams));
    });

    // Initial chart update with the first available date
    if (uniqueDates.length > 0) {
        datePicker.value = uniqueDates[0];
        datePicker.dispatchEvent(new Event('change'));
    }

    // Generate custom legends
    function createHorizontalLegend() {
        const legendContainer = document.getElementById('horizontalLegend');

        const categories = [
            { name: 'Recycling Sub-categories', color: 'rgba(54, 162, 235, 0.8)' }, // Blue
            { name: 'Landfill Sub-categories', color: 'rgba(128, 128, 128, 0.8)' }, // Gray
            { name: 'Compost Sub-categories', color: 'rgba(0, 128, 0, 0.8)' }, // Green
            { name: 'Reusable Sub-categories', color: 'rgba(255, 215, 0, 0.8)' }
        ];

        categories.forEach(category => {
            const legendItem = document.createElement('div');
            const colorBox = document.createElement('span');
            colorBox.style.backgroundColor = category.color;
            legendItem.appendChild(colorBox);
            legendItem.appendChild(document.createTextNode(category.name));
            legendContainer.appendChild(legendItem);
        });
    }

    // Call the function to create legends
    createHorizontalLegend();


});
