function validateForm() {
  var x = document.forms["myForm"]["password"].value;
  if (x.length < 8) {
    alert("Password must be at least 8 characters");
    return false;
  }
}