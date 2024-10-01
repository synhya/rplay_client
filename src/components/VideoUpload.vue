<template>
  <div>
    <button @click="startCapture">Start Capture</button>
    <button @click="stopCapture">Stop Capture</button>
    <video ref="video" autoplay muted></video>
    <button @click="startStreaming">Start Streaming</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mediaStream: null,
      streamUrl: 'rtmp://your-medialive-input-url/live', // MediaLive Input URL (RTMP)
    };
  },
  methods: {
    async startCapture() {
      try {
        this.mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        this.$refs.video.srcObject = this.mediaStream;
      } catch (err) {
        console.error("Error accessing webcam: ", err);
      }
    },
    stopCapture() {
      if (this.mediaStream) {
        this.mediaStream.getTracks().forEach(track => track.stop());
        this.mediaStream = null;
      }
    },
    async startStreaming() {
      try {
        const mediaRecorder = new MediaRecorder(this.mediaStream, {
          mimeType: 'video/webm',
        });

        mediaRecorder.ondataavailable = async (event) => {
          if (event.data.size > 0) {
            const formData = new FormData();
            formData.append('video', event.data);
            // Send video data to backend
            await fetch(this.streamUrl, {
              method: 'POST',
              body: formData,
            });
          }
        };

        mediaRecorder.start(1000); // 매 초마다 서버로 송출
      } catch (error) {
        console.error("Streaming error:", error);
      }
    },
  },
};
</script>
