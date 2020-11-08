var MakeKanyeDancer = function(top, left, timeBetweenSteps) {
  this.bool = true;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).attr('class', 'kanye-dancer');
  var kanyeUrl = 'https://media1.tenor.com/images/3bd2b52e7a3fc1f811fa3aac69b15b9c/tenor.gif?itemid=5299773';
  var image = new Image();
  image.src = kanyeUrl;
  $(this.$node).append(image);
};

MakeKanyeDancer.prototype = Object.create(MakeDancer.prototype);
MakeKanyeDancer.prototype.constructor = MakeKanyeDancer;

MakeKanyeDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  if (this.bool) {
    this.$node.animate({
      top: '+=50'
    }, 3000);
  } else {
    this.$node.animate({
      left: '+=125'
    }, Math.random() * 1000);
  }
};

MakeKanyeDancer.prototype.lineUp = function() {
  this.step = null;
  this.$node.css({'position': 'static'});
};


MakeKanyeDancer.prototype.race = function() {
  this.$node.css('display', 'block');
  this.$node.css({'position': 'static', 'top': 0, 'left': 0});
  // this.step = null;
  this.$node.css({'position': 'relative'});
  this.bool = false;
};