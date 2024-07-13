import React from 'react';
import { useDispatch } from 'react-redux';
import { setStock } from '../store/actions';
import './Modal.css';


const validSymbols = ['BTC', 'AAPL', 'MSFT', 'NVDA', 'GOOG'];

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleChange = (symbol: string) => {
    dispatch(setStock(symbol));
    console.log('symbol', symbol);

    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Select Stock or Crypto</h2>
        <div className="button-container">
          {validSymbols.map((symbol) => (
            <button key={symbol} onClick={() => handleChange(symbol)}>
              {symbol}
            </button>
          ))}
        </div>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};


export default Modal;