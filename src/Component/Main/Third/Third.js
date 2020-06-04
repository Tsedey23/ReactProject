import React, { Component } from 'react';
import './Third.css';

 class Third extends Component {
    render() {
        return (
            <div>
               <section className="third-hightlight-wrapper">
		<div className="container">
			<div className="title-wraper bold">
				iPhone 11 Pro 
			</div> 

			<div className="description-wrapper">
				Pro cameras. Pro display. Pro performance.
			</div>

			<div className="price-wrapper">
				From $24.95/mo. or $599 with trade‑in.
			</div>

			<div className="links-wrapper">
				<ul>
					<li><a href="">Learn more</a></li>
					<li><a href="">Buy</a></li>
				</ul> 
			</div>
		</div>
	</section> 
            </div>
        );
    }
}

export default Third;
