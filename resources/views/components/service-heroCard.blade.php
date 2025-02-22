@props([
    'title_st_word',
    'title_nd_word',
    'sub_text'
    ]);

<section class="service-hero">
    <div class="container">
        <div class="service-hero-grid">
            <div class="service-hero-content">
                <h1>{{$title_st_word}} <span class="highlight-text">{{$title_nd_word}}</span></h1>
                <p class="service-description">
                    {{$sub_text}}
                </p>
                <div class="hero-cta">
                    <a href="#contact" class="btn primary">Request Quote</a>
                </div>
            </div>
            <div class="service-hero-image">
                <img {{$attributes}} src="{{asset('assets/images/services/catering-hero.jpg')}}"
                    alt="Professional Catering Service">
            </div>
        </div>
    </div>
</section>