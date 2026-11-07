import Banner from '@/components/Banner';
import React from 'react';
import BooksPages from './books/page';

const AllPages = () => {
  return (
    <div>
      <Banner/>
      <BooksPages/>
    </div>
  );
};

export default AllPages;