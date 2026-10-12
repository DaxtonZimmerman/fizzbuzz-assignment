// Getting the buttons and results list from html
const button = document.getElementById("runButton");
const results = document.getElementById("results");

// running code when clicked
button.addEventListener("click", function() {

    results.innerHTML = "";

    // go through 1-100
    for (let i = 1; i <= 100; i++) {

        let output = "";

        // Check if divisible by 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            output = "FizzBuzz";
        }
        else if (i % 3 === 0) {
            output = "Fizz";
        }
        else if (i % 5 === 0) {
            output = "Buzz";
        }
        else {
            output = i;
        }

        // Add the result
        const li = document.createElement("li");
        li.textContent = output;

        results.appendChild(li);
    }
});