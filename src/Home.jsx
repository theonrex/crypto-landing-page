import React, {useState, useEffect} from "react";
import "./styles/style.css"
import axios from 'axios';
import Coin from "./component/coin";
import Features from "./component/features";
import Update from "./component/update";
import GettingStarted from "./component/gettingStarted";
import News from "./component/News";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

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

	////
	AOS.init();

	// You can also pass an optional settings object
	// below listed default settings
	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
		initClassName: "aos-init", // class applied after initialization
		animatedClassName: "aos-animate", // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 400, // values from 0 to 3000, with step 50ms
		easing: "ease", // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
	});


	return (
		<div>
			<section className="container" id="home">
				<div className=" home-banner">
					<div className=" welcome">
						<h1>Get Live Prices & Good Exchange Rate</h1>
						<p>
							Haven is a cryptocurrency news website and social network focused
							on the most important cryptocurrency news, price, charts and other
							information. It covers all of the top coins in terms of daily
							trading volume, including Bitcoin, Ethereum and more.
							
						</p>

						<button className="btn btn-prime">
							<a href="https://www.coingecko.com/"> Get Started</a>
						</button>
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