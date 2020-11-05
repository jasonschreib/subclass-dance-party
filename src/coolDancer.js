var MakeCoolDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = MakeDancer.prototype.step;
};

MakeCoolDancer.prototype = Object.create(MakeDancer.prototype);
MakeCoolDancer.prototype.constructor = MakeCoolDancer;

MakeCoolDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.fadeToggle();
};
