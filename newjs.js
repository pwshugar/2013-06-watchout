var body = d3.select("body").append("svg:svg");
var data = new Array(30);

var first = function(){
  body.selectAll("circle")
    .data(data)
      .attr("cx", function() { return Math.floor(Math.random()*2000)})
      .attr("cy", function() { return Math.floor(Math.random()*1000)})
        .enter()
          .append("circle");
};

var update = function() {
  body.selectAll("circle")
    .data(data)
       .transition()
          .duration(2000)
            .attr("cx", function() { return Math.floor(Math.random()*2000)})
            .attr("cy", function() { return Math.floor(Math.random()*1000)})
            .attr("r", 10);
};

first();
update();

setInterval(function(){
  update();
}, 2000);

