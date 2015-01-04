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
      user.set("username", "myname");
      user.set("password", "mypass");
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

    // docs, signing in
    // https://www.parse.com/docs/js_guide#users-login
    var button_docs_signingin = document.getElementById("button_docs_signingin");
    button_docs_signingin.addEventListener("click", function() {
      Parse.User.logIn("myname", "mypass", {
        success: function(user) {
          // Do stuff after successful login.
          alert(Parse.User.current().get("username"));
        },
        error: function(user, error) {
          // The login failed. Check error to see why.
          alert("signing in failed");
        }
      });
    });

  }, false);

})();


