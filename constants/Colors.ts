export const appColors = {
  text: 'rgb(250, 235, 215)',
  background: 'rgba(127, 51, 14, 0.76)',
  window: 'rgba(129, 123, 123, 0.5)',
  button: 'rgb(251, 110, 94)'
};

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: appColors.text,
    background: appColors.background,
    tint: tintColorLight,
    icon: appColors.button,
    tabIconDefault: appColors.window,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: appColors.text,
    background: appColors.background,
    tint: tintColorDark,
    icon: appColors.button,
    tabIconDefault: appColors.window,
    tabIconSelected: tintColorDark,
  },
};
