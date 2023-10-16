# Ragic

## Introdução

Ragic (**Routing Magic**, ou "a mágica do roteamento") é uma biblioteca de roteamento de aplicações em React com funcionamento similar ao da biblioteca ReactRouterDom, com a diferença de que ela é feita com foco especial em melhorar a experiência do usuário programador na escrita do código e no gerenciamento de suas rotas.

Isso se dá por meio de um relacionamento entre o componente da página, o nome da rota e os **apelidos** da própria, que permite uma centralização do controle das rotas, onde os apelidos podem ser renomeados e reaproveitados nos outros arquivos que os usem dentro de um mesmo projeto.

## Instalação
```
npm i ragic
```
or
```
yarn add ragic
```

## Definição das rotas

A definição de rotas é feita em um arquivo routes.ts à parte a ser importado no app. Além de construir as rotas principais, é possível construir rotas 'apelidos' que encaminham para uma rota anteriormente definida, e também rotas 'filhas' de outras rotas

##### Rotas básicas

```typescript
.path('/nomeDaRota', component:{NomeDoComponenteDaRota})
```

##### Rotas apelido

```typescript
.path('/nomeDaRota', component:{NomeDoComponenteDaRota})
.path('/outroNome', link_to: {'/nomeDaRota'})
```

##### Rotas flihas

```typescript
.path('/blog', {
  component: Blog,
  children: path('/page', {component: BlogPage})
           .path('/new', {component: CreateBlog}),
})
```

Nesse caso, ambas as rotas '/blog/page' e '/blog/new' são definidas.

### Usando parâmetros

Ragic traz junto a possibilidade de usar parâmetros recebidos da url em seus componentes, ou fazendo o caminho inverso, passar para uma rota uma variável do componente.

#### Usar parâmetros na rota

```typescript
const pageNumber = "4"
...
<Link to="/blog/:blog_id" params={{ blog_id: pageNumber}}>
  Ir para página {pageNumber} 
</Link>
```

#### Usar parâmetros da rota no componente

```typescript
import { useRouteParams } from "../routes"
...
const { blog_id } = useRouteParams("/blog/:blog_id")
...
<h1> Este é a página {blog_id} </h1>
```

## Exemplo de uso

```typescript
// routes.ts
import { createRoutes, UseRoutes } from 'ragic';

export const routes = createRoutes()
  .path('/', { component: HomePage })
  .path('/home', {link_to: '/'})
  .path('/blog', {
    component: BlogListPage,
    children: path('/:blog_id', {component: ViewBlogPostPage})
             .path('/new', {component: CreateBlogPostPage}),
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
  const {blog_id}
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
