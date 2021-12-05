import document from "document";
import { today } from "user-activity";

export default class Distance {
  constructor() {
    this.txtDistance = document.getElementById("distance");
    this.imgDistance = document.getElementById("distance_img");
    this.root = document.getElementById('root');
  }

  update() {
    const distance = today.local.distance.toString();
    const distanceIconX = this.root.width - (75) - (18 * distance.length);
    this.txtDistance.text = distance;
    this.imgDistance.x = distanceIconX;
  }

  hide() {
    this.txtDistance.style.opacity = 0;
    this.imgDistance.style.opacity = 0;
  }

  show() {
    this.txtDistance.style.opacity = 1;
    this.imgDistance.style.opacity = 1;
  }

  start() {
    this.update();

    this.interval = setInterval(() => this.update(), 2000);
    this.show();
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
    this.hide();
  }
}