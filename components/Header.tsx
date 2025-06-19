import { Text, View } from "react-native";
import { colors, spacingY } from "@/constants/theme";
import { scale } from "@/utils/styling";

export default function Header({ title }: { title: string }) {
  return (
    <View
      style={{
        backgroundColor: colors.background,
        paddingVertical: spacingY._10,
      }}
    >
      <Text
        style={{
          color: colors.secondary,
          fontSize: scale(32),
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </View>
  );
}
