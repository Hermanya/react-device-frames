import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IPhoneX, Pixel3XL, Chrome } from '../.';
const App = () => {
  return (
    <div>
      <IPhoneX href={'http://placehold.jp/1125x2436.png'} />
      <Pixel3XL href={'http://placehold.jp/720x1480.png'} />
      <Chrome
        screenshot={'http://placehold.jp/1200x700.png'}
        favicon={'http://placehold.jp/16x16.png'}
        avatar={'http://placehold.jp/20x20.png'}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
