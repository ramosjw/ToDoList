import { Rows } from "phosphor-react-native";
import { StyleSheet, YellowBox } from "react-native";

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
    flex: 1,
    backgroundColor: colors.gray600,
  },
  header: {
    backgroundColor: colors.gray700,
    height: 173,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 110,
    height: 32,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -32,
  },
  input: {
    width: 271,
    height: 54,
    marginRight: 4,
    padding: 16,
    paddingRight: 63,
    color: colors.gray100,
    backgroundColor: colors.gray500,
    borderRadius: 6,
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blueDark,
  },

  tasksStatus: {
    width: 327,
    height: 19,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 32,
    marginBottom: 20,
  },

  statusBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  statusTitle: {
    fontWeight: "bold",
    alignItems: "center",
  },

  countBox: {
    justifyContent: "center",
    alignItems: "center",
    height: 19,
    width: 25,
    marginLeft: 8,
    backgroundColor: colors.gray400,
    borderRadius: 999,
  },

  count: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.gray200,
  },

  tasks: {
    width: 327,
    flex: 1,
    alignSelf: "center",
  },

  todoEmpty: {
    borderTopWidth: 0.5,
    borderColor: colors.gray300,
  },

  clipbordImage: {
    width: 56,
    height: 56,
    marginTop: 48,
    marginBottom: 16,
    marginLeft: 135,
  },

  todoEmptyTitle: {
    paddingTop: 16,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.gray300,
  },

  todoEmptySubTitle: {
    fontSize: 14,
    textAlign: "center",
    color: colors.gray300,
  },
});
