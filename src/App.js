//import { useMediaQuery } from "react-responsive";
//import { MediaQueryContext } from './Contextes/Context';
//import { useMediaQuery } from 'react-responsive';


import './App.scss';

import Navigation from "./Components/Navigation/Navigation";
import BreadCrumbs from './Components/BreadCrumbs/BreadCrumbs';
import NoteBox from './Components/NoteBox/NoteBox';
import OrderSteps from './Components/OrderSteps/OrderSteps';
import UploadNew from './Components/UploadNew/UploadNew';
import CurrentItems from './Components/CurrentItems/CurrentItems';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className="website-container">
      <Navigation />
      <BreadCrumbs />
      <NoteBox />
      <OrderSteps></OrderSteps>
      <UploadNew></UploadNew>
      <CurrentItems></CurrentItems>
      <Footer></Footer>


    </div>

  );
}




export default App;
