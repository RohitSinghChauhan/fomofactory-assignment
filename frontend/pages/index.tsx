import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchCryptoData } from '../redux/actions';
import { RootState } from '../redux/store';
import { useAppDispatch } from '../redux/store';
import CryptoTable from '../components/CryptoTable';
import ChangeCryptoModal from '../components/ChangeCryptoModal';

const Home = () => {
  const dispatch = useAppDispatch();
  const symbol = useSelector((state: RootState) => state.crypto.symbol);
  const data = useSelector((state: RootState) => state.crypto.data);

  useEffect(() => {
    dispatch(fetchCryptoData(symbol));
    const interval = setInterval(() => {
      dispatch(fetchCryptoData(symbol));
    }, 5000);
    return () => clearInterval(interval);
  }, [symbol, dispatch]);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Price Data</h1>
      <CryptoTable data={data} />
      <ChangeCryptoModal />
    </div>
  );
};

export default Home;
