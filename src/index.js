import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

class Cake extends React.Component {
  render() {
    return (
      <div>
        <h1>Lady Yang</h1>
        <Button ghost>My first button</Button>
        <Button type="dashed" ghost>Dashed</Button>

      </div>
      // </LocaleProvider>
    );
  }
}

// ========================================

ReactDOM.render(
  <Cake />,
  document.getElementById('root')
);
