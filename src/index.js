import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
    return (
        <div className='hh'>
            <div className='box'>
                <img src="./photo_2023-09-08_12-01-57.jpg" alt='logo' className='logo'/>
                <div className='hs'>
                    <h1>karam do</h1>
                    <h2>frontend develober</h2>
                    <h3>react expert</h3>
                </div>
                <div className='btns'>
                    <button className='btn1'>
                        <img src='./email.png' className='logo2' />
                        Email</button>
                    <button className='btn2'>
                        <img src='./Linked.svg' className='logo3' />
                        Linkedin</button>
                </div>
                <div className='headers'>
                    <header className='header1'>
                        About : </header>
                    <p>
                        The study of data structures, a fundamental component of a computer science education.
                        in design, implementation.
                    </p>
                    <header className='header2'>
                        Interests :</header>
                    <p>
                        The study of data structures, a fundamental component of a computer science education, serves as the foundation upon which many other computer science fields are
                        built.
                    </p>
                </div>
            </div>
            <div className='divfoot' >
                <footer className='foot'>
                    <img src='./icons8-facebook.svg' alt="logo" className='facee' />
                    <img src='./twitt.svg' alt="logo" className='face' />
                    <img src='./giit.png' alt="logo" className='face' />
                    <img src='instaa.png' alt="logo" className='face' />
                </footer>
            </div>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
