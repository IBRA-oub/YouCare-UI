<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    @vite('resources/css/app.css')
</head>
<body>
    <section class="min-h-screen flex items-stretch text-white ">
        <div class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style="background-image: url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80);">
            <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div class="w-full px-24 z-10">
                <h1 class="text-5xl font-bold text-left tracking-wide">Keep it special</h1>
                <p class="text-3xl my-4">Capture your personal memory in unique way, anywhere.</p>
            </div>
           
        </div>
        <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style="background-color: #161616;">
            <div class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style="background-image: url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80);">
                <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            <div class="w-full py-6 z-20">
                <h1 class="my-6 text-4xl font-bold">
                    REGISTER  
                 </h1>
                
                <p class="text-gray-100">
                    entrer vous information
                </p>
                <form id="login-form" action="" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                    
                    <div class="pb-2 pt-4">
                        <input type="email" name="email" id="email" placeholder="Email" class="text-black block w-full p-4 text-lg rounded-sm bg-white">
                    </div>
                    <div class="pb-2 pt-4">
                        <input class="block w-full p-4 text-lg rounded-sm text-black bg-white" type="password" name="password" id="password" placeholder="Password">
                    </div>
                
                    <div class="text-right text-gray-400 hover:underline hover:text-gray-100">
                        <a href="/register">Create account</a>
                    </div>
                    
                    <div class="px-4 pb-2 pt-4">
                        <button type="submit" class="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">sign in</button>
                    </div>

                    
                </form>
            </div>
        </div>
    </section>

    <script src="js/login.js"></script>
</body>
</html>