import React from "react";
import PropTypes from "prop-types";
import Tabs from "../../Tabs/Tabs";

const assets = [
    {name: 'USD MOEX', rate: '63.52', change: '+0.09'},
    {name: 'EUR MOEX', rate: '70.86', change: '+0.14'},
    {name: 'НЕФТЬ', rate: '64.90', change: '+1.63%'},
];

/**
 * Rate - Компонент реализующий биржевой актив
 */
const Rate = ({asset}) => {
    return (
        <p className="rate">
            <span className="rate-span">{asset.name}</span>
            <span className="rate-span">{asset.rate}</span>
            <span className="rate-span">{asset.change}</span>
        </p>
    );
};

Tabs.propTypes = {
    /**
     * Описание биржевого актива
     */
    asset: PropTypes.shape({
        name: PropTypes.string.isRequired,
        rate: PropTypes.string.isRequired,
        change: PropTypes.string.isRequired
    })
};

/**
 * Rates - Компонент реализующий строку биржевых активов
 */
const Rates = () => {
    return (
        <div className="rates">
            {assets.map((item, i) => <Rate key={i} asset={item}/>)}
        </div>
    );
};

export default Rates;
