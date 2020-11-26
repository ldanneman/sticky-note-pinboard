import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ListItems(props) {
    const items = props.items;
        const listItems = items.map(item => {
            return <div className="list note" key={item.key}>



                <div className="note sticky1">
                   
                    <div className='pin'></div>
                    
                    
                    <div className='text'>
                        {item.text}
                
                    </div>
                     <div className="ike">
                        <FontAwesomeIcon className="faicons" onClick={() => {
                        props.deleteItem(item.key)
                        }} icon="trash"
                        />
                        
                    </div>
            </div>
                
                {/* <div>
                    <div>
                        <FontAwesomeIcon className="faicons" onClick={() => {
                        props.deleteItem(item.key)
                        }} icon="trash"
                        />
                    </div>
                    {item.text}
                    
                </div> */}
                
            </div>
        })
    
    return (
        <div>{listItems}</div>
        
    )
}




export default ListItems
