import React from 'react';
import Styles from './Card.module.scss';

function Card(props){
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
      setIsAdded(!isAdded);
    }

    return (
        <div className={Styles.Card}>
            <div className={Styles.Favorite} onClick={props.onClickFavorite}>
              <img src="/img/Unliked.svg" alt="Unliked" />  
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>{props.price} грн.</b>
              </div>
              <img className={Styles.Plus} onClick={onClickPlus} src={isAdded ? "/img/Btn_checked.svg" : "/img/Btn_add.svg"} alt="Add" />
            </div>
        </div>
    );
}

export default Card;