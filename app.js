let form = document.querySelector("form");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        document.querySelector("#sub").value = "Submiting..";
        let data = new FormData(form);
        fetch('https://script.google.com/macros/s/AKfycbxYyIXjKUOi0mL70atNWuqOpYIrdFfsa2rjf1LDwi2GfIYLBpjDhmNz8bXYB5Yz4CN6/exec', {
                method: "POST",
                body: data
            })
            .then(res => res.text())
            .then(data => {
                document.querySelector("#msg").innerHTML = "Done ! Thanks for contacting us";
                document.querySelector("#sub").value = "Submit"
        });
})