// Function to grade sciences subjects
function grade_sciences(science_grades) {
    if (science_grades >= 70 && science_grades <= 100) return 'A';
    if (science_grades >= 60 && science_grades <= 69) return 'B';
    if (science_grades >= 50 && science_grades <= 59) return 'C';
    if (science_grades >= 40 && science_grades <= 49) return 'Pass';
    if (science_grades <= 39) return 'Sup';
}

// Function to grade religious education subjects
function grade_religious_education(re_grades) {
    if (re_grades >= 80 && re_grades <= 100) return 'A';
    if (re_grades >= 70 && re_grades <= 79) return 'B';
    if (re_grades >= 60 && re_grades <= 69) return 'C';
    if (re_grades >= 50 && re_grades <= 59) return 'Pass';
    if (re_grades < 50) return 'Sup';
}

// Function to grade languages subjects
function grade_languages(languages_grades) {
    if (languages_grades >= 75 && languages_grades <= 100) return 'A';
    if (languages_grades >= 65 && languages_grades <= 74) return 'B';
    if (languages_grades >= 55 && languages_grades <= 64) return 'C';
    if (languages_grades >= 45 && languages_grades <= 54) return 'Pass';
    if (languages_grades < 45) return 'Sup';
}



function calculateGradesAndAverage(student) {
    const grades = {};
    grades.name = student.name;

    // Grade each subject using the appropriate grading function
    grades.math = grade_sciences(student.math);
    grades.phy = grade_sciences(student.phy);
    grades.che = grade_sciences(student.che);
    grades.re = grade_religious_education(student.re);
    grades.eng = grade_languages(student.eng);
    grades.kis = grade_languages(student.kis);
    grades.comp = grade_sciences(student.comp); // Assuming Computer Studies follows the science grading scale

    // Calculate average points
    const totalPoints = student.math + student.eng + student.kis + student.phy + student.che + student.re + student.comp;
    grades.avgPts = Math.floor(totalPoints / 7);

    return grades;
}

// Example usage
const studentScore = {name: "Dennis Doe", math: 80, eng: 65, kis: 48, phy: 67, che: 56, re: 89, comp: 82};
const output = calculateGradesAndAverage(studentScore);
console.log(output);
// Output: {name: "Dennis Doe", math: "A", eng: "B", kis: "Pass", phy: "B", che: "C", re: "A", comp: "A", avgPts: 69}
