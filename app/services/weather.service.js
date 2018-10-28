WeatherService.$inject = ['$http','envConfig'];
function WeatherService($http,envConfig) {
    //Get City List    
    function getCityList(success,failure) {
        return $http.get(envConfig.APP_URL+'/find?lat=' + envConfig.LAT + '&lon='+ envConfig.LON+'&cnt=5&appid='+ envConfig.APP_ID)
               .then(function successCallback(response) {
                      success(response);
               },function errorCallback(responseErr) {
                      failure(responseErr);
               });
    }
    
     function getCityWeather(success,failure) {
        return $http.get(envConfig.APP_URL + 'weather?id=2747030&appid='+envConfig.APP_ID)
            .then(function successCallback(response) {
                      success(response);
            },function errorCallback(responseErr) {
                      failure(responseErr);
            });
    }

    function getCityForecast(id,success,failure) {
        return $http.get(envConfig.APP_URL + 'forecast?id=' + id +'&cnt=5&appid=' + envConfig.APP_ID)
            .then(function successCallback(response) {
                      success(response);
            },function errorCallback(responseErr) {
                      failure(responseErr);
            });
    }

   


    this.getCityList = getCityList;
    this.getCityForecast = getCityForecast;
    this.getCityWeather = getCityWeather;
    
}

app.service('weatherServices', WeatherService);
