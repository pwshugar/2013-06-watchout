d3.select("#body").append("svg");
var body = d3.select('svg');

var data = new Array(30);

var first = function(){
  body.selectAll("circle")
    .data(data)
      .attr("cx", function() { return Math.floor(Math.random()*1960)})
      .attr("cy", function() { return Math.floor(Math.random()*900)})
      .attr("r", 10)
        .enter()
          .append("circle");
};

var update = function() {
  body.selectAll("circle")
    .data(data)
       .transition()
          .duration(3000)
            .attr("cx", function() { return Math.floor(Math.random()*1960)})
            .attr("cy", function() { return Math.floor(Math.random()*900)})
            .attr("r", 10);
};

first();
update();

setInterval(function(){
  update();
}, 3000);

var player = body.append("circle")
    .attr("cx", 1000)
    .attr("cy", 500)
    .attr("r", 20)
    .attr("fill", "blue")
      .call(d3.behavior.drag()
        .on("drag", function(d) {moveObject.call(this);}));

var moveObject = function(x,y){
  var x = +d3.select(this).attr("cx");
  var y = +d3.select(this).attr("cy");
  x+=d3.event.dx;
  y+=d3.event.dy;
  d3.select(this).attr("cx",x);
  d3.select(this).attr('cy', y);
};