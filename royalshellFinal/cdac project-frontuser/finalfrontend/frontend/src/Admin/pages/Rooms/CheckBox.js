import React from "react";

const CheckBox = (props) => {
  console.log(props);
  const { facilityList, onChange } = props;

  return (
    <div>
      {facilityList.map((option, index) => (
        <div className="form-check" key={option.facilityId}>
          <input
            className="form-check-input"
            type="checkbox"
            name={option.title}
            id={option.facilityId}
            value={option.facilityId}
            checked={option.isChecked}
            onChange={(e) => {
              onChange(index, e);
            }}
          />
          <label className="form-check-label" htmlFor={option.facilityId}>
            <h5>{option.title}</h5>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
