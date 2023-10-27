import { LoaderScreen as LibLoaderScreen } from "react-native-ui-lib";

import { theme } from "@app/utils/theme";

interface LoaderScreenProps {
  caption: string;
  visible: boolean;
}

export function LoaderScreen({ visible, caption }: LoaderScreenProps) {
  if (!visible) return null;
  return (
    <LibLoaderScreen
      overlay
      message={caption}
      color={theme.colors.primary.base}
      backgroundColor={theme.colors.white}
    />
  );
}
