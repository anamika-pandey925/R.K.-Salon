import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SpecialOffers from './components/SpecialOffers';
import WhyChoose from './components/WhyChoose';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Loader from './components/Loader';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-charcoal text-white flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-3xl font-heading text-gold mb-4">Something went wrong</h1>
          <p className="text-white/70 mb-6 max-w-md">We encountered an issue rendering this section.</p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Loader />
      <div className="overflow-x-hidden min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <SpecialOffers />
          <WhyChoose />
          <Gallery />
          <Reviews />
          <Appointment />
          <Contact />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </ErrorBoundary>
  );
}

export default App;
