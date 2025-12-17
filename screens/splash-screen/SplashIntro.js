import { View, Animated } from "react-native";
import { useEffect, useRef } from "react";

export default function SplashIntro({ onFinish }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(300),
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(800),
    ]).start(onFinish);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#2F80ED",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.Image
        source={require("../assets/logo.png")}
        style={{
          width: 240,
          height: 240,
          opacity,
          transform: [{ scale }],
        }}
      />
    </View>
  );
}
