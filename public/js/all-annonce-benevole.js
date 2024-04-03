document.addEventListener('DOMContentLoaded', function () {
  var annonces = new XMLHttpRequest();
  annonces.open("GET", "/api/get-All-annonce-benevole", true);
  annonces.onreadystatechange = function () {
      if (annonces.readyState == 4 && annonces.status == 200) {
          var data = JSON.parse(annonces.responseText);

          data.forEach(function (annonce) {
              var annonceWrapper = document.getElementById("annonce-wrapper");

              var div1 = document.createElement("div");
              div1.className = "bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 mb-6";

           
              var title = document.createElement("h3");
              title.className = "text-2xl font-semibold text-purple-900";
              title.textContent = annonce.titre;

            
              var description = document.createElement("p");
              description.textContent = annonce.description;

            
              var location = document.createElement("p");
              location.innerHTML = "Location: <strong>" + annonce.location + "</strong>";

          
              var date = document.createElement("p");
              date.innerHTML = "Date: <strong>" + annonce.date + "</strong>";

            
              var competence = document.createElement("p");
              competence.innerHTML = "Competence: <strong>" + annonce.competence + "</strong>";

           
              var image = document.createElement("img");
              image.src = "https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg";
              image.className = "w-2/3 ml-auto";
              image.alt = "illustration";
              image.loading = "lazy";
              image.width = "900";
              image.height = "600";

           
              var participateLink = document.createElement("a");
              participateLink.href = "#";
              participateLink.className = "block font-medium text-purple-600 border-2 border-cyan-300 text-center rounded-lg py-1 bg-cyan-300 hover:bg-cyan-500";
              participateLink.textContent = "Participer";

              // Ajouter les éléments créés au conteneur principal
              div1.appendChild(title);
              div1.appendChild(description);
              div1.appendChild(location);
              div1.appendChild(date);
              div1.appendChild(competence);
              div1.appendChild(image);
              div1.appendChild(participateLink);

              annonceWrapper.appendChild(div1);
            
          });
      }
  };
  annonces.send();
});
