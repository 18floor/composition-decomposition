import React from "react";
import PropTypes from "prop-types";

/**
 * Columns - Компонент реализует колоноку
 */

const Column = (props) => {
    const {titleLink, children} = props;

    return (
        <div>
            {<h3><a href={titleLink.href}>{titleLink.title}</a></h3>}
            {children}
        </div>
    );
};

Column.propTypes = {
    titleLink: PropTypes.shape({
        /**
         * Название колонки
         */
        title: PropTypes.string.isRequired,
        /**
         * Ссылка колонки
         */
        href: PropTypes.string.isRequired,
    }),
    /**
     * Изображение колонки
     */
    image: PropTypes.node,
    /**
     * Содержимое колонки
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.node,
        ),
        PropTypes.string,
        PropTypes.node,
    ])
};

export default Column;