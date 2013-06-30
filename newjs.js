d3.select("#body").append("svg");
var body = d3.select('svg');

var data = new Array(30);

var moveObject = function(x,y){
  var x = +d3.select(this).attr("cx");
  var y = +d3.select(this).attr("cy");
  x+=d3.event.dx;
  y+=d3.event.dy;
  d3.select(this).attr("cx",x);
  d3.select(this).attr('cy', y);
};


var tempScore = 0;
var highScore = 0;
var score = 0;

var tempScoreFn = function(){
  tempScore++;
  d3.select('#score').text(tempScore);
};

var updateScore = function(){
    if (tempScore >= highScore){
      highScore = tempScore;
      tempScore = 0;
      d3.select('#highScore').text(highScore);
    } else {
      tempScore = 0;
    }
};

var distance = function(player, enemy) {
  var dx = player.attr('cx') - enemy.attr('cx');
  var dy = player.attr('cy') - enemy.attr('cy');
  dx = dx * dx;
  dy = dy * dy;
  return Math.sqrt( dx + dy );
};

var checkCollision = function(enemy){
  if(distance(player, enemy) < 20) {
    updateScore();
  }
};

var tweenWithCollisionDetection = function(){
  var enemy = d3.select(this);
  return function(t) {
    checkCollision(enemy);
  };
};

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
            .attr("r", 10)
              .tween('custom', tweenWithCollisionDetection);
};

first();
update();

setInterval(function(){tempScoreFn();}, 50);
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