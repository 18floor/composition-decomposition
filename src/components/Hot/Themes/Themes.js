import React from "react";
import Date from "./Date";
import Tabs from "../../Tabs/Tabs";

const themesData = [
    {id: 1, title: 'Сейчас в СМИ в России'},
    {id: 2, title: 'Москва и область'},
    {id: 3, title: 'Рекомендуем'},
];

/**
 * Themes - Компонент показывает новостные разделы
 */
const Themes = (props) => {
    const {activeTab, handleTabChange} = props;

    return (
        <div className="news-header">
            <Tabs tabs={themesData} activeTab={activeTab} handleTabChange={handleTabChange}/>
            <Date/>
        </div>
    );
};

export default Themes;