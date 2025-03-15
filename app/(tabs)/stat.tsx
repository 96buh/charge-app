import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function Stat() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>使用SafeAreaView</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
