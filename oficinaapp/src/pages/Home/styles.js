import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  homeText: {
    fontSize: 20,
  },

  title: {
    color: "#322153",
    fontSize: 32,
    maxWidth: 260,
    marginTop: 30,
  },

  description: {
    color: "#6C6C80",
    fontSize: 16,
    marginTop: 16,
    maxWidth: 260,
    lineHeight: 24,
  },

  button: {
    backgroundColor: "#7159c1",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
  },
});

export default styles;
