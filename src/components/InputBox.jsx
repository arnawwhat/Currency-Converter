import React, { useId } from "react";

function InputBox({  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "usd",
  currencyOptions = [],
  amountDisabled = false,
  currencyDisabled = false,
  className = ""}

) {
  const Id = useId();
  return (
    <div className={` bg-white p-3 rounded-lg text-sm flex ${className}  `}>
      <div className="w-1/2">
        <label htmlFor={Id} className="text-black/40 mb-2 mx-2 inline-block">
          {label}
          
        </label>
        <input
          id={Id}
          type="number"
          value={amount.toFixed(2)}
          placeholder="0"
          disabled={amountDisabled}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          //imp practice so that we check if onAmountChange exists
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          disabled={currencyDisabled}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
