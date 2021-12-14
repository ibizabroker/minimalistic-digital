import { APP_NAME, DATE_FORMATS } from "../common/constants"

registerSettingsPage(({ settings }) => (
  <Page>
    <Section
      title=
        {
          <Text bold align="center">
            {`${APP_NAME} Customization`}
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
      <Text>Color Customizations</Text>
        <ColorSelect
          settingsKey="color"
          colors=
            {[
              {color: "white"},
              {color: "lightpink"},
              {color: "turquoise"},
              {color: "coral"},
              {color: "darkorange"},
              {color: "greenyellow"},
              {color: "wheat"},
              {color: "springgreen"},
              {color: "deepskyblue"},
              {color: "khaki"},
              {color: "orchid"},
              {color: "yellow"}
            ]}
        />
    </Section>
  </Page>
));