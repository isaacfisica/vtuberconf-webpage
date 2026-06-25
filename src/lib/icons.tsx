import type { FC, SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base(size: number, props: SVGProps<SVGSVGElement>) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true as const,
    ...props,
  };
}

/** X (구 Twitter) */
export const XIcon: FC<IconProps> = ({ size = 18, ...props }) => (
  <svg {...base(size, props)}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

/** Twitter (파랑새) */
export const TwitterIcon: FC<IconProps> = ({ size = 18, ...props }) => (
  <svg {...base(size, props)}>
    <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.93 4.93 0 0 0 2.163-2.723 9.86 9.86 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.384 4.482A13.97 13.97 0 0 1 1.64 3.162a4.92 4.92 0 0 0 1.523 6.574 4.9 4.9 0 0 1-2.229-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.96 4.96 0 0 1-2.224.084 4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.503 14.01-14.01 0-.213-.005-.426-.015-.637A10 10 0 0 0 24 4.59z" />
  </svg>
);

/** YouTube */
export const YouTubeIcon: FC<IconProps> = ({ size = 18, ...props }) => (
  <svg {...base(size, props)}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

/** Twitch */
export const TwitchIcon: FC<IconProps> = ({ size = 18, ...props }) => (
  <svg {...base(size, props)}>
    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
  </svg>
);

/** 치지직 (CHZZK) — 번개 심볼 */
export const ChzzkIcon: FC<IconProps> = ({ size = 18, ...props }) => (
  <svg {...base(size, props)}>
    <path d="M13.94 2.5 5.5 13.04a.6.6 0 0 0 .47.98h3.86l-1.3 6.7a.5.5 0 0 0 .88.4l8.96-10.7a.6.6 0 0 0-.46-.99h-4.06l1.06-6.94a.5.5 0 0 0-.93-.33z" />
  </svg>
);

/** 개인 웹사이트 — 지구본 */
export const WebsiteIcon: FC<IconProps> = ({ size = 18, ...props }) => (
  <svg {...base(size, props)}>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.93 6h-2.95a15.7 15.7 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14a7.96 7.96 0 0 1 0-4h3.38a16.6 16.6 0 0 0-.14 2c0 .68.05 1.35.14 2zm.81 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.99 7.99 0 0 1 5.07 16zm2.95-8H5.07a7.99 7.99 0 0 1 4.33-3.56A15.7 15.7 0 0 0 8.02 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66a14.7 14.7 0 0 1-.16-2c0-.69.06-1.35.16-2h4.68c.1.65.16 1.31.16 2 0 .69-.06 1.35-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a7.99 7.99 0 0 1-4.33 3.56zM16.36 14c.09-.65.14-1.32.14-2s-.05-1.35-.14-2h3.38a7.96 7.96 0 0 1 0 4z" />
  </svg>
);

type SnsMeta = { Icon: FC<IconProps>; color: string; iconColor: string };

/** SNS 종류 → 아이콘 + 브랜드 색 매핑 */
export const SNS_META: Record<string, SnsMeta> = {
  X: { Icon: XIcon, color: '#000000', iconColor: '#ffffff' },
  Twitter: { Icon: TwitterIcon, color: '#1da1f2', iconColor: '#ffffff' },
  YouTube: { Icon: YouTubeIcon, color: '#ff0000', iconColor: '#ffffff' },
  Twitch: { Icon: TwitchIcon, color: '#9146ff', iconColor: '#ffffff' },
  Chzzk: { Icon: ChzzkIcon, color: '#00ffa3', iconColor: '#141517' },
  Website: { Icon: WebsiteIcon, color: '#2a2c54', iconColor: '#ffffff' },
};
