function validateForm() {
    var usrname = document.forms["frmcontact"]["usrname"].value;
    var inputemail = document.forms["frmcontact"]["inputemail"].value;
    if (usrname == "" || usrname == null || inputemail == "" || inputemail == null) {
      alert("Please enter your Name and Email");
      return false;
    }
  } 