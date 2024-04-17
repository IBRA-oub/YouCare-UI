document.addEventListener('DOMContentLoaded', function () {
    var token = getTokenFromCookie('jwt_token');
    if (!token) {
        window.location.href = "/login"; 
        return;
    }
    document.getElementById('editeForm').addEventListener('submit', function (event) {
        event.preventDefault();

       
        var role = getTokenFromCookie("role"); 
        console.log(role);

        if (role !== "organisateur") {
            window.location.href = "/login"; 
            return;
        }
        
        if (token) {
            var formData = new FormData(this);

            var annonceId = window.location.pathname.split('/').pop();
            var updateUrl = '/api/update-annonce/' + annonceId; 

            var updateAnnonce = new XMLHttpRequest();
            updateAnnonce.open('PUT', updateUrl, true);

            updateAnnonce.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            updateAnnonce.setRequestHeader('Authorization', 'Bearer ' + token);
            updateAnnonce.setRequestHeader('Content-Type', 'application/json');

            updateAnnonce.onreadystatechange = function () {
                if (updateAnnonce.readyState === XMLHttpRequest.DONE) {
                    if (updateAnnonce.status === 200) {
                        var response = JSON.parse(updateAnnonce.responseText);
                        console.log(response);
                        alert('Annonce mise à jour avec succès');
                        window.location.href = '/organisateur/all-annonce'; 
                    } else {
                        console.error('Erreur lors de la requête :', updateAnnonce.statusText);
                        alert('Erreur lors de la mise à jour de l\'annonce');
                    }
                }
            };

            var jsonData = JSON.stringify(Object.fromEntries(formData.entries()));
            updateAnnonce.send(jsonData);
        }
    });
});

function getTokenFromCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}
