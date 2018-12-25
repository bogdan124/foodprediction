<html lang="en">
<head>
//https://simpl.info/getusermedia/sources/
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-33848682-1"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-33848682-1');
</script>

<meta charset="utf-8">
<meta name="description" content="Simplest possible examples of HTML, CSS and JavaScript.">
<meta name="author" content="//samdutton.com">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta itemprop="name" content="simpl.info: simplest possible examples of HTML, CSS and JavaScript">
<meta itemprop="image" content="/images/icons/icon192.png">
<meta id="theme-color" name="theme-color" content="#fff">

<link rel="icon" href="/images/icons/icon192.png">

<base target="_blank">


<title>MediaStreamTrack.getSources()</title>

<link rel="stylesheet" href="../../css/main.css">

<style>
div.select {
  margin: 0 0 1em 0;
}
</style>

</head>

<body>

<div id="container">

  <h1><a href="../../index.html" title="simpl.info home page">simpl.info</a> MediaStreamTrack.getSources</h1>

  <div class="select">
    <label for="audioSource">Audio source: </label><select id="audioSource"></select>
  </div>

  <div class="select">
    <label for="videoSource">Video source: </label><select id="videoSource"></select>
  </div>

  <video muted autoplay></video>

  <script src="js/main.js"></script>

  <p>This demo requires Chrome 30 or later.</p>

  <p>For more information, see <a href="https://www.html5rocks.com/en/tutorials/getusermedia/intro/" title="Media capture article by Eric Bidelman on HTML5 Rocks">Capturing Audio &amp; Video in HTML5</a> on HTML5 Rocks.</p>

<a href="https://github.com/samdutton/simpl/blob/gh-pages/getusermedia/sources/js/main.js" title="View source for this page on GitHub" id="viewSource">View source on GitHub</a>

</div>



</body>
</html>

<script>
var videoElement = document.querySelector('video');
var audioSelect = document.querySelector('select#audioSource');
var videoSelect = document.querySelector('select#videoSource');

navigator.mediaDevices.enumerateDevices()
  .then(gotDevices).then(getStream).catch(handleError);

audioSelect.onchange = getStream;
videoSelect.onchange = getStream;

function gotDevices(deviceInfos) {
  for (var i = 0; i !== deviceInfos.length; ++i) {
    var deviceInfo = deviceInfos[i];
    var option = document.createElement('option');
    option.value = deviceInfo.deviceId;
    if (deviceInfo.kind === 'audioinput') {
      option.text = deviceInfo.label ||
        'microphone ' + (audioSelect.length + 1);
      audioSelect.appendChild(option);
    } else if (deviceInfo.kind === 'videoinput') {
      option.text = deviceInfo.label || 'camera ' +
        (videoSelect.length + 1);
      videoSelect.appendChild(option);
    } else {
      console.log('Found one other kind of source/device: ', deviceInfo);
    }
  }
}

function getStream() {
  if (window.stream) {
    window.stream.getTracks().forEach(function(track) {
      track.stop();
    });
  }

  var constraints = {
    audio: {
      deviceId: {exact: audioSelect.value}
    },
    video: {
      deviceId: {exact: videoSelect.value}
    }
  };

  navigator.mediaDevices.getUserMedia(constraints).
    then(gotStream).catch(handleError);
}

function gotStream(stream) {
  window.stream = stream; // make stream available to console
  videoElement.srcObject = stream;
}

function handleError(error) {
  console.log('Error: ', error);
}
</script>
