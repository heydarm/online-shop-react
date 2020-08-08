export function firstCharToUpperCase(string) {
  switch (string.length) {
    case 0:
      return null;
    case 1:
      return string.charAt(0).toUpperCase();
    default:
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
