import './List.scss'
import Card  from '../card/Card';
import { listData } from '../../lib/data';

function CartList(){
  return (
    <div className='cartList'>
      {listData.map(item => (
          <Card
            key={item.id}
            item={item}
          />
        ))}
    </div>
  )
}

export default CartList