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
    annonces.open("GET", "/api/get-All-annonce-benevole", true);

    annonces.setRequestHeader("Authorization", "Bearer " + token);

    annonces.onreadystatechange = function () {
        if (annonces.readyState == 4) {
            if (annonces.status == 200) {
                var data = JSON.parse(annonces.responseText);

                if (data.length > 0) {
                    data.forEach(function (annonce) {
                        var annonceWrapper =
                            document.getElementById("annonce-wrapper");

                        var div1 = document.createElement("div");
                        div1.className =
                            "div1 bg-white shadow-xl px-8 py-12 sm:px-12 lg:px-8 mb-6 rounded-lg";

                        var title = document.createElement("h3");
                        title.className =
                            "titre text-3xl text-center font-semibold text-black";
                        title.textContent = annonce.titre;

                        var description = document.createElement("p");
                        description.className = "paragraph font-semibold";
                        description.textContent = annonce.description;

                        var location = document.createElement("p");
                        location.className = "location";
                        location.innerHTML =
                            "Location: <strong>" +
                            annonce.location +
                            "</strong>";

                        var date = document.createElement("p");
                        date.className = "location";
                        date.innerHTML =
                            "Date: <strong>" + annonce.date + "</strong>";

                        var competence = document.createElement("p");
                        competence.className = "location";
                        competence.innerHTML =
                            "Competence: <strong>" +
                            annonce.competance +
                            "</strong>";

                        var participerButton = document.createElement("button");
                        participerButton.textContent = "Participer";
                        participerButton.className = "participerBtn";
                        
                        // console.log(annonce.id);
                        participerButton.addEventListener("click", function () {
                            var participerRequest = new XMLHttpRequest();
                            participerRequest.open("POST", "/api/add-reservation", true);
                            participerRequest.setRequestHeader("Authorization", "Bearer " + token);
                            participerRequest.setRequestHeader("Content-Type", "application/json");
                        
                            participerRequest.onreadystatechange = function () {
                                if (participerRequest.readyState == 4) {
                                    if (participerRequest.status == 200) {
                                        var response = JSON.parse(participerRequest.responseText);
                                        console.log(response);
                                        window.location.href = '/benevole/reservation';
                                    } else {
                                        console.error(
                                            "Erreur lors de la participation à cette annonce :",
                                            participerRequest.statusText
                                        );
                                        alert("Erreur. Veuillez réessayer plus tard.");
                                    }
                                }
                            };
                        
                            
                            
                        
                         
                            var requestBody = JSON.stringify({ annonce_id: annonce.id });
                            console.log(requestBody);
                        
                           
                            participerRequest.send(requestBody);
                        });
                        
                            
                        

                        var image = document.createElement("img");
                        image.src =
                            "https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg";
                        image.className = "w-2/3 ml-auto";
                        image.alt = "Illustration";
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
                        
                        div1.appendChild(participerButton);
            

                        annonceWrapper.appendChild(div1);
                    });
                } else {
                    var annonceWrapper =
                        document.getElementById("annonce-wrapper");
                    var message = document.createElement("p");
                    message.textContent =
                        "Il n'y a pas d'annonces disponibles.";
                    annonceWrapper.appendChild(message);
                }
            } else {
                console.error(
                    "Erreur lors de la récupération des annonces :",
                    annonces.statusText
                );
            }
        }
    };

    annonces.send();
});
