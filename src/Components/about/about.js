import icon from '../header/assets/img-icon.png';
import Resume from './assets/Enzo.pdf'
import './about.css';

export default function About() {
    return (
        <section class="page-light" id="about">
            <h2 class="title-page">About me</h2>
            <div class="about-section">
                <div class="left-img">
                    <img src={icon} class="img-about" alt="icon"></img>
                </div>
                <div class="right-text">
                    <div class="texto-about">
                        <h3>Who am I?</h3>
                        <p>
                        I'm from Nairobi Kenya. I am currently studying computer science Karatina University, and I started my career in IT at Bitbyte , a company I still work with, I am passionate about systems automation and I also work as a freelancer. To learn more about my skills and my career click and download my resume.
                        </p>
                        <a href={Resume} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Resume</a>
                    </div>
                </div>
            </div>
        </section>
    );
}