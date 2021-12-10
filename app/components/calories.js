import document from "document";
import { today } from "user-activity";

export default class Calories {
  constructor() {
    this.txtCals = document.getElementById("cals");
    this.imgCals = document.getElementById("cals_img");
    this.root = document.getElementById('root');
  }

  update() {
    const calories = today.local.calories.toString();
    this.txtCals.text = calories;
  }

  hide() {
    this.txtCals.style.opacity = 0;
    this.imgCals.style.opacity = 0;
  }

  show() {
    this.txtCals.style.opacity = 1;
    this.imgCals.style.opacity = 1;
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