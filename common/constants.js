export const APP_NAME = 'Minimalistic Digital';

export const DATE_FORMAT_MM_DD_YYYY = '12/31/2021';
export const DATE_FORMAT_DD_MM_YYYY = '31/12/2021';
export const DATE_FORMAT_MON_DD = 'DEC 31';
export const DATE_FORMAT_DD_MON = '31 DEC';

export const DATE_FORMATS = [
  DATE_FORMAT_MM_DD_YYYY,
  DATE_FORMAT_DD_MM_YYYY,
  DATE_FORMAT_MON_DD,
  DATE_FORMAT_DD_MON
];

export const FILENAME = "minimalistic.txt";
export const FILETYPE = "json";
export const KEY_COLOR = "color";
export const KEY_DISPLAY_SECONDS = "displaySeconds";
export const KEY_DISPLAY_BATTERY = "displayBattery";
export const KEY_DATE_FORMAT = "dateFormat";
export const KEY_UI_STATE = "uiState";
export const KEY_UI_STATE_HEART = "heart";
export const KEY_UI_STATE_STEPS = "steps";
export const KEY_UI_STATE_CALS = "cals";
export const KEY_UI_STATE_FLOORS = "floors";
export const KEY_UI_STATE_DIST = "distance";

export const DEFAULT_MODEL = {
  [KEY_COLOR]: "white",
  [KEY_DISPLAY_SECONDS]: false,
  [KEY_DISPLAY_BATTERY]: true,
  [KEY_DATE_FORMAT]: {selected: 2},
  [KEY_UI_STATE]: KEY_UI_STATE_HEART,
  [KEY_UI_STATE_HEART]: true,
  [KEY_UI_STATE_STEPS]: true,
  [KEY_UI_STATE_CALS]: true,
  [KEY_UI_STATE_FLOORS]: true,
  [KEY_UI_STATE_DIST]: true
};