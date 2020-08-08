export const lightTheme = {
  palette: {
    type: "light",
  },
};

export const darkTheme = {
  palette: {
    type: "dark",
  },
};

export function toggleTheme() {
  return {
    type: "TOGGLE_THEME",
  };
}

export function themeReducer(isLightTheme = true, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return !isLightTheme;
    default:
      return isLightTheme;
  }
}
