import './ListPage.scss';
import { listData } from '../../lib/data';
import Card from '../../component/card/Card';
import Filter from '../../component/filter/Filter';
import Map from '../../component/map/Map';

function List(){
  const data = listData;
  return (
    <div className='listPage'>
      <div className='listContainer'>
        <div className='wrapper'>
          <Filter />
          { data.map(item => (
            <Card 
              key={item.id} 
              item={item}
            />
          ))}
        </div>
      </div>
      <div className='mapContainer'>
        <Map items={data} />
      </div>
    </div>
  )
}

export default List