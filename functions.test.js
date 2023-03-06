const { totalWeightFor} = require('./functions');

test("should multiply singled valued weight, sets and reps", () => {
   let weight = 30;
   let sets = 5;
   let reps = 5;
   expect(totalWeightFor(weight, sets, reps)).toStrictEqual(750);
});

test("should multiply single valued weight and multiple reps", () => {
    let weight = 30;
    let sets = 5;
    let reps = "6/5/4/3/2";
    expect(totalWeightFor(weight, sets, reps)).toStrictEqual(600);
});

test("should multiply single valued reps and multiple sets", () => {
    let weight = "20/25/20/25";
    let sets = 5;
    let reps = 10;
    expect(totalWeightFor(weight, sets, reps)).toStrictEqual(900);
});

test("should multiply multiple valued sets and weights", () => {
    let weight = "20/25/20/25";
    let sets = 4;
    let reps = "6/5/4/3";
    expect(totalWeightFor(weight, sets, reps)).toStrictEqual(400);
});

test("should get total weight for multiplied weight and reps", () => {
    let weight = "(20/22.5/25) x 2";
    let sets = 6;
    let reps = "(6/5/4) x 2";
    expect(totalWeightFor(weight, sets, reps)).toStrictEqual(665);
});

test("should throw exception if weights don\'t match reps", () => {
    let weight = "(20/22.5/25) x 3";
    let sets = 6;
    let reps = "(6/5/4) x 2";
    expect(() => {
        totalWeightFor(weight, sets, reps);
    }).toThrow(Error);
});

test("should return zero for empty weights", () => {
    let weight = "";
    let sets = 6;
    let reps = "(6/5/4) x 2";
    expect(totalWeightFor(weight, sets, reps)).toStrictEqual(0);
})

test("should return zero for empty reps", () => {
    let weight = "(20/22.5/25) x 3";
    let sets = 6;
    let reps = "";
    expect(totalWeightFor(weight, sets, reps)).toStrictEqual(0);
})

test("should return zero if all parameters are empty", () => {
    let weight = "";
    let sets = "";
    let reps = "";
    expect(totalWeightFor(weight, sets, reps)).toStrictEqual(0);
})

test("should return total weight for two sets of reps", () => {
    let weight = "10";
    let sets = "4";
    let reps = "8/8";
    expect(totalWeightFor(weight, sets, reps)).toStrictEqual(640);
})