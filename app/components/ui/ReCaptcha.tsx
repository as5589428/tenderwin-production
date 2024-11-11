// src/types/react-google-recaptcha.d.ts
declare module 'react-google-recaptcha' {
  import { Component } from 'react';

  interface ReCaptchaProps {
    sitekey: string;
    onChange: (value: string | null) => void;
    theme?: 'light' | 'dark';
    size?: 'compact' | 'normal';
    tabindex?: number;
    type?: 'image' | 'audio';
    badge?: 'bottomleft' | 'bottomright' | 'inline';
  }

  export default class ReCaptcha extends Component<ReCaptchaProps> {}
}
