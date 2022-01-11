import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({question}) => {
    const [seeReply, setSeeReply] = useState(false)
    const {title, info} = question;
    
    if (!seeReply) {
        return (
        <>
            <h4>{title}</h4>
            <button onClick={() => setSeeReply(!seeReply)}>
                {
                    seeReply ? <AiOutlineMinus/> : <AiOutlinePlus/>
                }
            </button>
        </>
        )
    }
    return (
        <section>
            <h4>{title}</h4>
            <button onClick={() => setSeeReply(!seeReply)}>
                {
                    seeReply ? <AiOutlineMinus/> : <AiOutlinePlus/>
                }
            </button>
            <p>{info}</p>
        </section>
        );
};

export default Question;