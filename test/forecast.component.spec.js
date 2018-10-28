describe('Testing Forecast Weather Component', function() {

    var $componentController,controller,weatherService;
    
    weatherService = function(){
        this.getForecastWeather;
        this.getCityList;
    }

      // Load the module 
      beforeEach(module('app'));

     
      beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
      }));
  
      it('The Forecast Component Should be loaded', function() {
        controller = $componentController('forecastComponent',{weatherService});
        expect(controller).not.toBeNull();
      });



 
  
    
});