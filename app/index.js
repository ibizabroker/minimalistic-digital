import Clock from "./components/clock";
import Battery from "./components/battery";
import Messaging from "./components/messaging";
import UI from "./components/ui";
import Connector from "./components/connector";

import analytics from "fitbit-google-analytics/app"

analytics.configure({
  tracking_id: "UA-216538040-1"
})

UI.instance.restore();

Battery.run();
Clock.run(Connector.instance);
Messaging.run();