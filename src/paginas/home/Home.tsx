
import React from 'react';
import './Home.css';

function Home() {
    return (
        <>
            <section className='slider'>
                <div className='slider-content'>
                    <img className="slider-item" src="https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Morango" />
                    <img className="slider-item" src="https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Banana" />
                    <img className="slider-item" src="https://images.pexels.com/photos/693794/pexels-photo-693794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Maça Verde" />
                    <img className="slider-item" src="https://images.pexels.com/photos/266346/pexels-photo-266346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Limão" />
                </div>
            </section>
        </>
    );
}

export default Home;