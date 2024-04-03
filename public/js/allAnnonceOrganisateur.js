document.addEventListener("DOMContentLoaded", function () {
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

    // Récupérer le token JWT à partir du cookie
    var token = getCookie("jwt_token");
    if (!token) {
        // Si le token n'est pas présent, rediriger vers la page de connexion
        window.location.href = "/login";
        return;
    }

    var annonces = new XMLHttpRequest();
    annonces.open("GET", "/api/get-All-annonce-organisateur", true);

    annonces.setRequestHeader("Authorization", "Bearer " + token);

    annonces.onreadystatechange = function () {
        if (annonces.readyState == 4 && annonces.status == 200) {
            var data = JSON.parse(annonces.responseText);

            data.forEach(function (annonces) {
                var annonceWrapper = document.getElementById("annonce-wrapper");

                var div1 = document.createElement("div");
                div1.className =
                    "bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 mb-6";

                var title = document.createElement("h3");
                title.className = "text-2xl font-semibold text-purple-900";
                title.textContent = annonces.titre;

                var description = document.createElement("p");
                description.textContent = annonces.description;

                var location = document.createElement("p");
                location.innerHTML =
                    "Location: <strong>" + annonces.location + "</strong>";

                var date = document.createElement("p");
                date.innerHTML = "Date: <strong>" + annonces.date + "</strong>";

                var competence = document.createElement("p");
                competence.innerHTML =
                    "Competence: <strong>" + annonces.competance + "</strong>";

                var image = document.createElement("img");
                image.src =
                    "https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg";
                image.className = "w-2/3 ml-auto";
                image.alt = "illustration";
                image.loading = "lazy";
                image.width = "900";
                image.height = "600";

                // Ajouter les éléments créés au conteneur principal
                div1.appendChild(title);
                div1.appendChild(description);
                div1.appendChild(location);
                div1.appendChild(date);
                div1.appendChild(competence);
                div1.appendChild(image);

                annonceWrapper.appendChild(div1);
            });
        }
    };
    annonces.send();

    
});
