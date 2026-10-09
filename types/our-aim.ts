export type AwarenessVideo = {
  id: number;
  title: string;
  /** YouTube video id used for the facade thumbnail and the click-to-load embed */
  youtubeId: string;
};

export type OurAimContent = {
  heading: string;
  videos: AwarenessVideo[];
};
