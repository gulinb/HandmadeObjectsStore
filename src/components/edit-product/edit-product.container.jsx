import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selector'
import WithSpinner from '../with-spinner/with-spinner.component'
import {compose} from 'redux'

import EditProduct from './edit-product.component'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

const EditProductContainer = compose(connect(mapStateToProps), WithSpinner)(EditProduct)

export default EditProductContainer