import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';
import PierAndBeam from './pages/services/PierAndBeam';
import FoundationRepair from './pages/services/FoundationRepair';
import SlabRepair from './pages/services/SlabRepair';
import HouseLeveling from './pages/services/HouseLeveling';
import PressPiers from './pages/services/PressPiers';
import RepairMethods from './pages/services/RepairMethods';
import FoamInjection from './pages/services/FoamInjection';
import DrainageSolutions from './pages/services/DrainageSolutions';
import RootBarriers from './pages/services/RootBarriers';
import CommercialPrep from './pages/services/CommercialPrep';
import LoadingScreen from './components/LoadingScreen';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home isLoading={isLoading} />} />
          <Route path="about" element={<About isLoading={isLoading} />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact isLoading={isLoading} />} />
          <Route path="services">
            <Route path="pier-and-beam" element={<PierAndBeam isLoading={isLoading} />} />
            <Route path="foundation-repair" element={<FoundationRepair isLoading={isLoading} />} />
            <Route path="slab-repair" element={<SlabRepair isLoading={isLoading} />} />
            <Route path="house-leveling" element={<HouseLeveling isLoading={isLoading} />} />
            <Route path="press-piers" element={<PressPiers isLoading={isLoading} />} />
            <Route path="repair-methods" element={<RepairMethods isLoading={isLoading} />} />
            <Route path="foam-injection" element={<FoamInjection isLoading={isLoading} />} />
            <Route path="drainage-solutions" element={<DrainageSolutions isLoading={isLoading} />} />
            <Route path="root-barriers" element={<RootBarriers isLoading={isLoading} />} />
            <Route path="commercial-prep" element={<CommercialPrep isLoading={isLoading} />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
