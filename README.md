# Project end-to-end (e2e) tests.
The Sample project e2e tests are written using Protractor, the of
ficial test framework for e2e testing of AngularJS applications.
This test project tries to follow the best practices described in
the Protractor's official website.
The architecture of this project is described below:

* The `protractor.conf.js` file stores all the configuration need
ed for the tests to be executed, like the selenium address, the b
rowser that the tests will be executed in, the base url from wher
e the tests will start from, etc.

* There is also a `helper.js` file for general functions that can
be used in the tests, like sleeping for some seconds, refreshing
the page, waiting for element visibility, etc.

* The `page-objects` directory contains the web elements and func
tions for specific pages or parts of the pages. This is done this
way for better maintenance and for separation of responsibilities.

* And the **specs** directory contains the tests, where each test
suite is a separate spec file. Each spec file has a describe sec
tion, which basically describes the functionality being tested (a
nd it names the test suite), and there is an it section for each
of the different test cases.

## Local installation:
For installing protractor locally, follow the below steps:
npm install protractor -g
webdriver-manager update

## Running protractor:
For running protractor just execute the below grunt tasks.
Exemplo de README.md
20 2.2 ESTRUTURA DE PROJETO
E-book gerado especialmente para André Leite - asmla@hotmail.com
grunt server:e2e // run this in one console's tab grunt
test:protractor // run this in another console's tab

## Tips:
Protractor uses Jasmine syntax, so:

* if you need to run only a specific test case, change the 'it' f
or 'fit'

* if you want to skip a specific test case, change the 'if' for '
xit'

* if you want to run only a specific test suite, change the 'desc
ribe' for 'fdescribe'
Also:

* for running protractor against your local environment, make a c
opy of the config.local.example.js file, but change the name to c
onfig.local.js (this will be ignored by git). With this file, som
e not important configurations (for running on local) are overwri
tten. You can also edit this config local file for overwritten ot
her configurations you might need (e.g: baseUrl).
___
For more information, take a look at the Protractor's official do
cumentation [http://www.protractortest.org/#/](http://www.protrac
tortest.org/#/).