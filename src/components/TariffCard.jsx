import { useState } from 'react';
import styles from './Card.css';

function Card(props) {

    const [selected, setSelected] = useState(false);

    const handleSelectedState = () => {
      setSelected(!selected);
    }

    return (
        <div className={`${props.color} ${"card"}`} href="https://translate.yandex.ru" onClick={handleSelectedState}>
            <h3 className="over_header" style={selected ? {padding: "25px"} : {padding: "15px"}}>Безлимитный {props.price}</h3>
            <div className="header">
                <p>руб</p>
                <h1>{props.price}</h1>
                <p>/мес</p>
            </div>
            <p className="mbit">до {props.mbit} Мбит/сек</p>
            <p className="footer">Объем включенного трафика не ограничен</p>
        </div>
    );
}

export default Card;
