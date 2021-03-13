$(function () {
  $("#myForm").submit(handleFormSubmit);
});

function handleFormSubmit(e) {
  if ($("#name").val().length > 5 && $("#password").val().length >= 8 && $("#password").val() == $("#confirm_password").val()) {
    alert("Form is being submitted");
  } 
else{
  if ($("#name").val().length<5) {
    $("#name").addClass("border");
    $("#namespan").show();
  }
    if ($("#password").val().length<8) {
    $("#password").addClass("border");
    $("#passspan").show();
   } 
   if ($("#password").val() != $("#confirm_password").val()) {
    $("#confirm_password").addClass("border");
    $("#cpassspan").show();
  } 
     e.preventDefault();
}
}
