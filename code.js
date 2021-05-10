$(document).ready(function () {
    $("button").on("click", createStudent);
    $("button").on("click", sortName);
    $("button").on("click", sortPercent);
});

let calculatedForm;
let newCalculatedForm = [];

function createStudent(event) {
    event.preventDefault();
    calculatedForm = {
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        pointsEarned: $("#pointsEarned").val(),
        pointsPossible: $("#pointsPossible").val(),
        percentage: this.pointsEarned / this.pointsPossible * 100,

        getDisplayPercentage: function () {
            let percent = Math.round((100) * (this.pointsEarned / this.pointsPossible));
            return `${this.pointsEarned} / ${this.pointsPossible} (${percent}%)`;
        },

        getLetterGrade: function () {
            if (this.percentage > 89 && this.percentage < 101) {
                return "A";
            } else if (this.percentage > 79 && this.percentage < 90) {
                return "B";
            } else if (this.percentage > 69 && this.percentage < 80) {
                return "C";
            } else if (this.percentage > 59 && this.percentage < 70) {
                return "D";
            } else if (this.percentage > 49 && this.percentage < 60) {
                return "E";
            }
            else {
                return "error";
            }
        }
    }
    newCalculatedForm.push(calculatedForm);
    newCalculatedForm.forEach(function(val) {
        displayContents(val)
    });

    //displayContents(calculatedForm);
}


function displayContents(student) {

    $("#output").append(`${student.firstName}<br>`);
    $(".output").show();

    $("#output").append(`${student.lastName}<br>`);
    $(".output").show();

    $("#output").append(`${student.getDisplayPercentage()}<br>`);
    $(".output").show();

    $("#output").append(`${student.getLetterGrade()}<br>`);
    $(".output").show();
}

//When a new object is added to the array, the current contents of the array are displayed

function sortName(a, b)
{
    if (a.firstName < b.firstName)
        return -1;
    else if (a.firstName > b.firstName)
        return 1;
    else
        return 0;
}
//create button that sorts the array by percent
function sortPercent(a, b)
{
    if (a.percentage < b.percentage)
        return -1;
    else if (a.percentage > b.percentage)
        return 1;
    else
        return 0;
}
//After each sort, display the contents of the array in their new order



