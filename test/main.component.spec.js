describe('mainComponent', function() {

  var $componentController,controller ;

    // Load the module 
    beforeEach(module('app'));

    beforeEach(inject(function (_$componentController_) {
      $componentController = _$componentController_;
    }));

    it('The main Controller Should be loaded', function() {
      controller = $componentController('mainComponent');
      expect(controller).not.toBeNull();
    });
  

  
  });