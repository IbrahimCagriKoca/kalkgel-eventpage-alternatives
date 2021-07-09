function getTicket() {
    window.open("https://biletino.com/tr/e-7hg/kalkgel/");
}

function csTwitch() {
    window.open("https://www.twitch.tv/cansungur");
}
function csYoutube() {
    window.open("https://www.youtube.com/channel/UC6q0eGHt5euC8aYLDjhaHpA");
}
function csFacebook() {
    window.open("https://www.facebook.com/gaming/csnaber");
}
function csInstagram() {
    window.open("https://www.instagram.com/csnaber/");
}
function csTwitter() {
    window.open("https://twitter.com/csnaber");
}

function pandaTwitch() {
    window.open("https://www.twitch.tv/pintipanda");
} function pandaYoutube() {
    window.open("https://www.youtube.com/user/TalentedMrReplay");
} function pandaFacebook() {
    window.open("https://www.facebook.com/gaming/pintipanda/");
} function pandaInstagram() {
    window.open("https://www.instagram.com/pintipanda/");
} function pandaTwitter() {
    window.open("https://twitter.com/pintipanda");
}

function meteTwitch() {
    window.open("https://www.twitch.tv/eastergamerstv");
} function meteYoutube() {
    window.open("https://www.youtube.com/user/EasterGamersTv");
} function meteFacebook() {
    window.open("https://www.facebook.com/gaming/eastergamers");
} function meteInstagram() {
    window.open("https://www.instagram.com/metmellow/");
} function meteTwitter() {
    window.open("https://twitter.com/Metmellow");
}

function pelinTwitch() {
    window.open("https://www.twitch.tv/pqueen");
} function pelinYoutube() {
    window.open("https://www.youtube.com/channel/UCxwPixDIOYYy4Qfk1X7I__g");
} function pelinInstagram() {
    window.open("https://www.instagram.com/pqueen92/");
} function pelinTwitter() {
    window.open("https://twitter.com/pqueenn");
}

function gunhanTwitch() {
    window.open("https://www.twitch.tv/mertgunhan");
} function gunhanYoutube() {
    window.open("https://www.youtube.com/user/FoolArcana");
} function gunhanInstagram() {
    window.open("https://www.instagram.com/instagunhan/");
} function gunhanTwitter() {
    window.open("https://twitter.com/mertgunhan");
}

function turgutTwitch() {
    window.open("https://www.twitch.tv/turgutuc");
} function turgutYoutube() {
    window.open("https://www.youtube.com/user/turg69");
} function turgutInstagram() {
    window.open("https://www.instagram.com/sutdokmusjedi/");
} function turgutTwitter() {
    window.open("https://twitter.com/turgutuc");
}

function tancanTwitch() {
    window.open("https://www.twitch.tv/tancan");
} function tancanYoutube() {
    window.open("https://www.youtube.com/channel/UCpjqxzLq7dpP719dlmx5N7g");
} function tancanInstagram() {
    window.open("https://www.instagram.com/tancanfumen/");
} function tancanTwitter() {
    window.open("https://twitter.com/TancanFumen");
}

function quaTwitch() {
    window.open("https://www.twitch.tv/quanaril");
} function quaYoutube() {
    window.open("https://www.youtube.com/user/TheQuanaril");
} function quaInstagram() {
    window.open("https://www.instagram.com/thequanaril/");
} function quaTwitter() {
    window.open("https://twitter.com/thequanaril");
}

function boslukTwitch() {
    window.open("https://www.twitch.tv/bosluk");
} function boslukYoutube() {
    window.open("https://www.youtube.com/user/boslukTiVi");
} function boslukInstagram() {
    window.open("https://www.instagram.com/oncu_ilker/");
} function boslukTwitter() {
    window.open("https://twitter.com/boslukcpl");
}

function cerenTwitch() {
    window.open("https://www.twitch.tv/acemi_filozof");
} function cerenYoutube() {
    window.open("https://www.youtube.com/channel/UCIvykQC_8j2-u2D6A_c1K9w");
} function cerenInstagram() {
    window.open("https://www.instagram.com/acemi_filozof/");
} function cerenTwitter() {
    window.open("https://twitter.com/cerentheacemi");
}

function kalkgelYoutube() {
    window.open("https://www.youtube.com/channel/UCltQSA3LVUeV26ncQhbf0qw");
} function kalkgelInstagram() {
    window.open("https://www.instagram.com/kalkgelofficial/");
} function kalkgelTwitter() {
    window.open("https://twitter.com/kalkgelofficial");
} function kalkgelFacebook() {
    window.open("https://www.facebook.com/kalkgelofficial/");
}

const galleryModal = document.getElementById("gallery-modal");
const galleryVideo = document.getElementById("last-event-video");
const galleryButton = document.getElementById("gallery-button");
const reachModal = document.getElementById("reach-us-modal");
const reachButton = document.getElementById("reach-us");
const reachClose = document.getElementById("reach-close");
const rulesModal = document.getElementById("rules-modal");
const rulesButton = document.getElementById("rules");
const rulesClose = document.getElementById("rules-close");

const showIt = (something) => {
    something.style.display = "block";
}

const hideIt = (something) => {
    something.style.display = "none";
}

reachButton.onclick = () => showIt(reachModal);
reachClose.onclick = () => hideIt(reachModal);
rulesButton.onclick = () => showIt(rulesModal);
rulesClose.onclick = () => hideIt(rulesModal);
galleryButton.onclick = () => {
    showIt(galleryModal);
    galleryVideo.play();
}

window.onclick = function (event) {
    if (event.target == galleryModal) {
        if (!galleryVideo.paused) {
            galleryVideo.pause();
        }
        galleryModal.style.display = "none";
    }
    if (event.target == rulesModal) {
        rulesModal.style.display = "none";
    }
    if (event.target == reachModal) {
        reachModal.style.display = "none";
    }
}