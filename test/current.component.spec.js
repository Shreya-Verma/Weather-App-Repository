describe('Testing Current Weather Component', function() {

    var $componentController,controller,weatherService;
    
    weatherService = function(){
        this.getCityWeather = function(){
        };
    }

      // Load the module 
      beforeEach(module('app'));

     
      beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
      }));
  
      it('The Current Component Should be loaded', function() {
        controller = $componentController('currentComponent',{weatherService});
        expect(controller).not.toBeNull();
      });

      it('The Current Component Should contain getCityWeather', function() {
        controller = $componentController('currentComponent',{weatherService});
        expect(controller).not.toBeNull();
      });

 
  
    
});