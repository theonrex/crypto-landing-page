import React from "react";
import '../styles/style.css'

function footer () {
    return (
			<div>
				<footer className="text-center text-lg-start   ">
					<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
						<div className="me-5 d-none d-lg-block container">
							{/* <span>Get connected with us on social networks:</span> */}
						</div>

						<div>
							<a href="" className="me-4 text-reset">
								<i class="bi bi-instagram"></i>{" "}
							</a>
							<a href="" className="me-4 text-reset">
								<i className="fab fa-twitter"></i>
							</a>
							<a href="" className="me-4 text-reset">
								<i class="bi bi-instagram"></i>
							</a>
							<a href="" className="me-4 text-reset">
								<i className="fab fa-instagram"></i>
							</a>
							<a href="" className="me-4 text-reset">
								<i className="fab fa-linkedin"></i>
							</a>
							<a href="" className="me-4 text-reset">
								<i className="fab fa-github"></i>
							</a>
						</div>
					</section>

					<section className="">
						<div className="container text-center  mt-5">
							<div className="row ">
								<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
									<h6 className="text-uppercase fw-bold mb-4">
										<i className="fas fa-gem me-3"></i>Company name
									</h6>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Neque, nisi nulla officiis quidem deserunt iste ipsum
										consequatur exercitationem dignissimos reiciendis officia et
										cumque ipsam, necessitatibus, vitae harum id deleniti
										beatae!
									</p>
								</div>

								<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
									<h6 className="text-uppercase fw-bold mb-4">Products</h6>
									<p>
										<a href="#!" className="text-reset">
											About
										</a>
									</p>
									<p>
										<a href="#!" className="text-reset">
											Careers
										</a>
									</p>
									<p>
										<a href="#!" className="text-reset">
											Blog
										</a>
									</p>
									<p>
										<a href="#!" className="text-reset">
											Legal & Privacy
										</a>
									</p>
								</div>

								<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
									<h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
									<p>
										<a href="#!" className="text-reset">
											Pricing
										</a>
									</p>
									<p>
										<a href="#!" className="text-reset">
											Settings
										</a>
									</p>
									<p>
										<a href="#!" className="text-reset">
											Orders
										</a>
									</p>
									<p>
										<a href="#!" className="text-reset">
											Help
										</a>
									</p>
								</div>

								<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
									<h6 className="text-uppercase fw-bold mb-4">Learn</h6>
									<p>
										<i className="fas fa-home me-3"></i> What is cryptocurrency
									</p>
									<p>
										<i className="fas fa-envelope me-3"></i>
										Crypto Basic
									</p>
									<p>
										<i className="fas fa-phone me-3"></i> Tips & Tutorials
									</p>
									<p>
										<i className="fas fa-print me-3"></i> Market Update
									</p>
								</div>
							</div>
						</div>
					</section>

					<div className="text-center p-4">
						© 2022 Copyright:
						<a className="text-reset fw-bold" href="https://olawandearmstrong.com">
							theonrex
						</a>
					</div>
				</footer>
			</div>
		);
}

export default footer;