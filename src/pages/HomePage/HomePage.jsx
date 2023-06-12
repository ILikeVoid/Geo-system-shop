import React from 'react'
import s from './HomePage.module.scss'
import ProductsPreview from '../../ProductsPreview/ProductsPreview'
import Promotion from '../../Promotion/Promotion'
import SpecialProduct from '../../SpecialProduct/SpecialProduct'
import History from '../../History/History'

const HomePage = () => {
	return (
		<div className={s.home}>
			<Promotion />
			<ProductsPreview />
			<SpecialProduct />
			<History />
		</div>
	)
}
export default HomePage