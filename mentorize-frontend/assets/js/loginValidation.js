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
      console.log(response.data); 
      console.log("teste")
    })
    .catch(error => {
      console.error('Erro:', error);
      console.log("testee")
    });
});
