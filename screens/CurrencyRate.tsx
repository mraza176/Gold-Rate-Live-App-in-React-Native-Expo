import { Fragment, useEffect, useState } from "react";
import { ToastAndroid, View } from "react-native";
import { CurrencyRateData } from "@/types";
import { colors } from "@/constants/theme";
import axios from "axios";
import Header from "@/components/Header";
import CurrencyCard from "@/components/CurrencyCard";

export default function CurrencyRateScreen() {
  const [data, setData] = useState<CurrencyRateData>();

  async function fetchData() {
    try {
      const response = await axios.get(
        process.env.EXPO_PUBLIC_CURRENCY_RATE_API
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      ToastAndroid.show("انٹرنیٹ کنکشن چیک کریں", ToastAndroid.SHORT);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Fragment>
      <Header title="بین الاقوامی کرنسیز" />
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          paddingHorizontal: 25,
        }}
      >
        <CurrencyCard
          headings={["فروخت", "خرید", "کرنسیز"]}
          updatedAt={data?.dollarUpdateTime}
          data={[
            {
              title: "انٹر بینک",
              buy: data?.dollarInterBankBuy,
              sell: data?.dollarInterBankSell,
            },
            { title: "ڈالر", buy: data?.dollarBuy, sell: data?.dollarSell },
            { title: "پاؤنڈ", buy: data?.gbpBuy, sell: data?.gbpSell },
            { title: "یورو", buy: data?.euroBuy, sell: data?.euroSell },
            { title: "رنگٹ", buy: data?.malayBuy, sell: data?.malaySell },
            { title: "ریال", buy: data?.riyalBuy, sell: data?.riyalSell },
            { title: "درہم", buy: data?.dirhamBuy, sell: data?.dirhamSell },
          ]}
        />
      </View>
    </Fragment>
  );
}
