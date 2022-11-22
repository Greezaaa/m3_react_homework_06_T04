import Card from "../Card/Card"
import style from './style.module.css'
const Cards = ({ data }) => {

    return (
        <div className={style.wrapper}>
            {data.cards.map((card, i) => {
                return (
                    <Card key={i} card={card} />
                )
            })}
        </div>
    )
}
export default Cards