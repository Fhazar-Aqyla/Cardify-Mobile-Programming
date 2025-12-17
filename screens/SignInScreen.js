import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const InputField = ({
  label,
  placeholder,
  isPassword,
  showPassword,
  togglePassword,
  value,
  onChangeText,
  error,
}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <View style={[styles.inputWrapper, error ? styles.inputErrorBorder : null]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#C7C7CD"
        secureTextEntry={isPassword && !showPassword}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
      />
      {isPassword && (
        <TouchableOpacity onPress={togglePassword}>
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#999"
          />
        </TouchableOpacity>
      )}
    </View>
    {error ? <Text style={styles.errorText}>{error}</Text> : null}
  </View>
);

const SocialButton = ({ name, color, onPress }) => (
  <TouchableOpacity style={styles.socialIconBox} onPress={onPress}>
    <Ionicons name={name} size={30} color={color} />
  </TouchableOpacity>
);

const SignInScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validate()) return;

    try {
      setLoading(true);
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          if (email === "fhazar.aqyla@gmail.com" && password === "password") {
            resolve(true);
          } else {
            reject(new Error("Invalid email or password"));
          }
        }, 1500)
      );
      navigation.replace("HomeScreen");
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Let's Sign You In</Text>
        <Text style={styles.subtitle}>Welcome back, you've been missed!</Text>

        <InputField
          label="Email Address"
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setErrors((prev) => ({ ...prev, email: null }));
          }}
          error={errors.email}
        />

        <InputField
          label="Password"
          placeholder="Enter your password"
          isPassword
          showPassword={showPassword}
          togglePassword={() => setShowPassword(!showPassword)}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setErrors((prev) => ({ ...prev, password: null }));
          }}
          error={errors.password}
        />

        <TouchableOpacity
          onPress={() => Alert.alert("Info", "Password reset link sent")}
        >
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.mainButton, loading ? styles.disabledButton : null]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Logging in..." : "Login"}
          </Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>or login with</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialContainer}>
          <SocialButton
            name="logo-facebook"
            color="#1877F2"
            onPress={() => Alert.alert("Info", "Facebook login")}
          />
          <SocialButton
            name="logo-google"
            color="#DB4437"
            onPress={() => Alert.alert("Info", "Google login")}
          />
          <SocialButton
            name="logo-apple"
            color="#000"
            onPress={() => Alert.alert("Info", "Apple login")}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.footerText}>
            Create an account? <Text style={styles.linkText}>Register</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  content: { paddingHorizontal: 30, paddingTop: 60, paddingBottom: 30 },
  title: { fontSize: 28, fontWeight: "bold", color: "#333" },
  subtitle: {
    fontSize: 16,
    color: "#999",
    marginBottom: 30,
    marginTop: 5,
  },
  inputContainer: { marginBottom: 20 },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 55,
    borderWidth: 1,
    borderColor: "#EEE",
  },
  inputErrorBorder: {
    borderColor: "#E53E3E",
  },
  input: { flex: 1, fontSize: 14, color: "#333" },
  errorText: {
    color: "#E53E3E",
    fontSize: 12,
    marginTop: 5,
  },
  forgotPassword: {
    textAlign: "right",
    color: "#3182CE",
    fontWeight: "600",
    marginTop: -10,
  },
  mainButton: {
    backgroundColor: "#3182CE",
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  disabledButton: {
    opacity: 0.7,
  },
  buttonText: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },
  line: { flex: 1, height: 1, backgroundColor: "#EEE" },
  dividerText: { marginHorizontal: 10, color: "#999", fontSize: 12 },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 30,
  },
  socialIconBox: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  footerText: { textAlign: "center", color: "#666" },
  linkText: { color: "#3182CE", fontWeight: "bold" },
});

export default SignInScreen;
