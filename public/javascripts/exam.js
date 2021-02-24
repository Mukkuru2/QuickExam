function submitExam(){
    var checkboxes = document.getElementsByName('examCheckbox');
    var questions = [];
    // loop over them all
    for (var i=0; i<checkboxes.length; i++) {
        // And stick the checked ones onto an array...
        if (checkboxes[i].checked) {
            questions.push(checkboxes[i].parentElement.parentElement.children.item(0).children.item(0).id);

        }
    }

    var title = document.getElementById("examTitle").value;

    var data = [];
    data.push(title);
    questions.forEach(question => data.push(question));



    $.ajax({
        url: '/create_exam/',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify(data),
        type: 'POST',
        success: ((res) => {
            console.log("Result: ", res)
            window.location.href = "/";
        }),
        error: ((error) => {
            console.log("Error:", error);
        })
    });

}