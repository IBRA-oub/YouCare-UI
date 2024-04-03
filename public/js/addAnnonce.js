document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addAnnonce').addEventListener('submit', function (event) {
        event.preventDefault();

        // Récupérer le jeton d'authentification du cookie
        var token = document.cookie.split('; ')
        .find(row => row.startsWith('jwt_token='))
        .split('=')[1];
        if(token){

        var formData = new FormData(this);

        
        var addAnnonce = new XMLHttpRequest();
        addAnnonce.open('POST', '/api/create-annonce', true);
        addAnnonce.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); 
        addAnnonce.setRequestHeader('Authorization', 'Bearer ' + token);
        addAnnonce.onreadystatechange = function () {
            if (addAnnonce.readyState === XMLHttpRequest.DONE) {
                if (addAnnonce.status === 200) {
                    var response = JSON.parse(addAnnonce.responseText);
                    console.log(response); 

                    alert('Annonce ajouter avec succès');
                    // window.location.href = '/organisateur/all-annonce'; 
                    
                    
                } else {
                    console.error('Erreur lors de la requête :', addAnnonce.statusText);
                    
                }
            }
        };
        addAnnonce.send(formData);
    }
    });
});