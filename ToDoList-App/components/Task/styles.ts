import { StyleSheet } from "react-native";

export const colors = {
  danger: "#E25858",
  gray100: "#F2F2F2",
  gray200: "#D9D9D9",
  gray300: "#808080",
  gray400: "#333333",
  gray500: "#262626",
  gray600: "#1A1A1A",
  gray700: "#0D0D0D",
  purple: "#8284FA",
  purpleDark: "#5E60CE",
  blue: "#4EA8DE",
  blueDark: "#1E6F9F",
  white: "#FFFFFF",
};

export const styles = StyleSheet.create({
  container: {
    width: 327,
    height: "auto",
    paddingTop: 12,
    paddingBottom: 12,
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: colors.gray500,
    borderRadius: 8,
    marginBottom: 8,
  },
  checkedBox: {
    width: 24,
    height: 24,
    marginHorizontal: 12,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.purpleDark,
    borderRadius: 999,
  },
  uncheckedBox: {
    width: 24,
    height: 24,
    marginHorizontal: 12,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.blue,
    borderWidth: 2,
    borderRadius: 999,
  },

  task: {
    width: 235,
    height: 40,
    marginVertical: 12,
    marginHorizontal: 5,
    fontSize: 14,
    lineHeight: 18,
    color: colors.gray100,
    text: "center",
  },

  taskDone: {
    width: 235,
    height: 40,
    marginVertical: 12,
    marginHorizontal: 8,
    fontSize: 14,
    lineHeight: 18,
    color: colors.gray100,
    text: "center",
    textDecorationLine: "line-through",
  },

  deleteTask: {
    width: 32,
    height: 32,
    marginVertical: 15,
    marginHorizontal: -10,
  },

  deleteTaskActive: {},

  trash: {
    alignSelf: "center",
    marginTop: 4,
    color: colors.gray300,
  },
});
