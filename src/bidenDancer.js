var MakeBidenDancer = function(top, left, timeBetweenSteps) {
  var bidenUrl = 'https://media2.giphy.com/media/l4JyNEzIxGk3QZIXe/giphy.gif';
  var image = new Image();
  image.src = bidenUrl;
  this.bool = true;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).attr('class', 'biden-dancer');
  $(this.$node).data('counter', 0);
  $(this.$node).append(image);
};

MakeBidenDancer.prototype = Object.create(MakeDancer.prototype);
MakeBidenDancer.prototype.constructor = MakeBidenDancer;

MakeBidenDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  if (this.bool) {
    this.$node.addClass('rotate');
  } else {
    this.$node.animate({
      left: '+=50'
    }, Math.random() * 1000);
  }
};

MakeBidenDancer.prototype.lineUp = function() {
  this.$node.css({'position': 'static'});
};

MakeBidenDancer.prototype.race = function() {
  this.$node.css('display', 'block');
  this.$node.css({'position': 'static', 'top': 0, 'left': 0});
  this.$node.css({'position': 'relative'});
  this.bool = false;
};
