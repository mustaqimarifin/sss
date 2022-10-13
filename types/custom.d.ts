declare module '*.svg' {
  const content: any;
  export default content;
}

import { AriaAttributes, DOMAttributes } from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    rel?: string;
    wmode?: string;
    allow?: string;
    allowFullScreen?: boolean;
  }
}
interface Window {
  webkitAudioContext: typeof AudioContext;
}
