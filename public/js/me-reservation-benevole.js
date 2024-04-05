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

    var role = getCookie("role"); 

    if (role !== "bénévole") {
        window.location.href = "/login"; 
        return;
    }

    var reservationRequest = new XMLHttpRequest();
    reservationRequest.open("GET", "/api/get-me-reservation", true);

    reservationRequest.setRequestHeader("Authorization", "Bearer " + token);

    reservationRequest.onreadystatechange = function () {
        if (reservationRequest.readyState == 4) {
            if (reservationRequest.status == 200) {
                var reservations = JSON.parse(reservationRequest.responseText);

                if (reservations.length > 0) {
                    reservations.forEach(function (reservation) {
                        var annonceRequest = new XMLHttpRequest();
                        annonceRequest.open("GET", "/api/get-annonce-detaills/" + reservation.annonce_id, true);

                        annonceRequest.setRequestHeader("Authorization", "Bearer " + token);

                        annonceRequest.onreadystatechange = function () {
                            if (annonceRequest.readyState == 4) {
                                if (annonceRequest.status == 200) {
                                    var annonce = JSON.parse(annonceRequest.responseText);

                                    var annonceWrapper = document.getElementById("annonce-wrapper");

                                    var div1 = document.createElement("div");
                                    div1.className = "div1 bg-white shadow-xl px-8 py-12 sm:px-12 lg:px-8 mb-6 rounded-lg";

                                    var title = document.createElement("h3");
                                    title.className = "titre text-3xl text-center font-semibold text-black";
                                    title.textContent = annonce.titre;

                                    var description = document.createElement("p");
                                    description.className = "paragraph font-semibold";
                                    description.textContent = annonce.description;

                                    var location = document.createElement("p");
                                    location.className = "location";
                                    location.innerHTML = "Location: <strong>" + annonce.location + "</strong>";

                                    var date = document.createElement("p");
                                    date.className = "location";
                                    date.innerHTML = "Date: <strong>" + annonce.date + "</strong>";

                                    var competence = document.createElement("p");
                                    competence.className = "location";
                                    competence.innerHTML = "Competence: <strong>" + annonce.competance + "</strong>";

                                    
                                    var status = document.createElement("p");
                                    status.className = "location";
                                    status.innerHTML = "Status: <strong>" + reservation.status + "</strong>";
                                   

                                    var image = document.createElement("img");
                                    image.src = "https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg";
                                    image.className = "w-2/3 ml-auto";
                                    image.alt = "Illustration";
                                    image.loading = "lazy";
                                    image.width = "900";
                                    image.height = "600";

                                    div1.appendChild(title);
                                    div1.appendChild(description);
                                    div1.appendChild(location);
                                    div1.appendChild(date);
                                    div1.appendChild(competence);
                                    div1.appendChild(status);
                                    div1.appendChild(image);

                                    annonceWrapper.appendChild(div1);
                                } else {
                                    console.error("Erreur lors de la récupération des détails de l'annonce :", annonceRequest.statusText);
                                }
                            }
                        };

                        annonceRequest.send();
                    });
                } else {
                    var annonceWrapper = document.getElementById("annonce-wrapper");
                    var message = document.createElement("p");
                    message.textContent = "Il n'y a pas de réservation disponible.";
                    annonceWrapper.appendChild(message);
                }
            } else {
                console.error("Erreur lors de la récupération des réservations :", reservationRequest.statusText);
            }
        }
    };

    reservationRequest.send();

});




