var playBtn = document.getElementById('playBtn')
var stopBtn = document.getElementById('stopBtn')
var volumeBtn = document.getElementById('volumeBtn')

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#dde5ec',
    progressColor: '#03cebf',
    barWidth: 4,
    height: 90,
    responsive: true,
    hideScrollbar: true,
    barRadius: 4
});

wavesurfer.load('media/mercy-badshah.mp3');


playBtn.onclick = function () {
  wavesurfer.playPause();
  if(playBtn.src.includes('play.png')){
    playBtn.src = 'media/pause.png'
  } else{
    playBtn.src = 'media/play.png'
  }
}
stopBtn.onclick = function () {
  wavesurfer.stop();
  playBtn.src = 'media/play.png'
}
volumeBtn.onclick = function () {
  wavesurfer.toggleMute();
   if(volumeBtn.src.includes('volume.png')){
    volumeBtn.src = 'media/mute.png'
  } else{
    volumeBtn.src = 'media/volume.png'
  }
}

wavesurfer.on('finish', function () {
    playBtn.src = 'media/play.png';
    wavesurfer.stop();
});

