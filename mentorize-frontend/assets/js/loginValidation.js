document.getElementById("submitButton").addEventListener("click", function() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  var url = 'http://localhost:8080/login';

  var data = {
    email: email,
    password: senha
  };

  var config = {
    headers: {
      'Content-Type': 'application/json',
    }
  };

  axios.post(url, data, config)
  .then(response => {
    window.location.href="http://localhost:3000/mentor";
  })
  .catch(error => {
    window.location.href="http://localhost:3000/aluno";
  });
});