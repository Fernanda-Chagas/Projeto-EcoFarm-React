import React from 'react';
import './Texto.css';


function Texto() {

    return (
        <>
            <main id="sobre">

                <section id='section1' className='tsx1'>

                    <div className='text-right'>
                        <h2>QUEM SOMOS?</h2>
                        <p>A EcoFarm nasceu como uma Organização não-Governamental,
                            buscando seguir dentre os objetivos da ONU, a ODS 2 (Fome zero e Agricultura sustentável).
                            Nosso ituito é oferecer alimentos de qualidade para todos, ligando pequenos agricultores que não ultilizam agrotóxicos,
                            a restaurantes, mercados e até mesmo você pode comprar no nosso site. Por um preço justo e produtos frescos, nossa meta é
                            reverter os lucros do nosso mercado para ajudar ONGs que trabalham com pessoas em situações de vulnerabilidade, ajudando
                            assim a criar uma sociedade mais igualitária para todos, e também, segura.</p>
                    </div>
                    <img src="https://cdn.discordapp.com/attachments/1011758755010068545/1020327093403385966/unknown.png" alt="colheita fazenda" />
                </section>

                <section className='tsx2'>
                    <img src="https://cdn.discordapp.com/attachments/1011758755010068545/1020327318310359090/unknown.png" alt="hortfruti variado" />
                    <div className='text-left'>
                        <h2>Qual é a ODS2?</h2>
                        <p>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</p>
                        <p> Fome zero e agricultura sustentável</p>
                        
                            <p>Os objetivos da ODS 2 são: Erradicar a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável
                            </p>
                            
                    </div>

                </section>

                <section id='section3' className='tsx3'>
                    <div className='text-right'>
                        <h2>RESOLUÇÃO DO PROBLEMA</h2>
                        <p>O objetivo do EcoFarm para auxiliar na resolução deste problema, é trazer comida de qualidade por um preço justo e acessível, assim auxiliando pequenos agricultores a venderem suas colheitas de maneira mais prática, e com os lucros, auxiliando ONGs que trabalham com pessoas em situação de vulnerabilidade a ampliar seus recursos e assim, ajudando a nossa sociedade a ser um lugar melhor para todos.
                        </p>             </div>
                    <img src="https://cdn.discordapp.com/attachments/1011758755010068545/1020327491413479444/unknown.png" alt="cesta de frutas" />
                </section>




            </main>


        </>
    );
}

export default Texto;