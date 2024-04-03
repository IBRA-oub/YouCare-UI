 document.addEventListener('DOMContentLoaded', function () {
            document.getElementById('register-form').addEventListener('submit', function (event) {
                event.preventDefault();

                
                var formData = new FormData(this);

                
                var register = new XMLHttpRequest();
                register.open('POST', '/api/register', true);
                register.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); 
                register.onreadystatechange = function () {
                    if (register.readyState === XMLHttpRequest.DONE) {
                        if (register.status === 200) {
                            var response = JSON.parse(register.responseText);
                            console.log(response); 

                            window.location.href = '/login'; 
                            
                        } else {
                            console.error('Erreur lors de la requête :', register.statusText);
                            
                        }
                    }
                };
                register.send(formData);
            });
        });