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
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

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

const SocialButton = ({ name, color }) => (
  <View style={styles.socialIconBox}>
    <Ionicons name={name} size={30} color={color} />
  </View>
);

const RegisterScreen = ({ navigation }) => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username) newErrors.username = "Username is required";

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

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validate()) return;

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);

    navigation.replace("HomeScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Create An Account</Text>
          <Text style={styles.subtitle}>
            Start building your flashcards today!
          </Text>

          <InputField
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChangeText={(text) => {
              setUsername(text);
              setErrors((prev) => ({ ...prev, username: null }));
            }}
            error={errors.username}
          />

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
            placeholder="Create a password"
            isPassword
            showPassword={showPass}
            togglePassword={() => setShowPass(!showPass)}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setErrors((prev) => ({ ...prev, password: null }));
            }}
            error={errors.password}
          />

          <InputField
            label="Confirm Password"
            placeholder="Re-enter your password"
            isPassword
            showPassword={showConfirmPass}
            togglePassword={() => setShowConfirmPass(!showConfirmPass)}
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              setErrors((prev) => ({ ...prev, confirmPassword: null }));
            }}
            error={errors.confirmPassword}
          />

          <TouchableOpacity
            style={[styles.mainButton, loading ? styles.disabledButton : null]}
            onPress={handleRegister}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? "Creating Account..." : "Register"}
            </Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>or register with</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialContainer}>
            <SocialButton name="logo-facebook" color="#1877F2" />
            <SocialButton name="logo-google" color="#DB4437" />
            <SocialButton name="logo-apple" color="#000" />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.footerText}>
              Already have an account?{" "}
              <Text style={styles.linkText}>Sign In</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  content: {
    minHeight: SCREEN_HEIGHT,
    paddingHorizontal: 30,
    paddingTop: 60,
    paddingBottom: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },

  subtitle: {
    fontSize: 16,
    color: "#999",
    marginBottom: 30,
    marginTop: 5,
  },

  inputContainer: {
    marginBottom: 20,
  },

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
    elevation: 3,
  },

  inputErrorBorder: {
    borderColor: "#E53E3E",
    borderWidth: 1,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },

  errorText: {
    color: "#E53E3E",
    fontSize: 12,
    marginTop: 5,
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

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#EEE",
  },

  dividerText: {
    marginHorizontal: 10,
    color: "#999",
    fontSize: 12,
  },

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
    elevation: 2,
  },

  footerText: {
    textAlign: "center",
    color: "#666",
  },

  linkText: {
    color: "#3182CE",
    fontWeight: "bold",
  },
});

export default RegisterScreen;
