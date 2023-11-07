import { ScrollView } from "react-native";
import { SegmentedControl, Text, View, Colors } from "react-native-ui-lib";
import {
  appearances,
  appearancesUI,
  appearanceUIToInternal,
  languages,
  languagesUI,
  languageUIToInternal,
} from "@app/utils/enums";
import { Stack } from "expo-router";

import { Button, Row, Section } from "@app/components";
import { useStores } from "@app/utils/store";
import { SafeAreaView } from "react-native-safe-area-context";

export const Profile = () => {
  const {
    ui: { appearance, language, setAppearance, setLanguage },
    auth,
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
    <SafeAreaView className="flex flex-1 flex-col p-[24] pt-[50]">
      <Stack.Screen options={{ headerTitle: "Profile" }} />
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
          <View paddingV-s1>
            <Row>
              <Button label="Log out" onPress={auth.logout} />
            </Row>
          </View>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
