import { Location } from "history";

export function truncate(string: string, length: number) {
  return string.substring(0, length);
}

export function checkRoomNameValidity(name: string) {
  const specialCharacters = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
  return name.length <= 15 && !specialCharacters.test(name);
}

export function getSessionNameFromLocation(
  location: Location
): string | undefined {
  const pathnameComponents = location.pathname
    .split("/")
    .filter((item: string) => item !== "");

  if (pathnameComponents.length <= 3) {
    return pathnameComponents.pop();
  }
}
