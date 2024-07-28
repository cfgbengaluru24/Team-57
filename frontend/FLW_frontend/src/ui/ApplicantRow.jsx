/* eslint-disable react/prop-types */
import { useState } from 'react';
// import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

const initialApplications = [
	{
		application_id: 'fkwoebfbw',
		Date_of_applying: '23-04-24',
		status: 'Finished',
	},
	{
		application_id: 'gkw9ebfbw',
		Date_of_applying: '24-04-24',
		status: 'In Progress',
	},
];

const statusOptions = ['Pending', 'In Progress', 'Finished', 'Rejected'];

const statusColors = {
	Pending: 'bg-yellow-100 text-yellow-800',
	'In Progress': 'bg-blue-100 text-blue-800',
	Finished: 'bg-green-100 text-green-800',
	Rejected: 'bg-red-100 text-red-800',
};

export default function ApplicantRow({ applicant }) {
	const [isOpen, setIsOpen] = useState(false);
	const [applications, setApplications] = useState(initialApplications);

	const toggleDropdown = () => setIsOpen(!isOpen);

	const updateStatus = (applicationId, newStatus) => {
		setApplications((apps) =>
			apps.map((app) =>
				app.application_id === applicationId
					? { ...app, status: newStatus }
					: app
			)
		);
	};

	return (
		<div className="w-full bg-white shadow-md rounded-lg overflow-hidden mb-6">
			<div className="flex items-center bg-gray-100 p-6">
				<div className="flex-grow grid grid-cols-12 gap-4 items-center">
					<h1 className="col-span-5 font-sans text-2xl font-semibold text-gray-800">
						{applicant.name}
					</h1>
					<h1 className="col-span-4 font-sans text-2xl text-gray-700 text-center">
						{applicant.village}
					</h1>
					<h1 className="col-span-3 font-sans text-2xl text-gray-700 text-center">
						{applicant.no_of_applications}
					</h1>
				</div>
				<button
					onClick={toggleDropdown}
					className="ml-4 rounded-full w-12 h-12 bg-blue-500 text-white flex items-center justify-center focus:outline-none hover:bg-blue-600 transition-colors duration-200">
					{isOpen ? '^' : 'V'}
				</button>
			</div>
			{isOpen && (
				<div className="p-6 bg-white">
					<h2 className="font-sans text-2xl font-semibold mb-6 text-gray-800">
						Applications:
					</h2>
					{applications.map((app) => (
						<div
							key={app.application_id}
							className="mb-6 p-6 bg-gray-50 rounded-lg shadow-sm">
							<div className="flex justify-between items-center mb-4">
								<span className="font-semibold text-xl text-gray-700">
									Application ID: {app.application_id}
								</span>
								<span className="text-lg text-gray-600">
									Applied on: {app.Date_of_applying}
								</span>
							</div>
							<div className="flex items-center justify-between mt-6">
								<div className="flex items-center">
									<span className="mr-4 text-xl text-gray-700">Status:</span>
									<select
										value={app.status}
										onChange={(e) =>
											updateStatus(app.application_id, e.target.value)
										}
										className={`p-3 text-lg rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
											statusColors[app.status]
										}`}>
										{statusOptions.map((status) => (
											<option key={status} value={status}>
												{status}
											</option>
										))}
									</select>
								</div>
								<button className="px-6 py-3 bg-blue-500 text-white text-lg rounded-full hover:bg-blue-600 transition-colors duration-200">
									Update
								</button>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
