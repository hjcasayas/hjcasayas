export const status = {
  ToDo: "ToDo",
  InProgress: "InProgress",
  Done: "Done",
} as const;

export type StatusType = keyof typeof status;
