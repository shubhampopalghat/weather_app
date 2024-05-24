import React from "react";
import './Foot.css';

function Foot() {
    return (
        <section class="footer">

            <div class="container">
                <div class="list">
                    <h2 class="heading"> Download    </h2>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Android App</a></li>
                        <li><a href="#">iOS App</a></li>
                        <li><a href="#">Desktop</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">My Tasks</a></li>
                    </ul>

                </div>
                <div class="list">
                    <h2 class="heading"> Help </h2>
                    <ul>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Reporting</a></li>
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Support Policy</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Team Solutions</a></li>
                        </ul>

                    </ul>
                </div>
                <div class="f_widget social-widget pl_70 wow fadeInLeft">
                    <h3 class="f-title f_600 t_color f_size_18">Team Solutions</h3>
                    <div class="f_social_icon">
                        <a href="#" class="fab fa-facebook"></a>
                        <a href="#" class="fab fa-twitter"></a>
                        <a href="#" class="fab fa-linkedin"></a>
                        <a href="#" class="fa-brands fa-instagram"></a>
                    </div> </div>
            </div>


            <div class="footer_bg">
                <div class="footer_bg_one"></div>
                <div class="footer_bg_two"></div>
            </div>

            <div class="footer_bottom">

                <div>
                    <p> © Parfinder Inc.. 2024 All rights reserved.</p>
                </div>
            </div>

        </section>
    );
}

export default Foot;