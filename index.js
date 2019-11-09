import './styles.scss';

// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
window.onYouTubeIframeAPIReady = function() {
  window.player = new window.YT.Player('player', {
    videoId: '93l4imrphN0',
    playerVars: {
      enablejsapi: 1,
      autoplay: 0,
      autohide: 1,
      disablekb: 1,
      controls: 0,
      modestbranding: 1,
      playlist: '93l4imrphN0',
      loop: 1,
      fs: 0,
      rel: 0,
      iv_load_policy: 3,
      start: 18,
      end: 210,
      mute: 1
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
};

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  document.getElementById('player').style.visibility = 'visible';
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

function onPlayerStateChange(event) {
  if (event.data === 1) {
    document.getElementById('video-overlay').style.display = 'none';
  } else if (event.data === 0) {
    event.target.seekTo(18, true);
  }
}

console.log('Parcel is running');
