import React, { Fragment } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <Fragment>
      <div>Page One</div>
      <div>
        <Link to="/pagetwo">Go to page 2</Link>
      </div>
      <Link to="/pagetwo/3">Go to page 3</Link>
    </Fragment>
  );
};
const PageTwo = () => {
  return (
    <Fragment>
      <div>Page Two</div>
      <div>
        <button>Click me!</button>
      </div>
      <div>
        <Link to="/">Go to first page</Link>
      </div>
      <Link to="/pagetwo/3">Go to third page</Link>
    </Fragment>
  );
};
const PageThree = () => {
  return (
    <Fragment>
      <div>Page Three</div>
      <p>This is third page</p>
      <div>
        <Link to="/">Go to first page</Link>
      </div>
      <Link to="/pagetwo">Go to second page</Link>
    </Fragment>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" exact component={PageTwo} />
          <Route path="/pagetwo/3" component={PageThree} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
