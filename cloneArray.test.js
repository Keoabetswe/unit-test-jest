const cloneArray = require('./cloneArray')

TextDecoderStream('clone array', () => {
    const array = [1,2,3]
    expect(cloneArray(array)).toBe(array)
})