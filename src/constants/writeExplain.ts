interface IType {
  title: string;
  subTitle: string;
}

export const writeExplain: IType[] = [
  {
    title: "Title",
    subTitle: "Please enter the title of the article.",
  },
  {
    title: "Date",
    subTitle:
      "Please enter the date the incident occurred. If you can't remember the exact date, you don't have to enter it.",
  },
  {
    title: "Tag",
    subTitle:
      "Who gives you a hard time? This is for sorting, so you don't have to type it.",
  },
  {
    title: "Summary",
    subTitle: "Share your memories of the day here.",
  },
  {
    title: "Location",
    subTitle: "Where did it happen?",
  },
  {
    title: "Images",
    subTitle:
      "If you have a picture related to it, you can post it. To be a more reliable source, dontworry gets the location of the image.",
  },
  {
    title: "Video",
    subTitle: "If you have a related video, you can post it.",
  },
];
