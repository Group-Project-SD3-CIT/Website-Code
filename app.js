



	  var config = {
		apiKey: "AIzaSyDWKNSOLftCadh3AkUp64WDtJ2o3JsrScY",
		authDomain: "ihealth-4c1d5.firebaseapp.com",
		databaseURL: "https://ihealth-4c1d5.firebaseio.com",
		projectId: "ihealth-4c1d5",
		storageBucket: "ihealth-4c1d5.appspot.com",
		messagingSenderId: "924030797145"
	  };

	  firebase.initializeApp(config);
	  
	  var emailTxt = document.getElementById("email");
	  var passwordTxt = document.getElementById("password");
	  var loginBtn = document.getElementById("loginBtn");
	  
	  document.getElementById("loginBtn").addEventListener("click", function(){
		var email = emailTxt.value;
		var password = passwordTxt.value;
		var auth = firebase.auth();
		
	  firebase.auth().signInWithEmailAndPassword(email, password)
	    .catch(function(err) {
		// Handle errors
	  });
		
	  