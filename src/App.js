import { useMediaQuery } from "react-responsive";
import MediaQuery from 'react-responsive'
import { MediaQueryContext } from './Contextes/Context';

import './App.scss';

import Navigation from "./Components/Navigation/Navigation";
import BreadCrumbs from './Components/BreadCrumbs/BreadCrumbs';
import NoteBox from './Components/NoteBox/NoteBox';
import OrderSteps from './Components/OrderSteps/OrderSteps';
import UploadNew from './Components/UploadNew/UploadNew';
import CurrentItems from './Components/CurrentItems/CurrentItems';
import Footer from './Components/Footer/Footer';
import FooterMobile from "./Components/FooterMobile/FooterMobile";

function App() {

  const isMobile = useMediaQuery({
    query: '(min-width: 991px)'
  })


  //console.log(isMobile);

  return (
    <MediaQueryContext.Provider value={isMobile}>
      <div className={isMobile ? "website-container" : "website-container_mobile"}>
        <Navigation />
        <BreadCrumbs />
        <NoteBox />
        <OrderSteps></OrderSteps>
        {isMobile ? <Footer /> : <FooterMobile />}
        <UploadNew></UploadNew>
        <CurrentItems></CurrentItems>
      </div>
    </MediaQueryContext.Provider>

  );
}




export default App;
