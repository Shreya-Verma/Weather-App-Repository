# Weather App

This application is about connection to the Weather API's Exposed by 'https://openweathermap.org/api'.

The functionality that has been incuded in this is:
1. Populate the list of cities present in a particular value of Latitude and longitude.
2. Get the Wether details of a particular City selected from drop down. 
3. get 5 days forecast of particular City selected from drop down. 


# 
# Dependencies
Git clone the repository and run 
npm install

# Run over local server (Or any other prefered server you like):

1. npm install http-server
2. navigate to root folder of project and run 
   http-server 'Path of the project root'


# Working of individual js files

1. index.js : creates the module, register the components,service and constants and requires the dependencies.
2. envConfig.constant.js : Set up the constants to be used for different environments.
3. route.config.js : Uses the route provider to route between the application
4. weather.service.js : Contains the services that are called up to get the details of the weather
5. main.component.js : acting at a container to hold up the ng-view
6. current.component.js : Shows up the current weather of the default city.
7. forecast.component.js : shows up the forecast data for 5 days. 


# Testing
npm install karma --save-dev
npm install karma-jasmine karma-chrome-launcher --save-dev

# PS
Change the envConfig file to match your API_KEY for the Weather API
