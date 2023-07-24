import { useState } from "react";
import { dataHotels } from "./dataHotels";

function HotelsOfNewYork() {
    const [hotel, setHotel] = useState(dataHotels);
    const [buttonDeleteAllText, setbuttonDeleteAllText] = useState('delete all hotels from the list');
    const [showText, setShowText] = useState(false);

    const deleteAllItems = () => {
        setHotel( [] ) || setbuttonDeleteAllText(`It's done!`)
    }

    const removeOneItem = (id) => {
        let newHotel = hotel.filter(element => 
            element.id !== id)
            setHotel(newHotel)
            if ( newHotel.length === 0 ) {
                setbuttonDeleteAllText(`All items was deleted`)
            }else {
                setbuttonDeleteAllText('delete all hotels from the list')
            }
    }
    /* развернуть аккордион только в одном item */
    const showTextClick = (item) => {
        item.showMore = !item.showMore
        setShowText(!showText)
    }
        




    return(
        <div>
        <h1>New York top <span>{hotel.length}</span> hotels</h1>
        {hotel.map((item => {
            const {id, title, description, imageHotel, source, showMore} = item;
            console.log(imageHotel)
            return(
                <div>
                    <div key={id} className="colorOfTheBlockBlue">
                        <h2>{title}</h2>
                        <img src={imageHotel} alt="HotelsOfNewYork"/>
                        <h3>{ showMore ? description : description.substring(0,250) }
                            <button onClick={ () => showTextClick(item) } className="buttonShowMore">{showMore ? 'show less...' : 'show more...'}</button>
                        </h3>
                        <a href="https://www.booking.com/">source:{source}</a>
                        <br /><br />
                        <button onClick={() => removeOneItem(id) } className="buttonStyle">remove</button>
                    </div>
                </div>
            )
        }))}
        <div>
            <button onClick={ () => deleteAllItems() } className="deleteAllButtonBlue">{buttonDeleteAllText}</button>
        </div>
        </div>
    )
}

export default HotelsOfNewYork;