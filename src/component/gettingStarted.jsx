import React from "react";
import '../styles/style.css';

function gettingStarted() {
    return (
			<div>
				<div className="started container rowX">
					<div className="col50 container">
						{/* gettingStarted */}
						<h1 className="started-h1">How to get Started</h1>
						<p>
							Simple and easy way to start your investment in cryptocurrency
						</p>
						<button className="started-btn">
							{" "}
							<a href="https://www.binance.com/en-NG/support/faq/c780097f75dd450a82d17f1e84153276">
								{" "}
								Get Started
							</a>
						</button>
					</div>
					<div className="col50  create container started-methods">
						<div className="start-grid">
							<div>
								<i class="bi bi-person-circle"></i>
							</div>
							<div className="acct">
								<h1>Create Your Account</h1>
								<p>Your account and personal identity are garmented safe</p>
							</div>
						</div>
						<div className="start-grid">
							<div>
								<i class="bi bi-coin"></i>
							</div>
							<div className="acct">
								<h1>Fund Your Account</h1>
								<p>Your account and payment identity are garmented safe</p>
							</div>
						</div>
						<div className="start-grid">
							<div>
								<i class="bi bi-currency-exchange"></i>
							</div>
							<div className="acct">
								<h1> Start Trading</h1>
								<p>Your account and trading history are garmented safe</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default gettingStarted;