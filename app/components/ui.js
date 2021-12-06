import document from 'document';
import Calories from './calories';
import Floors from './floors';
import HeartRate from './heartrate';
import Steps from './steps';
import Distance from './distance';
import Connector from './connector';
import {
    KEY_COLOR, 
    KEY_UI_STATE,
    KEY_UI_STATE_HEART, 
    KEY_UI_STATE_STEPS, 
    KEY_UI_STATE_CALS, 
    KEY_UI_STATE_FLOORS, 
    KEY_UI_STATE_DIST
} from "../../common/constants"

export default class UI {
  static instance = new UI();

  constructor() {
    this.colorConfigurableElements = document.getElementsByClassName('colorConfigurable');

    this.heartrate = new HeartRate();
    this.steps = new Steps();
    this.calories = new Calories();
    this.floors = new Floors();
    this.distance = new Distance();

    document.getElementById('tapzone').onclick = this.onClick.bind(this);
  }

  updateColor(color) {
    this.colorConfigurableElements.forEach((element) => {
      element.style.fill = color;
    });
  }

  restore() {
    const color = Connector.instance.getValue(KEY_COLOR);
    this.updateColor(color);
    this.setState(Connector.instance.getValue(KEY_UI_STATE), false);
  }

  onClick() {
    const currentState = Connector.instance.getValue(KEY_UI_STATE);
    const availableStates = [KEY_UI_STATE_HEART, KEY_UI_STATE_STEPS, KEY_UI_STATE_CALS, KEY_UI_STATE_FLOORS, KEY_UI_STATE_DIST];
    let enabledStates = [];

    availableStates.forEach(state => {
      if (Connector.instance.getValue(state)) {
        enabledStates.push(state);
      }
    });

    let nextStateIndex = 0;
    enabledStates.forEach((state, index) => {
      if (state == currentState) {
        nextStateIndex = index + 1;
      }
    });
    if (nextStateIndex >= enabledStates.length) {
      nextStateIndex = 0;
    }

    this.setState(enabledStates[nextStateIndex], true);
  }

  setState(newState, save) {
    switch (newState) {
      case KEY_UI_STATE_HEART:
        this.heartrate.start();
        this.steps.stop();
        this.calories.stop();
        this.floors.stop();
        this.distance.stop();
        break;  

      case KEY_UI_STATE_STEPS:
        this.heartrate.stop();
        this.steps.start();
        this.calories.stop();
        this.floors.stop();
        this.distance.stop();
        break;

      case KEY_UI_STATE_CALS:
        this.heartrate.stop();
        this.steps.stop();
        this.calories.start();
        this.floors.stop();
        this.distance.stop();
        break;

      case KEY_UI_STATE_FLOORS:
        this.heartrate.stop();
        this.steps.stop();
        this.calories.stop();
        this.floors.start();
        this.distance.stop();
        break;

      case KEY_UI_STATE_FLOORS:
        this.heartrate.stop();
        this.steps.stop();
        this.calories.stop();
        this.floors.stop();
        this.distance.start();
        break;  
    }
    if (newState === undefined) {
      this.heartrate.stop();  
      this.steps.stop();
      this.calories.stop();
      this.floors.stop();
      this.distance.stop();
    }
    if (save) {
      Connector.instance.setValue(KEY_UI_STATE, newState);
    }
  }
}