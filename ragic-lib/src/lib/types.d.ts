interface BaseRoute<routeName extends string> {
  readonly name: routeName;
  children: Route<routeName>[];
  aliases?: string[];
}

type Component = React.ReactElement;

type ConcreteRoute<routeName extends string> = BaseRoute<routeName> & {
  component: Component;
};
type LinkRoute<routeName extends string> = BaseRoute<routeName> & {
  linkTo: string;
};

export type Route<routeName extends string> =
  | ConcreteRoute<routeName>
  | LinkRoute<routeName>;

export type Routes<names extends string> = { [name in names]: Route<name> };
