CurrentController.$inject=['weatherServices'];
function CurrentController(weatherServices) {
    var vm = this;
    vm.getCityWeather = getCityWeather;
    
    function getCityWeather(){
        weatherServices.getCityWeather(dataSuccess,dataError);
        function dataSuccess(response){
            vm.cityData = response.data;  
        }
        function dataError(response){   
                
        }

    } 

    
    function init(){
        getCityWeather();
    }
    init();


}

app.component('currentComponent',{
    controller : CurrentController,
    templateUrl : 'app/components/current-component/current.component.html'
})