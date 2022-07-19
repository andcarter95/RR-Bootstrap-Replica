import 'bootstrap/dist/css/bootstrap.min.css';
import BodyOverlay from './ImgCard';
import Stores from './StoreListing';
import Topbar from './TopBar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <BodyOverlay/>
      <Stores/>
    </div>
  );
}

export default App;
