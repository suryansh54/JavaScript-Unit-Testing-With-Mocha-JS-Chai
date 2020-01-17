const assert = require('chai').assert;
const app = require('../app');

// Results 
sayHelloResult = app.sayHello();
addNumberResult = app.addNumbers(4, 2);

describe('App', () => {
    it('sayHello function should return hello', () => {
        assert.equal(sayHelloResult, 'hello');
    })

    it('sayHello should return type string', () => {
        assert.typeOf(sayHelloResult, 'string')
    })

    it('addNumbers should be above 5', () => {
        assert.isAbove(addNumberResult, 5);
    })

    it('addNumbers should return type number', () => {
        assert.typeOf(addNumberResult, 'number')
    })

    // Nested
    describe('sayHello', () => {
        it('sayHello function should return hello', () => {
            assert.equal(sayHelloResult, 'hello');
        })
    
        it('sayHello should return type string', () => {
            assert.typeOf(sayHelloResult, 'string')
        })
    })

    describe('addNumbers', () => {
        it('addNumbers should be above 5', () => {
            assert.isAbove(addNumberResult, 5);
        })
    
        it('addNumbers should return type number', () => {
            assert.typeOf(addNumberResult, 'number')
        })
    })
})