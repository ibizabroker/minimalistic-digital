import * as fs from "fs";
import { DEFAULT_MODEL, FILENAME, FILETYPE } from "../../common/constants";

export default class Connector {
  static instance = new Connector();

  constructor() {
    try {
      this.model = fs.readFileSync(FILENAME, FILETYPE);
    } catch (e) {
      console.error("Connector encountered error on load, using default state.", e);
      this.model = DEFAULT_MODEL;
      this.saveModel();
    }
  }

  getValue(key) {
    if (this.model[key] === undefined) {
      return DEFAULT_MODEL[key];
    } else {
      return this.model[key];
    }
  }

  setValue(key, value) {
    this.model[key] = value;
    this.saveModel();
  }

  saveModel() {
    try {
      fs.writeFileSync(FILENAME, this.model, FILETYPE);
    } catch (e) {
      console.error("Connector encountered an error when saving:", e);
    }
  }
}