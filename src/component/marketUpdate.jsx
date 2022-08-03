import React from "react";
import "../styles/style.css";
// import "./Coin.css";

const market = ({
	name,
	price,
	symbol,
	marketcap,
	volume,
	image,
	priceChange,
	marketcaprank,
}) => {
	return (
		<div>
			<div className="market-container ">
				<div className="market-row">
					<div class="grid-container">
						<div class="grid-item">
							{" "}
							<li className="market-li col14 market-Grid"> {marketcaprank}</li>
						</div>

						<div class="grid-item">
							<img
								src={image}
								alt="crypto "
								className="col14 crypto market-Grid "
							/>
							<h1 className="market-Name col14 market-Grid market-li ">
								{name}
							</h1>

							<p className="market-symbol col14 market-Grid market-li ">
								{symbol}
							</p>

						</div>
						<div class="grid-item">
							{" "}
							<p className=" market-li  market-price">${price}</p>
						</div>
						<div class="grid-item">
							{priceChange < 0 ? (
								<p className="market-percent red  market-li ">
									{priceChange.toFixed(2)}%
								</p>
							) : (
								<p className="market-percent green market-li ">
									{" "}
									{priceChange.toFixed(2)}%
								</p>
							)}
						</div>

						<div class="grid-item">
							<p className="market-marketcap market-cap market-li ">
								${marketcap.toLocaleString()}
							</p>
						</div>
						<div class="grid-item fade-btn">
							<p className="market-marketcap market-li ">
								<button className="price-btn">
									<a href="/#"> Trade </a>
								</button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default market;
