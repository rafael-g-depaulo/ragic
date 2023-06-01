export interface Route<routeName extends string> {
  readonly name: routeName;
  children?: Route[];
  aliases?: string[];
  component?: React.Component;
}

export type Routes<names extends string> = { [name in names]: Route<name> };

// TODO: Add route alias/link (e.g.: /news -> /blog/0)
