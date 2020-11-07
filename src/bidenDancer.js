var MakeBidenDancer = function(top, left, timeBetweenSteps) {
  var bidenUrl = 'https://media2.giphy.com/media/l4JyNEzIxGk3QZIXe/giphy.gif';
  var image = new Image();
  image.src = bidenUrl;

  MakeDancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).attr('class', 'biden-dancer');
  $(this.$node).data('counter', 0);
  $(this.$node).append(image);
};

MakeBidenDancer.prototype = Object.create(MakeDancer.prototype);
MakeBidenDancer.prototype.constructor = MakeBidenDancer;

MakeBidenDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.addClass('rotate');
  this.$node.animate({
    right: '+=50'
  }, 3000);
};

MakeBidenDancer.prototype.lineUp = function() {

};
