import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './ui/Login';
import AppLayout from './ui/AppLayout';
import Applications from './ui/Applications';
import AddBenificiaryForm from './ui/AddBenificiaryForm';
import Policies from './ui/Policies';
import Policy from './ui/Policy';
import Homepage from './ui/Homepage';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route element={<AppLayout />}>
					<Route path="/dashboard" element={<Homepage />} />
					<Route path="/applicants" element={<Applications />} />
					<Route path="/ticket" element={<h1>ticket</h1>} />
					<Route path="/addBeneficiary" element={<AddBenificiaryForm />} />
					<Route path="/policies/user/:userid" element={<Policies />}></Route>
					<Route path="/policies/:policyid" element={<Policy />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
