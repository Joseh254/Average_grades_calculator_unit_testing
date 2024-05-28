// tests/calculateGradesAndAverage.test.js
const { calculateGradesAndAverage } = require('../calculateGradesAndAverage');

describe('calculateGradesAndAverage', () => {
    test('calculates grades and average correctly', () => {
        const studentScore = {name: "Dennis Doe", math: 80, eng: 65, kis: 48, phy: 67, che: 56, re: 89, comp: 82};
        const expectedOutput = {name: "Dennis Doe", math: "A", eng: "B", kis: "Pass", phy: "B", che: "C", re: "A", comp: "A", avgPts: 69};
        expect(calculateGradesAndAverage(studentScore)).toEqual(expectedOutput);
    });

    test('handles minimum scores correctly', () => {
        const studentScore = {name: "Jane Doe", math: 0, eng: 0, kis: 0, phy: 0, che: 0, re: 0, comp: 0};
        const expectedOutput = {name: "Jane Doe", math: "Sup", eng: "Sup", kis: "Sup", phy: "Sup", che: "Sup", re: "Sup", comp: "Sup", avgPts: 0};
        expect(calculateGradesAndAverage(studentScore)).toEqual(expectedOutput);
    });

    test('handles maximum scores correctly', () => {
        const studentScore = {name: "John Doe", math: 100, eng: 100, kis: 100, phy: 100, che: 100, re: 100, comp: 100};
        const expectedOutput = {name: "John Doe", math: "A", eng: "A", kis: "A", phy: "A", che: "A", re: "A", comp: "A", avgPts: 100};
        expect(calculateGradesAndAverage(studentScore)).toEqual(expectedOutput);
    });
});
