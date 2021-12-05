import document from "document";
import { today } from "user-activity";

export default class Calories {
  constructor() {
    this.txtCals = document.getElementById("cals");
    this.imgCals = document.getElementById("cals_img");
    this.gaugeCals = document.getElementById("cals_gauge");
    this.root = document.getElementById('root');
  }

  update() {
    const calories = today.local.calories.toString();
    const calsIconX = this.root.width - (75) - (18 * calories.length);
    this.txtCals.text = calories;
    this.imgCals.x = calsIconX;
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