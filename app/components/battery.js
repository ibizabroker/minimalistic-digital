import document from "document";
import { battery, charger } from "power";
import Connector from "./connector";
import { KEY_DISPLAY_BATTERY } from "../../common/constants";

export default class Battery {
  constructor() {
    this.txtBattery = document.getElementById("battery");
    this.imgBattery = document.getElementById("battery_img");
  }

  update() {
    if (!Connector.instance.getValue(KEY_DISPLAY_BATTERY)) {
      this.hideIcon();
      this.hideText();
      return;
    } else {
      this.showIcon();
      this.showText();
    }

    let batteryChargeLevel = Math.floor(battery.chargeLevel);

    if (batteryChargeLevel >= 15) {
      this.imgBattery.href = "icons/battery_solid_25_24px.png";
    }
    if (batteryChargeLevel >= 40) {
      this.imgBattery.href = "icons/battery_solid_50_24px.png";
    }
    if (batteryChargeLevel >= 70) {
      this.imgBattery.href = "icons/battery_solid_75_24px.png";
    }
    if (batteryChargeLevel >= 90) {
      this.imgBattery.href = "icons/battery_solid_24px.png";
    }

    if (batteryChargeLevel < 15) {
      this.hideIcon();
    } else {
      this.showIcon();
    }

    this.txtBattery.text = `${batteryChargeLevel}%`;
  }

  watchCharger() {
    charger.onchange = () => {
      if (charger.connected) {
        this.hideIcon();
      } else {
        this.showIcon();
      }
    };
  }

  hideIcon() {
    this.imgBattery.style.display = "none";
  }

  showIcon() {
    setTimeout(() => {
      this.imgBattery.style.display = "inline";
    }, 1500);
  }

  hideText() {
    this.txtBattery.style.display = "none";
  }

  showText() {
    this.txtBattery.style.display = "inline";
  }

  static run() {
    let battery = new Battery();

    battery.update();
    battery.watchCharger();

    setInterval(() => battery.update(), 10000);
  }
}