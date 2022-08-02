import React from "react";
import "../styles/style.css";
import { useState } from "react";
import ExchangeRate from "./Exchange";
import axios from "axios";

function CurrencyConverter() {
	const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
	const [chosenPrimany, setChosenPrimany] = useState("BTC");
	const [chosenSec, setChosenSec] = useState("USD");
	const [amount, setAmount] = useState(1);
	const [exchangeRate, setExchangeRate] = useState(0);
	const [result, setResult] = useState(0);

	const convert = () => {
		const options = {
			method: "GET",
			url: "https://alpha-vantage.p.rapidapi.com/query",
			params: {
				from_currency: chosenPrimany,
				function: "CURRENCY_EXCHANGE_RATE",
				to_currency: chosenSec,
			},
			headers: {
				"X-RapidAPI-Key": "9de639e108msh32e8624023bfc57p1aac55jsnfd74177c1de9",
				"X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
			},
		};

		axios
			.request(options)
			.then((response) => {
				console.log(
					response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
				);
				setExchangeRate(
					response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
				);
				setResult(
					response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] *
						amount
				);
			})

			.catch((error) => {
				console.error(error);
			});
	};
	console.log(exchangeRate);

	return (
		<div className="CurrencyConverter">
			converter
			<div className="input-box">
				<table>
					<body>
						<tr> primary converter</tr>
						<td>
							<input
								type="number"
								name="Currency Amount"
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
							/>
						</td>
						<td>
							<select
								value={chosenPrimany}
								name="Currency-option-1"
								className="currency-option"
								onChange={(e) => setChosenPrimany(e.target.value)}
							>
								{currencies.map((currency, _index) => (
									<option key={_index}>{currency}</option>
								))}
							</select>
						</td>
					</body>
				</table>

				<table>
					<tbody>
						<tr> Sec converter</tr>
						<td>
							<input
								type="number"
								name="Currency Amount"
								value={result}
								disabled={true}
							/>
						</td>
						<td>
							<select
								value={chosenSec}
								name="Currency-option-1"
								className="currency-option"
								onChange={(e) => setChosenSec(e.target.value)}
							>
								{currencies.map((currency, _index) => (
									<option key={_index}>{currency}</option>
								))}
							</select>
						</td>
					</tbody>
				</table>
				<button id="convert-btn" onClick={convert}>
					convert
				</button>
			</div>
			<br />
			<ExchangeRate
				exchangeRate={exchangeRate}
				chosenPrimany={chosenPrimany}
				chosenSec={chosenSec}
			/>
		</div>
	);
}

export default CurrencyConverter;
