import React from "react";

/**
 * SearchForm - Компонент реализующий поле поиска с кнопкой
 */

const SearchForm = () => {
    return (
        <div className="search-form">
            <input type="text" style={{width: '100%'}}/><input type="submit"/>
        </div>
    );
};

export default SearchForm;