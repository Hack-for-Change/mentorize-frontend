/* document.getElementById("loginButton").addEventListener("click", function() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  var data = {
    email: email,
    senha: senha
  };

  const apiUrl = "http://localhost:8080/login";

  // Send a POST request to the API for validation
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(responseData => {
    // Check the response from the API to determine if login is valid
    if (responseData.isValid) {
      // Valid login, you can proceed with your logic
      console.log("Login is valid.");
    } else {
      // Invalid login, show an error message or take appropriate action
      console.error("Invalid login.");
    }
  })
  .catch(error => {
    console.error("Error accessing the API:", error);
  });
});
*/

var url = 'http://localhost:8080/login?' +
  'email=' + encodeURIComponent("th@mentorize.com.br") +
  '&password=' + encodeURIComponent("123");

fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://127.0.0.1:5500' // Set the allowed origin
  }
})
.then(response => response.json())
.then(data => {
  // Handle the response from the server
  console.log(data); // You can do something with the response here
  console.log("teste")
})
.catch(error => {
  console.error('Error:', error);
  console.log("tesete")
});
