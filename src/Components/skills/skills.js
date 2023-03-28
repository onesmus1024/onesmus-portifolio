import { useEffect } from 'react';
import './skills.css'

export default function Skills() {

    var passou = true;

    const restDescription = 'experience with this technology.'
    const listColors = ['#83cd29',  ' #ffd845', '#e62c2d',  '#61dafb', ' #e54d26', '#3d8fc6',  '#f0db4f']; 
    const titles = ['Node.js', 'Python', 'Java',  'React', 'HTML5', 'CSS3',  'JavaScript'];
    const progress = ['150', '175', '90',  '150', '175', '175', '150']
    const descriptions = 
    [
    `3 years ${restDescription}`,
    `4 years ${restDescription}`,
    `1 year ${restDescription}`,
    
    `3 year ${restDescription}`,
    `4 years ${restDescription}`,
    `4 years ${restDescription}`,
   
    `3 years ${restDescription}`
    ];

    function criaListener(id) {
        return function() {
            document.querySelector('progress').value = progress[id];
            document.querySelector('.description').innerHTML = descriptions[id];
            document.querySelector('.title-description').innerHTML = titles[id];
            document.body.style.setProperty('--skillColor', listColors[id]);
        }
    }

    useEffect(() => {
        if (passou) {
            passou = false
            const items = document.querySelectorAll('.single-item');

            for (var i = 0; i < items.length; i++) {
                items[i].onmouseover = criaListener(i);
            }
        }  
    }, []);

    return (
        <section class="page-section" id="skills">
            <h2 class="title-page"><span>my skills</span></h2>
            <div class="wrapper">
                <div class="description-skills">
                    <h2 class="title-description">Skill</h2>
                    <progress max="200" value="0"></progress>
                    <p class="description">Mouse over/click on a skill to see the experience time</p>
                </div>
                <div class="container-skills">
                    <div class="single-item">
                        <i class="devicon-nodejs-plain colored" id="icon-language"></i>
                    </div>
                    
                    <div class="single-item">
                        <i class="devicon-python-plain-wordmark colored" id="icon-language"></i>
                    </div>
                    <div class="single-item mg-1">
                        <i class="devicon-java-plain-wordmark colored" id="icon-language"></i>
                    </div>
                   
                    <div class="single-item">
                        <i class="devicon-react-original-wordmark colored" id="icon-language"></i>
                    </div>
                    <div class="single-item mg-1">
                        <i class="devicon-html5-plain-wordmark colored" id="icon-language"></i>
                    </div>
                    <div class="single-item mg-1">
                        <i class="devicon-css3-plain-wordmark colored" id="icon-language"></i>
                    </div>
                  
                    <div class="single-item">
                        <i class="devicon-javascript-plain colored" id="icon-language"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}