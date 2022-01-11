import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({question}) => {
    const [seeReply, setSeeReply] = useState(false)
    const {title, info} = question;
    
    if (!seeReply) {
        return (
        <section className='question'>
            <header>
                <h4>{title}</h4>
            </header>

            <button className='btn' onClick={() => setSeeReply(!seeReply)}>
                {
                    seeReply ? <AiOutlineMinus/> : <AiOutlinePlus/>
                }
            </button>
        </section>
        )
    }
    return (
            <section className='question'>
                <header>
                    <h4>{title}</h4>
                </header>
                <button className='btn' onClick={() => setSeeReply(!seeReply)}>
                    {
                        seeReply ? <AiOutlineMinus/> : <AiOutlinePlus/>
                    }
                </button>
                <p>{info}</p>
            </section>
        );
};

export default Question;