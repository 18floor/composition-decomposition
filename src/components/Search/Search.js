import React, {useState} from "react";
import Tabs from "../Tabs/Tabs";
import SearchForm from "./SearchForm";

const searchTabsData = [
    {id: 1, title: 'Видео'},
    {id: 2, title: 'Картинки'},
    {id: 3, title: 'Новости'},
    {id: 4, title: 'Карты'},
    {id: 5, title: 'Маркет'},
    {id: 6, title: 'Переводчик'},
    {id: 7, title: 'Эфир'},
    {id: 8, title: 'ещё'},
];

/**
 * Search - Компонент показывающий поиск в сборе
 */

const Search = () => {
    const [activeTab, setActiveTab] = useState('');

    const handleTabChange = (e) => {
        /**
         * устанавливаем setActiveTab()...
         */
    };

    return (
        <div className="search-block">
            <img
                src="/yandex.png"
                alt="Яндекс"
                width="107"
            />
            <div>
                <Tabs tabs={searchTabsData} handleTabChange={handleTabChange} activeTab={activeTab}/>
                <SearchForm/>
                <p>Найдется все! Например, Фаза луны сегодня</p>
            </div>
        </div>
    );
};

export default Search;