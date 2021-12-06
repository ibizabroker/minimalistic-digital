import { APP_NAME, DATE_FORMATS } from "../common/constants"

registerSettingsPage(({ settings }) => (
  <Page>
    <Section
      title=
        {
          <Text bold align="center">
            {`${APP_NAME} Customisations`}
          </Text>
        }
    >
      <Toggle settingsKey="displaySeconds" label="Display Seconds"/>
      <Toggle settingsKey="displayBattery" label="Display Battery"/>
      <Toggle settingsKey="steps" label="Display Steps"/>
      <Toggle settingsKey="heart" label="Display Heart Rate"/>
      <Toggle settingsKey="cals" label="Display Calories"/>
      <Toggle settingsKey="floors" label="Display Floors"/>
      <Toggle settingsKey="distance" label="Display Distance"/>

      <Select
        label="Date Format"
        settingsKey="dateFormat"
        options=
          {
            DATE_FORMATS.map(name => ({name}))
          }
      />
    </Section>

    <Section>
      <Text>UI Color</Text>
        <ColorSelect
          settingsKey="color"
          colors=
            {[
              {color: "aliceblue"},
              {color: "orchid"},
              {color: "palegoldenrod"},
              {color: "bisque"},
              {color: "coral"},
              {color: "darkorange"},
              {color: "greenyellow"},
              {color: "lavender"},
              {color: "lavenderblush"},
              {color: "snow"},
              {color: "white"},
              {color: "whitesmoke"},
              {color: "yellow"}
            ]}
        />
    </Section>
  </Page>
));