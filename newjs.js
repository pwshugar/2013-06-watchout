(function() {
  var Player, axes, createEnemies, gameBoard, gameOptions, gameStats, play, players, render, updateBestScore, updateScore,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  gameOptions = {
    height: 550,
    width: 900,
    nEnemies: 30,
    padding: 20
  };

  gameStats = {
    score: 0,
    bestScore: 0
  };

  axes = {
    x: d3.scale.linear().domain([0, 100]).range([0, gameOptions.width]),
    y: d3.scale.linear().domain([0, 100]).range([0, gameOptions.height])
  };

  gameBoard = d3.select('.box')
                  .append('svg:svg')
                    .attr('width', gameOptions.width)
                    .attr('height', gameOptions.height);



}).call(this);