import React from 'react';
// import LogoImage from './../images/logo.jpg';
import studying from './../Images/image-1.jpeg';
import exceptional from './../Images/text-boxes/exceptional-tutors-who-care.png';
import rich from './../Images/text-boxes/rich-breadth-of-resources.png';
import cover from './../Images/text-boxes/cover-all-your-core-subjects.png';
import Interactive from './../Images/text-boxes/Interactive-sessions-and-platform.png';
import assessments_quizzes_tests from './../Images/assessments_quizzes_tests.jpeg';
import Michael from './../Images/our-team/Michael.png';
import Nazrin_Ali from './../Images/our-team/Nazrin_Ali.png';
import Nuzhat_Lazina from './../Images/our-team/Nuzhat_Lazina.png';
import Shyam_Patel from './../Images/our-team/Shyam_Patel.png';
import Upkaar_Ramlall from './../Images/our-team/Upkaar_Ramlall.png';
import Saahithya_Aroori from './../Images/our-team/Saahithya_Aroori.png';
import img7 from './../Images/our-team/img7.png';
import img8 from './../Images/our-team/img8.png';
import img9 from './../Images/our-team/img9.png';



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
                {/* banner section */}
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
                {/* our mission-section */}
                <section>
                    <div class="mission-section">
                        <div class="quote left-quote">“</div>
                        <div class="content">
                            <h2 class="title-1"><span class="highlight-1">Our</span> Mission</h2>
                            <p>Inspire students to seek and apply <br /> knowledge by helping them identify <br /> their talents and
                                providing opportunities <br /> beyond the classroom so they can better themselves <br /> and the
                                world around them.</p>
                        </div>
                        <div class="quote-1 right-quote">”</div>
                    </div>
                </section>
                {/* Exceptional Tutors */}
                <section>
                    <div class="card-container">
                        <div class="card">
                            <div class="icon">
                                <img src={exceptional} />
                            </div>
                            <h3>Exceptional Tutors<br />Who Care</h3>
                            <p>All our tutors are experts in their subjects having studied at top UK universities. They are
                                passionate about teaching and inspiring their students.</p>
                            <a href="#" class="meet-button">Meet Our Tutor</a>
                        </div>
                        <div class="card">
                            <div class="icon">
                                <img src={rich} /></div>
                            <h3>Rich Breadth of<br />Resources</h3>
                            <p>We suggest and provide the best resources you can use on your learning journey. Access recorded
                                classes, question banks per topic, weekly assessments, homeworks, and more </p>
                            <a href="#" class="Samples-button">View Samples</a>
                        </div>
                        <div class="card">
                            <div class="icon">
                                <img src={cover} /></div>
                            <h3>Cover All Your Core<br />Subjects</h3>
                            <p>Within a month, we cover all five core GCSE subjects: Biology, Chemistry, Physics, Maths and
                                English. We follow the school syllabus so you are always prepared for upcoming tests and exams.
                            </p>
                            <a href="#" class="Syllabus-button">View Syllabus</a>
                        </div>
                        <div class="card">
                            <div class="icon">
                                <img src={Interactive} /></div>
                            <h3>Interactive & Comfortable</h3>
                            <p>Our sessions are online in small groups, which enables you to ask questions, discuss concepts and
                                learn from others. Our online platform allows you to track your progress in real time when
                                completing assessments and homework.</p>
                            <a href="#" class="demo-button">View Demo</a>
                        </div>
                    </div>
                </section>
                {/* why GGT */}
                <section>
                    <div class="GGT-title">
                        <h3 class="text-color-green font-size-30px">
                            <span class="text-color-blue">Why</span> GGT
                        </h3>
                        <div class="GGT-content">
                            <p>
                                At GGT, we offer more than just lessons – we provide accountability, expert guidance, and a
                                proven track
                                record of results Our exceptional tutors,<br /> all graduates from top UK universities, are
                                passionate about
                                inspiring students and helping them excel. With a rich breadth of resources,<br /> including
                                live assessments,
                                quizzes, and tests, you can easily track your progress. Covering all five core GCSE subjects,
                                our program <br />
                                aligns with the school syllabus to ensure you're always prepared. Plus, our interactive,
                                small-group
                                sessions and<br />cutting-edge online platform make learning engaging and personalized.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Assessments, Quizzes, Tests */}
                <section class="software-section">
                    <div class="software-content">
                        <h2 class="text-color-blue">Assessments, <span class="highlight">Quizzes, Tests</span></h2>
                        <ul class="software-list">
                            Easily launch live assessments, quizzes, and tests. Results are automatically entered on your
                            profile, which you can use to track your progress. Reach out to tutors for guidance on your results,
                            and win achievement awards for different topics.
                        </ul>
                    </div>
                    <div class="software-image">
                        <img src={assessments_quizzes_tests} alt="Classroom Image" />
                    </div>
                </section>
                {/* Meet Our team */}
                <section class="team-section">
                    <h2 class="section-title text-color-blue">Meet Our <span class="highlight"> Team </span></h2>
                    <p class="section-description">We are only as good as our team... and our team is excellent!</p>

                    <div class="team-container">
                        <div class="team-detail">
                            <div class="team-photo">
                                <img src={Michael} alt="Annnesha Tandel" />
                            </div>
                            <div class="team-info">
                                <h3 class="team-name">Annesha Tandel</h3>
                                <p class="team-subtitle">Chemistry</p>
                                <p class="team-description">
                                    Annesha has over 6 years of teaching experience. Once she graduates from her Chemistry
                                    degree at Imperial College London, she looks forward to working in medicinal research and
                                    channelling her expertise and passion for chemistry into each of our lessons.
                                </p>
                            </div>
                        </div>

                        <div class="team-list">
                            <div class="team-member active">
                                <img src={Michael} alt="Annnesha Tandel" />
                                    <h4>Name : Annesha Tandel</h4>
                                    <p>Subtitle : Head of Physics and Maths</p>
                            </div>
                            <div class="team-member">
                                <img src={Nazrin_Ali} alt="Elsa Pajs" />
                                    <h4>Name : Nazrin Ali</h4>
                                    <p>Subtitle : Head of Biology</p>
                            </div>
                            <div class="team-member">
                                <img src={Nuzhat_Lazina} alt="Michael Spantino" />
                                    <h4>Name : Nuzhat Lazina Chowdhoury</h4>
                                    <p>Subtitle : Science Tutor & Head of KS4</p>
                            </div>
                            <div class="team-member">
                                <img src={Shyam_Patel} alt="Annnesha Tandel" />
                                    <h4>Name : Shyam Patel</h4>
                                    <p>Subtitle : Head of Chemistry </p>
                            </div>
                            <div class="team-member">
                                <img src={Upkaar_Ramlall} alt="Annnesha Tandel" />
                                    <h4>Name : Upkaar Ramlall</h4>
                                    <p>Subtitle : Biology and Chemistry Tutor & Teaching </p>
                            </div>
                            <div class="team-member">
                                <img src={Saahithya_Aroori} alt="Annnesha Tandel" />
                                    <h4>Name : Saahithya Aroori</h4>
                                    <p>Subtitle : Physics and Maths Tutor & Head of KS3 </p>
                            </div>
                            <div class="team-member">
                                <img src={img7} alt="Annnesha Tandel" />
                                    <h4>Name : </h4>
                                    <p>Subtitle : </p>
                            </div>
                            <div class="team-member">
                                <img src={img8} alt="Annnesha Tandel" />
                                    <h4>Name : </h4>
                                    <p>Subtitle : </p>
                            </div>
                            <div class="team-member">
                                <img src={img9} alt="Annnesha Tandel" />
                                    <h4>Name : </h4>
                                    <p>Subtitle : </p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

        </div>



    )
}

export default Home