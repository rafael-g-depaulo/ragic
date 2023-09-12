import styled from 'styled-components';
import { Router } from './routes';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
	return (
		<StyledApp>
			<h1>
				<span> Hello there, </span>
				Welcome app-ragic 👋
			</h1>
			<h2>routes below</h2>
			<Router />
		</StyledApp>
	);
}

export default App;

if ((import.meta as any).vitest) {
	// add tests related to your file here
	// For more information please visit the Vitest docs site here: https://vitest.dev/guide/in-source.html

	const { it, expect, beforeEach } = (import.meta as any).vitest;
	let render: any;

	beforeEach(async () => {
		render = (await import('@testing-library/react')).render;
	});

	it('should render successfully', () => {
		const { baseElement } = render(<App />);
		expect(baseElement).toBeTruthy();
	});

	it('should have a greeting as the title', () => {
		const { getByText } = render(<App />);
		expect(getByText(/Welcome app-ragic/gi)).toBeTruthy();
	});
}
