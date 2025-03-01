document.getElementById("btn").addEventListener("click", function (event) {
    event.preventDefault();
    let age = document.getElementById("age").value.trim();
    let name = document.getElementById("name").value.trim();
    if (age === "" || name === "") {
        alert("Please enter valid details");
        return;
    }

    age = Number(age);
    let checkAge = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });
    checkAge
        .then(message => alert(message))
        .catch(error => alert(error));
});
