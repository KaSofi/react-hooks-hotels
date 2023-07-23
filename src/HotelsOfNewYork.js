import { useState } from "react";
import { dataHotels } from "./dataHotels";

function HotelsOfNewYork() {
    const [hotel, setHotel] = useState(dataHotels);
    const [buttonDeleteAllText, setbuttonDeleteAllText] = useState('delete all hotels from the list')

    const deleteAllItems = () => {
        setHotel( [] ) || setbuttonDeleteAllText(`It's done!`)
    }

    const removeOneItem = (id) => {
        let newHotel = hotel.filter(element => 
            element.id !== id)
            setHotel(newHotel)
    }


    return(
        <div>
        <h1>New York top <span>{hotel.length}</span> hotels</h1>
        {hotel.map((item => {
            const {id, title, description, imageHotel, source} = item;
            console.log(imageHotel)
            return(
                <div>
                    <div key={id} className="colorOfTheBlockBlue">
                        <h2>{title}</h2>
                        <img src={imageHotel} alt="HotelsOfNewYork"/>
                        <h3>{description}</h3>
                        <a href="https://www.booking.com/">source:{source}</a>
                        <br /><br />
                        <button onClick={() => removeOneItem(id) } className="buttonStyle">remove</button>
                    </div>
                </div>
            )
        }))}
        <div>
            <button onClick={ () => deleteAllItems() }>{buttonDeleteAllText}</button>
        </div>
        </div>
    )
}

export default HotelsOfNewYork;