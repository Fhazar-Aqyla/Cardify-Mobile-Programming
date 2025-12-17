import { View, Text, Image, TouchableOpacity } from "react-native";

const bg = "#2F80ED";

export default function Onboarding1({ onNext }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#2F80ED" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 24,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
          Cardify
        </Text>
        <Text style={{ color: "#fff", fontSize: 16 }}>Skip</Text>
      </View>

      {/* Image */}
      <Image
        source={require("../assets/img/onboarding/ob1.png")}
        style={{
          width: "100%",
          height: 240,
          resizeMode: "contain",
          marginTop: 60,
        }}
      />

      {/* Text */}
      <View style={{ paddingHorizontal: 24, marginTop: 60 }}>
        <Text style={{ color: "#fff", fontSize: 32, fontWeight: "bold" }}>
          Feeling Lost in Your Studies?
        </Text>

        <Text
          style={{
            color: "#E6F0FF",
            marginTop: 12,
            fontSize: 16,
            lineHeight: 22,
          }}
        >
          Don’t worry everyone starts somewhere. Let’s find your learning path
          together.
        </Text>
      </View>

      {/* Footer */}
      <View style={{ flex: 1, justifyContent: "flex-end", padding: 24 }}>
        <TouchableOpacity
          onPress={onNext}
          style={{
            alignSelf: "flex-end",
            width: 48,
            height: 48,
            borderRadius: 28,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 32, marginBottom: 8, color: "#2F80ED" }}>
            →
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
