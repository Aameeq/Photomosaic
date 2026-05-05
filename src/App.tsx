import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogPost from './components/BlogPost';
import WhatIsPhotoMosaic from './content/what-is-photo-mosaic.mdx';
import IphoneMosaicApp from './content/iphone-mosaic-app.mdx';
import PhotoMosaicCost from './content/photo-mosaic-cost.mdx';
import FreePhotoMosaicSoftware from './content/free-photo-mosaic-software.mdx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/what-is-photo-mosaic" element={<BlogPost><WhatIsPhotoMosaic /></BlogPost>} />
        <Route path="/blog/iphone-mosaic-app" element={<BlogPost><IphoneMosaicApp /></BlogPost>} />
        <Route path="/blog/photo-mosaic-cost" element={<BlogPost><PhotoMosaicCost /></BlogPost>} />
        <Route path="/blog/free-photo-mosaic-software" element={<BlogPost><FreePhotoMosaicSoftware /></BlogPost>} />
      </Routes>
    </Router>
  );
}

export default App;
