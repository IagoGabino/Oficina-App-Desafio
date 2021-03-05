import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerText: {
    fontSize: 15,
    color: "#737373",
  },

  headerTextBold: {
    fontWeight: "bold",
  },

  title: {
    fontSize: 25,
    marginTop: 30,
    marginBottom: 10,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 16,
  },

  proposals: {
    marginTop: 30,
  },

  proposal: {
    padding: 24,
    paddingHorizontal: 30,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16,
  },

  proposalLine: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  proposalProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold",
  },

  proposalValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 20,
    color: "#474747",
  },

  descriptionButton: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  destriptionButtonText: {
    color: "#7159c1",
    fontSize: 15,
    fontWeight: "bold",
  },

  //Modal

  modalView: {
    margin: 20,
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    padding: 20,
    margin: 30,
    height: 200,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
  },

  modalButtonClose: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#7159c1",
  },

  buttonTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  modalText: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: "center",
  },

  modalTextBold: {
    color: "#41414d",
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
});
