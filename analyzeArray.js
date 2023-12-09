function analyzeArray(arr)
{
    return {
        average: arr.reduce((a, b) => a + b, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
    }
}

module.exports = analyzeArray;