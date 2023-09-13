import { Link, useParams } from 'react-router-dom';

export default () => {
	const { card_id } = useParams();
	return (
		<div>
			<Link to="/">Voltar para home</Link>
			<p>aqui é o card #{card_id}</p>
		</div>
	);
};
