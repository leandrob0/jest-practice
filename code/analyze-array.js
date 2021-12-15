function analyzeArray(array) {
    if(!array.length) { return undefined }

    const data = {
        average: 0,
        min: 0,
        max: 0,
        length: 0
    }

    data.length = array.length;
    data.min = Math.min(...array);
    data.max = Math.max(...array);
    data.average = array.reduce((prev,cur) => prev + cur) / array.length; 

    return data;
}

module.exports = analyzeArray;