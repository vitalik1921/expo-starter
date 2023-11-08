import { LoaderScreen as LibLoaderScreen } from "react-native-ui-lib";

import { theme } from "@/utils/theme";

type LoaderScreenProps = {
  overlay?: boolean;
  caption: string;
  visible: boolean;
};

export function LoaderScreen({ overlay = true, visible, caption }: LoaderScreenProps) {
  if (!visible) return null;
  return (
    <LibLoaderScreen
      overlay={overlay}
      message={caption}
      color={theme.colors.primary.base}
      backgroundColor={theme.colors.white}
    />
  );
}
