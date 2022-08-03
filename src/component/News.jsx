import React from "react";
import "../styles/style.css";
import Bicoin from '../images/btn.jpg'





function News() {

	return (
		<div className="container" data-aos="fade-left" id="news">
			<div className="news-feed container">
				<h2>Learn About Cryptocurrency</h2>
				<p>Learn all about cryptocurrency to start investing</p>
			</div>
			<div class="news-container">
				<div class="news-item item1">
					<div className="news-head">
						<img src={Bicoin} alt="" />
					</div>

					<div className="news-text">
						<h1>All about investing in Crypto and related risks</h1>
						<h6>crypto to basic</h6>
					</div>
				</div>
				<div class="news-item item2">
					<img
						src="https://res.cloudinary.com/unknownsatoshi/image/upload/v1/images/blog_images/bitcoin-g398ef2c9e_640_dm7rcc"
						alt=""
					/>
					<header>Crypto Basic</header>
					<h1>Crypto 101: Understanding Leverage And Margin Trading</h1>
					<p>
						With Crypto Trading growing in popularity all across the world, many
						investors are beginning to{" "}
						<a href="https://unknownsatoshi.com/article/crypto-101-understanding-leverage-and-margin-tradi/">
							..Read More...
						</a>
					</p>
				</div>
				<div class="news-item item3">
					<img
						src="https://res.cloudinary.com/unknownsatoshi/image/upload/v1/images/blog_images/pickle-og_b6jtg1"
						alt=""
					/>
					<header>Crypto Basic</header>
					<h1> Coin Research: Pickle Finance ($Pickle)</h1>
					<p>
						PICKLE FINANCE ($PICKLE) INFO ● Market Cap: 4,021,279$ ● Average
						24Hr Volume: 271,311$ ● Total Supply: 1,964,336M ● Circ.
						<a href="https://unknownsatoshi.com/article/coin-research-pickle-finance-pickle-/">
							..Read More...
						</a>
					</p>
				</div>
			</div>

			<div class="news-container-sm">
				<div class="news-item item2">
					<img
						src="https://res.cloudinary.com/unknownsatoshi/image/upload/v1/images/blog_images/quantitatives-3IQ6EWltxx4-unsplash_urw2k6"
						alt=""
					/>
					<header>Crypto Basic</header>
					<h1>
						Can Bitcoin Serve as the Perfect Hedge to the Rising Inflation?
					</h1>
					<p>
						All over the world we are seeing the cost of a basic living
						skyrocket, this is pushing more and more people..
						<a href="https://unknownsatoshi.com/article/can-bitcoin-serve-as-the-perfect-hedge-to-the-risi/">
							..Read More...
						</a>
					</p>
				</div>
				<div class="news-item item2">
					<img
						src="https://res.cloudinary.com/unknownsatoshi/image/upload/v1/images/blog_images/crypto-futures-contracts_zc0olh"
						alt=""
					/>
					<header>Crypto Basic</header>
					<h1> Why You Should Trade Crypto Futures </h1>
					<p>
						Talking about one of the easy ways to make money amidst this dip
						happening in the markets hear and dear (LOL, PUN IN
						<a href="https://unknownsatoshi.com/article/why-you-should-trade-crypto-futures/">
							..Read More...
						</a>
					</p>
				</div>
				<div class="news-item item3">
					<img
						src="https://res.cloudinary.com/unknownsatoshi/image/upload/v1/images/blog_images/bitcoin-g398ef2c9e_640_dm7rcc"
						alt=""
					/>
					<header>Crypto Basic</header>
					<h1>Crypto 101: Understanding Leverage And Margin Trading</h1>
					<p>
						With Crypto Trading growing in popularity all across the world, many
						investors are beginning to not only invest lon{" "}
						<span>
							<a href="https://unknownsatoshi.com/article/crypto-101-understanding-leverage-and-margin-tradi/">
								..Read More...
							</a>
						</span>
					</p>
				</div>
				<div class="news-item item3">
					<img
						src="https://res.cloudinary.com/unknownsatoshi/image/upload/v1/images/blog_images/bullbear_nw40di"
						alt=""
					/>
					<header>Crypto Basic</header>
					<h1>What Next For The Crypto Markets? </h1>
					<p>
						Welcome back, Frens. Time flies these days and it has been 3 weeks
						now since BTC smashed our 3 p
						<a href="https://unknownsatoshi.com/article/why-you-should-trade-crypto-futures/">
							..Read More...
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default News;
