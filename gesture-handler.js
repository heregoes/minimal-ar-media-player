/* global AFRAME, THREE */

AFRAME.registerComponent("gesture-handler", {
  schema: {
    enabled: { default: true },
    /*
    rotationFactor: { default: 5 },
    minScale: { default: 0.3 },
    maxScale: { default: 8 },
    */
  },

  init: function () {
    this.handleClick = this.handleClick.bind(this);
    //this.handleRotation = this.handleRotation.bind(this);

    this.isVisible = false;
    //this.initialScale = this.el.object3D.scale.clone();
    //this.scaleFactor = 1;
    
    this.video = document.querySelector("#Video_Asset"); //Video_Asset ////videoScreen

    this.el.sceneEl.addEventListener("markerFound", (e) => {
      this.isVisible = true;
    });

    this.el.sceneEl.addEventListener("markerLost", (e) => {
      this.isVisible = false;
    });
  },

  update: function () {
    if (this.data.enabled) {
      this.video.addEventListener("onefingerstart", this.handleClick);
      //this.el.sceneEl.addEventListener("onefingerstart", this.handleClick);
      //this.el.sceneEl.addEventListener("onefingermove", this.handleRotation);
      //this.el.sceneEl.addEventListener("twofingermove", this.handleScale);
    } else {
      this.video.removeEventListener("onefingerstart", this.handleClick);
      //this.el.sceneEl.removeEventListener("onefingermove", this.handleRotation);
      //this.el.sceneEl.removeEventListener("twofingermove", this.handleScale);
    }
  },

  remove: function () {
    this.video.removeEventListener("onefingerstart", this.handleClick);
    //this.el.sceneEl.removeEventListener("onefingerend", this.handleScale);
  },

  handleClick: function (event) {
    if (this.isVisible) { //isMarkerVisible
      //this.el.play();
      //var video = document.querySelector("#video_id"); //Video_Asset
      this.video.play();
      
      /*
      this.el.object3D.rotation.y += event.detail.positionChange.x * this.data.rotationFactor;
      this.el.object3D.rotation.x += event.detail.positionChange.y * this.data.rotationFactor;
      */
    }
  },

  /*
  handleScale: function (event) {
    if (this.isVisible) { //isMarkerVisible
      /*
      this.scaleFactor *= 1 + event.detail.spreadChange / event.detail.startSpread;

      this.scaleFactor = Math.min(
        Math.max(this.scaleFactor, this.data.minScale),
        this.data.maxScale
      );

      this.el.object3D.scale.x = this.scaleFactor * this.initialScale.x;
      this.el.object3D.scale.y = this.scaleFactor * this.initialScale.y;
      this.el.object3D.scale.z = this.scaleFactor * this.initialScale.z;
      
    }
  },*/
});
