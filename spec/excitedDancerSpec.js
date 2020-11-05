describe('excitedDancer', function() {

  var excitedDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    excitedDancer = new MakeExcitedDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(excitedDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node slide', function() {
    sinon.spy(excitedDancer.$node, 'animate');
    excitedDancer.step();
    expect(excitedDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(excitedDancer, 'step');
      expect(excitedDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(excitedDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(excitedDancer.step.callCount).to.be.equal(2);
    });
  });
});
