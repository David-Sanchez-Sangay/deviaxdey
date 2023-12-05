<!DOCTYPE html>
<html lang="{{str_replace('_','-', app()->getLocale())}}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title> Prueba de laravel y react </title>
        @viteReactRefresh
        @vite('resources/js/app.js')
    </head>
    <body>
        <div id="application"></div>
    </body>

</html>