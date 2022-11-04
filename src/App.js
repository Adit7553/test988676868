import './App.css';
import BasicSetUpChart from './components/charts/fusionCharts/BasicSetUpChart';
import  BasicsetUp  from './components/charts/react-chartJs2/BasicSetUp';
import BasicRechart from './components/charts/rechart/BasicRechart'
import {data} from './components/charts/data/RawData'
import AreaChart from './components/charts/rechart/AreaChart'
import Login from './components/loginPage/Login';
import MainComponent from './components/MainComponent';
import Example from './components/loginPage/Example';
import Example2 from './components/loginPage/Example2';

function App() {
  return (
    <>
    {/* <Example2/> */}
    {/* <div>
      <h3>Fusion chart</h3>
      <BasicSetUpChart/>
    </div>


    <div>
    <h3>react-chartJs-2 chart</h3>
      <BasicsetUp/>
    </div> */}

    {/* <div>
      <BasicRechart data={data}/>
      <h3>Area chart</h3>
      <AreaChart data={data}/>
    </div> */}
    {/* <Example/> */}
    <AreaChart data={data}/>
{/* <Login/> */}


    </>
  );
}

export default App;
