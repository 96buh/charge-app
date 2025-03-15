import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { useState, useCallback, useRef } from "react";
import { Stack, Link, useFocusEffect } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import PagerView from "react-native-pager-view";

// components and utils
import { SquareWidget } from "@/components/squareWidget";
import { LineChart } from "@/components/LineChart";
import { generateRandomDataPoint, type DataPoint } from "@/utils/data";
import Animated, { useSharedValue } from "react-native-reanimated";
import { PaginationIndicator } from "@/components/PaginationDots";
import "@/app/global.css";
// import { useNotification } from "@/context/NotificationContext";

// constants

export default function Index() {
  const [chartData, setChartData] = useState<DataPoint[]>(
    Array.from({ length: 31 }, (_, i) => generateRandomDataPoint(i)),
  );

  useFocusEffect(
    useCallback(() => {
      const interval = setInterval(() => {
        setChartData((prevData) => {
          const newData = [
            ...prevData.slice(1),
            generateRandomDataPoint(prevData.length - 1),
          ];
          return newData.map((item, index) => ({ ...item, time: index }));
        });
      }, 500);

      return () => clearInterval(interval);
    }, []),
  );

  // const { expoPushToken, notification, error } = useNotification();
  //
  // if (error) return <></>;
  //
  // console.log(JSON.stringify(notification, null, 2));

  return (
    <>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <Link href="/settings">
              <MaterialIcons name="menu" size={24} color="white" />
            </Link>
          ),
        }}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.widgetsContainer}>
          <SquareWidget
            name="功率"
            value={0}
            icon="power-plug-outline"
            unit="W"
          />
          <SquareWidget name="電流" value={0} icon="current-ac" unit="A" />
          <SquareWidget name="電壓" value={0} icon="lightning-bolt" unit="V" />
          <SquareWidget
            name="溫度"
            value={0}
            icon="power-plug-outline"
            unit="°C"
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  widgetsContainer: {
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  chartContainer: {
    height: "50%",
    width: "100%",
  },
});
