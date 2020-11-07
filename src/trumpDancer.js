var MakeTrump = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = MakeDancer.prototype.step;
  $(this.$node).attr('class', 'trump-dancer');
  var TrumpUrl = 'https://media.tenor.com/images/e654417d359dde2aa77d993664039ced/tenor.gif';
  var image = new Image();
  image.src = TrumpUrl;
  $(this.$node).append(image);
};

MakeTrump.prototype = Object.create(MakeDancer.prototype);
MakeTrump.prototype.constructor = MakeTrump;

MakeTrump.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.animate({
    left: '+=50'
  }, 3000);
};

MakeTrumpDancer.prototype.lineUp = function() {

};
