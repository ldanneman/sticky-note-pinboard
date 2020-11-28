import React, {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModalFunc from './Modal'



function ListItems(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const closeModal = (e) => {
        e.stopPropagation()
        setModalIsOpen(false)
    }

    const items = props.items;
        const listItems = items.map(item => {
            return <div className="list note" key={item.key} onClick={() => setModalIsOpen(true)}>
                <div className="note sticky1">
                    <div className='pin'></div>
                    <div className='text'>
                        <span className="title">{item.title}</span>
                        <br/>
                        {item.text}
                    </div>
                    <ModalFunc item={item} updateItem={props.updateItem} isShowing={modalIsOpen} closeModal={ closeModal}/>
                     <div className="ike">
                        <FontAwesomeIcon className="faicons" onClick={() => {
                        props.deleteItem(item.key)
                        }} icon="trash"
                        />
                    </div>
                </div> 
            </div>
        })
    return (
        <div>{listItems}</div>
    )
}


export default ListItems
