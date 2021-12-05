import document from "document";
import { today } from "user-activity";

export default class Steps {
  constructor() {
    this.txtSteps = document.getElementById("steps");
    this.imgSteps = document.getElementById("steps_img");
  }

  update() {
    const steps = today.local.steps.toString();
    this.txtSteps.text = steps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.imgSteps.x = stepIconX;
  }

  hide() {
    this.txtSteps.style.opacity = 0;
    this.imgSteps.style.opacity = 0;
  }

  show() {
    this.txtSteps.style.opacity = 1;
    this.imgSteps.style.opacity = 1;
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