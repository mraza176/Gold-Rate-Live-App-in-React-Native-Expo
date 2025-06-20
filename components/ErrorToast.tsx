import { colors, radius, spacingX, spacingY } from "@/constants/theme";
import { View, Text } from "react-native";

export default function ErrorToast() {
  return (
    <View
      style={{
        position: "absolute",
        top: 16,
        backgroundColor: colors.red,
        paddingVertical: spacingY._10,
        paddingHorizontal: spacingX._20,
        alignSelf: "center",
        borderRadius: radius._20,
      }}
    >
      <Text
        style={{ color: "white", fontSize: spacingX._15, fontWeight: "bold" }}
      >
        انٹرنیٹ کنکشن چیک کریں
      </Text>
    </View>
  );
}
