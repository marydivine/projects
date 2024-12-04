import React, { useState } from 'react';
import { Modal, Popover, Input } from 'antd';
import { Select } from 'antd';
import { Paper, Grid, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './Swap.css';
import EthereumLogo from '../assets/link.png'

const SwapComponent = () => {
  const [fromAmount, setFromAmount] = useState(0.5);
  const [toAmount, setToAmount] = useState(3.35);
  const [fromCurrency, setFromCurrency] = useState('LINK');
  const [toCurrency, setToCurrency] = useState('USDC');
  const [modalVisible, setModalVisible] = useState(false);
  const { Option } = Select;

  const handleFromAmountChange = (value) => {
    setFromAmount(value);
    // Perform calculations to update toAmount based on the new fromAmount
  };

  const handleToAmountChange = (value) => {
    setToAmount(value);
    // Perform calculations to update fromAmount based on the new toAmount
  };

  const handleFromCurrencyChange = (value) => {
    setFromCurrency(value);
  };

  const handleToCurrencyChange = (value) => {
    setToCurrency(value);
  };

  const handleSwap = () => {
    // Perform swap operation
  };

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <div className="swap-container" style={{ height: '100vh' }}>
      <div className="header">
        <div className="header-left">
          <div className="header-title" style={{ marginLeft: '70px' }}>Swap</div>
          <div className="header-title">Tokens</div>
        </div>
        <div className="header-right">
        <div className="header-ethereum" style={{ display: 'flex', alignItems: 'center' }}>
  <img src={EthereumLogo} alt="Ethereum Logo" className="ethereum-logo" />
  Ethereum
</div>
          <button className="connect-button">Connect</button>
        </div>
      </div>
      <Paper elevation={3} style={{ backgroundColor: '#1f2937' }} className="paper-container">
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <div className="swap-text" style={{ color: 'white' }}>Swap</div>
          </Grid>
          <Grid item xs={6} container justifyContent="flex-end">
            <IconButton>
              <SettingsIcon style={{ color: '#374151' }} />
            </IconButton>
          </Grid>
        </Grid>
        <div className="tab-container">
          <div className="tab" style={{ marginTop: '10px' }}>
            <div className="input-container">
              <div className="input-group">
                <input
                  type="number"
                  value={fromAmount}
                  onChange={(e) => handleFromAmountChange(e.target.value)}
                  className="input-field"
                  style={{ backgroundColor: '#374151', color: 'white', height: '40px' }}

                />
             <Select
  defaultValue={fromCurrency}
  onChange={(value) => handleFromCurrencyChange(value)}
  style={{ width: 120, height:'40px', backgroundColor: '#374151', color: 'white' }}
  dropdownStyle={{ backgroundColor: '#374151' }}
>
  <Option value="LINK" style={{ backgroundColor: '#374151', color: 'white' }}>LINK</Option>
  <Option value="USDC" style={{ backgroundColor: '#374151', color: 'white' }}>USDC</Option>
  {/* Add more options as needed */}
</Select>
              </div>
            </div>
            <div className="swap-icon">
  <ArrowDownwardIcon />
</div>
            <div className="input-container">
              <div className="input-group">
                <input
                  type="number"
                  value={toAmount}
                  onChange={(e) => handleToAmountChange(e.target.value)}
                  className="input-field"
                  style={{ backgroundColor: '#374151', color: 'white', height: '40px' }}

                />
               <Select
  defaultValue={toCurrency}
  onChange={(value) => handleToCurrencyChange(value)}
  style={{ width: 120, height:'40px', backgroundColor: '#374151', color: 'white' }}
  dropdownStyle={{ backgroundColor: '#374151' }}
>
  <Option value="LINK" style={{ backgroundColor: '#374151', color: 'white' }}>LINK</Option>
  <Option value="USDC" style={{ backgroundColor: '#374151', color: 'white' }}>USDC</Option>
  {/* Add more options as needed */}
</Select>

              </div>
            </div>
          </div>
        </div>
        <button onClick={handleSwap} className="swap-button" style={{ width: '88%', height: '50px', marginTop: '20px' }}>
          Swap
        </button>
      </Paper>
      <Modal
        title="Title"
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        <p>Content for Modal</p>
      </Modal>
    </div>
  );
};

export default SwapComponent;
