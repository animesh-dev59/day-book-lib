import Banner from '@/components/Banner';
import React from 'react';
import BooksPages from './books/page';
import Practices from '@/components/Practices';

const AllPages = () => {
  return (
    <div>
      <Banner/>
      <BooksPages/> 
      <Practices/>
    </div>
  );
};

export default AllPages;