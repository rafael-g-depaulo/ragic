export interface Route {
  name: string;
  children?: Route[];
  aliases?: string[];
  component?: React.Component;
}

export type Routes = Route[];

// TODO: Add route alias/link (e.g.: /news -> /blog/0)
