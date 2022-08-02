import React, { useState, useEffect } from "react";
import "../styles/style.css";
import axios from "axios";
// import Coin from "./coin";
import Market from "./marketUpdate"

//
function Update() {
	const [markets, setMarkets] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		axios
			.get(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=14&page=1&sparkline=false"
			)

			.then((res) => {
				setMarkets(res.data);
			})
			.catch((error) => console.log(error));
	});

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const filteredMarkets = markets.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())

	);

	//

	return (
		<div>
			<div className="market-flex container">
				<div className="">
					<div className="market-search">
						<h1>Market Trend</h1>
						<form>
							<input
								className="market-input"
								type="text"
								onChange={handleChange}
								placeholder="Search"
							/>
						</form>
					</div>
					<div class="grid-container">
						<div class="grid-item">NO</div>
						<div class="grid-item">NAME</div>
						<div class="grid-item">Price</div>
						<div class="grid-item">Change</div>
						<div class="grid-item">market-cap</div>
						<div class="grid-item">Trade</div>
					</div>
					{filteredMarkets.map((market) => {
						return (
							<Market
								key={market.id}
								name={market.name}
								price={market.current_price}
								symbol={market.symbol}
								marketcap={market.market_cap}
								volume={market.market_cap}
								image={market.image}
								priceChange={market.price_change_percentage_24h}
								marketcaprank={market.market_cap_rank}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Update;

