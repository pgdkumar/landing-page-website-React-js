import React from 'react'
import exampleImage from './../Images/logo.jpg';
import studying from './../Images/studying-online.png';
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

function Home() {
    return (
        <div>
            <header>

                <div class="container">
                    <nav class="navbar">

                        <a href="#">
                            <img src={exampleImage} alt="Example" className='logo' style={{ width: '150px', height: 'auto' }} />
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
                {/* section 1 */}
                <div class="banner-sec">
                    <div class="container">
                        <div class="left">
                            <h1 class="h1">
                                <span class="text-color-yellow"> Tutoring</span> <b>Reimagined</b>
                            </h1>
                            <p class="h3">
                                We utilise our unique education model and mentorship-based <br /> teaching to make learning more enjoyable so
                                students can <br /> be confident, fulfilled and successful.
                            </p>
                        </div>
                        <div class="right">
                            <div class="img-box">
                                <img src={studying} alt="Julia Walker" class="banner-sec-img" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* section 2 */}
                <div class="sec3-our-mission testimonial">
                    <div class="content-wrapper">
                        <div class="text-content">
                            <h3 class="our-mission-heading">
                                <span class="text-color-blue">Our</span> Mission
                            </h3>
                            <p class="our-mission-content">
                                Inspire students to seek and apply knowledge by helping them <br /> identify their talents and providing
                                opportunities beyond the classroom <br /> so they can better themselves and the world around them
                            </p>
                        </div>
                    </div>
                </div>

                {/* section 3 */}
                <div class="flex-container">

                    <div class="flex-item">
                        <div class="flex-item-1">
                            <img src={exceptional} alt="" class="w-100px" />
                        </div>
                        <div>
                            <h3 class="text-color-blue">Exceptional Tutors <br />Who Care</h3>
                            <p class="font-size-16px line-height-25px">All our tutors are experts in their subjects having studied at top
                                UK universities. They are passionate about teaching and inspiring their students.</p>
                            <div class="padding-top-50px">
                                <a href="#" class="meet-button">meet our tutor</a>
                            </div>
                        </div>
                    </div>
                    <div class="flex-item">
                        <div class="flex-item-1">
                            <img src={rich} alt="" class="w-100px" />
                        </div>
                        <div>
                            <h3 class="text-color-blue">Rich Breadth of<br /> Resources</h3>
                            <p class="font-size-16px line-height-25px">We suggest and provide the <br /> best resources you can
                                use on your learning journey. Access recorded classes, question banks per topic, weekly
                                assessments, homeworks, and more</p>
                            <div class="padding-top-50px">
                                <a href="#" class="Samples-button">View Samples</a>
                            </div>
                        </div>
                    </div>
                    <div class="flex-item">
                        <div class="flex-item-1">
                            <img src={cover} alt="" class="w-100px" />
                        </div>
                        <div>
                            <h3 class="text-color-blue">Cover All Your Core <br /> Subjects</h3>
                            <p class="font-size-16px line-height-25px">Within a month, we cover all five core GCSE subjects:
                                Biology, Chemistry, Physics, Maths and English. We follow the school syllabus so you are always
                                prepared for upcoming tests and exams.</p>
                            <div class="padding-top-50px">
                                <a href="#" class="Syllabus-button">View syllabus</a>
                            </div>
                        </div>
                    </div>
                    <div class="flex-item">
                        <div class="flex-item-1">
                            <img src={Interactive} alt="" class="w-100px" />
                        </div>
                        <div>
                            <h3 class="text-color-blue">Interactive Sessions and Platform</h3>
                            <p class="font-size-16px line-height-25px">Our sessions are online in small groups, which enables
                                you to ask questions, discuss concepts and learn from others. Our online platform allows you to
                                track your progress in real time when completing assessments and homework.</p>
                            <div class="padding-top-50px">
                                <a href="#" class="demo-button">View Demo</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* section 4 */}
                <div class="GGT-title">
                    <h3 class="text-color-green font-size-30px">
                        <span class="text-color-blue">Why</span> GGT
                    </h3>
                    <div class="GGT-content">
                        <p>
                            At GGT, we offer more than just lessons – we provide accountability, expert guidance, and a proven track
                            record of results Our exceptional tutors,<br /> all graduates from top UK universities, are passionate about
                            inspiring students and helping them excel. With a rich breadth of resources,<br /> including live assessments,
                            quizzes, and tests, you can easily track your progress. Covering all five core GCSE subjects, our program <br />
                            aligns with the school syllabus to ensure you're always prepared. Plus, our interactive, small-group
                            sessions and<br />cutting-edge online platform make learning engaging and personalized.
                        </p>
                    </div>
                </div>

                {/* section 5 */}
                <div class="centered-section">
                    <div class="container-1">
                        <div class="content">
                            <h3 class="text-color-green font-size-30px">
                                <span class="text-color-blue">Assessments, Quizzes,</span>Tests
                            </h3>
                            <div class="Assessments-content">
                                <p>Easily launch live assessments, quizzes, and tests. Results are <br />  automatically   entered on your profile,
                                    which you can use to  track<br /> your progress. Reach out  to tutors for guidance on your results, and <br />win
                                    achievement awards for different topics.</p>
                            </div>
                        </div>
                        <div class="image">
                            <img src={custom} alt="" class="w-450px" />
                        </div>
                    </div>
                </div>

                {/* section 6 */}
                <div class="meet-our-team-title">
                    <h3 class="text-color-green font-size-30px">
                        <span class="text-color-blue">Meet our </span> Team
                    </h3>
                    <p class="meet-our-team-content">
                        We are only as good as our team… <br /> and our team is excellent!
                    </p>
                </div>
                <div className="team-section">
                    <div className="left-column-1">
                        <div className="responsive-container-block Container bottomContainer">
                            <div className="ultimateImg">
                                <div
                                    style={{
                                        boxShadow: '4px 8px 13px 7px rgb(213 211 211 / 50%)',
                                        padding: '15px 10px',
                                        borderRadius: '14px',
                                    }}
                                >
                                    <div>
                                        <p
                                            style={{
                                                paddingLeft: '250px',
                                                fontSize: '12px',
                                            }}
                                        >
                                            Taylor is a third year Physics with Theoretical Physics student at
                                            Imperial College London. During his time at university, he has developed his passion and interest in
                                            teaching through tutoring & mentoring, particularly state-school students into top universities. He
                                            is the Science Editor for his University newspaper and has a keen interest in astrophotography.
                                        </p>
                                    </div>
                                    <div style={{ textAlign: 'justify' }}>
                                        <p className="text-color-blue">Annesha Tandel</p>
                                        <p className="text-color-green">Chemistry</p>
                                    </div>
                                </div>
                                <div className="purpleBox">
                                    <img src={Michael} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-column-1">
                        <div className="image-grid">
                            <div className="grid-item">
                                <img src={Michael} alt="Project 1" />
                                <div className="passport-img-content">
                                    <p>Taylor Pomfret</p>
                                    <p>Head of Physics and ma</p>
                                </div>
                            </div>
                            <div className="grid-item">
                                <img src={img2} alt="Project 1" />
                                <div className="passport-img-content">
                                    <p>Nazrin Ali</p>
                                    <p>Head of Biology</p>
                                </div>
                            </div>
                            <div className="grid-item">
                                <img src={img3} alt="Project 1" />
                                <div className="passport-img-content">
                                    <p>Nuzhat Lazina Chowdhoury</p>
                                    <p>Science Tutor & Head of KS4</p>
                                </div>
                            </div>
                            <div className="grid-item">
                                <img src={img4} alt="Project 1" />
                                <div className="passport-img-content">
                                    <p>Shyam Patel</p>
                                    <p>Head of Chemistry</p>
                                </div>
                            </div>
                            <div className="grid-item">
                                <img src={img5} alt="Project 1" />
                                <div className="passport-img-content">
                                    <p>Upkaar Ramlall</p>
                                    <p>Biology and Chemistry Tutor & Teaching Head</p>
                                </div>
                            </div>
                            <div className="grid-item">
                                <img src={img6} alt="Project 1" />
                                <div className="passport-img-content">
                                    <p>Saahithya Aroori</p>
                                    <p>Physics and Maths Tutor & Head of KS3</p>
                                </div>
                            </div>
                            <div className="grid-item">
                                <img src={img7} alt="Project 1" />
                                <div className="passport-img-content">
                                    <p>Dinesh</p>
                                    <p>Kumar</p>
                                </div>
                            </div>
                            <div className="grid-item">
                                <img src={img8} alt="Project 1" />
                                <div className="passport-img-content">
                                    <p>Dinesh</p>
                                    <p>Kumar</p>
                                </div>
                            </div>
                            <div className="grid-item">
                                <img src={img9} alt="Project" />
                                <div className="passport-img-content">
                                    <p>Dinesh</p>
                                    <p>Kumar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* section 7 */}
                <div className="Testimonials">
                    <div className="container-Testimonials">
                        <div className="content">
                            <div className="Testimonials-title">Testimonials</div>
                            <h3 className="text-color-blue font-size-30px">
                                Our Students and Parents
                            </h3>
                            <div className="Assessments-content">
                                <p>
                                    Hear directly from our students and parents <br />
                                    who have experienced success with GGT. <br />
                                    Their stories highlight the impact of our <br />
                                    expert tutors, personalised learning, and <br />
                                    proven results.
                                </p>
                            </div>
                            <button className="arrow-button">
                                <span>Go to Google reviews</span>
                                <div>
                                    <img src="assets/images/Arrow.png" alt="Arrow" className="arrow-img" />
                                </div>
                            </button>
                        </div>
                        <div className="image">
                            <img src="assets/images/custom-software-1.png" alt="" className="w-450px" />
                        </div>
                    </div>
                </div>

                {/* section footer */}
                <footer>
                    <div className="footer-links">
                        <a href="#">
                            <img src="/images/logo.jpg" alt="" className="w-30px" />
                        </a>
                        <a href="#">kwejfwjfbhjebfe wen few fjef cwe</a>
                    </div>
                    <div className="footer-social">
                        <a href="#">
                            <ion-icon name="logo-facebook" className="icon" alt="Facebook" />
                        </a>
                        <a href="#">
                            <ion-icon name="logo-twitter" className="icon" alt="Twitter" />
                        </a>
                        <a href="#">
                            <ion-icon name="logo-linkedin" className="icon" alt="LinkedIn" />
                        </a>
                    </div>
                    <div className="footer-contact">
                        <p>Email: info@educationalplatform.com</p>
                    </div>
                    <div className="newsletter-signup">
                        <input type="email" placeholder="Your Email" />
                        <button className="cta-btn">Subscribe</button>
                    </div>
                    <div className="footer-contact-1">
                        <span>Careers</span>
                        <span>Privacy policy</span>
                        <span>Terms & Conditions</span>
                    </div>
                    <div className="newsletter-signup">
                        <p>&copy; 2024 Class Technolay Inc.</p>
                    </div>
                </footer>

            </main>
        </div>
    )
}

export default Home