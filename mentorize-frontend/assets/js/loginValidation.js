document.getElementById("submitButton").addEventListener("click", function() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  var url = 'https://localhost:8080/login';

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
      window.href="http://localhost:8080/mentor";
    })
    .catch(error => {
      window.href="http://localhost:3000/aluno";
    });
});
