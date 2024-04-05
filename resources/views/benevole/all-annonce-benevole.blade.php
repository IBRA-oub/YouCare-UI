<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>all-annonce</title>
    @vite('resources/css/app.css')
    <link rel="stylesheet" href="{{ asset('assets/style.css')}}">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


</head>
<body>

  {{-- navbar-start --}}

  <nav id="header" class="w-full z-30  py-1 bg-white shadow-lg border-b border-blue-400">
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
                <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="/benevole/all-annonce">annonce</a></li>
                <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="/benevole/reservation">mes reservation</a></li>
                <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">About</a></li>
             </ul>
          </nav>
       </div>
     {{-- serach --}}
<div class="relative mr-3 md:mr-0 ">
   <form id="search-form">
       <div class="md:flex">
       <input type="text" name="location"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2 mr-4" placeholder="filter by location">
       {{-- <input type="text" name="type_id"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30%] pl-5 p-2" placeholder="1"> --}}
       {{-- <button type="submit" class="border-2 border-blue-600  bg-blue-600 text-white ml-5 px-9 ">Filter</button> --}}
      </div>
   </form>
</div>
{{-- search-end --}}
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
          
        <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
            <div id="annonce-wrapper" class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
               
            </div>
        </div>
    </div>
   
    <script src="{{ asset('js/all-annonce-benevole.js')}}"></script>
    <script src="{{ asset('js/search.js')}}"></script>
    <script src="{{ asset('js/logout.js') }}"></script>
</body>
</html>