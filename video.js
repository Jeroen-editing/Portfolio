/* Get our elements +++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

const activateVideo = () => {
    //const player = document.querySelector('.tv__box');
    const player = getById("video_player");
    const video = getById("video");
    const controlBar = player.querySelector('.player_controls');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress_filled');
    const toggle = player.querySelector('.toggle');
    const skipButtons = player.querySelectorAll('[data-skip]');
    const ranges = player.querySelectorAll('.player_slider');

    const fulscreen = player.querySelector('.fullscreen');

    /* Our functions ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

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
        // this.dataset.skip is passing a string so need to convert to a number or float
        // in tutorial he use parseFloat, but Number also works
        // console.log(video.currentTime + '/' + this.dataset.skip);
    }

    function handleRangeUpdate() {
        video[this.name] = this.value;
    }

    function handleProgress() {
        const precent = (video.currentTime / video.duration) * 100;
        progressBar.style.flexBasis = `${precent}%`;
    }
    // console.log(progress);

    function scrub(e) {
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
        // console.log(scrubTime);
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

    /* Hook up the event listeners ++++++++++++++++++++++++++++++++++++++++++++ */

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
    // classic code
    // progress.addEventListener('mousemove', () => {
    //     if(mousedown) {
    //         scrub();
    //     }
    // });
    // short arrowfunction
    progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
    progress.addEventListener('mousemove', () => mousedown = true);
    progress.addEventListener('mousedown', () => mousedown = true);

    fulscreen.addEventListener('click', fullscreenMode);
}