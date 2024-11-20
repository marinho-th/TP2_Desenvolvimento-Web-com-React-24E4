import React, { useState } from 'react';
import BoxComponent from '../components/Box/BoxComponent';
import TypographyComponent from '../components/Typography/TypographyComponent';
import MyButton from '../components/MyButton';
import AvatarComponent from '../components/Avatar/AvatarComponent';
import CardComponent from '../components/Card/CardComponent';
import CheckboxComponent from '../components/Checkbox/CheckboxComponent';
import IconButtonComponent from '../components/IconButton/IconButtonComponent';
import SnackbarComponent from '../components/Snackbar/SnackbarComponent';
import SwitchComponent from '../components/Switch/SwitchComponent'; 
import { Favorite, Home as HomeIcon } from '@mui/icons-material';
import { Tabs, Tab } from '@mui/material';
import TextFieldComponent from '../components/TextField/TextFieldComponent';

const Home = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [selectedItems, setSelectedItems] = useState({
    feed: false,
    diaper: false,
    sleep: false,
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isSwitchChecked, setIsSwitchChecked] = useState(false); 
  const [selectedTab, setSelectedTab] = useState(0);
  const [textFieldValue, setTextFieldValue] = useState('');

  const toggleAlert = () => {
    setShowAlert((prev) => !prev);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedItems((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleSnackbarOpen = () => {
    setOpenSnackbar(true);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  const handleSwitchChange = () => {
    setIsSwitchChecked((prev) => !prev);
  };

  return (
    <BoxComponent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: 2,
        backgroundColor: 'white',
      }}
    >
      <AvatarComponent
        alt="Imagem do Bebê"
        src="https://img.freepik.com/vetores-premium/bebe-dos-desenhos-animados-dormindo_61878-356.jpg?w=740"
        sx={{ width: 100, height: 100, marginBottom: 2 }}
      />
      <TypographyComponent variant="h4" gutterBottom>
        Este é o App de gerenciamento materno!
      </TypographyComponent>

      <TypographyComponent variant="body1" gutterBottom>
        Switch: {isSwitchChecked ? 'Ficou on' : 'Ficou Off'}
      </TypographyComponent>
      <SwitchComponent checked={isSwitchChecked} onChange={handleSwitchChange} /> 

      {showAlert && (
        <TypographyComponent variant="body1" color="textSecondary" gutterBottom>
          Mensagem de alerta gerada.
        </TypographyComponent>
      )}

      <CardComponent
        sx={{
          padding: 2,
          maxWidth: 400,
          marginBottom: 2,
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <TypographyComponent variant="h6">Atividades</TypographyComponent>
        <div style={{ textAlign: 'left' }}>
          <label>
            <CheckboxComponent
              name="feed"
              checked={selectedItems.feed}
              onChange={handleCheckboxChange}
            />
            Mamada
          </label>
          <br />
          <label>
            <CheckboxComponent
              name="diaper"
              checked={selectedItems.diaper}
              onChange={handleCheckboxChange}
            />
            Fralda trocada
          </label>
          <br />
          <label>
            <CheckboxComponent
              name="sleep"
              checked={selectedItems.sleep}
              onChange={handleCheckboxChange}
            />
            Cochilo
          </label>
        </div>
      </CardComponent>

      <MyButton onClick={toggleAlert} label="Toggle Alert" />

      <div style={{ display: 'flex', gap: '10px' }}>
        <IconButtonComponent color="primary" onClick={() => alert('Clicou no ícone de coração')}>
          <Favorite />
        </IconButtonComponent>
        <IconButtonComponent color="secondary" onClick={() => alert('Clicou no ícone de casa')}>
          <HomeIcon />
        </IconButtonComponent>
      </div>

      <TextFieldComponent
        label="Este é o nome do Bebê"
        value={textFieldValue}
        onChange={handleTextFieldChange}
        fullWidth
        sx={{ marginTop: '20px' }}
      />

      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="Exemplo de abas"
        sx={{ marginTop: '20px', marginBottom: '20px' }}
      >
        <Tab label="Aba 1" />
        <Tab label="Aba 2" />
        <Tab label="Aba 3" />
      </Tabs>

      <SnackbarComponent
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Mensagem de Snackbar"
      />
    </BoxComponent>
  );
};

export default Home;
