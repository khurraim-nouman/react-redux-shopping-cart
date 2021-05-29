import React from 'react'
import styles from './Product.module.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart, loadCurrentItem} from '../../../redux/Shopping/shopping-actions'

const Product = ({ productData , addToCart , loadCurrentItem}) => {
    return (
       <div className={styles.container}>
           <img
            src={productData.image}
            alt={productData.title}
            className={styles.image}
            />

            <div className={styles.info}>
                <h4>{productData.title}</h4>
                <p>{productData.description}</p>
                <h2>$ {productData.price} </h2>
            </div>


            <div className={styles.buttons}>
                <Link to={`/product/${productData.id}`}>
                    <button className={styles.btnGray} onClick={() => {loadCurrentItem(productData)}}>
                        View Item
                    </button>
                </Link>
                <button onClick={() => addToCart(productData.id)} className={styles.btnBlack}>Add To Cart</button>
            </div>
       </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        addToCart : (id) => {dispatch(addToCart(id))},
        loadCurrentItem : (item) => dispatch(loadCurrentItem(item))
    }
}

export default connect(null, mapDispatchToProps)(Product);