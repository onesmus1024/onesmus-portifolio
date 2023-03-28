import './projects.css';
import Slider from "react-slick";

export default function Projects() {
    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };

    return (
        <section class="page-light" id="projects">
            <h3 class="title-page">Projects</h3>
            <div class="container-projects">
                <Slider {...settings}>
                    <div class="item-projects img-1">
                        <div class="img-overlay"></div>
                        <a href="https://molynew.com" target="_blank" rel="noopener noreferrer">
                            <h3>molynew</h3>
                            <p>Project at molynew 2022 </p>
                        </a>
                    </div>
                    <div class="item-projects img-2">
                        <a href="https://molyhost.com" target="_blank" rel="noopener noreferrer">
                            <h3>Molyhost </h3>
                            <p>Site made to test and improve my knowledge with react and APIs.</p>
                        </a>
                    </div>
                    <div class="item-projects img-3">
                        <a href="https://github.com/onesmus1024" target="_blank" rel="noopener noreferrer">
                            <h3>Github</h3>
                            <p>To access all my projects visit my github.</p>
                        </a>
                    </div>
                </Slider>
            </div>
        </section>
    );
}