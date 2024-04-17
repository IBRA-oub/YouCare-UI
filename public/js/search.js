document.addEventListener("DOMContentLoaded", function () {
    let input = "";

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
    if (role !== "bénévole") {
        window.location.href = "/login";
        return;
    }

   
    var searchInput = document.querySelector('input[name="location"]');

    
    searchInput.addEventListener("input", function (event) {
        
        input = event.target.value;

       
        filterAnnonces(input);
    });

    
    function filterAnnonces(input) {
        var formData = new FormData();
        formData.append('filterByLocation', input);

        fetch('/api/filter-by-location-type', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            var annonces = data; 
            var annonceWrapper = document.getElementById("annonce-wrapper");
            annonceWrapper.innerHTML = ""; 

            if (annonces.length > 0) {
                annonces.forEach(function (annonce) {
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
                var message = document.createElement("p");
                message.textContent =
                    "Il n'y a pas d'annonces disponibles.";
                annonceWrapper.appendChild(message);
            }
        })
        .catch(error => {
           
        });
    }

    
    filterAnnonces(input);
});
