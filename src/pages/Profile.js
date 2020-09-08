import React from 'react';
import { Main } from '../sections';
import { Page, PageHeading } from '../components';

export const Profile = () => {
  return (
    <Main>
      <Page>
        <PageHeading title='Your Profile Page' />
        <div>
          <div className='inline-block w-24 text-gray-700'>First Name:</div>
          <div className='inline-block text-black'>Bob</div>
        </div>
        <div>
          <div className='inline-block w-24 text-gray-700'>Last Name:</div>
          <div className='inline-block text-black'>Cobb</div>
        </div>
        <div>
          <div className='inline-block w-24 text-gray-700'>Email:</div>
          <div className='inline-block text-black'>bobcobb@net.com</div>
        </div>
      </Page>
    </Main>
  );
};
