//  write a mse video stream receiver and play in the browser for react


 

function startPlay(videoEl, mseUrl) {
  const mse = new MediaSource();
  videoEl.src = URL.createObjectURL(mse);
  mse.addEventListener("sourceopen", () => {
    const mseSourceBuffer = mse.addSourceBuffer(
      "video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\""
    );
    mseSourceBuffer.mode = "segments";
    mseSourceBuffer.addEventListener("updateend", pushPacket);
  }, false);
  function pushPacket() {
    if (!mseSourceBuffer.updating) {
      if (mseQueue.length > 0) {
        packet = mseQueue.shift();
        mseSourceBuffer.appendBuffer(packet);
      } else {
        mseStreamingStarted = false;
      }
    }
    if (videoEl.buffered.length > 0) {
      if (typeof document.hidden !== "undefined" && document.hidden) {
        // no sound, browser paused video without sound in background
        videoEl.currentTime =
          videoEl.buffered.end(videoEl.buffered.length - 1) - 0.5;
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
  videoEl.addEventListener("loadeddata", () => {
    videoEl.play();
    let browser = browserDetector();
    if (!browser.safari) {
      makePic();
    }



// =======

//  write a mse video stream receiver and play in the browser with mse
//  // https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/MediaSource_API_Reference
//  // https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/addSourceBuffer
//  // https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendBuffer
//  // https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/mode
//  // https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/updateend_event
//  // https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/updating
//  // https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendWindowStart
//  // https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendWindowEnd
//  // https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/timestampOffset
//  // https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/abort
//  // https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/remove
//  // https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/aborted
//  // https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/mode
//  // https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendWindowStart
//  // https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendWindowEnd
//  // https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/timestampOffset
//  // https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/abort
//  // https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/remove

// =======

// //  write a mse video stream receiver and play in the browser with mse
//  // https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/MediaSource_API_for_the_Media_Source_API
//  // https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/MediaSource_API_for_the_Media_Source_API/Using_MediaSource_API_for_the_Media_Source_API
//  // https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/MediaSource_API_for_the_Media_Source_API/Using_MediaSource_API_for_the_Media_Source_API/Using_MediaSource_API_for_the_Media_Source_API_in_a_web_page
//  // https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/MediaSource_API_for_the_Media_Source_API/Using_MediaSource_API_for_the_Media_Source_API/Using_MediaSource_API_for_the_Media_Source_API_in_a_web_page/Using_MediaSource_API_for_the_Media_Source_API_in_a_web_page_2
//  // https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/MediaSource_API_for_the_Media_Source_API/Using_MediaSource_API_for_the_Media_Source_API/Using_MediaSource_API_for_the_Media_Source_API_in_a_web_page/Using_MediaSource_API_for_the_Media_Source_API_in_a_web_page_3
//  // https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/MediaSource_API_for_the_Media_Source_API/Using_MediaSource_API_for_the_Media_Source_API/Using_MediaSource_API_for_the_Media_Source_API_in_a_web_page/Using_MediaSource_API_for_the_Media_Source_API_in_a_web

// =======

// //  write a mse video stream receiver and play in the browser with mse
//  // https://www.w3.org/TR/media-source/#sourcebuffer-append-bytes-bytes
//  // https://www.w3.org/TR/media-source/#sourcebuffer-mode
//  // https://www.w3.org/TR/media-source/#sourcebuffer-updating
//  // https://www.w3.org/TR/media-source/#sourcebuffer-updating-mode
//  // https://www.w3.org/TR/media-source/#sourcebuffer-append-buffer
//  // https://www.w3.org/TR/media-source/#sourcebuffer-remove-buffer
//  // https://www.w3.org/TR/media-source/#sourcebuffer-abort-updates
//  // https://www.w3.org/TR/media-source/#sourcebuffer-abort-updates-buffer
//  // https://www.w3.org/TR/media-source/#sourcebuffer-abort-updates-buffer-list
//  // https://www.w3.org/TR/media-source/#sourcebuffer-abort-updates-buffer-list-list
//  // https://www.w3.org/TR/media-source/#sourcebuffer-abort-updates-buffer-list-list-list
//  // https://www.w3.org/TR/media-source/#sourcebuffer-abort-updates-buffer-list-list-list-list
//  // https://www.w3.org/TR/media-source/#sourcebuffer-abort-updates-buffer-list-list-list-list-list
//  // https://www.w3.org/TR/media-source/#sourcebuffer-abort-updates-buffer-list-list-list-list-list-list
//  // https://www.w3.org/TR/media-source/#sourcebuffer-abort-updates-buffer-list-list-list-list-list-list-list
//  // https://www.w3.org/TR/media-source/#sourcebuffer-abort-updates-buffer-list-list-list-list-list-list-list-list
//  // https://www.w3.org/TR/media-source/#source

// =======

// //  write a mse video stream receiver and play in the browser (with mse)
//  // this is the same as the mse video stream sender, but the browser plays the stream
//  // and the sender sends the stream to the browser
//  // this is the same as the mse video stream sender, but the browser plays the stream
//  // and the sender sends the stream to the browser
//  // this is the same as the mse video stream sender, but the browser plays the stream
//  // and the sender sends the stream to the browser
//  // this is the same as the mse video stream sender, but the browser plays the stream
//  // and the sender sends the stream to the browser
//  // this is the same as the mse video stream sender, but the browser plays the stream
//  // and the sender sends the stream to the browser
//  // this is the same as the mse video stream sender, but the browser plays the stream
//  // and the sender sends the stream to the browser
//  // this is the same as the mse video stream sender, but the browser plays the stream
//  // and the sender sends the stream to the browser
//  // this is the same as the mse video stream sender, but the browser plays the stream
//  // and the sender sends the stream to the browser
//  // this is the same as the mse video stream sender, but the browser plays the stream
//  // and the sender sends the stream to the browser
//  // this is the same as the mse video stream sender, but the browser plays the stream
//  // and the sender sends the stream to the browser
//  // this is the same as the mse video stream sender, but the browser plays the stream
//  // and the sender sends the stream to the browser
//  // this is the same as the mse video stream sender, but the browser plays the stream
//  // and the sender sends the stream to the browser
//  // this is the same as the mse video stream sender, but the browser plays the stream
//  // and the sender sends the stream to the browser
//  // this is the same as the mse video stream sender, but the browser plays the stream
//  // and the sender sends the stream to the browser
//  // this is the same as the mse video stream sender, but the browser plays the stream
//  // and the sender sends the stream to the
