import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact component={Home} path="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
