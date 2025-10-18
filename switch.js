let grade;
let grade_out = document.getElementById("grade_js");
const submit_btn = document.getElementsByClassName("submit_c")[0];
let letterGrade;

submit_btn.onclick = function(){
    grade = document.getElementById("mark").value;
    switch(true){
        case grade > 100 || grade < 0:
            letterGrade = "Invalid Grade";
            break;
        case grade >= 90:
            letterGrade = "A";
            break;
        case grade >= 80:
            letterGrade = "B";
            break;
        case grade >= 70:
            letterGrade = "C";
            break;
        case grade < 70 && grade >= 0:
            letterGrade = "RA";
            break;
    }
    grade_out.innerText = `${letterGrade}`;
}


