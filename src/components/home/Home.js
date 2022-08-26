import React from 'react';

import { Header } from 'components/navigation/Header';
import { Cards } from './Cards';
import { CalendarModal } from './CalendarModal';
import { PodcastModal } from './PodcastModal';
import { Footer } from '../navigation/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className='jumbo'></div>
        <Cards />
        <CalendarModal />
        <PodcastModal />
      </main>
      <Footer />
    </>
  );
};

export default Home;
