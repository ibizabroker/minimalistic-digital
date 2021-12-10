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
    this.txtDistance.text = distance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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