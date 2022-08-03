import React from "react";
import '../styles/style.css'
// import "./Coin.css";

const Coin = ({
	name,
	price,
	symbol,
	marketcap,
	// volume,
	image,
	priceChange,
}) => {
	return (
		<div className="coin-container col18">
			<div className="coin-row">
				<div className="coin">
					<img src={image} alt="crypto" />
					<p className="coin-symbol">{symbol}</p>

					<h1 className="coin-Name">{name}</h1>
				</div>
				<div className="coin-data">
					<p className="coin-price">${price}</p>
					{/* <p className="coin-volume">${volume.toLocaleString()}</p> */}

					{priceChange < 0 ? (
						<p className="coin-percent red">{priceChange.toFixed(2)}%</p>
					) : (
						<p className="coin-percent green"> {priceChange.toFixed(2)}%</p>
					)}
				</div>
				<p className="coin-marketcap">
					<span>Trading Vol: <br /></span> ${marketcap.toLocaleString()}
				</p>
			</div>
		</div>
	);
};

export default Coin;
