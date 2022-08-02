import React from "react";
import "../styles/style.css";
import Bicoin from '../images/btn.jpg'





function News() {

	return (
		<div className="container">
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
						investors are beginning to  ..Read More...
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
						investors are beginning to  ..Read More...
					</p>
				</div>
			</div>

			<div class="news-container-sm">
				<div class="news-item item2">
					<img
						src="https://res.cloudinary.com/unknownsatoshi/image/upload/v1/images/blog_images/bitcoin-g398ef2c9e_640_dm7rcc"
						alt=""
					/>
					<header>Crypto Basic</header>
					<h1>Crypto 101: Understanding Leverage And Margin Trading</h1>
					<p>
						With Crypto Trading growing in popularity all across the world, many
						investors are beginning to not only invest lon..Read More...
					</p>
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
						investors are beginning to not only invest lon..Read More...
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
						investors are beginning to not only invest lon..Read More...
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
						investors are beginning to not only invest lon..Read More...
					</p>
				</div>
			</div>
		</div>
	);
}

export default News;
