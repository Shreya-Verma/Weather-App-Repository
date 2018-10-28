ForecastController.$inject =['$routeParams','weatherServices'];
function ForecastController($routeParams,weatherServices) {
    var vm=this;
    var routeId = $routeParams.id;
    vm.getCityForecast= getCityForecast;
    
    vm.cityList=[];    
    
    function getCityList(){
        weatherServices.getCityList(dataSuccess,dataError);  
        function dataSuccess(response){
            vm.cityList = response.data.list;
            
        }
        function dataError(){     
            vm.cityList=[];     
        }
    }

    function getCityForecast(cityid){
        console.log(cityid);        
        weatherServices.getCityForecast(cityid,dataSuccess,dataError);  
        function dataSuccess(response){
            vm.cityForecast={};
            vm.cityForecast = response.data;
        }
        function dataError(){     
            vm.cityForecast={};     
        }
    }

    function init(){
        if(routeId){
            getCityList();
            getCityForecast(routeId);
        }else{
            getCityList();
        }
        
    }

    init();    

}

app.component('forecastComponent',{
    controller : ForecastController,
    templateUrl :  'app/components/forecast-component/forecast.component.html'
});