document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault(); 

        
        var formData = new FormData(this);

        
        var login = new XMLHttpRequest();
        login.open('POST', '/api/login', true);
        login.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        login.onreadystatechange = function () {
            if (login.readyState === XMLHttpRequest.DONE) {
                if (login.status === 200) {
                    var response = JSON.parse(login.responseText);
                    // console.log(response);
                    var token = response.authorization.token;
                   

                    
                    document.cookie = "jwt_token=" + token + ";path=/;secure;SameSite=Strict";

                    var user = response.user;
                    var role = user.role;
                    
                    if (role === 'organisateur') {
                        window.location.href = '/organisateur/all-annonce'; 
                    } else if (role === 'bénévole') {
                        window.location.href = '/benevole/all-annonce';
                    } else {
                        window.location.href = '/'; 
                    }
                    
                } else {
                    console.error('Erreur lors de la requête :', login.statusText);
                     
                }
            }
        };
        login.send(formData);
    });
});