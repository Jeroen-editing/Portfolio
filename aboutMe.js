const getById = (id) => (document.getElementById(id));

const show_info_sect = getById('show_info_sect');
const show_proj_sect = getById('show_proj_sect');
const hide_build_sect = getById('hide_build_sect');
const cont_arrow = getById('cont_arrow');

const show_intro = getById('continue_btn');
show_intro.addEventListener('click', () => {
    show_info_sect.classList.replace("box_hidden", "box_visible");
    show_proj_sect.classList.replace("box_hidden", "box_visible");
    hide_build_sect.classList.replace("box_visible", "box_hidden");
});
show_intro.addEventListener('mouseover', () => {
    cont_arrow.src = 'assets/icons/arrow_down.png';
});
show_intro.addEventListener('mouseout', () => {
    cont_arrow.src = 'assets/icons/arrow_down_white.png';
});

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
//let closeButton = `<img src="assets/icons/close_green.png" class="close" id="close">`;
let closeButton = `<section class="close_button" id="close">
                        <button>
                            <img src="assets/icons/close_white.png" class="close_x">
                        </button>
                    </section>`;
let contentClass = `<div class="chapters_content">`;
let tvClass = `<div class="tv_content">`;
let vCardClass = `<div class="vCard_content">`;


const createAboutMe = () => {
    const aboutMe = new Chapter();  

    const aboutMe_content = `
    <div class="aboutme_box">
        <p class="about_text">
            In 2019 I had to make a choice in my professional career and after some research I started studying 
            web development. First in an online course and later on in a fulltime course at Becode and an evening 
            classes at Encora. 
        </p>
        <p class="about_text">
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
            <button>
                <a href="https://jeroen-editing.github.io/mail_templates/cv.html" class="myCv_link">Open</a>
            </button>
        </section>
    </div>
    <div class="skills_box">
        <div class="skills_title_box frontend_title">
            <h4 class="skills_title">Front end</h4>
        </div>
        <div class="skills_logos_box frontend_logos" id="frontEndSkills">
            <div class="icon_row">
                <img src="assets/icons/html_icon.png" class="skill_icon" alt="">
                <img src="assets/icons/css_icon.png" class="skill_icon" alt="">
                <img src="assets/icons/sass_icon.png" class="skill_icon sass_icon" alt="">
                <img src="assets/icons/bootstrap_icon.png" class="skill_icon boots_icon" alt="">
            </div>
        </div>
    </div>
    <div class="skills_box">
        <div class="skills_title_box js_title">
            <h4 class="skills_title">JS</h4>
        </div>
        <div class="skills_logos_box js_logos" id="JsSkills">
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

    const close = getById('close');
    close.addEventListener('click', () => {
        pop_up_element.classList.replace("box_visible", "box_hidden");
        show_info_sect.classList.replace("box_hidden", "box_visible");
        show_proj_sect.classList.replace("box_hidden", "box_visible");
    });
}

const getAboutMe = getById('getAboutMe');
const about_arrow = getById('about_arrow');
getAboutMe.addEventListener('click', () => {
    show_info_sect.classList.replace("box_visible", "box_hidden");
    show_proj_sect.classList.replace("box_visible", "box_hidden");
    pop_up_element.classList.replace("box_hidden", "box_visible");
    createAboutMe();
});
getAboutMe.addEventListener('mouseover', () => {
    about_arrow.src = 'assets/icons/arrow_right.png';
});
getAboutMe.addEventListener('mouseout', () => {
    about_arrow.src = 'assets/icons/arrow_right_white.png';
});



const createProjects = () => {
    const projects = new Chapter();

    const projects_content = `
    <div class="projects_box" id="showHtmlCss">
        <header class="projects_title_box">
            <div class="title_col">
                <h4 class="projects_title">HTML & CSS</h4>
                <h4 class="projects_title">with Sass & Bootstrap</h4>
            </div>
            <section class="projects_button">
                <button>
                    <img src="assets/icons/arrow_right_white.png" alt="arrow right" id="htmlCss_arrow">
                </button>
            </section>
        </header>
    </div>
    <div class="projects_box" id="showJs">
        <header class="projects_title_box">
            <div class="title_col">
                <h4 class="projects_title js_title">JavaScript</h4>
            </div>
            <section class="projects_button">
                <button>
                    <img src="assets/icons/arrow_right_white.png" alt="arrow right" id="js_arrow">
                </button>
            </section>
        </header>
    </div>
    <div class="projects_box bottom_box" id="showFetch">
        <header class="projects_title_box">
            <div class="title_col">
                <h4 class="projects_title">Fetch() method</h4>
                <h4 class="projects_title">(for API's)</h4>
            </div>
            <section class="projects_button">
                <button>
                    <img src="assets/icons/arrow_right_white.png" alt="arrow right" id="fetch_arrow">
                </button>
            </section>
        </header>
    </div>`;

    projects.title = `${titleClass}Projects</h3>${closeButton}</div>`;
    projects.content = `${contentClass}${projects_content}</div>`;
    projects.pop_up = `${popupClass}${projects.getTitle()}${projects.getContent()}</section>`;

    pop_up_element.innerHTML = `${projects.getPopup()}`;

    const close = getById("close");
    close.addEventListener('click', () => {
        pop_up_element.classList.replace("box_visible", "box_hidden");
        show_info_sect.classList.replace("box_hidden", "box_visible");
        show_proj_sect.classList.replace("box_hidden", "box_visible");
    });
    
    open_projects_chapters();
}

const getProjects = getById("getProjects");
const projects_arrow = getById('projects_arrow');
getProjects.addEventListener("click", () => {
    show_info_sect.classList.replace("box_visible", "box_hidden");
    show_proj_sect.classList.replace("box_visible", "box_hidden");
    pop_up_element.classList.replace("box_hidden", "box_visible");
    createProjects();
});
getProjects.addEventListener('mouseover', () => {
    projects_arrow.src = 'assets/icons/arrow_right.png';
});
getProjects.addEventListener('mouseout', () => {
    projects_arrow.src = 'assets/icons/arrow_right_white.png';
});


const createVideo = () => {
    const video = new Chapter();

    const video_content = `
    <div class="tv_box">
        <div class="player" id="video_player">
            <video class="video_player" id="video" src="assets/video/Company.m4v"></video>
            <div class="progress">
                <div class="progress_filled"></div>
            </div>
            <div class="player_controls">
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
                <div class="button_box">
                    <button data-skip="-10" class="player_button">«10s</button>
                    <button class="player_button toggle" title="Toggle Play">▶</button>
                    <button data-skip="10" class="player_button">10s»</button>
                    <button data-skip="" class="player_button fullscreen"></button>
                </div>
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
    video.content = `${tvClass}${video_content}</div>`;
    video.pop_up = `${popupClass}${video.getTitle()}${video.getContent()}</section>`;

    pop_up_element.innerHTML = `${video.getPopup()}`;

    activateVideo();

    const close = getById("close");
    close.addEventListener('click', () => {
        pop_up_element.classList.replace("box_visible", "box_hidden");
        show_info_sect.classList.replace("box_hidden", "box_visible");
        show_proj_sect.classList.replace("box_hidden", "box_visible");
    });
}

const getVideo = getById("getVideo");
const video_arrow = getById('video_arrow');
getVideo.addEventListener("click", () => {
    show_info_sect.classList.replace("box_visible", "box_hidden");
    show_proj_sect.classList.replace("box_visible", "box_hidden");
    pop_up_element.classList.replace("box_hidden", "box_visible");
    createVideo()
});
getVideo.addEventListener('mouseover', () => {
    video_arrow.src = 'assets/icons/arrow_right.png';
});
getVideo.addEventListener('mouseout', () => {
    video_arrow.src = 'assets/icons/arrow_right_white.png';
});



const createVCard = () => {
    const vCard = new Chapter();

    const vCard_content = `
    <div class="vcard_box">
        <div class="vCard" id="vCard">
            <header>
                <h4>
                    <span>&#9744;</span><span class="text">Web development</span>
                    <span>&#9744;</span>
                    <span class="text">Web design</span><span>&#9744;</span>
                </h4>
            </header>
            <section class="address_box">
                <address>
                    <div class="vcard">
                        <span id="fn">Jeroen De Vos</span>
                        <div class="org">Jeroen-editing</div>
                        <a id="email" href="mailto:jdv.editing@gmail.com">email me here</a>
                        <div class="adr">
                            <div class="street-address">A street</div>
                            <span class="locality">Town</span> &#8901;
                            <span class="region">Region +</span>
                            <span class="postal-code">Code</span> &#8901;
                            <span class="country-name">Country</span>
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
    vCard.content = `${vCardClass}${vCard_content}</div>`;
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
    close.addEventListener('click', () => {
        pop_up_element.classList.replace("box_visible", "box_hidden");
        show_info_sect.classList.replace("box_hidden", "box_visible");
        show_proj_sect.classList.replace("box_hidden", "box_visible");
    });
}

const getVCard = getById("getVCard");
const vcard_arrow = getById('vcard_arrow');
getVCard.addEventListener("click", () => {
    show_info_sect.classList.replace("box_visible", "box_hidden");
    show_proj_sect.classList.replace("box_visible", "box_hidden");
    pop_up_element.classList.replace("box_hidden", "box_visible");
    createVCard()
});
getVCard.addEventListener('mouseover', () => {
    vcard_arrow.src = 'assets/icons/arrow_right.png';
});
getVCard.addEventListener('mouseout', () => {
    vcard_arrow.src = 'assets/icons/arrow_right_white.png';
});