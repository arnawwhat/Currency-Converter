# 💱 Currency Converter

A simple and interactive **Currency Converter** web application built with **React.js**! This app allows users to convert currencies in real-time using live exchange rates. 💰✨

## 🚀 Features

✅ **Real-Time Currency Conversion** - Get up-to-date exchange rates instantly.\
✅ **User-Friendly Interface** - Clean and intuitive design for smooth user experience.\
✅ **Swap Currencies** - Easily switch between `from` and `to` currencies with one click. 🔄\
✅ **Dynamic Input Fields** - Change amounts and currencies dynamically.\
✅ **Custom Hook** - Utilizes `useCurrencyInfo` to fetch exchange rates.\
✅ **Responsive Design** - Works across all screen sizes. 📱💻

## 🛠️ Technologies Used

- **React.js** ⚛️
- **Tailwind CSS** 🎨
- **JavaScript (ES6+)** 💻
- **REST API (for live exchange rates)** 🌍

## 📂 Folder Structure

```
📦 currency-converter
├── 📂 src
│   ├── 📂 components   # Reusable UI components
│   │   ├── InputBox.jsx
│   ├── 📂 hooks         # Custom hooks
│   │   ├── useCurrencyInfo.js
│   ├── App.jsx         # Main application file
│   ├── index.js        # Entry point
│   ├── App.css         # Styles
├── 📄 package.json     # Project dependencies
├── 📄 README.md        # Documentation (this file!)
```

## 🔧 Installation & Setup

1️⃣ **Clone the repository:**

```bash
git clone https://github.com/yourusername/currency-converter.git
cd currency-converter
```

2️⃣ **Install dependencies:**

```bash
npm install
```

3️⃣ **Start the development server:**

```bash
npm run dev
```

The app should now be running on `http://localhost:5173/` 🎉

## 🔄 How It Works

1. Enter the amount you want to convert.
2. Select the **from** currency (e.g., USD).
3. Select the **to** currency (e.g., INR).
4. Click **Convert** to see the result.
5. Use **Swap** to quickly switch the currencies.

## 📌 Key Components Explained

### **🔹 InputBox Component**

Handles user input for currency selection and amount entry.

```jsx
<InputBox
  label="From"
  amount={amount}
  selectCurrency={from}
  currencyOptions={options}
  onAmountChange={(value) => setAmount(value)}
  onCurrencyChange={(currency) => setFrom(currency)}
/>
```

### **🔹 useCurrencyInfo Hook**

Fetches exchange rates dynamically.

```jsx
const currencyInfo = useCurrencyInfo(from);
const options = Object.keys(currencyInfo);
```

### **🔹 Convert Function**

Performs the currency conversion.

```jsx
const convert = () => {
  setConvertedAmount(amount * currencyInfo[to]);
};
```

## 🛠️ Future Improvements

🔹 Dark mode support 🌙\
🔹 Add more currency conversion history 📜\
🔹 Improve error handling 🚨




### ⭐ Show Some Love!

If you found this project useful, don't forget to **star** ⭐ the repository! 😍

Happy Coding! 🚀

