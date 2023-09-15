import { Link } from "../routes";

export default () => (
  <>
    <p>listing all blogs</p>
    <ul>
      <li><Link to="/blog/:blog_id" params={{ blog_id: "1" }}>Ir para o post #1</Link></li>
      <li><Link to="/blog/:blog_id" params={{ blog_id: "2" }}>Ir para o post #2</Link></li>
      <li><Link to="/blog/:blog_id" params={{ blog_id: "3" }}>Ir para o post #3</Link></li>
      <li><Link to="/blog/:blog_id" params={{ blog_id: "4" }}>Ir para o post #4</Link></li>
      <li><Link to="/blog/:blog_id" params={{ blog_id: "5" }}>Ir para o post #5</Link></li>
      <li><Link to="/blog/:blog_id" params={{ blog_id: "6" }}>Ir para o post #6</Link></li>
    </ul>
  </>
);

