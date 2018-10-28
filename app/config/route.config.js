
routeConfig.$inject =['$routeProvider'];
function routeConfig($routeProvider){
    $routeProvider
    .when('/current',{
        template :'<current-component></current-component>'
    }).when('/forecast',{
        template :'<forecast-component></forecast-component>'
    }).when('/forecast/:id',{
        template :'<forecast-component></forecast-component>'
    }).otherwise({
            redirectTo: '/current'
    }); 

}
app.config(routeConfig);
