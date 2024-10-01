import React from 'react';
// import LogoImage from './../images/logo.jpg';
import studying from './../Images/image-1.jpeg';
import exceptional from './../Images/exceptional-tutors-who-care.png';
import rich from './../Images/rich-breadth-of-resources.png';
import cover from './../Images/cover-all-your-core-subjects.png';
import Interactive from './../Images/Interactive-sessions-and-platform.png';
import custom from './../Images/custom-software-1.png';
import Michael from './../Images/Michael.png';
import img2 from './../Images/img2.png';
import img3 from './../Images/img3.png';
import img4 from './../Images/img4.png';
import img5 from './../Images/img5.png';
import img6 from './../Images/img6.png';
import img7 from './../Images/img7.png';
import img8 from './../Images/img8.png';
import img9 from './../Images/img9.png';
import Arrow from './../Images/Arrow.png';
import customSoftware from './../Images/custom-software-1.png';



function Home() {
    return (
        <div>
            <header>
                <div class="container">
                    <nav class="navbar">

                        <a href="#">
                            <img src="./../images/logo.jpg" alt="" width="150" class="logo" />
                        </a>

                        <div class="btn-group">
                            <button class="nav-menu-btn">
                                <ion-icon name="menu-outline"></ion-icon>
                            </button>

                        </div>
                        <div class="flex-wrapper">

                            <ul class="desktop-nav">

                                <li>
                                    <a href="#" class="nav-link">Home</a>
                                </li>

                                <li>
                                    <a href="#" class="nav-link">About Us</a>
                                </li>

                                <li>
                                    <a href="#" class="nav-link">Blog</a>
                                </li>

                                <li>
                                    <a href="#" class="nav-link">Careers</a>
                                </li>

                                <li>
                                    <a href="#" class="nav-link">Enquire </a>
                                </li>
                                <li class="login-button">
                                    <div>
                                        <a href="#" class="cta-button">Login</a>
                                    </div>
                                    <div class="padding-left-20px">
                                        <a href="#" class="cta-button">Sign Up</a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="mobile-nav">

                            <button class="nav-close-btn">
                                <ion-icon name="close-outline"></ion-icon>
                            </button>

                            <div class="wrapper">

                                <p class="h3 nav-title">Main Menu</p>

                                <ul>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Home</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#" class="nav-link">About Me</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Contact</a>
                                    </li>
                                </ul>

                            </div>

                            <div>

                                <p class="h3 nav-title">Topics</p>

                                <ul>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Database</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Accessibility</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Web Performance</a>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </nav>
                </div>
            </header>

            <main>
                <section class="banner">
                    <div class="text-content">
                        <h1 class="title">
                            <span class="highlight-title">Tutoring </span> Reimagined
                        </h1>
                        <p class="description">We utilise our unique education model and mentorship-based <br /> teaching to
                            make learning more enjoyable so
                            students can <br /> be confident, fulfilled and successful.</p>
                    </div>
                    <div class="image-content">
                        <img src={studying} alt="Students in classroom" class="main-img" />
                        {/* <!-- Replace with your image --> */}
                        <div class="text-box text-box1">Exceptional Tutors Who Care </div>
                        <div class="text-box text-box2">Rich Breadth of Resources </div>
                        <div class="text-box text-box3">Interactive Sessions and Platform</div>
                        <div class="text-box text-box4">Cover All Your Core Subjects</div>
                    </div>
                </section>
            </main>

        </div>



    )
}

export default Home