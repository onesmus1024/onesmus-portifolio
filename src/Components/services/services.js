import './services.css';

export default function Servicer() {
    return (
        <section class="page-light" id="services">
            <h3 class="title-page">Services</h3>
            <div class="container-services">
                <div class="item-services">
                    <i class="fa fa-gear" id="icon-services"></i>
                    <h3>Automation</h3>
                    <p>Creating bots and automating repetitive tasks</p>
                </div>
                <div class="item-services">
                    <i class="fa fa-code" id="icon-services"></i>
                    <h3>website creation</h3>
                    <p>Construction of the design and operation of websites</p>
                </div>
                <div class="item-services c-1">
                    <i class="fa-brands fa-android" id="icon-services"></i>
                    <h3>application creation</h3>
                    <p>Android application development</p>
                </div>
            </div>
        </section>
    );
}