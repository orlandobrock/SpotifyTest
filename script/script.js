var vid = document.getElementById("videoe");
var playButton = document.getElementById("buttonPlay");
var tocando = false;
var currentTime = document.getElementById('current_time');
var fullTime = document.getElementById('fullDuration');
var repetir = document.getElementById('buttonRepeat');
var repeat = false;
vid.addEventListener("loadedmetadata", function () {
    var mim = parseInt(vid.duration/60);
    var sec = parseInt(vid.duration%60);
    fullTime.innerHTML = mim + ":" + sec;
});


repetir.addEventListener('click', btnreap, false);
playButton.addEventListener('click', StartVideo, false);
function StartVideo(){
    if (tocando == false){
        vid.play();
        playButton.src = "/image/Player/stop.png";
        tocando = true;
        updatetime = setInterval(update, 500);
    }else{
        vid.pause();
        playButton.src = "/image/Player/play.png";
        tocando = false;
        window.clearInterval(updatetime);
    }

}
function update(){
    if(!vid.ended){
        var playedMim = parseInt(vid.currentTime/60);
        var playedSec = parseInt(vid.currentTime%60);
        currentTime.innerHTML = playedMim + ":" + playedSec;
    }else{
        currentTime = 0.00;
    }
    if(vid.ended){
        repeate();  
    }
}
function repeate(){
    if (repeat && vid.ended){
        currentTime.innerHTML = 0 + ":" + 00;
        vid.play();
    }
}
function btnreap(){
    if(repeat){
        repeat = false;
    }else{
        repeat = true;
    }
}
