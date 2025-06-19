import { Fragment, useEffect, useState } from "react";
import { ScrollView, ToastAndroid } from "react-native";
import { GoldRateData } from "@/types";
import { colors } from "@/constants/theme";
import axios from "axios";
import Card from "@/components/Card";
import Header from "@/components/Header";

export default function LiveMarketScreen() {
  const [data, setData] = useState<GoldRateData>();

  async function fetchData() {
    try {
      const response = await axios.get(process.env.EXPO_PUBLIC_GOLD_RATE_API!);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      ToastAndroid.show("انٹرنیٹ کنکشن چیک کریں", ToastAndroid.SHORT);
    }
  }

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Fragment>
      <Header title="لایؤ مارکٹ" />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: colors.background,
          paddingHorizontal: 25,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Card
          title="گولڈ ریٹ"
          headings={["فروخت", "خرید", "سونا"]}
          updatedAt={data?.rateUpdateTime}
          data={[
            {
              title: "پیس",
              buy: data?.pcsBuy.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
              sell: data?.pcsSell.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
              high: data?.pcsHigh.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
              low: data?.pcsLow.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
              diff:
                Number(data?.pcsDiff) >= 0
                  ? `+${data?.pcsDiff}`
                  : data?.pcsDiff,
            },
            {
              title: "روا",
              buy: data?.rawaBuy.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
              sell: data?.rawaSell.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
              high: data?.rawaHigh.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
              low: data?.rawaLow.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
              diff:
                Number(data?.rawaDiff) >= 0
                  ? `+${data?.rawaDiff}`
                  : data?.rawaDiff,
            },
            {
              title: "انٹرنیشنل",
              buy: `$${data?.gold ? data?.gold : "••••••••"}`,
              high: data?.highGold,
              low: data?.lowGold,
            },
          ]}
        />
        <Card
          title="سلور ریٹ"
          headings={["فروخت", "خرید", "چاندی"]}
          updatedAt={data?.rateUpdateTime}
          data={[
            {
              title: "رینی",
              buy: data?.localSilverBuy.replace(
                /(\d)(?=(\d{3})+(?!\d))/g,
                "$1,"
              ),
              sell: data?.localSilverSell.replace(
                /(\d)(?=(\d{3})+(?!\d))/g,
                "$1,"
              ),
              high: data?.localHighSilver.replace(
                /(\d)(?=(\d{3})+(?!\d))/g,
                "$1,"
              ),
              low: data?.localLowSilver.replace(
                /(\d)(?=(\d{3})+(?!\d))/g,
                "$1,"
              ),
              diff: data?.localMainSilver,
            },
            {
              title: "انٹرنیشنل",
              buy: `$${data?.silver ? data?.silver : "••••••••"}`,
              high: data?.highSilver,
              low: data?.lowSilver,
            },
          ]}
        />
      </ScrollView>
    </Fragment>
  );
}
