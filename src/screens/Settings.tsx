import { ScrollView } from "react-native";
import { SegmentedControl, Text, View, Colors } from "react-native-ui-lib";
import { NavioScreen } from "rn-navio";
import {
  appearances,
  appearancesUI,
  appearanceUIToInternal,
  languages,
  languagesUI,
  languageUIToInternal,
} from "@app/utils/enums";

import { Row, Section } from "@app/components";
import { useStores } from "@app/utils/store";

export const Settings: NavioScreen = ({}) => {
  const {
    ui: { appearance, language, setAppearance, setLanguage },
  } = useStores();

  const appearanceInitialIndex = appearances.findIndex(
    (it) => it === appearance
  );
  const appearanceSegments = appearancesUI.map((it) => ({ label: it }));
  const languageInitialIndex = languages.findIndex((it) => it === language);
  const languageSegments = languagesUI.map((it) => ({ label: it }));

  const handleAppearanceIndexChange = (index: number) =>
    setAppearance(appearanceUIToInternal[appearancesUI[index]]);

  const handleLanguageIndexChange = (index: number) =>
    setLanguage(languageUIToInternal[languagesUI[index]]);

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <Section title={"UI"}>
          <View paddingV-s1>
            <Row>
              <View flex>
                <Text textColor text60R>
                  Appearance
                </Text>
              </View>

              <SegmentedControl
                initialIndex={appearanceInitialIndex}
                segments={appearanceSegments}
                backgroundColor={Colors.bgColor}
                activeColor={Colors.primary}
                inactiveColor={Colors.textColor}
                onChangeIndex={handleAppearanceIndexChange}
              />
            </Row>
          </View>
          <View paddingV-s1>
            <Row>
              <View flex>
                <Text textColor text60R>
                  Language
                </Text>
              </View>

              <SegmentedControl
                initialIndex={languageInitialIndex}
                segments={languageSegments}
                backgroundColor={Colors.bgColor}
                activeColor={Colors.primary}
                inactiveColor={Colors.textColor}
                onChangeIndex={handleLanguageIndexChange}
              />
            </Row>
          </View>
        </Section>
      </ScrollView>
    </View>
  );
};
