import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default function Group1() {
  return (
    <View style={styles.Group1}>
      <View style={styles.Register}>
        <Image
          style={styles.StatusBarIphoneXOrNewer}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/homiffgn8jl-3%3A106?alt=media&token=2a0f76fe-c236-4ae1-8241-94392a6d51f6",
          }}
        />
        <Text style={styles.Qinfox}>QINFOx</Text>
        <View style={styles.Content}>
          <View style={styles.Copy}>
            <Text style={styles.Login}>Register</Text>
            <Text style={styles.EnterYourEmailToSign}>
              Enter your email to sign up
            </Text>
          </View>
          <View style={styles.InputAndButton}>
            <View style={styles.Field}>
              <Text style={styles.Label}>Name</Text>
            </View>
            <View style={styles.Field1}>
              <Text style={styles.Label1}>college</Text>
            </View>
            <View style={styles.Field2}>
              <Text style={styles.Label2}>email@domain.com</Text>
            </View>
            <View style={styles.Field3}>
              <Text style={styles.Label3}>password</Text>
            </View>
            <View style={styles.Button}>
              <Text style={styles.Login1}>Register</Text>
            </View>
          </View>
          <View style={styles.Divider2}>
            <View style={styles.Divider} />
            <Text style={styles.DonTHaveAnAccountSig}>
              Already have an account? Sign in
            </Text>
            <View style={styles.Divider} />
          </View>
          <Text style={styles.ByClickingContinueYo}>
            By clicking register, you agree to our Terms of Service and Privacy
            Policy
          </Text>
        </View>
        <Image
          style={styles.HomeIndicator}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/homiffgn8jl-3%3A87?alt=media&token=73a0cd0f-c9b3-4649-aab1-0f2665fb526b",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Group1: {
    width: 375,
    height: 812,
    boxSizing: "border-box",
  },
  Register: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  StatusBarIphoneXOrNewer: {
    width: "100%",
    height: 44,
  },
  Qinfox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: "45px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "200",
    textAlign: "center",
    letterSpacing: "-0.45px",
  },
  Content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingLeft: 24,
    paddingRight: 24,
    boxSizing: "border-box",
  },
  Copy: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginRight: 24,
    boxSizing: "border-box",
  },
  Login: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 2,
    color: "rgba(0,0,0,1)",
    fontSize: "18px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    textAlign: "center",
  },
  EnterYourEmailToSign: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: "14px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    textAlign: "center",
  },
  InputAndButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginRight: 24,
    boxSizing: "border-box",
  },
  Field: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 40,
    marginRight: 16,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 6,
    paddingBottom: 6,
    borderWidth: 1,
    borderColor: "rgba(224,224,224,1)",
    borderRadius: 8,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Label: {
    color: "rgba(130,130,130,1)",
    fontSize: "14px",
    lineHeight: "140%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
  Field1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 40,
    marginRight: 16,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 6,
    paddingBottom: 6,
    borderWidth: 1,
    borderColor: "rgba(224,224,224,1)",
    borderRadius: 8,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Label1: {
    marginRight: 16,
    color: "rgba(130,130,130,1)",
    fontSize: "14px",
    lineHeight: "140%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
  Field2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 40,
    marginRight: 16,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 6,
    paddingBottom: 6,
    borderWidth: 1,
    borderColor: "rgba(224,224,224,1)",
    borderRadius: 8,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Label2: {
    color: "rgba(130,130,130,1)",
    fontSize: "14px",
    lineHeight: "140%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
  Field3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 40,
    marginRight: 16,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 6,
    paddingBottom: 6,
    borderWidth: 1,
    borderColor: "rgba(224,224,224,1)",
    borderRadius: 8,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Label3: {
    color: "rgba(130,130,130,1)",
    fontSize: "14px",
    lineHeight: "140%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
  Button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 40,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 8,
    boxSizing: "border-box",
    backgroundColor: "rgba(0,0,0,1)",
  },
  Login1: {
    color: "rgba(255,255,255,1)",
    fontSize: "14px",
    lineHeight: "140%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
  },
  Divider2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginRight: 24,
    boxSizing: "border-box",
  },
  Divider: {
    width: 45.5,
    height: 1,
    marginRight: 8,
    backgroundColor: "rgba(230,230,230,1)",
  },
  DonTHaveAnAccountSig: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 8,
    color: "rgba(130,130,130,1)",
    fontSize: "14px",
    lineHeight: "140%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    textAlign: "center",
  },
  Divider1: {
    width: 45.5,
    height: 1,
    backgroundColor: "rgba(230,230,230,1)",
  },
  ByClickingContinueYo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(130,130,130,1)",
    fontSize: "12px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    textAlign: "center",
  },
  HomeIndicator: {
    width: "100%",
    height: 34,
  },
});
