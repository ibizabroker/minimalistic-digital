import Clock from "./components/clock";
import Battery from "./components/battery";
import Messaging from "./components/messaging";
import UI from "./components/ui";
import Connector from "./components/connector";

UI.instance.restore();

Battery.run();
Clock.run(Connector.instance);
Messaging.run();