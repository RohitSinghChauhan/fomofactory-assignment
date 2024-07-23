import React from 'react';

interface Props {
    data: any[];
}

const CryptoTable: React.FC<Props> = ({ data }) => {
    return (
        <table style={{ border: '1px solid black', width: '100vw' }}>
            <thead style={{ width: '100%', backgroundColor: 'red' }} >
                <tr>
                    <th>Coin</th>
                    <th>Time</th>
                    <th>Price</th>
                    <th>Volume</th>
                    <th>Market Cap</th>
                </tr>
            </thead>
            <tbody style={{ width: '100%', backgroundColor: 'royalblue', color: "white" }} >
                {data.map((entry, index) => (
                    <tr key={index}>
                        <td style={{ textAlign: 'center' }}>{entry.code}</td>
                        <td style={{ textAlign: 'center' }}>{new Date(entry.timestamp).toLocaleString()}</td>
                        <td style={{ textAlign: 'center' }}>{entry.rate}</td>
                        <td style={{ textAlign: 'center' }}>{entry.volume}</td>
                        <td style={{ textAlign: 'center' }}>{entry.cap}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CryptoTable;
