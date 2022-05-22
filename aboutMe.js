const getById = (id) => (document.getElementById(id));

const show_info_sect = getById('show_info_sect');
const show_proj_sect = getById('show_proj_sect');
const hide_build_sect = getById('hide_build_sect');

const show_intro = getById('continue_btn');
show_intro.addEventListener('click', () => {
    show_info_sect.style.display = 'flex';
    show_info_sect.style.transition = 'display 0.5s ease-out;';
    show_proj_sect.style.display = 'flex';
    show_proj_sect.style.transition = 'display 0.5s ease-out;';
    hide_build_sect.style.display = 'none';
    hide_build_sect.style.transition = 'display 0.5s ease-out;';
})


class Chapter {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.pop_up = this.pop_up;

        this.getTitle = () => {return this.title;}
        this.getContent = () => {return this.content;}
        this.getPopup = () => {return this.pop_up;}
    }
}

let pop_up_element = getById("popUp");
let popupClass = `<section class="popup_window">`
let titleClass = `<div class="title_box"><h3 class="chapters_title">`;
let closeButton = `<img src="assets/icons/close_green.png" class="close" id="close">`;
let contentClass = `<div class="chapters_content">`;


const createAboutMe = () => {
    const aboutMe = new Chapter();  

    const aboutMe_content = `
    <div class="aboutme_box">
        <p>
            In 2019 I had to make a choice in my professional career and after some research I started studying 
            web development. First in an online course and later on in a fulltime course at Becode and an evening 
            classes at Encora. 
        </p>
        <p>
            I soon discovered that I really like working with JavaScript, so I keep learning and improving myself 
            in it, by doing online courses and projects. First I did extra ES6 and after that I started with jQuery, 
            Vue.JS, React.JS, Redux, NodeJS,…
        </p>
    </div>
    <div class="resume_box">
        <div class="resume_title_box">
            <h4 class="resume_title">My resume</h4>
        </div>
        <section class="resume_button">
            <a href="https://jeroen-editing.github.io/mail_templates/cv.html" class="myCv_link"><p>Open</p></a>
        </section>
    </div>
    <div class="skills_box">
        <div class="skills_title_box">
            <h4 class="skills_title">Front end</h4>
        </div>
        <div class="skills_logos_box" id="frontEndSkills">
            <div class="icon_row">
                <img src="assets/icons/html_icon.png" class="skill_icon" alt="">
                <img src="assets/icons/css_icon.png" class="skill_icon" alt="">
                <img src="assets/icons/sass_icon.png" class="skill_icon sass_icon" alt="">
                <img src="assets/icons/bootstrap_icon.png" class="skill_icon boots_icon" alt="">
            </div>
        </div>
    </div>
    <div class="skills_box">
        <div class="skills_title_box">
            <h4 class="skills_title">JS</h4>
        </div>
        <div class="skills_logos_box" id="frontEndSkills">
            <div class="icon_row">
                <img src="assets/icons/javascript_icon.png" class="skill_icon" alt="">
                <img src="assets/icons/vue_icon.png" class="skill_icon vue_icon" alt="">
                <img src="assets/icons/react_icon.png" class="skill_icon react_icon" alt="">
                <img src="assets/icons/redux_icon.png" class="skill_icon redux_icon" alt="">
                <img src="assets/icons/jquery_icon.png" class="skill_icon jquery_icon" alt="">
                <img src="assets/icons/nodejs_icon.png" class="skill_icon nodejs_icon" alt="">
            </div>
        </div>
    </div>
    <div class="skills_box">
        <div class="skills_title_box">
            <h4 class="skills_title">Back end</h4>
        </div>
        <div class="skills_logos_box" id="backEndSkills">
            <div class="icon_row">
                <img src="assets/icons/php_icon.png" class="skill_icon" alt="">
                <img src="assets/icons/sql_icon.png" class="skill_icon sql_icon" alt="">
            </div>
        </div>
    </div>
    <div class="skills_box bottom_box">
        <div class="skills_title_box">
            <h4 class="skills_title">Design & editing</h4>
        </div>
        <div class="skills_logos_box" id="designSkills">
            <div class="icon_row">
                <img src="assets/icons/creativecloud_icon.png" class="skill_icon cc_icon" alt="">
                <img src="assets/icons/prem_icon.png" class="skill_icon prem_icon" alt="">
                <img src="assets/icons/final_cut.png" class="skill_icon fcp_icon" alt="">
            </div>
        </div>
    </div>`;

    aboutMe.title = `${titleClass}Front end developer</h3>${closeButton}</div>`;
    aboutMe.content = `${contentClass}${aboutMe_content}</div>`;
    aboutMe.pop_up = `${popupClass}${aboutMe.getTitle()}${aboutMe.getContent()}</section>`;

    pop_up_element.innerHTML = `${aboutMe.getPopup()}`;

    const close = getById("close");
    close.addEventListener('click', () => {pop_up_element.innerHTML = ""});
}

