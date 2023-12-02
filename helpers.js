function createFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
}


function findMode(arr)
{
    let freqCounter = createFrequencyCounter(arr);
    let highestCount =0;
    let mode = 0;
    for (let key in freqCounter)
    {
        if (freqCounter[key] > highestCount)
        {
            highestCount = key;
            mode = freqCounter[key];
        }
    }
    return mode;
}

function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];
  
    for (let i = 0; i < numsAsStrings.length; i++) {
      let valToNumber = Number(numsAsStrings[i]);
  
      if (Number.isNaN(valToNumber)) {
        return new Error(
          `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
        );
      }
  
      result.push(valToNumber);
    }
    return result;
}

function findMean(nums)
{
    if (nums=== 0) return 0;
    let total = 0;
    for (let num in nums)
    {
        total += num;
    }
    return total / nums.length;
}


function findMedian(nums){
    nums.sort((a, b) => a - b);
    let middleIndex = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
      } else {
        median = nums[middleIndex];
      }
      return median
}
    

module.exports = {
    createFrequencyCounter,
    findMean,
    findMedian,
    findMode,
    convertAndValidateNumsArray
  };
  