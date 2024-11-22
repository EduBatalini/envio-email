import "../styles/utility.css";
import "../styles/home.css";
import "../styles/header.css";
import "../styles/buttons.css";
import "../styles/main.css";
import "../styles/sobre.css";
import "../styles/noticias.css";
import HeroRectangleOne from "../assets/img/rectangleOne.png";
import HeroRectangleTwo from "../assets/img/RectangleTwo.png";
import "../styles/hero.css";
import Close from '../assets/img/close.svg';
import Menu from '../assets/img/Menu.svg';
import Logo from "../assets/img/logo_moto.png";
import Desempenho from '../assets/img/concerto.jpg'; 
import Rota from '../assets/img/motoconcertando.jpeg';
import Tech from '../assets/img/corrida_moto.jpg';
import { useState } from "react";
import Button from "../components/Button";
import "../styles/email.css";
import "../styles/footer.css";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST', // Certifique-se de usar 'POST'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, feedback }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('E-mail enviado com sucesso!');
                setEmail('');
                setFeedback('');
            } else {
                setMessage(`Erro: ${data.message}`);
            }
        } catch (error) {
            setMessage('Erro ao enviar o e-mail');
        }
    };

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo PowerMotos Party" width={250} height={150} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="#solutions">Soluções</a></li>
                            <li><a href="#testimonials">Depoimentos</a></li>
                            <li><a href="#pricing">Preços</a></li>
                            <li><a href="#contact" onClick={(e) => e.preventDefault()}>Contato</a></li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg link" href="#login">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ? (
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#solutions">Soluções</a></li>
                                        <li><a href="#testimonials">Depoimentos</a></li>
                                        <li><a href="#pricing">Preços</a></li>
                                        <li><a href="#contact" onClick={(e) => e.preventDefault()}>Contato</a></li>
                                        <li><a className="reverse-color" href="#login">Login</a></li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        )}
                    </div>
                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retângulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retângulo dois tela inicial" />
                <div className="container content">
                    <p className="desktop-only">Olá</p>
                    <h1>Acelere com confiança: Encontre as melhores peças para sua moto!</h1>
                    <p>Para quem vive a paixão pelas duas rodas, oferecemos peças de alta qualidade para sua moto. Acelere com segurança e performance em cada curva!</p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <div className="new">
                <h2>Notícias</h2>
                <section className="news container py-md">
                    <div className="card">
                        <img src={Rota} alt="moto" />
                        <div className="card-content">
                            <h3>Como Manter Sua Moto Sempre Pronta para a Estrada</h3>
                            <p>Confira nossas dicas de manutenção e saiba quais peças são essenciais para garantir que sua moto esteja sempre pronta para rodar com segurança.</p>
                            <a href="#">Leia mais</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Desempenho} alt="Novas Tendências em Peças de Alto Desempenho" />
                        <div className="card-content">
                            <h3>Novas Tendências em Peças de Alto Desempenho</h3>
                            <p>Descubra as últimas novidades em peças de alta performance para melhorar o desempenho da sua moto. Produtos com tecnologia de ponta para pilotos exigentes!</p>
                            <a href="#">Leia mais</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Tech} alt="Novo Serviço de Odontologia" />
                        <div className="card-content">
                            <h3>Desempenho Máximo nas Pistas: Peças para Pilotos de Alta Velocidade!</h3>
                            <p>Para vencer nas pistas, sua moto precisa estar equipada com as melhores peças. Descubra nossa linha especial de componentes projetados para maximizar potência e durabilidade, e esteja pronto para acelerar com tudo na próxima corrida!</p>
                            <a href="#">Leia mais</a>
                        </div>
                    </div>
                </section>
            </div>

            <section id="email" className="emailFeed">
                <h1>Seu e-mail</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Insira seu email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="Deixe seu feedback" 
                        value={feedback} 
                        onChange={(e) => setFeedback(e.target.value)} 
                        required 
                    />
                    <button type="submit">Enviar</button>
                </form>
                {message && <p>{message}</p>}
            </section>

            <section id="about" className="container py-md">
                <h2>Sobre a PowerMoto Parts</h2>
                <p>
                    A PowerMoto Parts é uma empresa especializada em fornecer peças e acessórios de alta qualidade para motocicletas, atendendo tanto entusiastas quanto profissionais do setor...
                </p>
            </section>

            <footer className="site-footer">
                <div className="footer-content">
                    <nav className="footer-nav">
                        <div className="footer-column">
                            <a href="#sobre">Empresa</a>
                            <p className="footer-description">
                                A PowerMoto Parts é uma empresa especializada em peças e acessórios de alta qualidade para motocicletas...
                            </p>
                        </div>
                        <div className="footer-column">
                            <a href="#contato">Contato</a>
                            <p className="footer-contact">
                                Email: powermotos@hotmail.com<br />
                                Telefone: (45) 99816-6820
                            </p>
                        </div>
                        <div className="footer-column">
                            <a href="#localizacao">Localização</a>
                            <p className="footer-location">
                                Avenida Brasil, 1036<br />
                                Cascavel, PR
                            </p>
                        </div>
                    </nav>
                </div>
            </footer>
        </>
    );
}
