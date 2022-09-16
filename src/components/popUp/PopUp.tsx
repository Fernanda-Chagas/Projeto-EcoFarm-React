import { ClassNames } from '@emotion/react';
import React from 'react';
import './PopUp.css';

function PopUp() {

  return (

    <>
      <div className='title'><h1> CONHEÇA QUEM ESTÁ POR TRÁS DOECOFARM </h1></div>
      <section className='teste2'>

        <article className='person'>
          <div className="container">
            <div className="container-inner">
              <img
                className="circle"
                src="https://cdn.discordapp.com/attachments/1011758755010068545/1019729143534985226/Fundo_Virtual_Para_Zoom_Decorativo_Rosa_Pastel_Verde-escuro_1.png" />
              <img
                className="img-g img1"
                src="https://cdn.discordapp.com/attachments/1011758755010068545/1019728437063204935/picwish.png"
              />

            </div>
          </div>
          <div className="divider"></div>
          <div className="name">Reynald Albuquerque</div>
          <div className="title">Back-End</div>
        </article>

        <article className="person">
          <div className="container">
            <div className="container-inner">
              <img
                className="circle"
                src="https://cdn.discordapp.com/attachments/1011758755010068545/1019729143534985226/Fundo_Virtual_Para_Zoom_Decorativo_Rosa_Pastel_Verde-escuro_1.png" />
              <img
                className="img-g img2"
                src="https://cdn.discordapp.com/attachments/1011758755010068545/1019733002496004096/WhatsApp_Image_2022-09-14_at_18.54.36.png" />
            </div>
          </div>
          <div className="divider"></div>
          <div className="name">Jonathan Queiroz</div>
          <div className="title">Back-End</div>
        </article>
        
        <article className="person">
          <div className="container">
            <div className="container-inner">
              <img
                className="circle"
                src="https://cdn.discordapp.com/attachments/1011758755010068545/1019729143534985226/Fundo_Virtual_Para_Zoom_Decorativo_Rosa_Pastel_Verde-escuro_1.png" />
              <img
                className="img-g img3"
                src="https://cdn.discordapp.com/attachments/1011758755010068545/1019731402637459456/WhatsApp_Image_2022-09-14_at_19.05.21.png" />
            </div>
          </div>
          <div className="divider"></div>
          <div className="name">Fernanda Chagas</div>
          <div className="title">Front-End</div>
        </article>
      </section>

      <section className='teste3'>
        <article className="person">
          <div className="container">
            <div className="container-inner">
              <img
                className="circle"
                src="https://cdn.discordapp.com/attachments/1011758755010068545/1019729143534985226/Fundo_Virtual_Para_Zoom_Decorativo_Rosa_Pastel_Verde-escuro_1.png" />
              <img
                className="img-g img3"
                src="https://cdn.discordapp.com/attachments/1011758755010068545/1019735066777239582/WhatsApp_Image_2022-09-14_at_11.32.10.png" />
            </div>
          </div>
          <div className="divider"></div>
          <div className="name">Israel <br /> Felipe</div>
          <div className="title">Front-End</div>
        </article>

        <article className="person">
          <div className="container">
            <div className="container-inner">
              <img
                className="circle"
                src="https://cdn.discordapp.com/attachments/1011758755010068545/1019729143534985226/Fundo_Virtual_Para_Zoom_Decorativo_Rosa_Pastel_Verde-escuro_1.png" />
              <img
                className="img-g img4"
                src="https://cdn.discordapp.com/attachments/1011758755010068545/1019736159858991124/WhatsApp_Image_2022-09-14_at_19.22.13.png" />
            </div>
          </div>
          <div className="divider"></div>
          <div className="name">Samara Pereira </div>
          <div className="title">Front-End</div>
        </article>
      </section>
    </>
  );
}

export default PopUp;