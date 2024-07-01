import React from 'react';

import { Header } from 'components/navigation/Header';
import { Schedule } from './Schedule';
import { Stats } from './Stats';
import { Cards } from './Cards';
import { CalendarModal } from './CalendarModal';
import { PodcastModal } from './PodcastModal';
import { Footer } from '../navigation/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Schedule />
        <div className='jumbo'></div>
        <div className='card-row row'>
          <Stats stat={"Goals"} />
          <Stats stat={"Assists"} />
          <Stats stat={"GAA"} />
        </div>
        <Cards />
        <CalendarModal />
        <PodcastModal />
      </main>
      <Footer />
    </>
  );
};

export default Home;
