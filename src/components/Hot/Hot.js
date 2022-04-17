import React, {useState} from "react";
import Themes from "./Themes/Themes";
import Rates from "./Rates/Rates";
import News from "./News/News";

/**
 * Hot - Модуль реализует блок горячих новостей и биржевую сводку
 */
const Hot = () => {
    const [activeTab, setActiveTab] = useState('Москва и область');

    const handleTabChange = (e) => {
        /**
         * устанавливаем setActiveTab()...
         */
    };

    return (
        <div>
            <Themes activeTab={activeTab} handleTabChange={handleTabChange} />
            <News activeTab={activeTab}/>
            <Rates />
        </div>
    );
};

export default Hot;