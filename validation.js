
    function validateForm() {
      var name = document.forms["contact-form"]["cName"].value;
      if (name == null || name == "") {
        alert("Name must be filled out");
        return false;
      }
      var name = document.forms["contact-form"]["cEmail"].value;
      if (name == null || name == "") {
        alert("Email must be filled out");
        return false;
      }
      var name = document.forms["contact-form"]["cAge"].value;
      if (name == null || name == "") {
        alert("Age must be filled out");
        return false;
      }
      var name = document.forms["contact-form"]["cQuery"].value;
      if (name == null || name == "") {
        alert("Query must be filled out");
        return false;
      }
    }
 