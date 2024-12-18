// Trade Matching Logic
document.getElementById("trade-button").addEventListener("click", function () {
    const courseHave = document.getElementById("course-have").value;
    const coursesWant = Array.from(document.getElementById("course-want").selectedOptions).map(option => option.value);

    const resultMessage = document.getElementById("result-message");

    if (!courseHave || coursesWant.length === 0) {
        resultMessage.textContent = "Please select the course you HAVE and at least one course you WANT.";
        return;
    }

    // Simulate trade matching logic (For Prototype)
    const sampleTradeData = {
        "Math 101": "History 201",
        "History 201": "Biology 105",
        "Biology 105": "Economics 301",
        "Economics 301": "Computer Science 101",
        "Computer Science 101": "Math 101"
    };

    let matchFound = false;

    for (let courseWant of coursesWant) {
        if (sampleTradeData[courseWant] === courseHave) {
            matchFound = true;
            resultMessage.textContent = `Great! Someone wants "${courseHave}" and has "${courseWant}". Trade is possible!`;
            break;
        }
    }

    if (!matchFound) {
        resultMessage.textContent = "No matches found. Keep trying or adjust your preferences.";
    }
});
