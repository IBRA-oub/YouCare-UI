document.addEventListener('DOMContentLoaded', function () {
    var logoutForm = document.getElementById('logout-form');

    if (logoutForm) {
        logoutForm.addEventListener('submit', function (event) {
            event.preventDefault(); 
            
            // Récupérer le token JWT depuis les cookies
            var token = document.cookie.split('; ')
                .find(row => row.startsWith('jwt_token='))
                .split('=')[1];

            var logoutRequest = new XMLHttpRequest();
            logoutRequest.open('POST', '/api/logout', true);
            logoutRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            logoutRequest.setRequestHeader('Authorization', 'Bearer ' + token);

            logoutRequest.onreadystatechange = function () {
                if (logoutRequest.readyState === XMLHttpRequest.DONE) {
                    if (logoutRequest.status === 200) {
                        document.cookie = "jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                        window.location.href = '/login'; 
                    } else {
                        console.error('Erreur lors de la requête de déconnexion :', logoutRequest.statusText);
                    }
                }
            };

            logoutRequest.send();
        });
    }
});
