<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Matswabi Funeral App</title>
    <link rel="stylesheet" href="{{assets('assets/css/main.css')}}">
    <link rel="stylesheet" href="{{assets('assets/css/auth.css')}}">
    <link rel="stylesheet" href="{{assets('assets/fontawesome/css/all.min.css')}}">
</head>

<body class="auth-body">
    <div class="auth-container">
        {{$slot}}
    </div>

    <script src="{{assets('assets/js/auth.js')}}"></script>
</body>

</html>