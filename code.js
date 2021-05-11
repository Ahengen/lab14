$(document).ready(function () {
    $("button#clickScores").on("click", createStudent);
    $("button#sortName").on("click", sortAndDisplayByName);
    $("button#sortPercent").on("click", sortAndDisplayByPercent);
});

function sortAndDisplayByName (event){
    event.preventDefault();
    $("#output").empty();
    newCalculatedForm.sort(sortName);
    newCalculatedForm.forEach(function(val) {
        displayContents(val)
    });
}

function sortAndDisplayByPercent(event){
    event.preventDefault();
    $("#output").empty();
    newCalculatedForm.sort(sortPercent);
    newCalculatedForm.forEach(function(val) {
        displayContents(val)
    });
}

let calculatedForm;
let newCalculatedForm = [];

function createStudent(event) {
    event.preventDefault();
    calculatedForm = {
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        pointsEarned: parseInt($("#pointsEarned").val()),
        pointsPossible: parseInt($("#pointsPossible").val()),

        getDisplayPercentage: function () {
            let percent = Math.round((100) * (this.pointsEarned / this.pointsPossible));
            return `${this.pointsEarned} / ${this.pointsPossible} (${percent}%)`;
        },

        getLetterGrade: function () {
            let percentage = this.pointsEarned / this.pointsPossible * 100;
            if (percentage > 89 && percentage < 101) {
                return "A";
            } else if (percentage > 79 && percentage < 90) {
                return "B";
            } else if (percentage > 69 && percentage < 80) {
                return "C";
            } else if (percentage > 59 && percentage < 70) {
                return "D";
            } else if (percentage > 0 && percentage < 60) {
                return "E";
            }
            else {
                return "error";
            }
        }
    }
    newCalculatedForm.push(calculatedForm);
    $("#output").empty();
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
    if (a.getLetterGrade() < b.getLetterGrade())
        return -1;
    else if (a.getLetterGrade() > b.getLetterGrade())
        return 1;
    else
        return 0;
}
//After each sort, display the contents of the array in their new order



