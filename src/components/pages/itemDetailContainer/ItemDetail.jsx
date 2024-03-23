import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import "./ItemDetail.css";
export const ItemDetail = ({ item, onAdd, initial }) => {
  console.log(item);
  return (
    <main>
      <div className="card">
        <div className="card__title">
          <div className="icon">
            <a href="#">
              <i className="fa fa-arrow-left"></i>
            </a>
          </div>
        </div>
        <div className="card__body">
          <div className="half">
            <div className="featured_text">
              <h1>{item.title}</h1>
              <div className="description">
                <p>{item.description}</p>
              </div>
              <p className="price">${item.price}</p>
              <div className="action">
                <button type="button">Add to cart</button>
              </div>
            </div>
            <div className="image">
              <img src={item.img} alt="" />
            </div>

            {initial && <h3>Ya tienes {initial} en el carrito</h3>}

            <div style={{ display: "flex", justifyContent: "center" }}>
              <ItemCountContainer stock={item.stock} onAdd={onAdd} initial={initial} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
