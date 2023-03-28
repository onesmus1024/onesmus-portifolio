import './contact.css';

export default function Contact() {
    return (
        <section class="page-section" id="contact">
            <h3 class="title-page">Contact</h3>
            <div class="container-contact">
                <div class="ways-contact">
                    <h3><span>Please contact me!</span></h3>
                    <p>If you want to get in touch with me, send me a message, I'll love it.</p>
                    <ul class="list-icons">
                        <li>
                            <i class="fa fa-envelope" id="icon-contact"></i> 
                            <a href="mailto:onesmus1024@gmail.com"><p>onesmus1024@gmail.com</p></a>
                        </li>
                        <li>
                            <i class="fa fa-location-dot" id="icon-contact"></i>
                            <p class="mg-icon-2">Nairobi, Kenya</p>
                        </li>
                    </ul>
                </div>
                <form action="https://formsubmit.co/fecfce57d3e403900dad1688f2d9c317" method="POST" class="form-contact">
                    <input type="hidden" name="_next" value="https://enzosylvestrin.github.io/portifolio/" />
                    <input type="hidden" name="_template" value="box" />
                    <input type="hidden" name="_autoresponse" value="I received your message, thank you for getting in touch! I'll answer as soon as possible..." />            
                    <label>Name:</label>
                    <input type="text" name="name" class="form-control" placeholder="Name" required/>
                    <label>Email:</label>
                    <input type="email" name="email" class="form-control" placeholder="Email" required/>
                    <label>Message:</label>
                    <textarea name="message" class="form-control" placeholder="write the message" required></textarea>
                    <div class="btn-form">
                        <input type="submit" class="btn btn-primary" value="Submit" />
                    </div>
                </form>
            </div>
        </section>
    );
}