import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './ui/Login';
import AppLayout from './ui/AppLayout';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route element={<AppLayout />}>
					<Route path="/dashboard" element={<h1>Home</h1>} />
					<Route path="/applicants" element={<h1>Applicants</h1>} />
					<Route path="/ticket" element={<h1>ticket</h1>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
