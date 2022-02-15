import React from "react";
import "./OrderStep1.scss";
import {
  TextField,
  Radio,
  RadioGroup,
  Checkbox,
  FormControlLabel,
  InputLabel,
  FormLabel,
  FormControl,
  Button,
  MenuItem,
  Select,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useNavigate} from 'react-router-dom';
import {Link} from "react-router-dom";

export function OrderStep1() {

  const navigate = useNavigate();

  const [country, setCountry] = React.useState('');
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const [deliveryType, setDeliveryType] = React.useState('Почтовая служба');
  const handleChangeDeliveryType = (event) => {
    setDeliveryType(event.target.value);
  };

  return <main className="order">
    <h3 className="order__title">
      Оформление заказа - шаг 1:
    </h3>
    <form className="order__form">

      <TextField
        className="order__nameInput"
        label="Введите имя"
        id="outlined-size-small"
        defaultValue=""
        size="small"
        required
      />

      <TextField
        className="order__surnameInput"
        label="Введите фамилию"
        id="outlined-size-small"
        defaultValue=""
        size="small"
        required
      />

      <FormControl className="order__countrySelect" fullWidth size="small">
        <InputLabel id="demo-simple-select-required-label">Country *</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={country}
          label="Age *"
          onChange={handleChangeCountry}
          required
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Ukraine"}>Ukraine</MenuItem>
          <MenuItem value={"Poland"}>Poland</MenuItem>
          <MenuItem value={"England"}>England</MenuItem>
          <MenuItem value={"Turkey"}>Turkey</MenuItem>
          <MenuItem value={"USA"}>USA</MenuItem>
          <MenuItem value={"Canada"}>Canada</MenuItem>
        </Select>
      </FormControl>

      <TextField className="order__telInput"
                 inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                 size="small"
                 label="Введите номер телефона"
                 required/>

      <TextField
        className="order__cityInput"
        label="Введите город"
        id="outlined-size-small"
        defaultValue=""
        size="small"
        required
      />

      <TextField
        className="order__addressInput"
        label="Введите адрес"
        id="outlined-size-small"
        defaultValue=""
        size="small"
        required
      />

      <TextField
        className="order__address2Input"
        label="Введите адрес 2"
        id="outlined-size-small"
        defaultValue=""
        size="small"
      />

      <TextField
        className="order__emailInput"
        label="Введите e-mail"
        id="outlined-size-small"
        defaultValue=""
        size="small"
        required
      />

      <FormControl className="order__deliveryType">
        <FormLabel id="demo-row-radio-buttons-group-label">Тип доставки</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={deliveryType}
          onChange={handleChangeDeliveryType}
          row
        >
          <FormControlLabel value="Самовывоз" control={<Radio/>} label="Самовывоз"/>
          <FormControlLabel value="Почтовая служба" control={<Radio/>} label="Почтовая служба"/>
        </RadioGroup>
      </FormControl>

      <FormControlLabel className="order__dontCallMeInput" control={<Checkbox defaultChecked/>} label="Dont call me"/>

      <TextField
        className="order__commentInput"
        label="Введите комментарии до заказа"
        maxLength={500}
        erorText="Please enter only 500 digits number"
      />

      <Link to='/order-2'>
        <Button className="order__submitButton"
                variant="contained"
                size="small"
                type="submit"
                sx={{color: 'white', position: 'relative', paddingRight: "27px", width: '100%'}}>
          <span>Продовжити</span>
          <ArrowForwardIosIcon className="order__submitIcon"
                               sx={{position: 'absolute', top: '1px', right: 0, paddingRight: "2px"}}/>
        </Button>
      </Link>

      <Button className="order__goBack"
              onClick={() => navigate(-1)}
              variant="contained"
              size="small"
              sx={{color: 'white', position: 'relative', paddingRight: "27px"}}>
        <span>Назад</span>
        <ArrowBackIosNewIcon className="order__goBackIcon"
                             sx={{position: 'absolute', top: '1px', right: 0, paddingRight: "2px"}}/>
      </Button>

    </form>
  </main>
}
