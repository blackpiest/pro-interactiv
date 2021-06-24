import React from 'react';
import StartingSection from './sections/StartingSection/StartingSection';
import PhotoPlaceSection from './sections/PhotoPlaceSection/PhotoPlaceSection';
import FAQSection from './sections/FAQSection/FAQSection';
import NewsSection from './sections/NewsSection/NewsSection';
import ContactsSection from './sections/ContactsSection/ContactsSection';


const App = () => {
  return (
    <main className="container_wrapper">
      
      <StartingSection/>
      <PhotoPlaceSection/>
      <FAQSection/>
      <NewsSection/>
      <ContactsSection/>
    </main>
  );
};

export default App;
