const test = require('tape')
const index = require('./index')

test('Applying discount', (t) => {
    t.assert(index.discountApply(10, 5) === 5, 'Discount applied correctly.');
    t.end()
});
