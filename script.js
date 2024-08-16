function changebgColor (response) {
    const label = document.getElementById("label");

    if (response == "successful") {
        label.style.backgroundColor = "green";
        label.textContent = "Successful";
    }

    else if (response == "failed") {
        label.style.backgroundColor = "red";
        label.textContent = "Failed";
    }
}


changebgColor("successful");