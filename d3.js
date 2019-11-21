const d3 = require('d3');

const margin = {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10
};

let svg = d3.select('svg'),
    width = +svg.attr('width') - margin.left - margin.right,
    height = +svg.attr('height') - margin.top - margin.bottom;

let g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

// d3.csv('ENTER_DATA_FILE_NAME_HERE.csv', d => {
//    // Data preprocessing goes here
//    return d;
// }).then(data => {
//    // Actual creation of visualization goes here
//
//    // EXAMPLE:
//    // Set up scales and axis
//    //
//    // let x = d3.scaleLinear()
//    //     .domain(d3.extent(d, d => d.value))
//    //     .range([0, width]);
//    // let y = d3.scaleLinear()
//    //     .domain(d3.extent(d, d => d.otherValue))
//    //     .range([height, 0]);
//    //
//    // let xAxis = g => g
//    //     .attr('transform', `translate(0, 0)`)
//    //     .call(d3.axisBottom(x)
//    //         .tickSize(0)
//    //         .tickPadding(10));
//    // let yAxis = g => g
//    //     .attr('transform', `translate(0, 0)`)
//    //     .call(d3.axisLeft(y)
//    //         .tickSize(0)
//    //         .tickPadding(10));
//    // g.append('g')
//    //      .call(xAxis);
//    // g.append('g')
//    //      .call(yAxis);
//    //
//    // g.selectAll('circle').data(data) .... Visualize to your heart's content! 
// });
