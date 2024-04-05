$(document).ready(function () {
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

    var searchInput = $("#search-navbar");

    searchInput.on("input", function (event) {
        input = event.target.value;
        filterAnnonces(input);
    });

    function filterAnnonces(input) {
        var formData = new FormData();
        formData.append('filterByLocation', input);

        $.ajax({
            url: '/api/filter-by-location-type',
            type: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {
                var annonces = data.annonces;
                var annonceWrapper = $("#annonce-wrapper");
                annonceWrapper.empty();

                if (annonces.length > 0) {
                    $.each(annonces, function (index, annonce) {
                        var div1 = $("<div>").addClass("div1 bg-white shadow-xl px-8 py-12 sm:px-12 lg:px-8 mb-6 rounded-lg");
                        var title = $("<h3>").addClass("titre text-3xl text-center font-semibold text-black").text(annonce.titre);
                        var description = $("<p>").addClass("paragraph font-semibold").text(annonce.description);
                        var location = $("<p>").addClass("location").html("Location: <strong>" + annonce.location + "</strong>");
                        var date = $("<p>").addClass("location").html("Date: <strong>" + annonce.date + "</strong>");
                        var competence = $("<p>").addClass("location").html("Competence: <strong>" + annonce.competance + "</strong>");
                        var participerButton = $("<button>").text("Participer").addClass("participerBtn");

                        participerButton.on("click", function () {
                            var participerRequest = $.ajax({
                                url: "/api/add-reservation",
                                type: "POST",
                                headers: {
                                    "Authorization": "Bearer " + token,
                                    "Content-Type": "application/json"
                                },
                                data: JSON.stringify({ annonce_id: annonce.id }),
                                success: function (response) {
                                    console.log(response);
                                    window.location.href = '/benevole/reservation';
                                },
                                error: function (xhr, status, error) {
                                    console.error("Erreur lors de la participation à cette annonce :", status);
                                    alert("Erreur. Veuillez réessayer plus tard.");
                                }
                            });
                        });

                        var image = $("<img>").attr({
                            src: "https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg",
                            alt: "Illustration",
                            loading: "lazy",
                            width: "900",
                            height: "600"
                        }).addClass("w-2/3 ml-auto");

                        div1.append(title, description, location, date, competence, image, participerButton);
                        annonceWrapper.append(div1);
                    });
                } else {
                    var message = $("<p>").text("Il n'y a pas d'annonces disponibles.");
                    annonceWrapper.append(message);
                }
            },
            error: function (xhr, status, error) {
                console.error("Error fetching data:", error);
            }
        });
    }

    filterAnnonces(input);
});
