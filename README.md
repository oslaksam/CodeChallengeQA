# CodeChallengeQA
It is written using WebdriverIO.
The tests use Faker.js library to generate random data.
##  To install all packages in the package.json
```javascript  
npm install
```
##  Run all tests
```javascript  
npx wdio wdio.conf.js
```
##  Run a specific suite configured in the configuration file
```javascript  
npx wdio wdio.conf.js --suite saucedemo
```
##  To build the Docker container you can run:
```javascript  
docker build -t mytest -f Dockerfile .
```
##  Then to run the tests, execute:
```javascript  
docker run -it mytest
```
##  To use Docker compose (issues)
```javascript  
docker compose build
```
##  Then to run the tests from docker compose execute: (issues)
```javascript  
docker compose up --exit-code-from runtests
```