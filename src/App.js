import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Pages/login";
import Register from "./Pages/register";
import Landing from "./Pages/landing";
import DataNasabah from "./Pages/dataNasabah";
import DataBarang from "./Pages/dataBarang";
import Bunga from "./Pages/bunga";
import Peminjaman from "./Pages/peminjaman";
import Peminjaman2 from "./Pages/Peminjaman2";
import Perpanjangan from "./Pages/perpanjangan";
import Pembayaran from "./Pages/pembayaran";
import GantiFoto from "./Pages/gantiFoto";
import GantiPass from "./Pages/gantiPass";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/ganti-pass">
              <GantiPass />
            </Route>
            <Route path="/ganti-foto">
              <GantiFoto />
            </Route>
            <Route path="/pembayaran">
              <Pembayaran />
            </Route>
            <Route path="/perpanjangan">
              <Perpanjangan />
            </Route>
            <Route path="/add-peminjaman">
              <Peminjaman2 />
            </Route>
            <Route path="/peminjaman">
              <Peminjaman />
            </Route>
            <Route path="/bunga">
              <Bunga />
            </Route>
            <Route path="/barang">
              <DataBarang />
            </Route>
            <Route path="/nasabah">
              <DataNasabah />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/home">
              <Landing />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
