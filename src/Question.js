import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({question}) => {
    const [seeReply, setSeeReply] = useState(false)
    const {title, info} = question;
    return (
            <article className='question'>
                <header>
                    <h4>{title}</h4>
                    <button className='btn' onClick={() => setSeeReply(!seeReply)}>
                        {
                            seeReply ? <AiOutlineMinus/> : <AiOutlinePlus/>
                        }
                    </button>
                </header>
                {
                    seeReply && <p>{info}</p>
                }
            </article>
        );
};

export default Question;