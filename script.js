let video  = document.querySelector(".video");

function select(callerId) {
    let caller = document.querySelector(`#${callerId}`);
    let videoToPlay = (caller.innerText).toLowerCase();
    // video.requestFullscreen();
    video.style.animation = "video .3s ease-in-out forwards";
    video.querySelector("#title").innerHTML = caller.innerText;
    console.log(videoToPlay);
    switch (videoToPlay) {
        case "eloquent":
            playback.src = "https://drive.google.com/file/d/1tNxTIgjl3h78r1TK3hSlXKPa7kvfuOXD/preview";
            break;

        case "high interaction\nskills":
            playback.src = "https://drive.google.com/file/d/1rq8jm6tkvfnzZlbR3sE4Sn2Ni_tQjKr2/preview";
            break;
    
        case "science\nfair winners":
            playback.src = "https://drive.google.com/file/d/15AnkK1UNvruMZHbv1FbFuJUKnyRgFgXs/preview";
            break;

        case "leadership":
            playback.src = "https://drive.google.com/file/d/15SuCu4E2MRtXisRe09lyPIdyX7F6MQG4/preview";
            break;

        case "co-operative":
            playback.src = "https://drive.google.com/file/d/1HQu8XPYqeiAO65j0_0ERtYwnOS_NdG5Y/preview";
            break;
        
        case "critical & logical\nthinking":
            playback.src = "https://drive.google.com/file/d/1nwC9tfOsXiDeZTJj7LPT0923fMw5xWPC/preview";
            break;

        case "artistic":
            playback.src = "https://drive.google.com/file/d/1SbBYOvrAYRs0woOxfueFUz3CM87-VCW-/preview";
            break;

        case "most improved":
            playback.src = "https://drive.google.com/file/d/1lxc6lcicVNXP1fxPqMLkOR9DO5lu8HCu/preview";
            break;

        case "hard workers":
            playback.src = "https://drive.google.com/file/d/1D4Fp-dg8Z8BTOHpaBMWoCBFkysvrrR6g/preview";
            break;

        case "outstanding":
            playback.src = "https://drive.google.com/file/d/1vH67NXLnTxnHUw3pD3plSuTcHtYT675j/preview";
            break;

        default:
            playback.src = "";
            break;
    }
}

function hide() {
    video.style.animation = "video-close 0.15s ease-out forwards";
    // document.exitFullscreen();
}

function gateOpen(selfId) {
    let img = document.querySelector(`#${selfId}`);
    img.src = "resources/images/gateopen.png";
    img.parentElement.getElementsByTagName("p")[0].style.fontSize = "1.25em";
}

function gateClose(selfId) {
    let img = document.querySelector(`#${selfId}`);
    img.src = "resources/images/gateclose.png";
}

