import logo from './logo.svg';
import './App.css';
import Comp1 from './Components/Comp1';
import Comp2 from './Components/Comp2';
import Comp3 from './Components/Comp3';
import Counter from './Components/Counter';
import Products from './Components/Products';
import DeliveryComp from './Components/DeliveryComp';
import DeliveryClassComp from './Components/DeliveryClass';
import { useState } from 'react';
import Parent from './Components/Parent';
import ParentNew from './Components/ParentNew';
import OrginalComp from './Components/OrginalComp';
import CityList from './Components/CityList';
import HookDemo from './Components/HookDemo';
import { createContext } from 'react';
import UseRefDemo from './Components/useRefDemo';
import UseMemo from './Components/useMemo';
import Parent2 from './Components/useCallbackDemo/Parent';
import AxiosDemo from './Components/AxiosDemo';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import TopNavbar from './Components/TopNavbar';
import ProductDetail from './Components/ProductDetail';
import FormsDemo from './Components/FormsDemo';
import BMI from './Components/BMI';
import ProductComp from './Components/fluxdemo/ProductComp';

export let Globalinfo=createContext()

function App() {
  let animals=["lion","tiger","deer","hippo","Elephant"]
  const [cart, setCart]=useState([])
   console.log(cart)
  return (

    <div>
     <TopNavbar/>
       <Routes>
          <Route exact path='/' element={<Comp1/>}/>
          <Route exact path='/counter' element={<Counter/>}/>
          <Route exact path='/products' element={<Products/>}/>
          <Route exact path='/products/:pid/:pname' element={<ProductDetail/>}/>
          <Route exact path='/axios' element={<AxiosDemo/>}/>
          <Route exact path='/addproduct' element={<FormsDemo/>}/>
          <Route exact path='/hoc' element={<CityList/>}/>
          <Route exact path='/bmi' element={<BMI/>}/>
          <Route exact path='/fluxdemo' element={<ProductComp/>}/>
      </Routes>
    </div>
      
  );
}

export default App;
