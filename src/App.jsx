import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import { 
  About, 
  Contact, 
  Experience, 
  Feedbacks, 
  Hero, 
  Navbar, 
  Tech, 
  Works, 
  StarsCanvas,
  ImageGallery,
  Skills,
  ScrollProgress,
  BackToTop,
  LoadingScreen
} from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <ScrollProgress />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Experience />
        <Tech />
        <Works />
        <ImageGallery />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
