export default function theme(blue = "dark", action) {
    switch (action.type) {
      case "CHANGE_THEME":
        return action.payload;
      default:
        return state;
    }
  }