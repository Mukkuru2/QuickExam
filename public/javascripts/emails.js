

function deleteLead(emailId) {
    $.ajax({
        url: '/email/' + emailId + '/delete-json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({ emailId }),
        type: 'POST',
        success: ((res) => {
            // Replace follow button with unfollow.
            console.log("Result: ", res)
            $("#" + emailId).remove();
        }),
        error: ((error) => {
            console.log("Error:", error);
        })
    });
}