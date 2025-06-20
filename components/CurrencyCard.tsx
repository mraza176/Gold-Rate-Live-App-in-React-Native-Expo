import { View, Text } from "react-native";
import { CardType } from "@/types";
import { colors, radius, spacingX, spacingY } from "@/constants/theme";
import { scale } from "@/utils/styling";

export default function CurrencyCard({ headings, data, updatedAt }: CardType) {
  return (
    <View
      style={{
        width: "100%",
        padding: spacingX._20,
        backgroundColor: colors.card,
        borderRadius: radius._20,
        gap: spacingY._20,
        marginTop: spacingY._15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {headings?.map((heading, index) => (
          <Text
            style={{
              textAlign: "right",
              fontSize: spacingX._20,
              fontWeight: "bold",
              color: colors.accent2,
            }}
            key={index}
          >
            {heading}
          </Text>
        ))}
      </View>
      {data?.map((item, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderTopWidth: index === 2 ? 1 : 0,
            borderTopColor: colors.primary,
            paddingTop: index === 2 ? spacingY._20 : 0,
          }}
        >
          <View
            style={{
              width: "60%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                textAlign: "right",
                fontSize: scale(16),
                color: colors.secondary,
                width: "35%",
              }}
            >
              {item?.sell ? item?.sell : "••••••••"}
            </Text>
            <Text
              style={{
                textAlign: "right",
                fontSize: scale(16),
                color: colors.secondary,
              }}
            >
              {item?.buy ? item?.buy : "••••••••"}
            </Text>
          </View>
          <Text
            style={{
              textAlign: "right",
              fontSize: scale(18),
              fontWeight: "bold",
              color: colors.accent,
            }}
          >
            {item?.title ? item?.title : "••••••••"}
          </Text>
        </View>
      ))}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderTopWidth: 1,
          borderTopColor: colors.primary,
          paddingTop: spacingY._20,
        }}
      >
        <Text
          style={{
            textAlign: "right",
            fontSize: scale(16),
            color: colors.secondary,
          }}
        >
          {updatedAt ? updatedAt : "••••••••"}
        </Text>
        <Text
          style={{
            textAlign: "right",
            fontSize: spacingX._20,
            fontWeight: "bold",
            color: colors.accent,
          }}
        >
          اپڈیٹ
        </Text>
      </View>
    </View>
  );
}
