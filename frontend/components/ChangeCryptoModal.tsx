import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSymbol } from '../redux/reducer';

const ChangeCryptoModal: React.FC = () => {
    const [newSymbol, setNewSymbol] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(setSymbol(newSymbol));
    };

    return (
        <div>
            <button type="button" data-bs-toggle="modal" data-bs-target="#changeCryptoModal">
                Change Crypto
            </button>

            <div className="modal fade" id="changeCryptoModal" tabIndex={-1} aria-labelledby="changeCryptoModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="changeCryptoModalLabel">Change Cryptocurrency</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                value={newSymbol}
                                onChange={(e) => setNewSymbol(e.target.value)}
                                placeholder="Enter symbol (e.g., BTC, ETH)"
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeCryptoModal;
