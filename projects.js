class Projects {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.pop_over = this.pop_over;

        this.getTitle = () => {return this.title;}
        this.getContent = () => {return this.content;}
        this.getPopover = () => {return this.pop_over;}
    }
}

const open_projects_chapters = () => {


    let pop_over_element = getById("popOver");
    let popoverClass = `<section class="popover_window">`;
    let projects_titleClass = `<div class="projects_title_box"><h3 class="projects_title">`;
    let closeProjectsBtn = `<section class="close_button" id="closeProjects">
                                <button>
                                    <img src="assets/icons/close_white.png" class="close_x">
                                </button>
                            </section>`;
    let projectsClass = `<div class="projects_content">`;


    const checkWindowWidth =  () => {
        let width = window.innerWidth;

        const pcLinks = document.querySelectorAll(".pc_link");
        const replace = `<p class="replace_text">Only suitable for laptop / big screen!</p>`;

        if (width < 1280 ) {
            pcLinks.forEach((item) => {
                item.classList.replace('link_box', 'replace_box');
                item.innerHTML = '';
                item.innerHTML = replace;
            });
        }
    }

    const openHtmlCssProjects = () => {
        const htmlCss = new Projects();

        const htmlCss_content = `
        <div class="proj_box">
            <header class="proj_title_box" id="tributeBtn">
                <h4 class="proj_title">Tribute page / Biography</h4>
            </header>
            <section class="proj_content">
                <h5 class="proj_subtitle">The basic elements</h5>
                <p class="proj_text">Excercise from the 'freeCodeCamp' portfolio projects.</p>
                <p class="proj_text">Simple text-element positionings.</p>
                <footer class="link_box">
                    <a class="proj_link" href="https://jeroen-editing.github.io/freeCodeCamp/tribute_page/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
        </div>
        <div class="proj_box">
            <header class="proj_title_box" id="techpageBtn">
                <h4 class="proj_title">Technical info page</h4>
            </header>
            <section class="proj_content pc_proj">
                <h5 class="proj_subtitle">The basic elements & inline links</h5>
                <p class="proj_text">Excercise from the 'freeCodeCamp' portfolio projects.</p>
                <p class="proj_text">Simple text-element positionings.</p>
                <footer class="link_box pc_link">
                    <a class="proj_link" href="https://jeroen-editing.github.io/freeCodeCamp/technical_docu_page/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
        </div>
        <div class="proj_box">
            <header class="proj_title_box" id="companyBtn">
                <h4 class="proj_title">Company / product pages</h4>
            </header>
            <section class="proj_content pc_proj">
                <h5 class="proj_subtitle">Design company</h5>
                <p class="proj_text">Excercise from 'Becode', a full stack (practical) course.</p>
                <p class="proj_text">First SASS excersise.</p>
                <footer class="link_box spec_link pc_link">
                    <a class="proj_link" href="https://jeroen-editing.github.io/challenge-css-sass/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
            <section class="proj_content pc_proj proj_middle">
                <h5 class="proj_subtitle">Audio company</h5>
                <p class="proj_text">Excercise from 'Becode', a full stack (practical) course.</p>
                <p class="proj_text">Positioning elements.</p>
                <footer class="link_box spec_link pc_link">
                    <a class="proj_link" href="https://jeroen-editing.github.io/freeCodeCamp/product_landing_page/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
            <section class="proj_content pc_proj">
                <h5 class="proj_subtitle">Resto</h5>
                <p class="proj_text">Excercise from the 'freeCodeCamp' portfolio projects</p>
                <p class="proj_text">Titles, email-input, hyperlinks, photo's, lists,...</p>
                <footer class="link_box pc_link">
                    <a class="proj_link" href="https://jeroen-editing.github.io/challenge-restaurant/">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
        </div>
        <div class="proj_box">
            <header class="proj_title_box" id="appleBtn">
                <h4 class="proj_title">Backgrounds & gradients</h4>
            </header>
            <section class="proj_content pc_proj">
                <h5 class="proj_subtitle">The (old) Apple indexpage</h5>
                <p class="proj_text">Excercise from 'the Odin project' a full stack internet course.</p>
                <p class="proj_text">With navbar and backgrounds. Positioning elements.</p>
                <footer class="link_box pc_link">
                    <a class="proj_link" href="https://jeroen-editing.github.io/the_odin_project/Html&Css/5_backgrounds&gradients/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
        </div>
        <div class="proj_box">
            <header class="proj_title_box" id="googleBtn">
                <h4 class="proj_title">Google page</h4>
            </header>
            <section class="proj_content pc_proj">
                <h5 class="proj_subtitle">First version</h5>
                <p class="proj_text">Excercise from 'the Odin project' a full stack internet course.</p>
                <p class="proj_text">The basic structure.</p>
                <footer class="link_box spec_link pc_link">
                    <a class="proj_link" href="https://jeroen-editing.github.io/google_homepage/theOdinProject_version/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
            <section class="proj_content pc_proj proj_middle">
                <h5 class="proj_subtitle">Personal version</h5>
                <p class="proj_text">Based on the prvious excercise.</p>
                <p class="proj_text">Basic layout with personal graphics.</p>
                <footer class="link_box spec_link pc_link">
                    <a class="proj_link" href="https://jeroen-editing.github.io/google_homepage/my_restyled_version/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
            <section class="proj_content pc_proj">
                <h5 class="proj_subtitle">Second version</h5>
                <p class="proj_text">Excercise from 'the Odin project' a full stack internet course.</p>
                <p class="proj_text">Shows suggestions for your favourits and most visited websites.</p>
                <footer class="link_box pc_link">
                    <a class="proj_link" href="https://jeroen-editing.github.io/google_homepage/my_JS_version/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
        </div>
        <div class="proj_box">
            <header class="proj_title_box" id="timesBtn">
                <h4 class="proj_title">New York Times web-page</h4>
            </header>
            <section class="proj_content pc_proj">
                <h5 class="proj_subtitle">More complex positiong of html elements (flex & grid).</h5>
                <p class="proj_text">Excercise from 'the Odin project' a full stack internet course.</p>
                <p class="proj_text">
                    Like in most excersise I did, I adapted some personal features.
                    Like text pop-ups with scrolling up or down.
                </p>
                <footer class="link_box pc_link">
                    <a class="proj_link" href="https://jeroen-editing.github.io/the_odin_project/Html&Css/4_positioning/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
        </div>
        <div class="proj_box">
            <header class="proj_title_box" id="youtubeBtn">
                <h4 class="proj_title">Youtube page</h4>
            </header>
            <section class="proj_content pc_proj">
                <h5 class="proj_subtitle">More complex positioning with hyperlinks, text, lists, navbars,...</h5>
                <p class="proj_text">Excercise from 'the Odin project' a full stack internet course.</p>
                <p class="proj_text">I added extra JS-functions (like for a hidden navbar,...).</p>
                <footer class="link_box pc_link">
                    <a class="proj_link" href="https://jeroen-editing.github.io/the_odin_project/Html&Css/2_youtubepage/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
        </div>
        <div class="proj_box">
            <header class="proj_title_box" id="formsBtn">
                <h4 class="proj_title">Forms</h4>
            </header>
            <section class="proj_content pc_proj">
                <h5 class="proj_subtitle">Survey Form</h5>
                <p class="proj_text">Excercise from the 'freeCodeCamp' portfolio projects.</p>
                <p class="proj_text">A simple form with some extra styling.</p>
                <footer class="link_box spec_link pc_link">
                    <a class="proj_link" href="https://jeroen-editing.github.io/freeCodeCamp/survey_form/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
            <section class="proj_content pc_proj proj_bottom">
                <h5 class="proj_subtitle">Contact Form</h5>
                <p class="proj_text">Excercise from 'the Odin project' a full stack internet course.</p>
                <p class="proj_text">A more complex form with a pop-up list and some css-animations.</p>
                <footer class="link_box pc_link_more">
                    <a class="proj_link" href="https://jeroen-editing.github.io/the_odin_project/Html&Css/3_form/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
        </div>
        <div class="proj_box">
            <header class="proj_title_box" id="multipageBtn">
                <h4 class="proj_title">Multipage websites</h4>
            </header>
            <section class="proj_content pc_proj">
                <h5 class="proj_subtitle">Event website</h5>
                <p class="proj_text">Excercise from the 'Odin project' a full stack internet course.</p>
                <p class="proj_text">
                    Event page with time-shedules, speakers info, locations maps and register page.
                    Including all important html elements.
                </p>
                <footer class="link_box spec_link pc_link">
                    <a class="proj_link" href="https://jeroen-editing.github.io/the_odin_project/Html&Css/1_multipage/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
            <section class="proj_content pc_proj proj_bottom">
                <h5 class="proj_subtitle">Company website</h5>
                <p class="proj_text">Group-project from 'Becode', a full stack (practical) course.</p>
                <p class="proj_text">
                    Company page with 2 technical pages, an event page and a form.
                    I made the last page with a double (layerd) form.
                </p>
                <footer class="link_box pc_link">
                    <a class="proj_link" href="https://jeroen-editing.github.io/CHIP/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
        </div>
        <div class="proj_box bottom_box">
            <header class="proj_title_box" id="mobileBtn">
                <h4 class="proj_title">A restaurant guide</h4>
            </header>
            <section class="proj_content">
                <h5 class="proj_subtitle">"Mobile first" concept and responsiveness</h5>
                <p class="proj_text">Excercise from 'the Odin project' a full stack internet course.</p>
                <p class="proj_text">Not only changing the size but also the position of html-elements on deifferent devices.</p>
                <footer class="link_box">
                    <a class="proj_link" href="https://jeroen-editing.github.io/the_odin_project/Html&Css/6_responsiveness/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
        </div>`;

        htmlCss.title = `${projects_titleClass}Html & Css projects</h3>${closeProjectsBtn}</div>`;
        htmlCss.content = `${projectsClass}${htmlCss_content}</div>`;
        htmlCss.pop_over = `${popoverClass}${htmlCss.getTitle()}${htmlCss.getContent()}</section>`;

        pop_over_element.innerHTML = `${htmlCss.getPopover()}`;

        checkWindowWidth();

        const close = getById('closeProjects');
        close.addEventListener('click', () => {
            pop_over_element.classList.replace("box_visible", "box_hidden");
            pop_up_element.classList.replace("box_hidden", "box_visible");
        });
    }

    const showHtmlCss = getById('showHtmlCss');
    const htmlCss_arrow = getById('htmlCss_arrow');
    showHtmlCss.addEventListener('click', () => {
        pop_up_element.classList.replace("box_visible", "box_hidden");
        pop_over_element.classList.replace("box_hidden", "box_visible");
        openHtmlCssProjects();
    });
    showHtmlCss.addEventListener('mouseover', () => {
        htmlCss_arrow.src = 'assets/icons/arrow_right_white.png';
    });
    showHtmlCss.addEventListener('mouseout', () => {
        htmlCss_arrow.src = 'assets/icons/arrow_right.png';
    });


    const openJsProjects = () => {
        const javaScript = new Projects();

        const javaScript_content = `
        <div class="proj_box">
            <header class="proj_title_box" id="calenderBtn">
                <h4 class="proj_title">Simple Calender</h4>
            </header>
            <section class="proj_content">
                <h5 class="proj_subtitle">Basic Vanilla JavaScript, not based on JS date functions</h5>
                <p class="proj_text">
                    I've put this simple excercise on my portfolio because I wanne upgrade it soon.
                </p>
                <p class="proj_text">
                    Now I know how to work with the 'New Date()' method, I can make it work
                    for all future years.
                </p>
                <footer class="link_box">
                    <a class="proj_link" href="/calender/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
        </div>
        <div class="proj_box">
            <header class="proj_title_box" id="gameBtn">
                <h4 class="proj_title">Rock Paper Scissors</h4>
            </header>
            <section class="proj_content">
                <h5 class="proj_subtitle">Simple game with Vanilla JavaScript</h5>
                <p class="proj_text">Excercise for 'the Odin Project'.</p>
                <p class="proj_text">JavaScript HTML DOM events.</p>
                <footer class="link_box">
                    <a class="proj_link" href="https://jeroen-editing.github.io/Rock_Paper_Scissors/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
        </div>
        <div class="proj_box bottom_box">
            <header class="proj_title_box" id="calculatorBtn">
                <h4 class="proj_title">Calculators</h4>
            </header>
            <section class="proj_content">
                <h5 class="proj_subtitle">Simple Calculator</h5>
                <p class="proj_text">Excercise for 'the Odin Project'.</p>
                <p class="proj_text">Html based layout and basic JavaScript.</p>
                <footer class="link_box spec_link">
                    <a class="proj_link" href="">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
            <section class="proj_content proj_bottom">
                <h5 class="proj_subtitle">Scientific Calculator</h5>
                <p class="proj_text">Personal (ongoing) Project.</p>
                <p class="proj_text">Layout rendered with JavaScript. More complex functions.</p>
                <footer class="link_box">
                    <a class="proj_link" href="">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>    
                    </a>
                </footer>
            </section>
        </div>`;

        javaScript.title = `${projects_titleClass}JavaScript projects</h3>${closeProjectsBtn}</div>`;
        javaScript.content = `${projectsClass}${javaScript_content}</div>`;
        javaScript.pop_over = `${popoverClass}${javaScript.getTitle()}${javaScript.getContent()}</section>`;

        pop_over_element.innerHTML = `${javaScript.getPopover()}`;

        const close = getById('closeProjects');
        close.addEventListener('click', () => {
            pop_over_element.classList.replace("box_visible", "box_hidden");
            pop_up_element.classList.replace("box_hidden", "box_visible");
        });
    }

    const showJavaScript = getById('showJs');
    const js_arrow = getById('js_arrow')
    showJavaScript.addEventListener("click", () => {
        pop_up_element.classList.replace("box_visible", "box_hidden");
        pop_over_element.classList.replace("box_hidden", "box_visible");
        openJsProjects()
    });
    showJavaScript.addEventListener('mouseover', () => {
        js_arrow.src = 'assets/icons/arrow_right_white.png';
    });
    showJavaScript.addEventListener('mouseout', () => {
        js_arrow.src = 'assets/icons/arrow_right.png';
    });


    const openFetchProjects = () => {
        const fetch = new Projects();

        const fetch_content = `
        <div class="proj_box">
            <header class="proj_title_box" id="calenderBtn">
                <h4 class="proj_title">Weather app</h4>
                
            </header>
            <section class="proj_content">
                <h5 class="proj_subtitle">With geolacation or when disabled a location input form</h5>
                <p class="proj_text">
                    Personal version with double fetch, based on an excercise from Becode.
                </p>
                <p class="proj_text">
                    If you or your browser don't allow geolocation, you will be redericted to an 
                    input form to add your location.
                </p>
                <p class="proj_text">I used Bootstrap to make it responsive.</p>
                <footer class="link_box">
                    <a class="proj_link" href="https://jeroen-editing.github.io/weather_api/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
        </div>
        <div class="proj_box">
            <header class="proj_title_box" id="gameBtn">
                <h4 class="proj_title">Pokedex - Game info app</h4>
            </header>
            <section class="proj_content">
                <h5 class="proj_subtitle">With multiple, layered fetches</h5>
                <p class="proj_text">
                    Project based on a group-project from Becode. In stead of fixing the bugs, I made a personal 
                    version with some extras.
                </p>
                <p class="proj_text">
                    The task was to use a layered fetches, without a button or extra events, to get the evolutions 
                    from a pokemon. So only for styling purposes (= layout restrictions), I do use a button to show 
                    the evolutions, but the 3 fetches are all done automatically. Also to show the habitat and to 
                    check if the specie has any evolutions. (So the button will switch to a message and fade out if 
                    there aren't any.)
                </p>
                <footer class="link_box">
                    <a class="proj_link" href="https://jeroen-editing.github.io/Pokedex/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
        </div>
        <div class="proj_box bottom_box">
            <header class="proj_title_box" id="calculatorBtn">
                <h4 class="proj_title">Smart Fridge</h4>
            </header>
            <section class="proj_content">
                <h5 class="proj_subtitle">Cooking app with ingredients from your fridge</h5>
                <p class="proj_text">
                    Personal version, based on an excercise from Becode, made with 'mobile first' and Bootstrap.
                </p>
                <p class="proj_text">
                    We won a class contest with it, but it had bugs in the functionality (JS), the responsiveness and 
                    positioning of some elements. You couldn't make a search for a second ingredient, undo your choice, 
                    refresch the window without relaoding the page, view more recipes,...
                </p>
                <p class="proj_text">
                    I fixed all the bugs in the functionality and added some extra's to show the ingrediensts and 
                    recipe instructions. You can also do more ingredient searches now or refresh your choices.
                </p>
                <p class="proj_text">
                    And now you see 4 recipes (randomly). 2 as our chefs choices and 2 extra, when clicking the button.
                    Also you can skip back and forward between those recipes without making new fetches each time.
                    To make it easy and to make it possible to extend this to more recipes, I used JS-Objects.
                    And learned myself JS ES6.
                </p>
                <p class="proj_text special_text">
                    I still need to do some style details and parts of the responsivness.
                    And I want to add 4 extra recipes. The planning/code for that is done so I just need to implement it.
                </p>
                <footer class="link_box">
                    <a class="proj_link" href="https://jeroen-editing.github.io/smart-fridge-app/index.html">
                        <p class="link_text">Open project</p>
                        <p class="link_arrow"></p>
                    </a>
                </footer>
            </section>
        </div>`;

        fetch.title = `${projects_titleClass}Fetch() projects</h3>${closeProjectsBtn}</div>`;
        fetch.content = `${projectsClass}${fetch_content}</div>`;
        fetch.pop_over = `${popoverClass}${fetch.getTitle()}${fetch.getContent()}</section>`;

        pop_over_element.innerHTML = `${fetch.getPopover()}`;

        const close = getById("closeProjects");
        close.addEventListener('click', () => {
            pop_over_element.classList.replace("box_visible", "box_hidden");
            pop_up_element.classList.replace("box_hidden", "box_visible");
        });
    }

    const showFetch = getById("showFetch");
    const fetch_arrow = getById('fetch_arrow');
    showFetch.addEventListener("click", () => {
        pop_up_element.classList.replace("box_visible", "box_hidden");
        pop_over_element.classList.replace("box_hidden", "box_visible");
        openFetchProjects()
    });
    showFetch.addEventListener('mouseover', () => {
        fetch_arrow.src = 'assets/icons/arrow_right_white.png';
    });
    showFetch.addEventListener('mouseout', () => {
        fetch_arrow.src = 'assets/icons/arrow_right.png';
    });
}