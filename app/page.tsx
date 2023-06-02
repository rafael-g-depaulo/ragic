import { createRoutes } from 'ragic-lib/src/lib/createRoutes';
// import styles from './page.module.css';
import { Router } from 'ragic-lib/src/lib/Router';

const routes = createRoutes([
  { name: '/about', component: <div>about</div> },
  { name: '/blog', component: <div>blog</div> },
]);

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return <Router routes={routes} />;
}
