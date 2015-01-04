(function () {
  // required
  Parse.initialize("KHuyRijSDEUi8Rg33i1ZvMq0uNllvrcl62R4RmhV", "sScPgdtuxdfEPsYlgRc6n4Qhwrge3ESHac35jEY7");

  window.addEventListener("load", function() {

    // quick start, data
    // https://www.parse.com/apps/quickstart#parse_data/web/existing
    var buttun_quickstart_testobject = document.getElementById("buttun_quickstart_testobject");
    buttun_quickstart_testobject.addEventListener("click", function() {
      var TestObject = Parse.Object.extend("TestObject");
      var testObject = new TestObject();
      testObject.save({foo: "bar"}).then(function(object) {
        alert("yay! it worked");
      });
    }, false);

    // quick start, social
    // https://www.parse.com/apps/quickstart#social/web/existing
    var buttun_quickstart_adduser = document.getElementById("buttun_quickstart_adduser");
    buttun_quickstart_adduser.addEventListener("click", function() {
      var user = new Parse.User();
      user.set("username", "my name");
      user.set("password", "my pass");
      user.set("email", "email@example.com");
        
      // other fields can be set just like with Parse.Object
      user.set("phone", "650-555-0000");
        
      user.signUp(null, {
        success: function(user) {
          // Hooray! Let them use the app now.
        },
        error: function(user, error) {
          // Show the error message somewhere and let the user try again.
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }, false)

  }, false);

})();


