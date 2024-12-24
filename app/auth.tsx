import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
 
} from "react-native";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";

function LoginScreen() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"phone" | "verification">("phone");
  const { signIn, verifyCode } = useAuth();
  const router = useRouter();
  const handleSendCode = async () => {
    try {
      await signIn(phone);
      setStep("verification");
    } catch (error) {
      console.error(error, "Sign in error");
    }
  };
  const handleVerifyCode = async () => {
    try {
      await verifyCode(code);
      router.replace("/");
    } catch (error) {
      console.error(error, "Verify code error");
    }
  };

  return (
    <View style={styles.container}>
      {step === "phone" ? (
        <>
          <Text style={styles.title}>Enter your phone number</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="+234 123 456 7890"
            keyboardType="phone-pad"
          />
          <Pressable style={styles.button} onPress={handleSendCode}>
            <Text style={styles.buttonText}>Send code</Text>
          </Pressable>
        </>
      ) : (
        <>
          <Text style={styles.title}>Enter the code sent to your phone</Text>
          <TextInput
            style={styles.input}
            value={code}
            onChangeText={setCode}
            placeholder="123456"
            keyboardType="number-pad"
          />
          <Pressable style={styles.button} onPress={handleVerifyCode}>
            <Text style={styles.buttonText}>Verify code</Text>
          </Pressable>
        </>
      )}
      <Pressable onPress={() => router.push("/register")}>
        <Text style={styles.link}>Don't have an account? Register</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#EA985B",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  link: {
    color: "#EA985B",
    textAlign: "center",
    marginTop: 20,
  },
});
