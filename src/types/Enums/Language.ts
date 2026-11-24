
export const Language = {
  Fa: "fa",
  En: "en",
} as const;

export type Language =
  (typeof Language)[keyof typeof Language];

export const Direction = {
  Rtl: "rtl",
  Ltr: "ltr",
} as const;

export type Direction =
  (typeof Direction)[keyof typeof Direction];