const getAboutMe = getById("getAboutMe");
getAboutMe.addEventListener('click', createAboutMe);



const createProjects = () => {
    const projects = new Chapter();

    const projects_content = `
    <div class="projects_box">
        <header class="projects_title_box" id="showHtmlCss">
            <div class="title_col">
                <h4 class="projects_title">HTML & CSS</h4>
                <h4 class="projects_title">with Sass & Bootstrap</h4>
            </div>
            <section class="projects_button lowBtn">
                <button>
                    <img src="assets/icons/arrow_right_green.png" alt="arrow right">
                </button>
            </section>
        </header>
    </div>
    <div class="projects_box">
        <header class="projects_title_box" id="showJs">
            <div class="title_col">
                <h4 class="projects_title">JavaScript</h4>
            </div>
            <section class="projects_button">
                <button>
                    <img src="assets/icons/arrow_right_green.png" alt="arrow right">
                </button>
            </section>
        </header>
    </div>
    <div class="projects_box">
        <header class="projects_title_box" id="showFetch">
            <div class="title_col">
                <h4 class="projects_title">Fetch() method</h4>
                <h4 class="projects_title">(for API's)</h4>
            </div>
            <section class="projects_button lowBtn">
                <button>
                    <img src="assets/icons/arrow_right_green.png" alt="arrow right">
                </button>
            </section>
        </header>
    </div>`;

    const pop_over = `<section class="pop_over" id="popOver"></section>`;

    projects.title = `${titleClass}Projects</h3>${closeButton}</div>`;
    projects.content = `${contentClass}${projects_content}</div>`;
    projects.pop_up = `${popupClass}${projects.getTitle()}${projects.getContent()}</section>${pop_over}`;

    pop_up_element.innerHTML = `${projects.getPopup()}`;

    const close = getById("close");
    close.addEventListener('click', () => {pop_up_element.innerHTML = ""});
    
    open_projects_chapters();
}

const getProjects = getById("getProjects");
getProjects.addEventListener("click", createProjects);


