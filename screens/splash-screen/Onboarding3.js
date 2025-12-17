import { View, Text, Image, TouchableOpacity } from "react-native";

const bg = "#2F80ED";

export default function Onboarding3({ onNext, onBack }) {
  return (
    <View style={{ flex: 1, backgroundColor: bg }}>
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
        source={require("../assets/img/onboarding/ob3.png")}
        style={{
          width: "100%",
          height: 310,
          resizeMode: "contain",
          marginTop: 24,
        }}
      />

      {/* Text */}
      <View style={{ paddingHorizontal: 24 }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 32,
            fontWeight: "bold",
            marginTop: 26,
          }}
        >
          Level Up Your Learning Journey!
        </Text>

        <Text
          style={{
            color: "#E6F0FF",
            marginTop: 12,
            fontSize: 16,
            lineHeight: 22,
          }}
        >
          Turn every lesson into interactive flashcards and discover an easier
          way to memorize.
        </Text>
      </View>

      {/* Footer */}
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          padding: 24,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Back */}
          <TouchableOpacity
            onPress={onBack}
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 32, color: "#2F80ED", marginBottom: 8 }}>
              ←
            </Text>
          </TouchableOpacity>

          {/* Next */}
          <TouchableOpacity
            onPress={onNext}
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 32, color: "#2F80ED", marginBottom: 8 }}>
              →
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
