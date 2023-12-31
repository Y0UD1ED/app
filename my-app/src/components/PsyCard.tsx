import React, { FC, useState,createContext } from 'react';
import WriteForm from './WriteForm';
import { IUser } from '../models/response/IUser';
import AuthService from '../services/AuthService';

interface PsyI{
    psy:IUser;
}

type PsyC={
    email:string;
    freeDates:string[];
}

export const PsyContext=createContext<PsyC>({
    email: "",
    freeDates:[],
})


function PsyCard(psy:PsyI){

    const email=psy.psy.email
    
    const[write,setWrite]=useState(false);
    const [freeDates,setFreeDates]=useState<string[]>([]);
    const avatar=psy.psy.avatar!==''?`http://www.crewimposter.ru:8000/${psy.psy.avatar}`:'spec.jpg';
    const getFreeDates=async()=>{
        try{
            const response=await AuthService.getFreeDate(email);
            setFreeDates(response.data);
            console.log(email)
        }catch(e){
            console.log(e);
        }
        setWrite(true)
    }
    return(
        <div className='CatalogPsy_block'>
        <div className='block_row'>
            <div className='Psy'>
                <div className='psy_row'>
                    <div className='PsyImage'>
                        <img src={avatar} alt='#'></img>
                    </div>
                    <div className='PsyInfo'>
                        <p>{psy.psy.lastName+' '+psy.psy.firstName+' '+ psy.psy.middleName}</p>
                        <p>{psy.psy.experience||"Не указано"}</p>
                        <p>{psy.psy.role}</p>
                    </div>
                </div>
                
            </div>
            <div className='Btn' onClick={()=>getFreeDates()}>
                    <div className='CatalogPsy_btn'>
                        <p>Записаться</p>
                    </div> 
            </div>
        </div>
        <PsyContext.Provider value={{email,freeDates}}>
        <div className='windows' style={{display: !write? 'none': 'flex'}} onClick={()=>setWrite(false)}>
                <WriteForm/>
            </div>
        </PsyContext.Provider>
            

    </div>
       
    );
}

export default PsyCard
