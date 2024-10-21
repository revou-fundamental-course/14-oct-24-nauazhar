
function replaceName() {
    let name = prompt("Halo. Siapa nama anda?", "");
    document.getElementById("name").innerHTML = name
}
replaceName();

function validateForm() {
    const name = document.forms["massage-form"]["full-name"].value;
    const birthdate = document.forms["massage-form"]["birth-date"].value;
    const gender = document.forms["massage-form"]["gander"].value;
    const massage = document.forms["massage-form"]["massages"].value;

    if (name == "" || birthdate == "" || gender == "" || massage == "") {
        alert("Tidak Boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, birthdate, gender, massage);
    return false;
}

function setSenderUI(name, birth, gender, massage) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthdate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-massage").innerHTML = massages;
}

