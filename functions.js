const {errorMessage, toArrayOfNumbers, singleWeightSingleSetsSingleReps, multipleWeightsSingleSetsSingleReps,
    singleWeightSingleSetsMultipleReps, multipleWeightsMultipleReps
} = require("./helper");

/**
 * Calculates de total weight for a given amounts of sets, reps and weights.
 * If weights or reps are given as sets of values (example: 30/40/50), then the "sets" parameter is ignored.
 * @param {string} weight A string containing the weights for the exercise (without units). Decimal separator should be ".". Examples: "30", "10/20/20.5", "(5/10/15) x 2".
 * @param {string} sets The number of sets for the exercise.
 * @param {string} reps A string containing the reps for the exercise. Examples: "5", "5/10/5", "(10/12/15) x 3"
 * @return The total amount of weight.
 * @customfunction
 */
function totalWeightFor(weight, sets, reps) {
    let strWeight = String(weight);
    let strSets = String(sets);
    let strReps = String(reps);

    let weightValues = toArrayOfNumbers(strWeight);
    let setsValues = toArrayOfNumbers(strSets);
    let repsValues = toArrayOfNumbers(strReps);

    if (weightValues.length > 1 && repsValues.length > 1 && weightValues.length !== repsValues.length) {
        throw new Error(errorMessage(weightValues, repsValues));
    }

    if (weightValues.length === 1 && setsValues.length === 1 && repsValues.length === 1) {
        return singleWeightSingleSetsSingleReps(weightValues, setsValues, repsValues);
    } else if (weightValues.length > 1 && setsValues.length === 1 && repsValues.length === 1) {
        return multipleWeightsSingleSetsSingleReps(weightValues, setsValues, repsValues);
    } else if (weightValues.length === 1 && setsValues.length === 1 && repsValues.length > 1) {
        return singleWeightSingleSetsMultipleReps(weightValues, setsValues, repsValues);
    } else {
        return multipleWeightsMultipleReps(weightValues, repsValues);
    }
}

module.exports = {totalWeightFor};