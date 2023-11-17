export interface OptionType {
  id: string | number;
  label: string;
  value: string | number;
}

export const CatsOptionsSize: OptionType[] = [
  {
    id: 1,
    label: "None",
    value: "",
  },
  {
    id: 2,
    label: "Small",
    value: "small",
  },
  {
    id: 3,
    label: "Medium",
    value: "med",
  },
  {
    id: 4,
    label: "Full",
    value: "full",
  },
];

export const CatsOptionsMimeTypes: OptionType[] = [
  {
    id: 5,
    label: "None",
    value: "",
  },
  {
    id: 6,
    label: "JPG",
    value: "jpg",
  },
  {
    id: 7,
    label: "GIF",
    value: "gif",
  },
  {
    id: 4,
    label: "PNG",
    value: "png",
  },
];

export const CatsOptionsOrder: OptionType[] = [
  {
    id: 8,
    label: "Random",
    value: "",
  },
  {
    id: 9,
    label: "Up",
    value: "ASC",
  },
  {
    id: 10,
    label: "Down",
    value: "DESC",
  },
];
