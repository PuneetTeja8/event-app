import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Login2() {
  return (
    <View style={styles.Login2}>
      <View style={styles.Group010}>
        <Image
          style={styles.StatusBarIphoneXOrNewer}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/e1ipfvnr6xb-1%3A133?alt=media&token=dce76b62-2ad4-42e1-8050-5bbf7fbf9269",
          }}
        />
        <Text style={styles.Qinfox}>QINFOX</Text>
        <View style={styles.Content}>
          <View style={styles.Copy}>
            <Text style={styles.Login}>Login</Text>
            <Text style={styles.EnterYourEmailToSign}>
              Enter your email to sign in
            </Text>
          </View>
          <View style={styles.InputAndButton}>
            <View style={styles.Field}>
              <Text style={styles.Label}>email@domain.com</Text>
            </View>
            <View style={styles.Field1}>
              <Text style={styles.Label1}>password</Text>
            </View>
            <View style={styles.Button}>
              <Text style={styles.Login1}>Login</Text>
            </View>
          </View>
          <View style={styles.Divider2}>
            <View style={styles.Divider} />
            <Text style={styles.DonTHaveAnAccountSig}>
              Don’t have an account? Sign up
            </Text>
            <View style={styles.Divider} />
          </View>
          <Text style={styles.ByClickingContinueYo}>
            By clicking continue, you agree to our Terms of Service and Privacy
            Policy
          </Text>
        </View>
        <Image
          style={styles.HomeIndicator}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/e1ipfvnr6xb-1%3A108?alt=media&token=42c7955d-2cc1-45d7-97b1-ee9c19561a12",
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Login2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 375,
    height: 812,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Group010: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
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
    width: 51,
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
    width: 51,
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
})
