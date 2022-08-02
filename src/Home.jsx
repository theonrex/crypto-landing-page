import React, {useState, useEffect} from "react";
import "./styles/style.css"
import axios from 'axios';
import Coin from "./component/coin";
import Features from "./component/features";
import Update from "./component/update";
import GettingStarted from "./component/gettingStarted";
import News from "./component/News";

//
 function Home() {
const  [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");


	useEffect(() => {
		axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false")

		.then(res => {
			setCoins(res.data);
			
		})
		.catch(error => console.log(error));
 });

 

	const filteredCoins = coins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	);

	//


	return (
		<div>
			<section className="container">
				<div className=" home-banner">
					<div className=" welcome">
						
						<h1>Get Live Prices & Good exchange rate</h1>
						<p>
							Market Place for crypto collection non fungible token here
							collection non fungible token here collection non fungible token
							here Market Place for
						</p>

						<button className="btn btn-primary"> Get Started</button>
					</div>
				</div>
				<div className="market"></div>
			</section>
			<div className="coin-flex container">
				<div className="market-span">
					<h1>
						Market <span>Trend</span>
					</h1>
					{filteredCoins.map((coin) => {
						return (
							<Coin
								key={coin.id}
								name={coin.name}
								price={coin.current_price}
								symbol={coin.symbol}
								marketcap={coin.total_volume}
								volume={coin.market_cap}
								image={coin.image}
								priceChange={coin.price_change_percentage_24h}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<Features />
			</div>

			{/* <div className="container">
				<div className="box">
					<span></span>
					<div className="content">
						<div></div>
						<h2>Card one</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<a href="#">Read More</a>
					</div>
				</div>

				<script
					type="text/javascript"
					src="https://files.coinmarketcap.com/static/widget/currency.js"
				></script>
			</div> */}

			<div>
				<Update />
			</div>
			<div>
				<GettingStarted />
			</div>

			<div>
				<News />
			</div>
		</div>
	);
}

export default Home;