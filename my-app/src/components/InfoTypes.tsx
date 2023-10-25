import React, { FC } from 'react';

const InfoTypes:FC=()=>{
    return(
        <div className='InfoTypes'>
            {/* <div className="types_title">
                <p>Типы самозванцев</p>
            </div> */}
            <div className="types_blocks" style={{paddingTop:'40px'}}>
            <div className="types_1b">
                <p>Перфекционист<sup>6</sup></p>
                <p>
                «Самозванец»-перфекционист ставит перед собой такие высокие цели, достичь которые практически невозможно. В конце концов, он терпит неудачу, лишь подкрепляющую его внутреннее убеждение, что он недостаточно хорош.
                </p>
            </div>
            <div className="types_1b">
                <p>Супергерой<sup>6</sup></p>
                <p>
                Супергерой убежден, что должен уметь «все на свете». Точнее, не просто уметь – он должен делать это отлично, блестяще и лучше других. Таким образом, его «сфера компетенции» гораздо шире, чем у перфекциониста.
                </p>
            </div>
            <div className="types_1b">
                <p>Прирожденный гений<sup>6</sup></p>
                <p>
                Большинство «самозванцев» этого типа добились больших успехов в раннем возрасте и выросли с верой в то, что родились суперспособными, даже гениальными. Со временем ярлык «гения» закрепился. Проблема в том, что большинство людей не могут поддерживать прежний уровень достижений, не прилагая к этому никаких усилий. Стоит такому человеку приложить хоть малейшее усилие, как он чувствует себя мошенником. 
                </p>
            </div>
            <div className="types_1b">
                <p>Ярый индивидуалист<sup>6</sup></p>
                <p>
                «Самозванцы» данного типа уверены, что «засчитывается» только успех, достигнутый собственными силами. Дело не в том, что они не желают работать в команде, а в том, что любая помощь обесценивает их достижения.
                </p>
            </div>
            <div className="types_1b">
                <p>Эксперт<sup>6</sup></p>
                <p>
                Если вы относитесь к этому типу «самозванца», вас наверняка считают экспертом в своей области, только вы чувствуете, что этот ярлык незаслуженный. У каждого эксперта есть некий порог «профессиональной компетенции», которого он еще не достиг (и, вероятно, никогда не достигнет). Дело в том, что этот порог установлен на недостижимо высоком уровне – чтобы быть экспертом, вы должны знать все. Понятно, что никто не может знать всего, поэтому «самозванец»-эксперт заведомо обречен на провал: раз за разом сталкиваясь с малознакомой темой или вопросом, ответ на который ему неизвестен, эксперт начинает верить, что на самом деле он обманщик.
                </p>
            </div>
            </div>
        </div>
    )
}

export default InfoTypes