document.getElementById("loginButton").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
  
    var data = {
      email: email,
      senha: senha
    };
  
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the server
      console.log(data); // You can do something with the response here
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });