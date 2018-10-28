describe('Testing the Route Config', function() {
    
    var $route;
    beforeEach(module('app'));
    beforeEach(inject(function (_$route_,_$location_,_$rootScope_,_$httpBackend_) {
        $route = _$route_;
        $location = _$location_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
      }));

    it('Should Test the routings of the routeProvider', function() {  

        expect($route.current).toBeUndefined();
        
        //Route to /current
        $httpBackend.expectGET('app/components/current-component/current.component.html').respond(200);
        $location.path('/current');
        $rootScope.$digest();
        
        expect($route.current.template).toBe('<current-component></current-component>');
        
        //Route to /forecast
        $httpBackend.expectGET('app/components/forecast-component/forecast.component.html').respond(200);
        $location.path('/forecast');
        $rootScope.$digest();

        expect($route.current.template).toEqual('<forecast-component></forecast-component>');

        
        //Route to /forecast/:id
        $httpBackend.expectGET('app/components/forecast-component/forecast.component.html').respond(200);
        $location.path('/forecast/2');
        $rootScope.$digest();

        expect($route.current.template).toEqual('<forecast-component></forecast-component>');

  
      });
    }); 
