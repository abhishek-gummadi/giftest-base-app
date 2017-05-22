import React from 'react';
import Layout from '../../components/Layout';
import Create from './Create';

const title = 'Contact Us';

export default {

  path: '/create',

  action() {
    return {
      title,
      component: <Layout><Create/></Layout>,
    };
  },

};
