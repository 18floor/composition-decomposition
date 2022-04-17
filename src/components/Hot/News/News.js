import React from "react";
import PropTypes from "prop-types";

const newsData = [
    {
        pic: 'https://avatars.mds.yandex.net/get-ynews-logo/61287/254154898-1520414774364-square/logo-square',
        title: 'В Подмосковье начнут делать самый дорогой в мире кофе',
        category: 'Москва и область'
    },
    {
        pic: 'https://avatars.mds.yandex.net/get-ynews-logo/135513/254154655-1516194420610-square/logo-square',
        title: 'В Подмосковье на 53% снизилась суточная госпитализация пациентов с COVID-19',
        category: 'Москва и область'
    },
    {
        pic: 'https://avatars.mds.yandex.net/get-ynews-logo/33291/254125454-1478693875283-square/logo-square',
        title: 'Мужчина застрелил охранника торгового центра в Подмосковье',
        category: 'Москва и область'
    },
    {
        pic: 'https://avatars.mds.yandex.net/get-ynews-logo/62808/254061710-1496559028899-square/logo-square',
        title: 'Глава Минкультуры Подмосковья присоединилась к акции «Доброе дело»',
        category: 'Москва и область'
    },
    {
        pic: 'https://avatars.mds.yandex.net/get-ynews-logo/41096/11930-1633599840780-square/logo-square',
        title: 'В Котельниках местные жители спасли кошку и собаку во время пожара в жилом доме',
        category: 'Москва и область'
    },
];

/**
 * Themes - Компонент показывает список новостей
 */
const News = (props) => {
    return (
        <div>
            {
                newsData.filter((item) => item.category === props.activeTab)
                    .map((item, i) => (
                        <div key={i}>
                            <img className="news-agency-icon" src={item.pic} alt={item.title}/>
                            <a href="#/">{item.title}</a>
                        </div>
                    ))
            }
        </div>
    );
};

News.propTypes = {

    /**
     * Передаем активный раздел
     */
    activeTab: PropTypes.string.isRequired
};

export default News;