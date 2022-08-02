import React from "react";
import "../styles/style.css";

function ExchangeRate({exchangeRate, chosenPrimany, chosenSec}) {
	return (
		<div className="ExchangeRate">
			Exchange Rate
			{exchangeRate}
			<h2>
				{chosenPrimany} to {chosenSec}
			</h2>
		</div>
	);
}

export default ExchangeRate;
