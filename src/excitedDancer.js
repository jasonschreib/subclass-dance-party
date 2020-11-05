var MakeExcitedDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = MakeDancer.prototype.step;
  this.$node.css('border-color', 'blue');
};

MakeExcitedDancer.prototype = Object.create(MakeDancer.prototype);
MakeExcitedDancer.prototype.constructor = MakeExcitedDancer;

MakeExcitedDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // this.$node.css('border-color', 'blue');
  this.$node.slideToggle();
  this.$node.animate({
    opacity: .5,
    height: '10%',
  });
};


// MakeExcitedDancer.prototype.setPosition = function() {
//   var styleSettings = {
//     top: this.top += 200,
//     left: this.left += 200
//   };
//   this.$node.css(styleSettings);
// };





// $( "#clickme" ).click(function() {
//    this.$node.animate({
//     opacity: 0.25,
//     left: "+=50",
//     height: "toggle"
//   }, 5000, function() {
//     // Animation complete.
//   });
// });