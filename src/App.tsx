import { Route, Routes } from 'react-router-dom';
import CompareTexts from './components/pages/Compare';
import { Layout } from './components/templates/Layout';
import Counter from './components/pages/Counter';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Counter />} />
					<Route path='/' element={<Counter />} />
					<Route path='/compare' element={<CompareTexts />} />
					<Route path='*' element={<Counter />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
