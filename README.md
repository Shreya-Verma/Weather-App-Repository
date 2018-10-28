#npm init (create package.json file)

#Dependencies (npm install <dev-dependency>)
angular
angular-router
bootstrap

#Dev Dependencies
to host the application over local server run 
1. npm install htp-server
2. navigate to root folder of project and run 
    http-server 'Path of the project root'


#Working of individual js files

1. index.js : creates the module, register the components,service and constants and requires the dependencies.
2. envConfig.constant.js : Set up the constants to be used for different environments.
3. route.config.js : Uses the route provider to route between the application
4. weather.service.js : Contains the services that are called up to get the details of the weather
5. main.component.js : acting at a container to hold up the ng-view
6. current.component.js : Shows up the current weather of the default city.
7. forecast.component.js : shows up the forecast data for 5 days. 

#Testing
# Install Karma:
npm install karma --save-dev

Install plugins that your project needs:
npm install karma-jasmine karma-chrome-launcher --save-dev

#PS
Change the envConfig file to match your API_KEY for the Weather API

