import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ActivityIndicator,
    Button,
    KeyboardAvoidingView,
    Platform,
  } from "react-native";
  import React, { useState } from "react";
//   import { FIREBASE_AUTH } from "../firebaseConfig";
  import auth from '@react-native-firebase/auth';
  
  export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
  
    const signUp = async () => {
      setLoading(true);
      try {
        const response = await auth().createUserWithEmailAndPassword(email, password);
        console.log(response);
      } catch (error: any) {
        console.log(error);
        alert("Sign up failed: " + error.message);
      } finally {
        setLoading(false);
      }
    };
  
    const signIn = async () => {
      setLoading(true);
      try {
        const response = await auth().signInWithEmailAndPassword(email, password);
        console.log(response);
      } catch (error: any) {
        console.log(error);
        alert("Sign in failed: " + error.message);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <TextInput
            value={email}
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            secureTextEntry={true}
            value={password}
            style={styles.input}
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
          />
  
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <>
              <Button title="Login" onPress={signIn} />
              <Button title="Create account" onPress={signUp} />
            </>
          )}
        </KeyboardAvoidingView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      marginHorizontal: 20,
    },
    keyboardView: {
      width: "100%",
    },
    input: {
      marginVertical: 4,
      height: 50,
      borderWidth: 1,
      borderRadius: 4,
      padding: 10,
      backgroundColor: "#fff",
    },
  });