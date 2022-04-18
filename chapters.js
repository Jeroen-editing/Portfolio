const getById = (id) => (document.getElementById(id));

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
    </div>`;

    aboutMe.title = `${titleClass}About Me</h3>${closeButton}</div>`;
    aboutMe.content = `${contentClass}${aboutMe_content}</div>`;
    aboutMe.pop_up = `${popupClass}${aboutMe.getTitle()}${aboutMe.getContent()}</section>`;

    pop_up_element.innerHTML = `${aboutMe.getPopup()}`;

    const close = getById("close");
    close.addEventListener('click', () => {pop_up_element.innerHTML = ""});
}

const getAboutMe = getById("getAboutMe");
getAboutMe.addEventListener('click', createAboutMe);



const createStudies = () => {
    const studies = new Chapter();

    const studies_content = `
    <div class="shool_box">
        <h4 class="shool_title">Becode - Antwerp</h4>
        <h5 class="shool_lessons">Html, CSS (& Sass), JavaScript, PHP, Apache, SQL, MySql, Symfony,...</h5>
        <p class="shool_info">
            An intensive practical course, that mainly focuses on self-education. 
            Offering exercices and (group) projects that lead you from simple HTML to advanced PHP. Learning you 
            also to work with Linux command lines and to manage local servers and datbases.
        </p>
        <button class="link_btn"><a href="https://becode.org/nl/leren/junior-web-development/">go to there site</a></button>
    </div>
    <div class="shool_box">
        <h4 class="shool_title">ENCORA - Berchem (Antwerp)</h4>
        <h5 class="shool_lessons">JavaScript, PHP, SQL, MySql, Smarty, CSS & JavaScript animations.</h5>
        <p class="shool_info">
            Evening classes JavaScript, PHP and SQL. Teaching you to build a membership 
            application with a database, loginpage, password- and exception handeling, input, output,...
        </p>
        <button class="link_btn"><a href="https://www.stedelijkonderwijs.be/encora/opleiding/webontwikkelaar">go to there site</a></button>
    </div>
    <div class="shool_box">
        <h4 class="shool_title">Online courses webdeveloping</h4>
        <h5 class="shool_lessons">Mainly Sololearn, The Odin Project, Codecademy, Freecodecamp,...</h5>
        <p class="shool_info">
            After extra Html and CSS for cass, responsivness, bootstrap,... I mainly focused on 
            JavaScript, Eeact, Redux, Vue,...
        </p>
    </div> 
    <div class="shool_box">
        <h4 class="shool_title">VDAB-courses computer science</h4>
        <h5 class="shool_lessons">Data analytics & Programming logics.</h5>
        <p class="shool_info">
            What data, do you really need and what data is not important for a program.<br>
            And learnig to work with the basic programming structures lik operators, statements, loops,..
        </p>
        <button class="link_btn"><a href="https://werkgevers.vdab.be/opleidingen/aanbod/O-AMI-800865/cursus/C-AMI-172314/Informatica_-_Gegevensanalyse-online">go to there site</a></button>
        <button class="link_btn"><a href="https://werkgevers.vdab.be/opleidingen/aanbod/O-AMI-800864/cursus/C-AMI-172238/Informatica__Programmatielogica-online">go to there site</a></button>
    </div>
    <div class="shool_box bottom_box">
        <h4 class="shool_title">Royal Academy of Fine Arts - Antwerp.</h4>
        <h5 class="shool_lessons">Film and video-art</h5>
        <p class="shool_info">
            Video- and soundediting, camera- and light technics, special-effects and film history.
        </p>
        <button class="link_btn"><a href="https://www.academieantwerpendko.org/video-filmkunst">go to there site</a></button>
    </div>`;

    studies.title = `${titleClass}My studies</h3>${closeButton}</div>`;
    studies.content = `${contentClass}${studies_content}</div>`;
    studies.pop_up = `${popupClass}${studies.getTitle()}${studies.getContent()}</section>`;

    pop_up_element.innerHTML = `${studies.getPopup()}`;

    const close = getById("close");
    close.addEventListener('click', () => {pop_up_element.innerHTML = ""});
}

const getStudies = getById("getStudies");
getStudies.addEventListener('click', createStudies);



const createSkills = () => {
    const skills = new Chapter();

    //const skills_content = `<iframe src="/skills.html" id="iFrame"></iframe>`;
    const skills_content = `
    <div class="skill_box">
        <div class="skill_title_box" id="htmlBtn">
            <h4 class="skill_title">HTML & CSS</h4>
            <button class="skill_btn" id="htmlArrow">
                <img class="arrow" src="assets/icons/arrow_down_green.png" alt="arrow down">
            </button>
        </div>
        <div class="skill_text_box boxHidden" id="htmlSkill">
            <div class="icon_column">
                <img src="assets/icons/html_icon.png" class="skill_icon" alt="">
                <img src="assets/icons/css_icon.png" class="skill_icon" alt="">
            </div>
            <div class="text_column">
                <p class="skill_text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Placeat voluptatem fugit odio? Molestiae saepe sint minus enim omnis, 
                    officia eligendi sed quae fuga mollitia dicta nisi ex ea facere! Dicta?
                </p>
            </div>
        </div>
    </div>
    <div class="skill_box">
        <div class="skill_title_box" id="sassBtn">
            <h4 class="skill_title">SASS & Bootstrap</h4>
            <button class="skill_btn" id="sassArrow">
                <img class="arrow" src="assets/icons/arrow_down_green.png" alt="arrow down">
            </button>
        </div>
        <div class="skill_text_box boxHidden" id="sassSkill">
            <div class="icon_column">
                <img src="assets/icons/sass_icon.png" class="skill_icon sass_icon" alt="">
                <img src="assets/icons/bootstrap_icon.png" class="skill_icon boots_icon" alt="">
            </div>
            <div class="text_column">
                <p class="skill_text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Placeat voluptatem fugit odio? Molestiae saepe sint minus enim omnis, 
                    officia eligendi sed quae fuga mollitia dicta nisi ex ea facere! Dicta?
                </p>
            </div>
        </div>
    </div>
    <div class="skill_box">
        <div class="skill_title_box" id="designBtn">
            <h4 class="skill_title">Design & editing</h4>
            <button class="skill_btn" id="designArrow">
                <img class="arrow" src="assets/icons/arrow_down_green.png" alt="arrow down">
            </button>
        </div>
        <div class="skill_text_box boxHidden" id="designSkill">
            <div class="icon_column">
                <img src="assets/icons/creativecloud_icon.png" class="skill_icon cc_icon" alt="">
                <img src="assets/icons/prem_icon.png" class="skill_icon prem_icon" alt="">
                <img src="assets/icons/final_cut.png" class="skill_icon fcp_icon" alt="">
            </div>
            <div class="text_column">
                <p class="skill_text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Placeat voluptatem fugit odio? Molestiae saepe sint minus enim omnis, 
                    officia eligendi sed quae fuga mollitia dicta nisi ex ea facere! Dicta?
                </p>
            </div>
        </div>
    </div>
    <div class="skill_box">
        <div class="skill_title_box" id="jsBtn">
            <h4 class="skill_title">Javascript</h4>
            <button class="skill_btn" id="jsArrow">
                <img class="arrow" src="assets/icons/arrow_down_green.png" alt="arrow down">
            </button>
        </div>
        <div class="skill_text_box boxHidden" id="jsSkill">
            <div class="icon_column">
                <img src="assets/icons/javascript_icon.png" class="skill_icon" alt="">
            </div>
            <div class="text_column">
                <p class="skill_text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Placeat voluptatem fugit odio? Molestiae saepe sint minus enim omnis, 
                    officia eligendi sed quae fuga mollitia dicta nisi ex ea facere! Dicta?
                </p>
            </div>
        </div>
    </div>
    <div class="skill_box">
        <div class="skill_title_box" id="framesBtn">
            <h4 class="skill_title">Frameworks</h4>
            <button class="skill_btn" id="framesArrow">
                <img class="arrow" src="assets/icons/arrow_down_green.png" alt="arrow down">
            </button>
        </div>
        <div class="skill_text_box boxHidden" id="framesSkill">
            <div class="icon_column">
                <img src="assets/icons/vue_icon.png" class="skill_icon vue_icon" alt="">
                <img src="assets/icons/react_icon.png" class="skill_icon react_icon" alt="">
            </div>
            <div class="text_column">
                <p class="skill_text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Placeat voluptatem fugit odio? Molestiae saepe sint minus enim omnis, 
                    officia eligendi sed quae fuga mollitia dicta nisi ex ea facere! Dicta?
                </p>
            </div>
        </div>
    </div>
    <div class="skill_box bottom_box">
        <div class="skill_title_box" id="backendBtn">
            <h4 class="skill_title">PHP, SQL & Databases</h4>
            <button class="skill_btn" id="backendArrow">
                <img class="arrow" src="assets/icons/arrow_down_green.png" alt="arrow down">
            </button>
        </div>
        <div class="skill_text_box boxHidden" id="backendSkill">
            <div class="icon_column">
                <img src="assets/icons/php_icon.png" class="skill_icon" alt="">
                <img src="assets/icons/sql_icon.png" class="skill_icon sql_icon" alt="">
            </div>
            <div class="text_column">
                <p class="skill_text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Placeat voluptatem fugit odio? Molestiae saepe sint minus enim omnis, 
                    officia eligendi sed quae fuga mollitia dicta nisi ex ea facere! Dicta?
                </p>
            </div>
        </div>
    </div>`;

    skills.title = `${titleClass}Developing skills</h3>${closeButton}</div>`;
    skills.content = `${contentClass}${skills_content}</div>`;
    skills.pop_up = `${popupClass}${skills.getTitle()}${skills.getContent()}</section>`;

    pop_up_element.innerHTML = `${skills.getPopup()}`;

    const changeTabs = () => {

        let html_btn = getById("htmlBtn");
        let sass_btn = getById("sassBtn");
        let design_btn = getById("designBtn");
        let js_btn = getById("jsBtn");
        let frames_btn = getById("framesBtn");
        let backend_btn = getById("backendBtn");

        let html_skill = getById("htmlSkill");
        let sass_skill = getById("sassSkill");
        let design_skill = getById("designSkill");
        let js_skill = getById("jsSkill");
        let frames_skill = getById("framesSkill");
        let backend_skill = getById("backendSkill");

        let html_arrow = getById("htmlArrow");
        let sass_arrow = getById("sassArrow");
        let design_arrow = getById("designArrow");
        let js_arrow = getById("jsArrow");
        let frames_arrow = getById("framesArrow");
        let backend_arrow = getById("backendArrow");

        const switchClass = () => {
            html_skill.classList.replace("boxVisible", "boxHidden");
            sass_skill.classList.replace("boxVisible", "boxHidden");
            design_skill.classList.replace("boxVisible", "boxHidden");
            js_skill.classList.replace("boxVisible", "boxHidden");
            frames_skill.classList.replace("boxVisible", "boxHidden");
            backend_skill.classList.replace("boxVisible", "boxHidden");
        }
        const viewBtns = () => {
            html_arrow.classList.replace("btn_hidden", "skill_btn");
            sass_arrow.classList.replace("btn_hidden", "skill_btn");
            design_arrow.classList.replace("btn_hidden", "skill_btn");
            js_arrow.classList.replace("btn_hidden", "skill_btn");
            frames_arrow.classList.replace("btn_hidden", "skill_btn");
            backend_arrow.classList.replace("btn_hidden", "skill_btn");
        }

        html_btn.addEventListener("click", () => {
            switchClass();
            html_skill.classList.replace("boxHidden", "boxVisible");
            viewBtns();
            html_arrow.classList.replace("skill_btn", "btn_hidden");
        });
        sass_btn.addEventListener("click", () => {
            switchClass();
            sass_skill.classList.replace("boxHidden", "boxVisible");
            viewBtns();
            sass_arrow.classList.replace("skill_btn", "btn_hidden");
        });
        design_btn.addEventListener("click", () => {
            switchClass();
            design_skill.classList.replace("boxHidden", "boxVisible");
            viewBtns();
            design_arrow.classList.replace("skill_btn", "btn_hidden");
        });
        js_btn.addEventListener("click", () => {
            switchClass();
            js_skill.classList.replace("boxHidden", "boxVisible");
            viewBtns();
            js_arrow.classList.replace("skill_btn", "btn_hidden");
        });
        frames_btn.addEventListener("click", () => {
            switchClass();
            frames_skill.classList.replace("boxHidden", "boxVisible");
            viewBtns();
            frames_arrow.classList.replace("skill_btn", "btn_hidden");
        });
        backend_btn.addEventListener("click", () => {
            switchClass();
            backend_skill.classList.replace("boxHidden", "boxVisible");
            viewBtns();
            backend_arrow.classList.replace("skill_btn", "btn_hidden");
        });
    }

    changeTabs();

    const close = getById("close");
    close.addEventListener('click', () => {pop_up_element.innerHTML = ""});
}

const getSkills = getById("getSkills");
getSkills.addEventListener('click', createSkills);




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
/*
    const video_content = `
    <div class="tv_box">
        <video class="video_player" id="video" src="assets/video/Company.m4v" controls></video>
    </div>
    <div class="tv_subtext">
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
*/
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