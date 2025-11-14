export type TProject = {
  name: string;
  description: string;
  stack: string[];
  imageUrls: string[];
  githubLink?: string;
  siteLink?: string;
  type: "front-end" | "mobile";
};
