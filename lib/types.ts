import { DesignDetail } from 'data/appDissections';

export type Post = {
  _id: string;
  slug: string;
  name: string;
  content: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  caption?: string;
  readingTime?: string;
  tweets: any[];
  tags?: string[];
};

export type Snippets = {
  _id: string;
  slug: string;
  name: string;
  content: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  caption: string;
  readingTime: string;
  tweets: any[];
  tags?: string[];
};

export type ADD = {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  details: Array<DesignDetail>;
  tint: string;
};
export type PostPage = {
  _id: string;
  slug: string;
  title: string;
  date: string;
  caption?: string;
  excerpt?: string;
};

export interface VideoPage {
  id: string;
  snippet: string;
}

export type PostPageGroup = {
  map(arg0: (post: PostPage) => JSX.Element): import('react').ReactNode;
  posts: Array<PostPage>;
};
export enum Form {
  Initial,
  Loading,
  Success,
  Error
}

export type FormState = {
  state: Form;
  message?: string;
};

export type Subscribers = {
  count: number;
};

export type Views = {
  total: number;
};

export type Song = {
  songUrl: string;
  artist: string;
  title: string;
};

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type TopTracks = {
  tracks: Song[];
};

export type YouTube = {
  subscriberCount: number;
  viewCount: number;
  videoCount: number;
};

export type SafeSex = {
  title: string;
  _id: string;
  slug: string;
  date: string;
};

export type GitHub = {
  stars: number;
};

export type Unsplash = {
  downloads: number;
  views: number;
};

export type Video = {
  [key: string]: any;
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
};

export type Stat = {
  videoCount: string;
  viewCount: string;
  SubscriberCount: string;
};
