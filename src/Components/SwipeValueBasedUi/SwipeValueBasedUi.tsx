import React, { useState } from "react";
import {
  Animated,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { styles } from "./SwipeValeBasedUiStyles";

const rowSwipeAnimatedValues: any = {};
// ["1", "2", "3", "4", "5"] = new Animated.Value(0);
Array(5)
  .fill("")
  .forEach((_, i) => {
    rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
  });
export default function SwipeValueBasedUi() {
  // const [listData, setListData] = useState([
  //   { key: "1", text: "Film number 1" },
  //   { key: "2", text: "Film number 2" },
  //   { key: "3", text: "Film number 3" },
  //   { key: "4", text: "Film number 4" },
  //   { key: "5", text: "Film number 5" },
  // ]);
  const [listData, setListData] = useState(
    Array(5)
      .fill("")
      .map((_, i) => ({ key: `${i}`, text: `Film number ${i}` }))
  );
  const closeRow = (rowMap: any, rowKey: string) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap: any, rowKey: string) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = (rowKey: string) => {
    console.log("This row opened", rowKey);
  };

  const onSwipeValueChange = (swipeData: any) => {
    const { key, value } = swipeData;
    rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  };

  const renderItem = (data: any) => (
    <TouchableHighlight
      onPress={() => console.log("You touched me")}
      style={styles.rowFront}
      underlayColor={"#AAA"}
    >
      <View>
        <Text>I am {data.item.text} in a SwipeListView</Text>
      </View>
    </TouchableHighlight>
  );

  const renderHiddenItem = (data: any, rowMap: any) => (
    <View style={styles.rowBack}>
      <Text>Left</Text>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.key)}
      >
        <Animated.View
          style={[
            styles.trash,
            {
              transform: [
                {
                  scale: rowSwipeAnimatedValues[data.item.key].interpolate({
                    inputRange: [45, 90],
                    outputRange: [0, 1],
                    extrapolate: "clamp",
                  }),
                },
              ],
            },
          ]}
        >
          <Image
            source={require("../../assets/Images/trash.png")}
            style={styles.trash}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-75}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
        onSwipeValueChange={onSwipeValueChange}
      />
    </View>
  );
}
