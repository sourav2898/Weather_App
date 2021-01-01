import React from "react";

const Input = ({city,setCity,get,setError}) => {
    const submit = (e) => {
        e.preventDefault();
        get();
    }
    return (
    <>
      <form className="form" onSubmit={submit}>
          <input
            type="text"
            value={city}
            onChange = {(e) => {
                setCity(e.target.value);
                setError("");
            } } 
            placeholder="Type your city"
          />
          <button type="submit" className="btn btn-primary mb-2">
            Search
          </button>
      </form>
    </>
  );
};

export default Input;
