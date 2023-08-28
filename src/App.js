import React from "react";
import {Route,Routes,Link} from "react-router-dom"
import { Layout,Typography,Space } from "antd";
import { Navbar } from "./Components/Navbar";
import Homepages from "./Components/Homepages"
import "./App.css"
import Echanges from "./Components/Echanges";
import Cryptocurrence from "./Components/Cryptocurrence";
import Cryptodetails from "./Components/Cryptodetails";
import News from "./Components/News"

function App() {
  return (
    <div className="app ">
      <div className="nabar">
        <Navbar/>
    </div>
      <div className="main">
        <Layout>
          <div className="routes">
          <Routes>
            <Route exact path="/" element={ <Homepages/>}/>
            <Route exact path="/echanges" element={ <Echanges/>}/>
            <Route exact path="/currence" element={ <Cryptocurrence/>}/>
            <Route exact path="/detail" element={ <Cryptodetails/>}/>
            <Route exact path="/news" element={ <News/>}/>
            </Routes>
          </div>
        </Layout>
      <div className="footer" level={5} >
        <Typography.Title style={{color:"white", textAlign:"center"}}>
          Cryptocurrence <br/>
          all crypto in moments
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/echanges">Echanges</Link>
          <Link to="news">News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
