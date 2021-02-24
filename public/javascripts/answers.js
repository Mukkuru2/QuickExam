function updateAmountOfWrongAnswers(object) {
    let value = object.value;

    window.location.href = "/add_question/num_wrong_answers/" + value;
}

function submitQuestion() {

    let question = document.getElementById("question").value;

    theme = document.getElementById("thema").value;
    correct = document.getElementById("correctanswer").value;
    wrongAns = {}

    stop = false;
    let i = 0;
    while (!stop) {

        try {
            console.log(document.getElementById("wronganswer" + i).value, i);
            wrongAns[i] = document.getElementById("wronganswer" + i++).value;

        } catch {
            stop = true;
        }

    }

    console.log(question, theme, correct, wrongAns);

    $.ajax({
        url: '/add_question/',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({
            "question": question,
            "theme": theme,
            "correct": correct,
            "wrongAns": wrongAns

        }),
        type: 'POST',
        success: ((res) => {
            // Replace follow button with unfollow.
            console.log("Result: ", res)
            window.location.href = "/add_question/";
        }),
        error: ((error) => {
            console.log("Error:", error);
        })
    });
}