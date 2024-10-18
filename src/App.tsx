import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CallToAction from './components/CallToAction';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import MeetTheTeam from './components/MeetTheTeam';
import GetStarted from './components/GetStarted';
import SecondCTA from './components/SecondCTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <CallToAction />
      <AboutUs />
      <Testimonials />
      <Services />
      <MeetTheTeam />
      <GetStarted />
      <SecondCTA />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
