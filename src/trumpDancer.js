var MakeTrump = function(top, left, timeBetweenSteps) {
  this.bool = true;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = MakeDancer.prototype.step;
  $(this.$node).attr('class', 'trump-dancer');
  this.bool = true;
  var TrumpUrl = 'https://media.tenor.com/images/e654417d359dde2aa77d993664039ced/tenor.gif';
  var image = new Image();
  image.src = TrumpUrl;
  $(this.$node).append(image);
};

MakeTrump.prototype = Object.create(MakeDancer.prototype);
MakeTrump.prototype.constructor = MakeTrump;

MakeTrump.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  if (this.bool) {
    this.$node.animate({
      left: '+=50'
    }, 3000);
  } else {
    this.$node.animate({
      left: '+=50'
    }, Math.random() * 1000);
  }
};

MakeTrump.prototype.lineUp = function() {
  this.step = null;
  this.$node.css({'position': 'static'});
};

MakeTrump.prototype.race = function() {
  this.$node.css('display', 'block');
  this.$node.css({'position': 'static', 'top': 0, 'left': 0});
  this.$node.css({'position': 'relative'});
  this.bool = false;
};
