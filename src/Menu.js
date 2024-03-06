import React, { useState } from "react";
import Select, { components } from 'react-select';
import { FiUser, FiCheck } from 'react-icons/fi'; 

const options = [
    { label: "Selected option", value: 1 },
    { label: "Default option", value: 2 },
    { label: "Hovered option", value: 3 },
    { label: "Disabled option", value: 4, isDisabled: true },
    { label: "Text option", value: 5 },
    { label: <><FiUser /> Icon and text option</>, value: 6 },
];

const CustomOption = (props) => {
    return (
        <components.Option {...props}>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                {props.isSelected && props.showCheckmark && <FiCheck style={{ marginRight: '5px', verticalAlign: 'middle' }} />}
                <span style={{ flex: 1 }}>{props.data.label}</span>
            </div>
        </components.Option>
    );
};

function InputWithSearch({ openUpwards, showCheckmark, searchEnabled }) {
    const [selectedOption, setSelectedOption] = useState(null);

    function handleChange(selectedOption) {
        setSelectedOption(selectedOption);
    }

    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'black',
            color: 'white',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: 'white',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'grey' : 'black',
            color: state.isDisabled ? 'rgba(255, 255, 255, 0.3)' : 'white',
            '&:hover': {
                backgroundColor: 'blue', 
            },
        }),
        input: (provided) => ({
            ...provided,
            color: 'white',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'white',
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none',
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: 'white',
            ':hover': {
                backgroundColor: 'transparent',
                color: 'white',
            },
        }),
    };

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="w-25" >
                <Select
                    options={options}
                    placeholder="Selected Option"
                    value={selectedOption}
                    onChange={handleChange}
                    styles={customStyles}
                    components={{ Option: (props) => <CustomOption {...props} showCheckmark={showCheckmark} /> }}
                    isSearchable={searchEnabled}
                    menuPlacement={openUpwards ? 'top' : 'bottom'} 
                    menuPosition={'fixed'}
                />
            </div>
        </div>
    );
}

export default InputWithSearch;
