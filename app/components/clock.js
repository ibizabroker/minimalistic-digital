import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../../common/utils";
import {
    DATE_FORMATS,
    DATE_FORMAT_MM_DD_YYYY,
    DATE_FORMAT_DD_MM_YYYY,
    DATE_FORMAT_MON_DD,
    DATE_FORMAT_DD_MON,
    KEY_DATE_FORMAT,
    KEY_DISPLAY_SECONDS
} from '../../common/constants';

export default class Clock {
    constructor() {
        this.time = document.getElementById("time");
        this.date = document.getElementById("date");
        this.timeSecs = document.getElementById("timeSecs");
    }

    setDisplaySeconds(displaySeconds) {
        clock.granularity = displaySeconds ? 'seconds' : 'minutes';
        this.timeSecs.style.opacity = displaySeconds ? 1 : 0;
    }

    init(connector) {
        this.setDisplaySeconds(connector.getValue(KEY_DISPLAY_SECONDS));

        clock.ontick = (evt) => {
            let today = evt.date;
            let hours = today.getHours();
            if (preferences.clockDisplay === "12h") {
            hours = hours % 12 || 12;
            } else {
            hours = util.zeroPad(hours);
            }
            let mins = util.zeroPad(today.getMinutes());
            let secs = util.zeroPad(today.getSeconds());
            const sideTextX = hours.toString().length > 1 ? 284 : 260;
            this.time.text = `${hours}:${mins}`;
            this.timeSecs.text = secs;
            this.timeSecs.x = sideTextX;

            const date = new Date();
            const dayOfWeek = util.dayOfWeek(date.getDay());
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const year = date.getFullYear();
            const dateFormatObject = connector.getValue(KEY_DATE_FORMAT);
            const dateFormat = DATE_FORMATS[dateFormatObject.selected];
            let dateString;
            switch (dateFormat) {
                default: {
                console.error(`Unknown date format ${dateFormat}`);
                }
                case DATE_FORMAT_MM_DD_YYYY: {
                dateString = `${month}/${day}/${year}`;
                break;
                }
                case DATE_FORMAT_DD_MM_YYYY: {
                dateString = `${day}/${month}/${year}`;
                break;
                }
                case DATE_FORMAT_MON_DD: {
                const monthName = util.nameOfMonth(date.getMonth());
                dateString = `${monthName} ${day}`;
                break;
                }
                case DATE_FORMAT_DD_MON: {
                const monthName = util.nameOfMonth(date.getMonth());
                dateString = `${day} ${monthName}`;
                break;
                }
            }
            this.date.text = `${dayOfWeek} ${dateString}`;
        }
    }

    static instance = new Clock();

    static run(connector) {
        Clock.instance.init(connector);
    }
}