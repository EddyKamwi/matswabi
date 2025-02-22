<x-layouts.main title="Catering Service">
        

    {{-- page content in here --}}
    
    <main class="service-page">
        <!-- Service Hero -->
        <x-service-heroCard 
            title_st_word='Professional'
            title_nd_word='Catering'
            sub_text='Providing professional catering services during difficult times'
                
            src="assets/images/services/catering-hero.jpg" 
            alt="Professional Catering Service" />

        <!-- Service Details -->
        <section class="service-details section-padding">
            <div class="container">
                <div class="service-content">
                    <h2>Catering Features</h2>
                    <div class="service-features">
                        <div class="feature-card">
                            <i class="fas fa-coffee"></i>
                            <h3>Refreshments</h3>
                            <p>Hot and cold beverages throughout the day</p>
                        </div>
                        <div class="feature-card">
                            <i class="fas fa-concierge-bell"></i>
                            <h3>Full Service</h3>
                            <p>Professional serving staff and equipment</p>
                        </div>
                        <div class="feature-card">
                            <i class="fas fa-users-cog"></i>
                            <h3>Customizable</h3>
                            <p>Menu options to suit your preferences</p>
                        </div>
                        <div class="feature-card">
                            <i class="fas fa-hand-sparkles"></i>
                            <h3>Hygiene</h3>
                            <p>Strict adherence to food safety standards</p>
                        </div>
                    </div>

                    <div class="service-process">
                        <h2>How It Works</h2>
                        <div class="process-steps">
                            <div class="step">
                                <div class="step-number">1</div>
                                <h3>Planning</h3>
                                <p>Menu selection and headcount confirmation</p>
                            </div>
                            <div class="step">
                                <div class="step-number">2</div>
                                <h3>Preparation</h3>
                                <p>Fresh food preparation by professional chefs</p>
                            </div>
                            <div class="step">
                                <div class="step-number">3</div>
                                <h3>Service</h3>
                                <p>Professional food service throughout the day</p>
                            </div>
                            <div class="step">
                                <div class="step-number">4</div>
                                <h3>Cleanup</h3>
                                <p>Complete cleanup and waste management</p>
                            </div>
                        </div>
                    </div>

                    <div class="service-highlights">
                        <h2>Benefits</h2>
                        <ul class="highlights-grid">
                            <li><i class="fas fa-clock"></i> Timely Service</li>
                            <li><i class="fas fa-shield-alt"></i> Quality Assurance</li>
                            <li><i class="fas fa-smile"></i> Professional Staff</li>
                            <li><i class="fas fa-broom"></i> Complete Cleanup</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="contact-section">
            <div class="container">
                <h2>Contact Us</h2>
                <div class="contact-grid">
                    <!-- Contact form and info from index.html -->
                </div>
            </div>
        </section>
    </main>

</x-layouts.main>