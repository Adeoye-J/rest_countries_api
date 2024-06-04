import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllCountries from './components/AllCountries/AllCountries'
import EachCountry from './components/EachCountry/EachCountry';
// import Practice from './Practice';

function App() {  

  const url = "https://restcountries.com/v3.1/all";
  const europeRegion = "https://restcountries.com/v3.1/region/"

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<AllCountries getUrl={url} />} />
          <Route path="/rest_countries_api" element={<AllCountries getUrl={url} />} />
          <Route path="/region/Africa" element={<AllCountries getUrl={`${europeRegion}/africa`} />} />
          <Route path="/region/America" element={<AllCountries getUrl={`${europeRegion}/america`} />} />
          <Route path="/region/Asia" element={<AllCountries getUrl={`${europeRegion}/asia`} />} />
          <Route path="/region/Europe" element={<AllCountries getUrl={`${europeRegion}/europe`} />} />
          <Route path="/region/Oceania" element={<AllCountries getUrl={`${europeRegion}/oceania`} />} />
          <Route path="/countries/:name" element={<EachCountry />} />
        </Routes>
      </BrowserRouter>
    </>
      // <Practice />
  )
}

export default App
