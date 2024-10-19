import React, { useState } from "react";
import DashboardStats from "../components/DashboardStats";
import pop from "../assets/images/Credit.svg";
import pops from "../assets/images/frame.svg";
import { Link } from "react-router-dom";

const TransactionHistory = () => {
	const [dropAll, setDropAll] = useState(false);

	const transactions = [
		{
			id: 1,
			type: "Token Credit",
			amount: "NGN 2000.00",
			tokens: "20 Tokens",
			date: "12-May, 2023",
			status: "PENDING",
		},
		{
			id: 2,
			type: "Token Debit",
			amount: "NGN 200.00",
			tokens: "2 Tokens",
			date: "12-May, 2023",
			status: "SUCCESSFUL",
		},
		{
			id: 3,
			type: "Token Credit",
			amount: "NGN 2000.00",
			tokens: "20 Tokens",
			date: "12-May, 2023",
			status: "FAILED",
		},
		{
			id: 4,
			type: "Token Debit",
			amount: "NGN 2000.00",
			tokens: "20 Tokens",
			date: "12-May, 2023",
			status: "FAILED",
		},
		{
			id: 5,
			type: "Token Debit",
			amount: "NGN 2000.00",
			tokens: "20 Tokens",
			date: "12-May, 2023",
			status: "SUCCESSFUL",
		},
		{
			id: 6,
			type: "Token Debit",
			amount: "NGN 2000.00",
			tokens: "20 Tokens",
			date: "12-May, 2023",
			status: "SUCCESSFUL",
		},
		{
			id: 7,
			type: "Token Debit",
			amount: "NGN 2000.00",
			tokens: "20 Tokens",
			date: "12-May, 2023",
			status: "SUCCESSFUL",
		},
	];

	const getStatusClass = (status) => {
		if (status === "PENDING") return "bg-yellow-100 text-yellow-600";
		if (status === "SUCCESSFUL") return "bg-green-100 text-green-600";
		return "bg-red-100 text-red-600";
	};

	const handleDropAll = () => {
		setDropAll(!dropAll);
	};

	return (
		<>
			{/* <DashboardStats /> */}
			<div className="mt-8 bg-white p-6 shadow-md rounded-lg">
				<div className="flex justify-between">
					<h3 className="text-xl font-semibold">
						Transaction History
					</h3>
					<Link
						to="#"
						className="text-green-500 cursor-pointer"
						onClick={handleDropAll}
					>
						<b>{dropAll ? "See Less" : "See All"}</b>
					</Link>
				</div>
				<table
					className="w-full mt-4 p-4"
					data-aos="fade-up"
					data-aos-duration="600"
				>
					<tbody>
						{(dropAll
							? transactions
							: transactions.slice(0, 4)
						).map((transaction) => (
							<tr key={transaction.id} className="border-b">
								<td className="p-4">
									{/* Display different images based on the status */}
									{transaction.status === "SUCCESSFUL" ? (
										<img
											src={pop}
											alt="Success"
											className="w-6 h-6"
										/>
									) : (
										<img
											src={pops}
											alt="Failed or Pending"
											className="w-6 h-6"
										/>
									)}
								</td>
								<td className="p-4">{transaction.type}</td>
								<td className="p-4">{transaction.amount}</td>
								<td className="p-4">{transaction.tokens}</td>
								<td className="p-4">{transaction.date}</td>
								<td className="p-4">
									<span
										className={`px-4 py-1 ${getStatusClass(
											transaction.status
										)}`}
									>
										{transaction.status}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default TransactionHistory;
