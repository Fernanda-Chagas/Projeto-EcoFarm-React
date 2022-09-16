import React from 'react';
import './Texto.css';


function Texto() {

    return (
        <>
            <main id="about">

                <section id='section1' className='Section1'>
               
                    <div className='text-right'>
                        <h2>QUEM SOMOS?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nostrum odio facilis reiciendis alias iure quod quas repellat
                            cupiditate optio illum culpa vero saepe error aliquid,
                            natus eos quisquam corporis officia.</p>
                    </div>
                    <img src="https://cdn.discordapp.com/attachments/1011758755010068545/1020327093403385966/unknown.png" />
                </section>

                <section className='Section2'>
                    <img src="https://cdn.discordapp.com/attachments/1011758755010068545/1020327318310359090/unknown.png" alt="" />
                    <div className='text-left'>
                        <h2>POR QUE A ODS2?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nostrum odio facilis reiciendis alias iure quod quas repellat
                            cupiditate optio illum culpa vero saepe error aliquid,
                            natus eos quisquam corporis officia.</p>
                       
                    </div>

                </section>

                <section id='section3' className='Section3'>
                    <div className='text-right'>
                        <h2>RESOLUÇÃO DO PROBLEMA</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nostrum odio facilis reiciendis alias iure quod quas repellat
                            cupiditate optio illum culpa vero saepe error aliquid,
                            natus eos quisquam corporis officia.</p>             </div>
                    <img src="https://cdn.discordapp.com/attachments/1011758755010068545/1020327491413479444/unknown.png" alt="" />
                </section>

                


            </main>


        </>
    );
}

export default Texto;