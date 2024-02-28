import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import "./ItemDetail.css";
export const ItemDetail = ({ item, onAdd }) => {
  console.log(item);
  return (
    <main>
      <div class="card">
        <div class="card__title">
          <div class="icon">
            <a href="#">
              <i class="fa fa-arrow-left"></i>
            </a>
          </div>
        </div>
        <div class="card__body">
          <div class="half">
            <div class="featured_text">
              <h1>{item.title}</h1>
              <div class="description">
                <p>{item.description}</p>
              </div>
              <p class="price">${item.price}</p>
              <div class="action">
                <button type="button">Add to cart</button>
              </div>
            </div>
            <div class="image">
              <img
                src={item.img}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
