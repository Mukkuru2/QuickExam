function deleteQuestion(questionId) {
    console.log(JSON.stringify({emailId: questionId}));

    $.ajax({
        url: '/question/' + questionId + '/delete-json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({emailId: questionId}),
        type: 'POST',
        success: ((res) => {
            console.log("Result: ", res)
            $("#" + questionId).remove();
        }),
        error: ((error) => {
            console.log("Error:", error);
        })
    });
}
