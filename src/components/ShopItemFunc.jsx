import { Item } from '../models/Item';
import PropTypes from 'prop-types';
import './shop-item-func.css';

export function ShopItemFunc(props) {

    const { item } = props;

    return (
        <div class="main-content">
            <h2>{item.brand}</h2>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <div className="description">{item.descriptionFull}</div>
            <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">{item.currency}{item.price}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    )
}

ShopItemFunc.propTypes = {
    item: PropTypes.instanceOf(Item),
}