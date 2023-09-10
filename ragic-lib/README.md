# Ragic

## Introdução

Ragic (**Routing Magic**, ou "a mágica do roteamento") é uma biblioteca de roteamento de aplicações em React com funcionamento similar ao da biblioteca ReactRouterDom, com a diferença de que ela é feita com foco especial em melhorar a experiência do usuário programador na escrita do código e no gerenciamento de suas rotas.

Isso se dá por meio de um relacionamento entre o componente da página, o nome da rota e os **apelidos** da própria, que permite uma centralização do controle das rotas, onde os apelidos podem ser renomeados e reaproveitados nos outros arquivos que os usem dentro de um mesmo projeto.

## Instalação

## Exemplo de uso

### Definição das rotas

```typescript
// routes.ts
import { createRoutes, UseRoutes } from 'ragic';

export routes = createRoutes()
  .path('/', { component: HomePage })
  .path('/blog', {
    component: BlogListPage,
    children: path('/:blog_id', ViewBlogPostPage).path(
      '/new',
      CreateBlogPostPage
    ),
  })
  .path('/about-us', { component: AboutUsPage });

export const { Link, Router, useRouteParams } = UseRoutes(routes)
```

### Criação do Roteador

```typescript
// app.ts
import { Router } from './routes.ts';

export const App = () => {
  return <Router />;
};
```

### Link para uma rota

```typescript
// pages/example-page.ts
import { Link } from '../routes.ts';

export const ExamplePage = () => {
  return (
    <div>
      <h1>Page Title</h1>
      <p>
        To find out more about us, <Link to="/about-us">click here</Link>.
      </p>
      <p>
        To go to the blogpost of id 23,{' '}
        <Link to="/blog/:blog_id" params={{ blog_id: 23 }}>
          click here
        </Link>
        .
      </p>
    </div>
  );
};
```

## Ajuda e discussão
