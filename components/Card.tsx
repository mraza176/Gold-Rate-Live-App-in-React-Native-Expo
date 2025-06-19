import { Fragment } from "react";
import { View, Text } from "react-native";
import { CardType } from "@/types";
import { scale } from "@/utils/styling";
import { colors, radius, spacingX, spacingY } from "@/constants/theme";

export default function Card({ title, headings, data, updatedAt }: CardType) {
  return (
    <Fragment>
      <Text
        style={{
          color: colors.primary,
          textAlign: "right",
          fontSize: scale(28),
          fontWeight: "bold",
          marginVertical: spacingY._15,
        }}
      >
        {title}
      </Text>
      <View
        style={{
          width: "100%",
          padding: spacingX._20,
          backgroundColor: colors.card,
          borderRadius: radius._20,
          gap: spacingY._20,
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
          <Fragment key={index}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderTopWidth: index > 0 ? 1 : 0,
                borderTopColor: colors.primary,
                paddingTop: index > 0 ? spacingY._20 : 0,
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  fontSize: scale(18),
                  color: colors.secondary,
                }}
              >
                {item?.sell ? item?.sell : "••••••••"}
              </Text>
              <Text
                style={{
                  textAlign: "right",
                  fontSize: scale(18),
                  color: colors.secondary,
                }}
              >
                {item?.buy ? item?.buy : "••••••••"}
              </Text>
              <Text
                style={{
                  textAlign: "right",
                  fontSize: spacingX._20,
                  fontWeight: "bold",
                  color: colors.accent,
                }}
              >
                {item?.title ? item?.title : "••••••••"}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  fontSize: scale(14),
                  color: colors.secondary,
                }}
              >
                (فرق) {item?.diff ? item?.diff : "+0"}
              </Text>
              <Text
                style={{
                  textAlign: "right",
                  fontSize: scale(14),
                  fontWeight: "bold",
                  color: colors.secondary,
                }}
              >
                <Text style={{ color: colors.red }}>
                  {item?.low ? item?.low : "••••••••"}
                </Text>{" "}
                /{" "}
                <Text style={{ color: colors.green }}>
                  {item?.high ? item?.high : "••••••••"}
                </Text>
              </Text>
              <Text
                style={{
                  textAlign: "right",
                  fontSize: scale(18),
                  fontWeight: "bold",
                  color: colors.accent2,
                }}
              >
                ہائ / لو
              </Text>
            </View>
          </Fragment>
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
    </Fragment>
  );
}
