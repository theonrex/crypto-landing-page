import React from "react";
import '../styles/style.css'


function features() {
	return (
		<div>
			<div className="container features rowX" data-aos="zoom-in">
				<h1 className="amazing"> CryptoCap Amazing Features</h1>
				<p>
					Explore sensational features to prepare your best investment in
					cryptocurrency
				</p>
				<div>
					<div className="col20 ">
						<i class="icons bi bi-wallet2"></i>

						<p className="mg"> Manage Portfolio</p>
						<p className="lighter">
							Buy and sell popular digital currencies, keep track of them in the
							one Place
						</p>
						<a href="https://www.binance.com/en/blog/fiat/3-ways-to-manage-your-crypto-portfolio-with-profit-and-loss-calculations-421499824684903556">
							{" "}
							More Details <i class="bi bi-arrow-right-short"></i>
						</a>
					</div>
					<div className="col20">
						<i class="icons bi bi-shield-fill-check"></i>
						<p className="mg"> Protected Securely</p>
						<p className="lighter">
							All cash balances are covered by FDIC insurance, up to a maximum
							of $250,000
						</p>
						<a href="https://www.coingecko.com/">
							{" "}
							More Details <i class="bi bi-arrow-right-short"></i>
						</a>
					</div>
					<div className="col20">
						<i class="icons bi bi-currency-bitcoin"></i>
						<p className="mg"> Cryptocurrency Variety</p>
						<p className="lighter">
							Supports a variety of the most popular digital currencies and
							always update.
						</p>
						<a href="https://www.coingecko.com/">
							{" "}
							More Details <i class="bi bi-arrow-right-short"></i>
						</a>
					</div>
					<div className="col20">
						<i class="icons bi bi-journal-text"></i>
						<p className="mg"> Learn Best Practice </p>
						<p className="lighter">
							Easy to know how to invest and how cryptocurrency works; friendly
							to newbie.
						</p>
						<a href="https://unknownsatoshi.com/blog">
							{" "}
							More Details <i class="bi bi-arrow-right-short"></i>
						</a>
					</div>
				</div>
			</div>

			<div className="rowX container container-New">
				<div className="col50 ">
					<header className="new-c"> New in Cryptocurrency?</header>
					<p className="lighter">
						We'll tell you what cryptocurrency are, how they work and why you
						should own one right now. So let's do it.
					</p>
				</div>

				<div className="col50 learn">
					<button className="btn-green">
						{" "}
						<a href="https://unknownsatoshi.com/">
							{" "}
							Learn & Explore Now <i class="bi bi-arrow-right-short"></i>
						</a>
					</button>
				</div>
			</div>
		</div>
	);
}

export default features;
