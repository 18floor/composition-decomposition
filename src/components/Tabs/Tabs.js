import React from "react";
import PropTypes from "prop-types";

/**
 * Tab - Компонент реализующий раздел
 */
const Tab = (props) => {
    return (
        <button onClick={(e) => props.handleTabChange(e)} disabled={props.activeTab === props.children}>
            {props.children}
        </button>
    );
};

Tab.propType = {

    /**
     * Строка с активным разделом
     */
     activeTab: PropTypes.string.isRequired,

    /**
     * Обработчик активного раздела
     * @param {string} activeTab
     */
    handleTabChange: PropTypes.func.isRequired
};

/**
 * Tabs - Компонет, резализующий разделы для поиска или фильтрации новостей
 */
const Tabs = (props) => {
    const {tabs, activeTab, handleTabChange} = props;

    return (
        <div>
            {tabs.map((tab) => (
                <Tab key={tab.id} activeTab={activeTab} handleTabChange={handleTabChange}>{tab.title}</Tab>
            ))}
        </div>
    );
};

Tabs.propTypes = {
    /**
     * Описание массива разделов
     */
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        }),
    ).isRequired,

    /**
     * Передаем активный раздел
     */
    activeTab: PropTypes.string.isRequired,

    /**
     * Обработчик активного раздела
     * @param {string} activeTab
     */
    handleTabChange: PropTypes.func.isRequired
};

export default Tabs;