import logo from '../assets/8f061feb6f9876d9bc40e7ef1a42970a.webp';
// import devide from '../assets/line.png'
import './Home.css';

const Home = () => {
    return (
        <div className="container_home">
            <div className='container_home_item'>
                <div className="left_section">
                    <img src={logo} alt="logo" className="arrow_icon" />
                    <p className="university_name">Azərbaycan Memarlıq və İnşaat Universiteti</p>
                    <div>
                        <p className='sisteme_giris_item'>Sİstemə gİrİş</p>
                    </div>
                    <div className='input_container'>
                        <input type="text" placeholder="İstifadəçi adı" className="input_field" />
                        <input type="password" placeholder="Şifrə" className="input_field" />
                        <button className="button-17">Giriş Et</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
