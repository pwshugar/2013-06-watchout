var body = d3.select("body").append("svg:svg");
var data = new Array(30);

body.selectAll("circle")
    .data(data)
      .enter().append("circle")
        .attr("cx", function() { return Math.floor(Math.random()*2000)})
        .attr("cy", function() { return Math.floor(Math.random()*1000)})
        .attr("r", 10);
// d3.selectAll("circle").transition()
//     .duration(750)
//     .delay(function(d, i) { return i * 10; })
//     .attr("r", function(d) { return Math.sqrt(d * scale); });