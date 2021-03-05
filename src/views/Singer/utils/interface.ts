// Generated by https://quicktype.io

export interface SingerResult {
  artists: Artist[];
  more: boolean;
  code: number;
}

export interface Artist {
  img1v1Id: number;
  topicPerson: number;
  followed: boolean;
  picUrl: string;
  trans: Trans;
  img1v1Url: string;
  musicSize: number;
  albumSize: number;
  briefDesc: string;
  alias: string[];
  picId: number;
  name: string;
  id: number;
  accountId?: number;
  picId_str: string;
  img1v1Id_str: string;
  transNames?: Trans[];
}

export enum Trans {
  Empty = "",
  EricChou = "Eric Chou",
  贾斯汀比伯 = "贾斯汀.比伯",
}