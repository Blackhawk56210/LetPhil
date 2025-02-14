function saveData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    localStorage.setItem('formData', JSON.stringify({ name, email }));
}

function loadData() {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
        document.getElementById('name').value = storedData.name;
        document.getElementById('email').value = storedData.email;
    }
}

function removeData() {
    const storedData = JSON.parse(localStorage.getItem('formData'));
    if ()

}

loadData();