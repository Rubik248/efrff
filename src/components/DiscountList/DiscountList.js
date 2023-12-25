
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchData } from '../../store/thunks';
import SaleCard from '../SaleCard/SaleCard';
import s from './DiscountList.module.css'


function DiscountList() {


    const dispatch = useDispatch();
    const { data1, data2 } = useSelector((state) => state);
  
    useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);
    const currentPath = window.location.pathname;

    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Sale</h2>
            <div className={s.cards}>
            {data2.map(e => {
                if(e.discont_price != null && e.id < 10) {
                    return (
                        <SaleCard way={e.image} name={e.title} price={e.price} id={e.id} flag={e.discont_price}/>
                    )
                } else if (currentPath === '/discount' && e.discont_price != null) {
                    return (
                        <SaleCard way={e.image} name={e.title} price={e.price} id={e.id} flag={e.discont_price}/>
                    )
                }
            })}
            </div>
        </div>
    ) 
}

export default DiscountList;