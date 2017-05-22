import React from 'react';
import Home from './Home';
import MainLayout from '../../components/MainLayout';

export default {

  path: '/',

  async action() {
    return {
      title: 'Giftest | Gift.The.Best',
      component: <MainLayout><Home/></MainLayout>,
    };
  },

};
