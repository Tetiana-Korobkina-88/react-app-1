import './App.css';
import { Book } from './component/Book';
import { Preloader } from './component/Preloader';

const App = (props) => {
  return props.isLoading ?  (<Preloader />) : <div>
    <Book name='Monday' year='2022' price='2500'>it's usually a hart day</Book>
    <Book name='Tuesday' year='2021' price='3500'/>
    <Book name='Wednesday' year='2020' price='6500'/>
    <Book name='Thursday' year='2018' price='8500'/>
    <Book year='2017' price='5500'/> 
  </div>
}

export default App;