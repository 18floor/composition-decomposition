import React from 'react';

/**
 * Square - Компонент реализующий квадратный баннер
 */

const Square = () => {
    return (
        <div className="ad__square">
            <img style={{width: 180}}
                src="https://avatars.mds.yandex.net/get-banana/26007/x25DaFiqQDFZGPRQ5g991XCre_banana_20161021_tiz_2_120x90.png/orig"
                alt="Бесплатная доставка"/><br/>
            <a href="#/">Бесплатная доставка</a>
            <p>В постаматы и пункты выдачи Яндекс.Маркета</p>
        </div>
    );
};

export default Square;