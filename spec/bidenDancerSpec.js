describe('Biden Dancer', function() {

  var bidenDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bidenDancer = new MakeBidenDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bidenDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node step', function() {
    sinon.spy(bidenDancer.$node, 'animate');
    bidenDancer.step();
    expect(bidenDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bidenDancer, 'step');
      expect(bidenDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bidenDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bidenDancer.step.callCount).to.be.equal(2);
    });
  });
});
