function addRecord() {
    // Retrieve form values
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var email = document.getElementById("email").value;
    var foods = document.querySelectorAll('input[name="food"]:checked');
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    // Form validation
    if (!firstName || !lastName || !address || !pincode || !gender || !email || foods.length < 2 || !state || !country) {
        alert("Please fill in all required fields and select at least 2 food options.");
        return;
    }

    // Extract selected foods
    var selectedFoods = [];
    foods.forEach(function(food) {
        selectedFoods.push(food.value);
    });

    // Create a new row in the table
    var table = document.getElementById("data-table");
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    var cell9 = newRow.insertCell(8);
    // Add data to the new row
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = gender.value;
    cell6.innerHTML = email;
    cell7.innerHTML = selectedFoods.join(', '); // Join selected foods into a string
    cell8.innerHTML = state;
    cell9.innerHTML = country;

    // Clear the form fields
    document.getElementById("form").reset();
}
