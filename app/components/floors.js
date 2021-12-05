import document from "document";
import { today } from "user-activity";

export default class Floors {
  constructor() {
    this.txtFloors = document.getElementById("floors");
    this.imgFloors = document.getElementById("floors_img");
    this.root = document.getElementById('root');
  }

  update() {
    const floors = today.local.elevationGain.toString();
    const floorsIconX = this.root.width - (75) - (18 * floors.length);
    this.txtFloors.text = floors;
    this.imgFloors.x = floorsIconX;
  }

  hide() {
    this.txtFloors.style.opacity = 0;
    this.imgFloors.style.opacity = 0;
  }

  show() {
    this.txtFloors.style.opacity = 1;
    this.imgFloors.style.opacity = 1;
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