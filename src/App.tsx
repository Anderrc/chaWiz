import { Route, Routes } from 'react-router-dom';
import { Counter } from './components/pages/Counter';
import { Layout } from './components/templates/Layout';
import CompareTexts from './components/pages/Compare';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Counter />} />
				<Route path='/compare' element={<CompareTexts />} />
			</Routes>
		</Layout>
	);
}

export default App;

