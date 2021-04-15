/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from 'components/parts/Header';
import Footer from 'components/parts/Footer';
import Home from 'pages/Home';
import Calculator from 'pages/Calculator';
import NasaImages from 'pages/NasaImages';

function App() {
  const StickyTop = styled.header({
    'width': '100%',
    'flexShrink': 0,
  });

  const StickyBot = styled.footer({
    'width': '100%',
    'flexShrink': 0,
    'verticalAlign': 'center',
  });

  const Container = styled.main({
    'flexGrow': 1
  });

  return (
    <div className="app"
         css={{'minHeight': '100%',
               'display': 'flex',
               'flexDirection': 'column'}}>
      <StickyTop>
        <Header />
      </StickyTop>
      <Container>
        <Router>
          <Switch>
            <Route exact component={Home} path="/"/>
            <Route exact component={Calculator} path="/calculator"/>
            <Route exact component={NasaImages} path="/nasa-images"/>
          </Switch>
        </Router>
      </Container>
      <StickyBot>
        <Footer />
      </StickyBot>
    </div>
  );
}

export default App;
