    <!-- Contact Section -->
    <section id="contact" class="section-decorator">
        <div class="container">
            <h2 class="section-title">Contact Us</h2>
            <div class="section-divider"></div>
            <div class="contact-grid">
                <div class="contact-info fade-in">
                    <div class="contact-header">
                        <h3>We're Here to Help</h3>
                        <p>Available 24/7 to assist you during difficult times</p>
                    </div>
                    <div class="contact-cards">
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <div class="contact-details">
                                <h4>Emergency Line</h4>
                                <a href="tel:+260978707744">+260 978 707 744</a>
                                <span class="availability">24/7 Support</span>
                            </div>
                        </div>
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fab fa-whatsapp"></i>
                            </div>
                            <div class="contact-details">
                                <h4>WhatsApp</h4>
                                <a href="https://wa.me/260978707744">+260 978 707 744</a>
                                <span class="availability">Quick Response</span>
                            </div>
                        </div>
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-details">
                                <h4>Email</h4>
                                <a href="mailto:matswabi.funeral_app@gmail.com">matswabi.funeral_app@gmail.com</a>
                                <span class="availability">Within 2 hours</span>
                            </div>
                        </div>
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-details">
                                <h4>Office</h4>
                                <p>Obama Madido, Lusaka, Zambia</p>
                                <span class="availability">Open: 8AM - 5PM</span>
                            </div>
                        </div>
                    </div>
                </div>
                <form class="contact-form fade-in">
                    <h3>Request a Service</h3>
                    <div class="form-group">
                        <input type="text" id="name" required placeholder="Full Name *">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <input type="tel" id="phone" required placeholder="Phone Number *">
                        </div>
                        <div class="form-group">
                            <input type="email" id="email" required placeholder="Email Address *">
                        </div>
                    </div>
                    <div class="form-group">
                        <select id="package" required>
                            <option value="">Select Package *</option>
                            <option value="komboni">Basic (Komboni)</option>
                            <option value="silver">Standard (Silver)</option>
                            <option value="gold">Popular (Gold)</option>
                            <option value="platinum">Premium (Platinum)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <textarea id="message" required placeholder="How can we assist you? *"></textarea>
                    </div>
                    <button type="submit" class="btn primary">
                        <span>Send Request</span>
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer with enhanced content -->
    <footer class="main-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Matswabi Funeral App</h3>
                    <p>Creating jobs for young men and women through innovative funeral management services.</p>
                    <div class="social-links">
                        <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="{{route('home')}}#packages">Our Packages</a></li>
                        <li><a href="{{route('home')}}#services">Services</a></li>
                        <li><a href="{{route('home')}}#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Our Services</h3>
                    <ul>
                        <li><a href="documentation">Documentation Processing</a></li>
                        <li><a href="transport">Transport Services</a></li>
                        <li><a href="gps-locator">GPS Grave Locator</a></li>
                        <li><a href="live-streaming">Live Streaming</a></li>
                        <li><a href="catering">Catering Services</a></li>
                        <li><a href="choir">Choir Services</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <p><a href="Tel:+260978707744"><i class="fas fa-phone"></i> +260 978707744</a></p>
                    <p><a href="Mailto:matswabifuneral_app@hotmail.com"><i class="fas fa-envelope"></i> matswabifuneral_app@hotmail.com</a></p>
                    <p><i class="fas fa-map-marker-alt"></i> Obama Madido, Lusaka, Zambia</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Matswabi Funeral App. All Rights Reserved.</p>
            </div>
        </div>
    </footer>