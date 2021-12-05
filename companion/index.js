import * as messaging from "messaging";
import { settingsStorage } from "settings";
import { DEFAULT_MODEL } from "../common/constants";

messaging.peerSocket.onopen = () => {
  restoreSettings();
};

messaging.peerSocket.onclose = () => {
  
};

settingsStorage.onchange = evt => {
  let data = {
    key: evt.key,
    newValue: evt.newValue
  };
  sendVal(data);
};

function restoreSettings() {
  if (settingsStorage.length === 0) {
    restoreDefaults();
  }

  for (let index = 0; index < settingsStorage.length; index++) {
    let key = settingsStorage.key(index);
    if (key) {
      let data = {
        key: key,
        newValue: settingsStorage.getItem(key)
      };
      sendVal(data);
    }
  }
}

function restoreDefaults() {
  console.log('Restoring default values for Companion');

  const keys = Object.keys(DEFAULT_MODEL)

  keys.forEach(key => {
    console.log(`${key} | ${DEFAULT_MODEL[key]}`);
    settingsStorage.setItem(key, DEFAULT_MODEL[key]);
  })
}

function sendVal(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  }
}