$(document).ready(() => {
    startPlay();
  });

  let mseQueue = [],
    mseSourceBuffer, mseStreamingStarted = false, videoSound=false;

  function startPlay() {

    let uuid = $('#uuid').val();
    let channel = $('#channel').val();
    location.protocol == 'https:' ? potocol = 'wss' : potocol = 'ws';
    let url = potocol + '://' + location.host + '/stream/' + uuid + '/channel/' + channel + '/mse?uuid=' + uuid + '&channel=' + channel;
    let mse = new MediaSource();
    $("#videoPlayer")[0].src = window.URL.createObjectURL(mse);
    mse.addEventListener('sourceopen', function() {
      let ws = new WebSocket(url);
      ws.binaryType = "arraybuffer";
      ws.onopen = function(event) {
        console.log('Connect to ws');
      }
      ws.onmessage = function(event) {
        let data = new Uint8Array(event.data);
        if (data[0] == 9) {
          decoded_arr = data.slice(1);
          if (window.TextDecoder) {
            mimeCodec = new TextDecoder("utf-8").decode(decoded_arr);
          } else {
            mimeCodec = Utf8ArrayToStr(decoded_arr);
          }
          if(mimeCodec.indexOf(',')>0){
            videoSound=true;
          }
          mseSourceBuffer = mse.addSourceBuffer('video/mp4; codecs="' + mimeCodec + '"');
          mseSourceBuffer.mode = "segments"
          mseSourceBuffer.addEventListener("updateend", pushPacket);

        } else {
          readPacket(event.data);
        }
      };
    }, false);

  }

  function pushPacket() {
    if (!mseSourceBuffer.updating) {
      if (mseQueue.length > 0) {
        packet = mseQueue.shift();
        mseSourceBuffer.appendBuffer(packet);
      } else {
        mseStreamingStarted = false;
      }
    }
    if ($("#videoPlayer")[0].buffered.length > 0) {
      if (typeof document.hidden !== "undefined" && document.hidden && !videoSound) {
        //no sound, browser paused video without sound in background
        $("#videoPlayer")[0].currentTime = $("#videoPlayer")[0].buffered.end(($("#videoPlayer")[0].buffered.length - 1)) - 0.5;
      }
    }
  }

  function readPacket(packet) {
    if (!mseStreamingStarted) {
      mseSourceBuffer.appendBuffer(packet);
      mseStreamingStarted = true;
      return;
    }
    mseQueue.push(packet);
    if (!mseSourceBuffer.updating) {
      pushPacket();
    }
  }

  $("#videoPlayer")[0].addEventListener('loadeddata', () => {
    $("#videoPlayer")[0].play();
    let browser = browserDetector();
    if (!browser.safari) {
      makePic();
    }
  });
  
  //fix stalled video in safari
  $("#videoPlayer")[0].addEventListener('pause', () => {
    if ($("#videoPlayer")[0].currentTime > $("#videoPlayer")[0].buffered.end(($("#videoPlayer")[0].buffered.length - 1))) {
      $("#videoPlayer")[0].currentTime = $("#videoPlayer")[0].buffered.end(($("#videoPlayer")[0].buffered.length - 1)) - 0.1;
      $("#videoPlayer")[0].play();
    }
  });

  $("#videoPlayer")[0].addEventListener('error', () => {
    console.log('video_error')
  });