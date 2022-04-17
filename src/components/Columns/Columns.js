import React from "react";
import Column from "./Column";
import ColumnItem from "./ColumnItem";

/**
 * Columns - Компонент показывает сетку колонок
 */

const Columns = () => {
    return (
        <div className="columns">
            <Column titleLink={{title: 'Погода', href: '#/'}}>
                <img src="https://info.weather.yandex.net/26010/2_white.ru.png" alt="Погода"/>
            </Column>
            <Column titleLink={{title: 'Карта Германии', href: '#/'}}>
                Новости о главных событиях в Германии, России, Европе и мире. Лента новостей от Deutsche Welle о
                политике, экономике, обществе, культуре.
            </Column>
            <Column titleLink={{title: 'Посещаемое', href: '#/'}}>
                <ColumnItem type='list' description='О сталинках'>
                    <a href="#/">Недвижимость</a>
                </ColumnItem>
                <ColumnItem type='list' description='Люстры и светильники'>
                    <a href="#/">Маркет</a>
                </ColumnItem>
                <ColumnItem type='list' description='Привод от 4*4'>
                    <a href="#/">Авто.ру</a>
                </ColumnItem>
            </Column>
        </div>
    );
};

export default Columns;