  var video = document.getElementById("mainvid");
  var playIcon = document.getElementById('lg-play-icon');
  video.addEventListener("click", function () {
  Play();
  })

  playIcon.addEventListener("click", function () {
    Play();
    })
  function Play(){
  
    if (video.paused) {
      video.play();
      playIcon.style.display = "none";
    }
    else {
      video.pause();
      playIcon.style.display = "block";
    }
}

video.onended = function () {
    playIcon.style.display = "block";
  };


    