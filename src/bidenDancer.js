var MakeBidenDancer = function(top, left, timeBetweenSteps) {
  var bidenUrl = 'https://media2.giphy.com/media/l4JyNEzIxGk3QZIXe/giphy.gif';
  var image = new Image();
  image.src = bidenUrl;

  // if ((top + 265) > $('.dance-floor').height()) {
  //   top = top - 265;
  // }
  // if ((left + 460) > $('.dance-floor').width()) {
  //   left = left - 460;
  // }

  image.onload = function() {
    if (top + this.height > $('.dance-floor').height()) {
      top = top - 250;
    }
    if (left + this.width > $('.dance-floor').width()) {
      left = left - 250;
    }
  };

  MakeDancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).attr('class', 'biden-dancer');
  $(this.$node).append(image);
};

MakeBidenDancer.prototype = Object.create(MakeDancer.prototype);
MakeBidenDancer.prototype.constructor = MakeBidenDancer;

MakeBidenDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.animate({
    right: '+=50'
  }, 3000);
};

// image.onload = function() {
//   if (top + this.height > $('.dance-floor').height()) {
//     alert('har')
//     top = top - 250;
//   }
//   if (left + this.width > $('.dance-floor').width()) {
//     left = left - 250;
//   }
// };