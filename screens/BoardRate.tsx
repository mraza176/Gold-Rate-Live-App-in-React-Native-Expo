import { Fragment, useEffect, useState } from "react";
import { ToastAndroid, View } from "react-native";
import { BoardRateData } from "@/types";
import { colors } from "@/constants/theme";
import axios from "axios";
import BoardCard from "@/components/BoardCard";
import Header from "@/components/Header";

export default function BoardRateScreen() {
  const [data, setData] = useState<BoardRateData>();

  async function fetchData() {
    try {
      const response = await axios.get(process.env.EXPO_PUBLIC_BOARD_RATE_API);
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
      <Header title="بورڈ ریٹ" />
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          paddingHorizontal: 25,
        }}
      >
        <BoardCard
          title="اسلام آباد / راولپندی"
          headings={["فروخت", "خرید", "سونا"]}
          updatedAt={data?.rateUpdateTime}
          data={[
            {
              title: "کیراٹ 21",
              buy: data?._21ktBuy.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
              sell: data?._21ktSell.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
              buy10: data?._21ktBuy10.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
              sell10: data?._21ktSell10.replace(
                /(\d)(?=(\d{3})+(?!\d))/g,
                "$1,"
              ),
            },

            {
              title: "کیراٹ 22",
              buy: data?._22ktBuy.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
              sell: data?._22ktSell.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
              buy10: data?._22ktBuy10.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
              sell10: data?._22ktSell10.replace(
                /(\d)(?=(\d{3})+(?!\d))/g,
                "$1,"
              ),
            },
          ]}
        />
      </View>
    </Fragment>
  );
}
