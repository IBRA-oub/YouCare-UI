<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>all-annonce</title>
    <script src="https://cdn.tailwindcss.com"></script>
    @vite('resources/css/app.css')

    <link rel="stylesheet" href="{{ asset('assets/style.css')}}">
    <style>
        .icon::after{
        content: '';
        display: block;
        position: absolute;
        border-top: 23px solid transparent;
        border-bottom: 17px solid transparent;
        border-left: 12px solid #3182ce;
        left: 100%;
        top: 0;
      }
        </style>
  
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
                   <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">mes reservation</a></li>
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
        <form id="editeForm"  class="form bg-white p-6 my-10 relative">
                    
            <div class="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5" style="left:-40px"><i class="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i></div>
            <h3 class="text-2xl text-gray-900 font-semibold">Update annonce!</h3>
            
            <div class="flex space-x-5 mt-3">
                <input type="text" name="titre" id="titre"  placeholder="titre" class="border p-2  w-1/2">
                <select  name="type_id" id="type"  class="border p-2 w-1/2">
                    <option value="1">type1</option>
                    <option value="2">type2</option>
                    <option value="3">type3</option>
                    <option value="4">type4</option>
                </select>
            </div>
            <div class="flex space-x-5 mt-3">
                <input type="text" name="location" id="location"  placeholder="location" class="border p-2  w-1/2">
                <input type="date" name="date" id="date"  placeholder="date" class="border p-2 w-1/2">
            </div>

            <input type="text" name="description" id="description" placeholder="description" class="border p-2 w-full mt-5"> <br>
            <input type="text" name="competance" id="competance"  placeholder="creative, bak sahbi" class="border p-2 w-full mt-5">
           

            <button type="submit"  class="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3">Update</button>

        </form>
    <script src="{{ asset('js/logout.js') }}"></script>
    <script src="{{ asset('js/editeAnnonce.js') }}"></script>
    
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

    </script>
</body>
</html>