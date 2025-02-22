@props(['title'=>'Catering Services'])

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="favicon.svg" type="image/svg">
    <title>{{$title}} | Matswabi Funeral App</title>
    <meta name="description"
        content="Matswabi Funeral App - Professional funeral management services in Zambia. Less stress when we mourn together."
        >
    <meta name="keywords"
        content="funeral services, Zambia, funeral management, burial services, crowd contribution, GPS grave locator"
        >
    <meta name="author" content="Qualis-Edward Kamwi" >

    <link rel="stylesheet" href="{{asset('assets/css/main.css')}}">
    <link rel="stylesheet" href="{{asset('assets/fontawesome/css/all.min.css')}}">

    <script src="{{asset('assets/js/main.js')}}" defer></script>
</head>

<body>
    <header>
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="container">
                <div class="contact-info">
                    <a href="tel:+260966515360"><i class="fas fa-phone"></i> +260 978707744</a>
                    <a href="mailto:matswabi.funeral_app@gmail.com"><i class="fas fa-envelope"></i>
                        matswabi.funeral_app@gmail.com</a>
                </div>
                <div class="location">
                    <i class="fas fa-map-marker-alt"></i> Obama Madido, Lusaka, Zambia
                </div>
            </div>
        </div>

        <!-- Navigation -->
        <x-navbar />
    </header>

            {{$slot}}
    
    <!-- Footer -->
    <x-footer />
</body>

</html>