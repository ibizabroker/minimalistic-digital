import document from "document";
import { HeartRateSensor } from "heart-rate";

export default class HeartRate {
  constructor() {
    this.hrm = new HeartRateSensor();

    this.txtHeartRate = document.getElementById('heartrate');
    this.imgHeartRate = document.getElementById('heartrate_img');

    this.txtHeartRate.text = "--";
  }

  show() {
    this.txtHeartRate.style.opacity = 1;
    this.imgHeartRate.style.opacity = 1;
  }

  hide() {
    this.txtHeartRate.style.opacity = 0;
    this.imgHeartRate.style.opacity = 0;
  }

  start() {
    this.show();
    this.hrm.start();

    this.hrm.onreading = () => {
      this.txtHeartRate.text = this.hrm.heartRate;
    }
  }

  stop() {
    this.hrm.stop();
    this.hide();
  }
}