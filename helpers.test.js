const {

    findMean,
    findMedian,
    findMode,
} = require("./helpers");

describe("#findMedian", function()
{
    it("finds the median", function() {
        expect(findMedian([-1,0,3,5])).toEqual(1.5)
    })
})

describe("#findMean", function() {
    it("finds the mean", function() {
        expect(findMean([-1,0,3,5])).toEqual(1.75)
    })
})

describe("#findMode", function() {
    it("finds the mode", function() {
        expect(findMode([0,0,1,1,1,2,3])).toEqual(1)
    })
})