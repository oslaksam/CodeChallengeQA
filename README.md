# CodeChallengeQA
The challenge was written using WebdriverIO.
The tests use Faker.js library to generate random data.
##  To install all packages in the package.json:
```javascript  
npm install
```
##  Run all tests:
```javascript  
npx wdio wdio.conf.js
```
##  Run a specific suite configured in the configuration file:
```javascript  
npx wdio wdio.conf.js --suite saucedemo
```
##  Run to generate a test report using Allure reporter:
```javascript  
npx allure generate .\allure-results\
```
or on Linux
```javascript  
npx allure generate ./allure-results
```
then
```javascript
npx allure open
```
##  To build and run the Docker container you can run:
```javascript  
docker build -t mytest -f Dockerfile .
docker run -it mytest
```
##  To use Docker compose for running the Selenium GRID:
```javascript  
docker compose build
docker compose up
```
##  After Selenium GRID is running you can run the tests:
```javascript
npx wdio grid-docker-wdio.conf.js
```