import React from "react";
import '../styles/style.css';

function gettingStarted() {
    return (
			<div>
				<div className="started container rowX">
					<div className="col50 ">
						<h1 className="started-h1">How to get Started</h1>
						<p>
							Simple and easy way to start your investment in cryptocurrency
						</p>
						<button className="started-btn">
							{" "}
							<a href="/#"> Get Started</a>
						</button>
					</div>
					<div className="col50 started-methods">
						<div className="start-grid">
							<div>
								<i class="bi bi-person-circle"></i>
							</div>
							<div>
								<h1>Create Your Account</h1>
								<p>Your account and personal identity are garmented safe</p>
							</div>
						</div>
						<div className="start-grid">
							<div>
								<i class="bi bi-coin"></i>
							</div>
							<div>
								<h1>Create Your Account</h1>
								<p>Your account and personal identity are garmented safe</p>
							</div>
						</div>
						<div className="start-grid">
							<div>
								<i class="bi bi-credit-card-2-front-fill"></i>
							</div>
							<div>
								<h1>Create Your Account</h1>
								<p>Your account and personal identity are garmented safe</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default gettingStarted;