import './style.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Technologies } from './components/Technologies';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Clients } from './components/Clients';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-white" style={{ background: '#05050A' }}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Technologies />
        <Portfolio />
        <Process />
        <Clients />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
