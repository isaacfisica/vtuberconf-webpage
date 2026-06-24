export type SnsLink = {
  kind: string;
  label: string;
  url: string;
};

export type Member = {
  id: string;
  name: string;
  field: string;
  degree: string;
  bio: string;
  bioLong: string;
  handle?: string;
  deg?: string;
  tags?: string[];
  accent?: string;
  joined?: string;
  role?: string;
  live?: boolean;
  sns?: SnsLink[];
  channel?: { platform: string; schedule: string , href?: string};
};
