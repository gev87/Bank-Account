import BalanceDisplay from "./features/accounts/BalanceDisplay";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import { useSelector } from "react-redux";

function App() {
	const fullName = useSelector((state) => state.customer.fullName);

	return (
		<div>
			<h1>🏦 The React-Redux Bank ⚛️</h1>
			{fullName ? (
				<>
					<Customer />
					<AccountOperations />
					<BalanceDisplay />
				</>
			) : (
				<CreateCustomer />
			)}
		</div>
	);
}

export default App;
