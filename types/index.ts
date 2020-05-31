export type EntryData = {
  title: string;
  date: string;
  category: string;
  writtenBy: string;
};

export type Entry = {
  content: string;
  data: EntryData;
  slug?: string;
  id: string;
  excerpt: string;
};

export type Category = {
  id: string;
  title: string;
  description: string;
  imagePath: string;
};
