import React from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import Layout from "./Pages/Layout/layout";
import Home from "./Pages/Home";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Slippers from "./Pages/Slippers";
import Addidas from "./Mens-collection/Addidas";
import AirJordan from "./Mens-collection/AirJordan";
import Balenciaga from "./Mens-collection/Balenciaga";
import Casual from "./Mens-collection/Casual";
import Gucci from "./Mens-collection/Gucci";
import NewBalance from "./Mens-collection/NewBalance";
import Nike from "./Mens-collection/Nike";
import Sky from "./Mens-collection/Sky";
import SuperMax from "./Mens-collection/SuperMax";
import Vans from "./Mens-collection/Vans";
import Login from "./component/Login";
import Register from "./component/Register";
import _404 from "./Pages/_404";
import Details from "./Pages/details";
import history from "./Pages/history";
import ShoeContextProvider from "./context/shoeContext";
import PrivateRoute from "./component/PrivateRoute";

function App() {
  return (
    <ShoeContextProvider>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/Men" component={Men}></Route>
            <Route path="/Women" component={Women}></Route>
            <PrivateRoute path="/Slippers" component={Slippers}></PrivateRoute>
            <Route path="/shoe/:id" component={Details}></Route>
            <Route path="/Addidas" component={Addidas}></Route>
            <Route path="/Air Jordan" component={AirJordan}></Route>
            <Route path="/Balenciaga" component={Balenciaga}></Route>
            <Route path="/Casual" component={Casual}></Route>
            <Route path="/Gucci" component={Gucci}></Route>
            <Route path="/New Balance" component={NewBalance}></Route>
            <Route path="/Nike" component={Nike}></Route>
            <Route path="/Sky" component={Sky}></Route>
            <Route path="/Super Max" component={SuperMax}></Route>
            <Route path="/Vans" component={Vans}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/Register" component={Register}></Route>
            <Route path="**" component={_404}></Route>
          </Switch>
        </Layout>
      </Router>
    </ShoeContextProvider>
  );
}

export default App;
