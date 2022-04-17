import React from "react";
import PropTypes from "prop-types";

/**
 * ColumnItem - Компонент реализует элемент содержимого колонки
 */

const ColumnItem = (props) => {
    const {type, children, description} = props;
    if (type === 'list') {
        return (
            <div>
                {children}
                {` - ${description}`}
            </div>
        )
    }
    /**
     * Здесь должна быть реализация остельных типов ColumnItem
     */
};

ColumnItem.propTypes = {
    /**
     * Тип элемента
     */
    type: PropTypes.oneOf(['list', 'tv', 'radio']).isRequired,
    /**
     * Ссылка
     */
    children: PropTypes.node.isRequired,
    /**
     * Описание ссылки
     */
    description: PropTypes.string,
    /**
     * Ссылка на канал
     */
    channel: PropTypes.node,
    /**
     * Изображение
     */
    image: PropTypes.node,
};

export default ColumnItem;