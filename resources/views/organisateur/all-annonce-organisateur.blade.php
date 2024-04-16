<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>all-annonce</title>
    @vite('resources/css/app.css')

    <link rel="stylesheet" href="{{ asset('assets/style.css')}}">

</head>
<body>

  {{-- navbar-start --}}

  <nav id="header" class="w-full z-30 py-1 bg-white shadow-lg border-b border-blue-400">
   <div class="w-full flex items-center justify-between mt-0 px-6 py-2">
       <label for="menu-toggle" class="cursor-pointer md:hidden block">
           <svg class="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
               <title>menu</title>
               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
           </svg>
       </label>
       <input class="hidden" type="checkbox" id="menu-toggle">
      
       <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
           <nav>
               <ul class="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                   <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">annonce</a></li>
                   <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="/organisateur/reservation">mes reservation</a></li>
               </ul>
           </nav>
       </div>
       <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
           <div class="auth flex items-center w-full md:w-full">
               <form action="" id="logout-form">
                   <button type="submit" class="bg-blue-600 text-gray-200 p-2 rounded hover:bg-blue-500 hover:text-gray-100">log out</button>
               </form>
           </div>
       </div>
      
      
   </div>
</nav>


{{-- navbar-end --}}
    <div class="py-16 bg-purple-200">
      
      <div class="absolute right-0 sm:top-[10%] sm:right-10 mb-10 sm:mb-0">
              
         <button id="addPubliciter" onclick="showModal6()" class=" rounded-lg px-10 py-3 bg-[#31363F] font-bold text-white hover:bg-white hover:text-black   hover:shadow-lg  ">
             add annonce
         </button>
     
 
      </div>

      {{-- form-add-announce --}}

      <div id="myModal6" class="modal6 ">
         <div class="modal-content6 rounded-lg">
           <span class="close6" onclick="closeModal6()">&times;</span>
           <form id="addAnnonce">
             <p id="addPubliciter" class="text-xl font-bold text-center">ajouter Annonce</p>
             <label id="titreAdd" for="titre" class="block text-black text-sm font-bold mb-2">titre</label>
             <input class=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                 name="titre" id="titre"  placeholder="ghj"><br>
             <label id="description" for="description" class="block text-black text-sm font-bold mb-2">description</label>
             <input class=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                 name="description" id="description"  placeholder="ghj"><br>
             <label id="contenu" for="location" class="block text-black text-sm font-bold mb-2">location</label>
             <input type="text" class=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                 name="location" id="location"  placeholder="safi"><br>
             <label id="datePubliciter" for="date" class="block text-black text-sm font-bold mb-2">date </label>
             <input class=" border rounded w-full py-2 px-3 text-grey-darker" type="date"
                 name="date" id="date"  placeholder="ghj"><br>
                 <label id="datePubliciter" for="type" class="block text-black text-sm font-bold mb-2">type </label>
                 <select class=" border rounded w-full py-2 px-3 text-grey-darker" type="date"
                     name="type_id" id="type"  placeholder="ghj">
                    <option value="1">type1</option>
                    <option value="2">type2</option>
                    <option value="3">type3</option>
                    <option value="4">type4</option>
                    
                    </select><br>
             <label id="competance" for="competance" class="block text-black text-sm font-bold mb-2">competance</label>
             <input class=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                 name="competance" id="competance"  placeholder="creative , fun..."><br>
                 
                    
             <button  type="submit"
             class="text-white mb-2 mt-5 md:mx-60 rounded-full py-1 px-24 bg-[#31363F] hover:bg-black hover:text-white">
             Save
            </button>                              
     
            </form>
         </div>
       </div>

      {{-- form-add-announce-end --}}
          
        <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
            <div id="annonce-wrapper" class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3 ">
               
            </div>
        </div>
    </div>
    <script src="{{ asset('js/allAnnonceOrganisateur.js') }}"></script>
  
   
    <script src="{{ asset('js/logout.js') }}"></script>
    <script>

      // burger-menu
      
      const menuToggle = document.getElementById('menu-toggle');
      const menu = document.getElementById('menu');

         menuToggle.addEventListener('change', function() {
            
            if (this.checked) {
               
               menu.classList.remove('hidden');
            } else {
               
               menu.classList.add('hidden');
            }
         });

         // pop up modal

         function showModal6() {
         var modal6 = document.getElementById("myModal6");
         modal6.style.display = "block";
         }

         function closeModal6() {
         var modal6 = document.getElementById("myModal6");
         modal6.style.display = "none";
         }

    </script>
</body>
</html>