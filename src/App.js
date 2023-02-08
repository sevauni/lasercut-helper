//import { useMediaQuery } from "react-responsive";
//import { MediaQueryContext } from './Contextes/Context';
//import { useMediaQuery } from 'react-responsive';


import './App.scss';

import Navigation from "./Components/Navigation/Navigation";
import BreadCrumbs from './Components/BreadCrumbs/BreadCrumbs';
import NoteBox from './Components/NoteBox/NoteBox';

function App() {

  return (
    <div className="website-container">
      <Navigation />
      <BreadCrumbs />
      <NoteBox />
      <div className="order-steps">sdfsdfsdf</div>
      <div className="upload-new-item"></div>
      <div className="current-items"></div>
      <div className="footer">
      </div>

    </div>

  );
}




export default App;
