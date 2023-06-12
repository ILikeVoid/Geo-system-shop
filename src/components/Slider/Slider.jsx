import React from 'react'
import s from './CarouselBox.module.scss'
import { dataSlider } from './dataSlider'

const CarouselBox = () => {
	return (
		<div className={s.container_slider}>
			{dataSlider.map((ogj, index) =>
				<div>
					<img src={} />
				</div>
			)}
		</div>
	)
}

export default CarouselBox