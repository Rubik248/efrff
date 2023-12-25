import Button from '../Button/Button'
import s from "./MainPromo.module.css"





function MainPromo() {





    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>Amazing Discounts on Garden Products!</h1>
            <Button text="Check out"/>
        </div>
    )
} 


export default MainPromo