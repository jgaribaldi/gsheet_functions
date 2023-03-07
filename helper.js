function hasMultiplier(input) {
    return input.indexOf('x') > -1;
}

function getMultiplier(input) {
    let inputParts = input.split('x');
    return Number(inputParts[1].trim());
}

function getActualValues(input) {
    let inputParts = input.split('x');
    return inputParts[0].trim();
}

function toArrayOfNumbers(input) {
    if (hasMultiplier(input)) {
        let multiplier = getMultiplier(input);
        let values = getActualValues(input);
        let trimmedValues = values.replace("(", "").replace(")", "").replaceAll(",", ".");
        let trimmedValuesParts = trimmedValues.split('/');
        let result = [];

        for (let i = 0; i < multiplier; i++) {
            result = result.concat(trimmedValuesParts);
        }

        return result.map(function (element) {
            return Number(element);
        });
    } else {
        let trimmedInput = input.replaceAll("(", "").replaceAll(")", "").replaceAll(",", ".");
        return trimmedInput.split('/').map(function (element) {
            return Number(element);
        });
    }
}

function multiplyArrays(array1, array2) {
    let result = 0;
    for (let i = 0; i < array1.length; i++) {
        result = result + (array1[i] * array2[i]);
    }
    return result;
}

function multiplyArrayByConstant(array, constant) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue * constant, 0);
}

function errorMessage(weights, reps) {
    return "I've got " + weights.length + " weights and " + reps.length + " reps!";
}

function singleWeightSingleSetsSingleReps(weights, sets, reps) {
    return weights[0] * sets[0] * reps[0];
}

function singleWeightSingleSetsMultipleReps(weights, sets, reps) {
    if (sets > reps.length) {
        return multiplyArrayByConstant(reps, sets[0] * weights[0]);
    } else {
        return multiplyArrayByConstant(reps, weights[0]);
    }
}

function multipleWeightsSingleSetsSingleReps(weights, sets, reps) {
    return multiplyArrayByConstant(weights, reps[0]);
}

function multipleWeightsMultipleReps(weights, reps) {
    return multiplyArrays(weights, reps);
}

module.exports = {
    errorMessage,
    toArrayOfNumbers,
    singleWeightSingleSetsSingleReps,
    singleWeightSingleSetsMultipleReps,
    multipleWeightsSingleSetsSingleReps,
    multipleWeightsMultipleReps
};