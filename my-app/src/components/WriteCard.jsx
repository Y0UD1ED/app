import React, { FC,useContext,useState } from 'react';
import MoreContact from './MoreContact';
import { Context } from '..';
import AuthService from '../services/AuthService';



function WriteCard({write}){
    const [hideWrite,setHideWrite]=useState(false)
    const [showMore,setShowMore]=useState(false)
    const {store}=useContext(Context)
    const [color,setColor]=useState(false)
    const tryDelete=async()=>{
        await AuthService.deleteWrite(write.from,write.to,write.date,write.time).then(
            window.location.reload()
        )
    }
    return(
        <div className="WriteCard" style={{display:!hideWrite?'block':'none'}}>
            <div className="card_row">
                <div className="card_text">
                    <div className="card_name">{write.to}</div>
                    <div className="card_role">Психолог</div>
                </div>
                <div className="card_check">
                    <div className="card_btn" onClick={()=>setColor(true)} style={{display:!color?'block':'none'}}></div>
                    <div className="card_btnBlue" style={{display:color?'block':'none'}}></div>
                    <div className="card_time">{write.date}</div>
                </div>
                <div className="card_btns">
                <div className="card_cancel">
                    <p onClick={()=>tryDelete()}>Отменить</p>
                </div>
                <div className="card_contact" /*style={{display:user? 'block':'none'}}*/ onClick={()=>setShowMore(true)}>
                    <p>Больше</p>
                </div>
                </div>
                <MoreContact showcontacts={showMore} setShowcontacts={setShowMore} writeInfo={write}/>
            </div>
        </div>
    )
}

export default WriteCard