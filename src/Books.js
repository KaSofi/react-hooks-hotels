import { useState } from 'react';
import { data } from './data';

function Books() {
    const [newBook, setNewBook] = useState(data);
    const [buttonText, setText] = useState('delete all');

    const deleteAllItems = () => {
      if ( newBook === data || buttonText === 'delete all') {
        setNewBook( [] ) || setText('restore')
      } else {
        setNewBook(data) || setText('delete all')
      }
    }
    const deleteButtonImage = 'https://img.freepik.com/free-icon/close_318-394756.jpg?size=626&ext=jpg&ga=GA1.2.1134977234.1677609499&semt=ais'

    const removeBookItem = (id) => {
        let newBookFilter = newBook.filter(item => item.id !==id)
        setNewBook(newBookFilter)
    }

    return(
    <div className='conteinerBooks'>
    <h1>LIST OF BOOKS:</h1>
    { newBook.map( (item => {
        const {id, book} = item;
        return(
              <div key={id}>
                  <p>{id}. "{book}" <img src={deleteButtonImage} onClick={() => removeBookItem(id)} width={20} alt='delete' className='deleteItemsButton'></img></p>

              </div>
        )
      }))
    }
    <button onClick={deleteAllItems}>{buttonText}</button>
    </div>
    )
}


export default Books;

