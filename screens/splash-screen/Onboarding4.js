import { View, Text, Image, TouchableOpacity } from "react-native";

const bg = "#2F80ED";

export default function Onboarding4({ onFinish }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: bg,
        justifyContent: "center",
        paddingHorizontal: 24,
      }}
    >
      {/* Illustration */}
      <Image
        source={require("../assets/img/onboarding/ob4.png")}
        style={{
          width: "100%",
          height: 240,
          resizeMode: "contain",
          marginTop: 40,
        }}
      />

      {/* Logo + Text */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Image
          source={require("../assets/img/onboarding/mini-logo.png")}
          style={{
            width: 66,
            height: 66,
            resizeMode: "contain",
            marginRight: 8,
          }}
        />

        <Text
          style={{
            color: "#fff",
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          cardify
        </Text>
      </View>

      {/* Subtitle */}
      <Text
        style={{
          color: "#E6F0FF",
          textAlign: "center",
          marginTop: 12,
          fontSize: 16,
        }}
      >
        Smarter learning and lasting impact
      </Text>

      {/* CTA Button */}
      <TouchableOpacity
        onPress={onFinish}
        style={{
          marginTop: 100,
          backgroundColor: "#4DA3FF",
          paddingVertical: 16,
          borderRadius: 30,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Let’s Study!
        </Text>
      </TouchableOpacity>
    </View>
  );
}
