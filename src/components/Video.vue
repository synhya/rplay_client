<template>
  <div>
    <button @click="startStream">Start Stream</button>
    <button @click="stopStream">Stop Stream</button>
    <video ref="video" controls></video>
  </div>
</template>

<script>
import Hls from 'hls.js';
import axios from 'axios';

export default {
  data() {
    return {
      videoSrc: 'https://your-cloudfront-url/path-to-your.m3u8',
    };
  },
  methods: {
    startStream() {
      axios.post('/start-stream').then(() => {
        this.playStream();
      });
    },
    stopStream() {
      axios.post('/stop-stream').then(() => {
        alert('Stream stopped');
      });
    },
    playStream() {
      const video = this.$refs.video;
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(this.videoSrc);
        hls.attachMedia(video);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = this.videoSrc;
      }
    },
  },
};
</script>
