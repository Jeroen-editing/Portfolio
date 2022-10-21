/*
const activateVideo = () => {
    const player = getById("video_player");
    const video = getById("video");
    //const controlBar = player.querySelector('.player_controls');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress_filled');
    const toggle = player.querySelector('.toggle');
    const skipButtons = player.querySelectorAll('[data-skip]');
    const ranges = player.querySelectorAll('.player_slider');

    const fulscreen = player.querySelector('.fullscreen');

    function togglePlay() {
        const method = video.paused ? 'play' : 'pause';
        video[method]();
    }
    function updatePlayButton() {
        const icon = this.paused ? '❚ ❚' : '▶';
        toggle.textContent = icon;

        const buttonColor = this.paused ? (toggle.style.background='rgba(103,0,0,0.22)') : (toggle.style.background='rgba(10,62,77,0.4)');
        toggle.innerContent = buttonColor;
    }
    function skip() {
        video.currentTime += parseFloat(this.dataset.skip);
    }
    function handleRangeUpdate() {
        video[this.name] = this.value;
    }
    function handleProgress() {
        const precent = (video.currentTime / video.duration) * 100;
        progressBar.style.flexBasis = `${precent}%`;
    }
    function scrub(e) {
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }

    fulscreen.innerHTML = '<img class="fullscreenIcon" src="./assets/icons/full-screen-1-white.png" height="8px" width="8px" alt="">';

    function fullscreenMode() {
        fulscreen.innerHTML = '';
        fulscreen.innerHTML = '<img class="fullscreenIcon" src="./assets/icons/full-screen-exit-white.png" height="8px" width="8px" alt="">';
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { 
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { 
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { 
            video.msRequestFullscreen();
        }
    }

    video.addEventListener('click', togglePlay);
    video.addEventListener('keydown', togglePlay);
    video.addEventListener('play', updatePlayButton);
    video.addEventListener('pause', updatePlayButton);

    video.addEventListener('timeupdate', handleProgress);

    toggle.addEventListener('click', togglePlay);

    skipButtons.forEach(button => button.addEventListener('click', skip));

    ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
    ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

    let mousedown = false;
    progress.addEventListener('click', scrub);
    
    progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
    progress.addEventListener('mousemove', () => mousedown = true);
    progress.addEventListener('mousedown', () => mousedown = true);

    fulscreen.addEventListener('click', fullscreenMode);
}
*/

const createVideo = () => {
    const tv = new Chapter();

    const tv_content = `
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
            I made this video for a presentation in school (Becode) about film in websites.
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

    tv.title = `${titleClass}Video editing</h3>${closeButton}</div>`;
    tv.content = `${tvClass}${tv_content}</div>`;
    tv.pop_up = `${popupClass}${tv.getTitle()}${tv.getContent()}</section>`;

    pop_up_element.innerHTML = `${tv.getPopup()}`;

    //activateVideo();
    /******************************************************************************/
    /************** video *********************************************************/

    const player = getById("video_player");
    const video = getById("video");
    //const controlBar = player.querySelector('.player_controls');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress_filled');
    const toggle = player.querySelector('.toggle');
    const skipButtons = player.querySelectorAll('[data-skip]');
    const ranges = player.querySelectorAll('.player_slider');

    const fulscreen = player.querySelector('.fullscreen');

    function togglePlay() {
        const method = video.paused ? 'play' : 'pause';
        video[method]();
    }
    function updatePlayButton() {
        const icon = this.paused ? '❚ ❚' : '▶';
        toggle.textContent = icon;

        const buttonColor = this.paused ? (toggle.style.background='rgba(103,0,0,0.22)') : (toggle.style.background='rgba(10,62,77,0.4)');
        toggle.innerContent = buttonColor;
    }
    function skip() {
        video.currentTime += parseFloat(this.dataset.skip);
    }
    function handleRangeUpdate() {
        video[this.name] = this.value;
    }
    function handleProgress() {
        const precent = (video.currentTime / video.duration) * 100;
        progressBar.style.flexBasis = `${precent}%`;
    }
    function scrub(e) {
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }

    fulscreen.innerHTML = '<img class="fullscreenIcon" src="./assets/icons/full-screen-1-white.png" height="8px" width="8px" alt="">';

    function fullscreenMode() {
        fulscreen.innerHTML = '';
        fulscreen.innerHTML = '<img class="fullscreenIcon" src="./assets/icons/full-screen-exit-white.png" height="8px" width="8px" alt="">';
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { /* Firefox */
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE/Edge */
            video.msRequestFullscreen();
        }
    }

    video.addEventListener('click', togglePlay);
    video.addEventListener('keydown', togglePlay);
    video.addEventListener('play', updatePlayButton);
    video.addEventListener('pause', updatePlayButton);

    video.addEventListener('timeupdate', handleProgress);

    toggle.addEventListener('click', togglePlay);

    skipButtons.forEach(button => button.addEventListener('click', skip));

    ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
    ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

    let mousedown = false;
    progress.addEventListener('click', scrub);
    
    progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
    progress.addEventListener('mousemove', () => mousedown = true);
    progress.addEventListener('mousedown', () => mousedown = true);

    fulscreen.addEventListener('click', fullscreenMode);
    /************** video *********************************************************/
    /******************************************************************************/

    const close = getById("close");
    close.addEventListener('click', () => {
        togglePlay();
        pop_up_element.classList.replace("box_visible", "box_hidden");
        show_info_sect.classList.replace("box_hidden", "box_visible");
        show_proj_sect.classList.replace("box_hidden", "box_visible");
    });
}

const getTv = getById("getVideo");
const tv_arrow = getById('video_arrow');
getTv.addEventListener("click", () => {
    show_info_sect.classList.replace("box_visible", "box_hidden");
    show_proj_sect.classList.replace("box_visible", "box_hidden");
    pop_up_element.classList.replace("box_hidden", "box_visible");
    createVideo()
});
getTv.addEventListener('mouseover', () => {
    tv_arrow.src = 'assets/icons/arrow_right_white.png';
});
getTv.addEventListener('mouseout', () => {
    tv_arrow.src = 'assets/icons/arrow_right.png';
});