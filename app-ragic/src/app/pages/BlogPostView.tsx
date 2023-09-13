import { Link, useRouteParams } from "../routes"

export default () => {

	const { blog_id } = useRouteParams("/blog/:blog_id")
	return <div>
		<Link to="/">voltar para home</Link>
		<h2>vendo o blog #{blog_id}</h2>
		<p>olá, aqui é o blog #{blog_id}</p>
	</div>
}
