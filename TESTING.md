## Testing Guideline ##

This document exists to help you write your unit tests.
In this document you will find snippets of some examples and some explanation of those examples.

If you want to directly jump into a code example, click [here](https://github.com/team-number-one/team-number-one/blob/master/react-client/specs/navbar.spec.js)

> This document is the best thing that happened in my life!
> --- John Travolta

#### Front-End Testing ####
Using **'react-test-renderer'** and Airbnb's **'Enzyme'**

##### Objective: #####
The idea is to write unit tests for each of your React components.
Use the following example to guide yourself.

**Setting up Enzyme:**
You will find a 'setup.js' file inside the 'specs' directory inside our 'react-client' directory. This file is required to setup the Enzyme's Adapter. This means it has to be ran before all the Test Suites as these use Enzyme.
Todo this we add the following in our 'package.json':
```javascript
"jest": {
    "setupTestFrameworkScriptFile": "./react-client/spec/setup.js"
}
```


**Creating new Test Suites:**
Each React Component will have its own test suite. The test suite will be a new file with the name of 'compname.spec.js' within the 'specs' directory.

**Importing dependencies:**
```javascript
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Component from '../src/components/Component.jsx';
```
These lines will be required at the beginning of every test suite or spec file. Component refers to the component you are actually testing in the file.

**Creating a test group:**
```javascript
describe('Test Group', () => {
  it('Test Case #1', () => {
    // actual test
  });
  it('Test Case #2', () => {
    // actual test
  });
});
```
We usually are looking for only one test group in each test suite. With the name being 'Test [ComponentName]'.

**Desired Test Cases:**
 - Check if props were sent down correctly
 - Mock all eventHandlers' event and check the call count

*Example:*
If I have a SearchBar component, with an input and a button in it:
- I will want to test if the input's value is the same as the value received from props, assuming it is a controlled form component.
- I will want to test if the onChangeHandler's call count increases when mocking a 'change' event in the input element, again assuming it is a controlled component.
- I will want to test if pressing enter will increase the searchHandler's call count.
- I will want to test if clicking the button will increase the searchHandler's call count.