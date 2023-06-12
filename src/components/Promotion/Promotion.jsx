import React from 'react'
import r12 from "../../assets/img/promotion/r12.png"
import leica from  "../../assets/img/promotion/leica-sprinter-50-1.png"
import dron from "../../assets/img/promotion/dron.png"
import "./Promotion.css"

const Promotion = () => {
	return (
		<div className="promotion">
			<div className="row flex justify-between">
				<div className="col-4 col-md-12 col-sm-12">
					<div className="promotion-box">
						<div className="text">
							<h3>GNSS TRIMBLE R12i</h3>
								<button className="btn-flat btn-hover"><span>Подробнее</span></button>
						</div>
						<img src={r12} alt=""/>
					</div>
				</div>
				<div className="col-4 col-md-12 col-sm-12">
					<div className="promotion-box">
						<div className="text">
							<h3>LEICA SPRINTER 50</h3>
								<button className="btn-flat btn-hover"><span>Подробнее</span></button>
						</div>
						<img src={leica} alt=""/>
					</div>
				</div>
				<div className="col-4 col-md-12 col-sm-12">
					<div className="promotion-box">
						<div className="text">
							<h3>DJI AGRAS MG-1P RTK</h3>
								<button className="btn-flat btn-hover"><span>Подробнее</span></button>
						</div>
						<img src={dron} alt=""/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Promotion