const createVideo = () => {
    const video = new Chapter();

    const video_content = `
    <div class="tv_box">
        <div class="player" id="video_player">
            <video class="video_player" id="video" src="assets/video/Company.m4v"></video>
            <div class="player_controls">
                <div class="progress">
                    <div class="progress_filled"></div>
                </div>
                <button class="player_button toggle" title="Toggle Play">▶</button>
                <div class="slider_box">
                    <label class="range_labels">
                        <img class="rangeIcons" src="./assets/icons/volume-2-white.png" alt="">
                        <input type="range" name="volume" class="player_slider" min="0" max="1" step="0.05" value="O.25" placeholder="volume">
                    </label>
                    <label class="range_labels">
                        <img class="rangeIcons" src="./assets/icons/speed-white.png" alt="">
                        <input type="range" name="playbackRate" class="player_slider" min="0.5" max="2" step="0.1" value="1" placeholder="speed">
                    </label>
                </div>
                <button data-skip="-10" class="player_button">«10s</button>
                <button data-skip="25" class="player_button">25s»</button>
                <button data-skip="" class="player_button fullscreen"></button>
            </div>
        </div>
    </div>
    <div class="tv_text_box">
        <p class="part_text">
            I made this video for a presentation in shool (Becode) about film in websites.
        </p>
        <p class="part_text middle_text">
            It's done in 4 hours, with some photos found online and a simple and
            free editing-program. So it's intentionally not edited with Final Cut Pro 
            or some of my professional tools.
        </p>
        <p class="part_text">
            The purpose was to show how much more impact even a simple video has 
            in stead of photos on an indexpage for a company.
        </p>
    </div>`;

    video.title = `${titleClass}Video editing</h3>${closeButton}</div>`;
    video.content = `${contentClass}${video_content}</div>`;
    video.pop_up = `${popupClass}${video.getTitle()}${video.getContent()}</section>`;

    pop_up_element.innerHTML = `${video.getPopup()}`;

    activateVideo();

    const close = getById("close");
    close.addEventListener('click', () => {pop_up_element.innerHTML = "";});
}

const getVideo = getById("getVideo");
getVideo.addEventListener("click", createVideo);



const createVCard = () => {
    const vCard = new Chapter();

    const vCard_content = `
    <div class="vcard_box">
        <div class="vcard_content" id="vCard">
            <header>
                <h4>
                    <span>&#9744;</span><span class="text">Web development</span>
                    <span>&#9744;</span>
                    <span class="text">Web design</span><span>&#9744;</span>
                </h4>
            </header>
            <section>
                <address>
                    <div class="vcard">
                        <span id="fn">Jeroen De Vos</span>
                        <div class="org">Jeroen-editing</div>
                        <a id="email" href="mailto:jdv.editing@gmail.com">jdv.editing@gmail.com</a>
                        <div class="adr">
                            <div class="street-address">Volkstraat 1</div>
                            <span class="locality">Antwerp</span> &#8901;
                            <span class="region">Antwerp</span>
                            <span class="postal-code">2000</span> &#8901;
                            <span class="country-name">BEL</span>
                        </div>
                    </div>
                </address>
            </section>
            <footer>
                <h4>
                    <span>&#9744;</span><span class="text">Video editing</span>
                    <span>&#9744;</span>
                    <span class="text">Graphic design</span><span>&#9744;</span>
                </h4>
            </footer>
        </div>
    </div>
    <div class="vcard_text_box">
        <p class="part_text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Placeat voluptatem fugit odio? Molestiae saepe sint minus enim omnis, 
            officia eligendi sed quae fuga mollitia dicta nisi ex ea facere! Dicta?
        </p>
        <p class="part_text">
            Placeat voluptatem fugit odio? Molestiae saepe sint minus enim omnis, 
            officia eligendi sed quae fuga mollitia dicta nisi ex ea facere! Dicta?
        </p>
    </div>
    `;

    vCard.title = `${titleClass}VCard</h3>${closeButton}</div>`;
    vCard.content = `${contentClass}${vCard_content}</div>`;
    vCard.pop_up = `${popupClass}${vCard.getTitle()}${vCard.getContent()}</section>`;

    pop_up_element.innerHTML = `${vCard.getPopup()}`;

    let vCard_bg = getById("vCard");
    let BGs = ["./assets/vcard/vcard_bg_01.jpg", "./assets/vcard/vcard_bg_02.jpg", "./assets/vcard/vcard_bg_03.jpg"];
    let bgIndex = 1;
    const changeBgVCard = () => {
        setInterval(() => {
            vCard_bg.style.background = `url(${BGs[bgIndex]})`;
            vCard_bg.style.backgroundSize = 'cover';
            bgIndex = (bgIndex + 1) % BGs.length;
        }, 2600);
    }
    changeBgVCard();

    const close = getById("close");
    close.addEventListener('click', () => {pop_up_element.innerHTML = ""});
}

const getVCard = getById("getVCard");
getVCard.addEventListener("click", createVCard);