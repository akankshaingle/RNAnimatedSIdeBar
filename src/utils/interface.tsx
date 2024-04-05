export type books = {
  id: string;
  accessInfo: accessInfoData[];
  volumeInfo: volumeInfoData;
};
export type volumeInfoData = {
  title: string;
  authors: [string];
  description: string;
  imageLinks: imageLinksData;
};

export type imageLinksData = {
  smallThumbnail: string;
  thumbnail: string;
};
export type accessInfoData = {
  webReaderLink: string;
};
