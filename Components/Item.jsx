export default function Item({item}){
    return(
        <div >
            <div className="item-container">
                  <div className="item-img">
                     <img className="item-img2" src={'https://spoonacular.com/cdn/ingredients_100x100/'+ item.image} alt="" />
                  </div>

                  <div className="about-item">
                     <div className="item-name">{item.name}</div>
                     <div className="item-amount">{item.amount} {item.unit}</div>
                    </div>
                      
                </div>
        </div>
    )
}