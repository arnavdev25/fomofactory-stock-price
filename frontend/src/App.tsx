import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './utils/api';
import { setData } from './store/actions';
import DataTable from './components/DataTable';
import Modal from './components/Modal';
import { selectStock } from './store/selectors';
import './App.css';


const App: React.FC = () => {
  const dispatch = useDispatch();
  const stock = useSelector(selectStock);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchStockData = async () => {
      const data = await fetchData(stock);
      dispatch(setData(data));
    };

    fetchStockData();
    const interval = setInterval(fetchStockData, 5000);

    return () => clearInterval(interval);
  }, [dispatch, stock]);

  return (
    <div className='App'>
      <h1>Real-Time Stock Data</h1>
      <button onClick={() => setIsModalOpen(true)}>Change Stock/Crypto</button>
      <DataTable />
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};


export default App;