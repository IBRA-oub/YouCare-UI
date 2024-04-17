document.addEventListener("DOMContentLoaded", function () {
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

    
    var token = getCookie("jwt_token");
    if (!token) {
       
        window.location.href = "/login";
        return;
    }
    var role = getCookie("role"); 
   
    if (role !== "organisateur") {
        window.location.href = "/login"; 
        return;
    }

    var reservationWrapper = document.getElementById("annonce-wrapper");

    function loadReservations() {
        var reservationRequest = new XMLHttpRequest();
        reservationRequest.open("GET", "/api/get-pending-reservation", true);

        reservationRequest.setRequestHeader("Authorization", "Bearer " + token);

        reservationRequest.onreadystatechange = function () {
            if (reservationRequest.readyState == 4) {
                if (reservationRequest.status == 200) {
                    var data = JSON.parse(reservationRequest.responseText);

                    if (data.length > 0) {
                        data.forEach(function (annonce) {
                            pendingReservationElement(annonce);
                        });
                    } else {
                        reservationWrapper.innerHTML =
                            "<p>Il n'y a pas d'reservation disponibles.</p>";
                    }
                } else {
                    console.error(
                        "Erreur lors de la récupération des reservation :",
                        reservationRequest.statusText
                    );
                }
            }
        };

        reservationRequest.send();
    }

    loadReservations();

    function pendingReservationElement(annonce) {
        var div1 = document.createElement("div");
        div1.className =
            "div1 bg-white shadow-xl px-8 py-12 sm:px-12 lg:px-8 mb-6 rounded-lg";
        div1.id = "annonce-" + annonce.id;

        var title = document.createElement("h3");
        title.className = "titre text-3xl text-center font-semibold text-black";
        title.textContent = annonce.annonce.titre;

        var description = document.createElement("p");
        description.className = "paragraph font-semibold";
        description.textContent = annonce.annonce.description;

        var location = document.createElement("p");
        location.className = "location";
        location.innerHTML =
            "Location: <strong>" + annonce.annonce.location + "</strong>";

        // _________ récupérer les informations sur l'utilisateur
        var userRequest = new XMLHttpRequest();
        userRequest.open("GET", "/api/get-user-info/" + annonce.user_id, true);
        userRequest.setRequestHeader("Authorization", "Bearer " + token);

        userRequest.onreadystatechange = function () {
            if (userRequest.readyState == 4) {
                if (userRequest.status == 200) {
                    var user = JSON.parse(userRequest.responseText);

                    var div2 = document.createElement("div");
                    div2.className = "flex justify-between";

                    var userName = document.createElement("p");
                    userName.className = "location";
                    userName.innerHTML =
                        "Bénévole: <strong>" + user.name + "</strong>";

                    var email = document.createElement("p");
                    email.className = "location";
                    email.innerHTML =
                        "Email: <strong>" + user.email + "</strong>";

                    // Ajout de l'élément userName une fois la réponse reçue
                    div2.appendChild(userName);
                    div2.appendChild(email);
                    div1.appendChild(div2);
                } else {
                    console.error(
                        "Erreur lors de la récupération des détails de l'utilisateur :",
                        userRequest.statusText
                    );
                }
            }
        };
        // ___________________________________

        var date = document.createElement("p");
        date.className = "location";
        date.innerHTML = "Date: <strong>" + annonce.annonce.date + "</strong>";

        var competence = document.createElement("p");
        competence.className = "location";
        competence.innerHTML =
            "Competence: <strong>" + annonce.annonce.competance + "</strong>";

        var status = document.createElement("p");
        status.className = "location";
        status.innerHTML = "Status: <strong>" + annonce.status + "</strong>";

        userRequest.send();

        var divFlex = document.createElement("div");
        divFlex.className = "divFlex  w-full h-10";

        var acceptedButton = document.createElement("button");
        acceptedButton.textContent = "Accepted";
        acceptedButton.className = "editeBtn";
        acceptedButton.onclick = function () {
            if (confirm("Voulez-vous vraiment accepted cette reservation ?")) {
                var acceptedRequest = new XMLHttpRequest();
                acceptedRequest.open(
                    "put",
                    "/api/accept-reservation/" + annonce.id,
                    true
                );
                acceptedRequest.setRequestHeader(
                    "Authorization",
                    "Bearer " + token
                );
                acceptedRequest.onreadystatechange = function () {
                    if (acceptedRequest.readyState == 4) {
                        if (acceptedRequest.status == 200) {
                            var response = JSON.parse(
                                acceptedRequest.responseText
                            );
                            console.log(response);
                            div1.remove();
                        } else {
                            // Gestion des erreurs lors de la suppression
                            console.error(
                                "Erreur lors de la suppression de l'annonce :",
                                acceptedRequest.statusText
                            );
                            alert(
                                "Erreur lors de la suppression de l'annonce. Veuillez réessayer plus tard."
                            );
                        }
                    }
                };
                acceptedRequest.send();
            }
        };

        var refusedButton = document.createElement("button");
        refusedButton.textContent = "Refused";
        refusedButton.className = "supprimerBtn";
        refusedButton.onclick = function () {
            if (confirm("Voulez-vous vraiment refused cette reservation ?")) {
                var refusedRequest = new XMLHttpRequest();
                refusedRequest.open(
                    "put",
                    "/api/refuse-reservation/" + annonce.id,
                    true
                );
                refusedRequest.setRequestHeader(
                    "Authorization",
                    "Bearer " + token
                );
                refusedRequest.onreadystatechange = function () {
                    if (refusedRequest.readyState == 4) {
                        if (refusedRequest.status == 200) {
                            var response = JSON.parse(
                                refusedRequest.responseText
                            );
                            console.log(response);
                            div1.remove(); 
                        } else {
                           
                            console.error(
                                "Erreur lors de la suppression de l'annonce :",
                                refusedRequest.statusText
                            );
                            alert(
                                "Erreur lors de la suppression de l'annonce. Veuillez réessayer plus tard."
                            );
                        }
                    }
                };
                refusedRequest.send();
            }
        };

        var image = document.createElement("img");
        image.src =
            "https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg";
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
        div1.appendChild(divFlex);
        divFlex.appendChild(refusedButton);
        divFlex.appendChild(acceptedButton);

        reservationWrapper.appendChild(div1);
    }
});



