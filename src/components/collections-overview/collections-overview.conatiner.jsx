import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionFetching} from '../../redux/shop/shop.selector'
import WithSpinner from '../with-spinner/with-spinner.component'
import {compose} from 'redux'

import CollectionOverview from './collections-overview.comonent'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionOverview)

export default CollectionsOverviewContainer