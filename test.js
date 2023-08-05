

test("One euro should be 1.2 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like it's supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.2 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2;

    // This is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro is 1.2 dollars, then 3.5 euros should be = (3.5 * 1.2)
});

test("de dolares a yenes", function(){
    const {fromDollarToYen} = require('./app.js');

    const yenes = fromDollarToYen(7);

    const expected = 7 * 127.9 / 1.2;

    expect(fromDollarToYen(7)).toBe(expected);
})


test("de yenes a euros", function(){
    const {fromYenToPound} = require('./app.js');

    const euro = fromYenToPound(20);

    const expected = 20 * 0.8 / 127.9;

    expect(fromYenToPound(20)).toBe(expected);
})