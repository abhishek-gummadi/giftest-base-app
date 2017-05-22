/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';
import Grid from 'styled-components-grid';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <Navigation />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
