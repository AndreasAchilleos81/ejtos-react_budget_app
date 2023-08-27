import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";


const Currency = () => {
    const { dispatch, currencies, currency } = useContext(AppContext);
    const updateCurrency = (selectedCurrencyId) => {
        console.log(selectedCurrencyId);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrencyId,
        });
    };

    return (
        <div className="row m-0 p-0 w-auto h-auto">
            <label className="row alert alert-success m-0 p-0 w-auto h-auto" id="currencyLabel" htmlFor='currencySelector'>Currency ({currency.unit} {currency.name})
                <Dropdown className="row alert alert-success m-0 p-0 w-auto h-auto" onSelect={(e) => updateCurrency(e)}>
                    <DropdownToggle variant=""></DropdownToggle>
                    <DropdownMenu flip="true" align={"end"}>
                        {
                            currencies.map((curr) =>
                                <Dropdown.Item
                                    onSelect={(e) => updateCurrency(e)}
                                    key={curr.id}
                                    eventKey={curr.id}
                                    href=""
                                    className="row alert alert-success m-0 p-0 w-auto h-auto"
                                >{curr.id}</Dropdown.Item>)
                        }
                    </DropdownMenu>
                </Dropdown>
            </label>
        </div>
    );
};

export default Currency;