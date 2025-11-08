Currency Converter

A modern, responsive, and easy-to-use currency converter built with HTML, CSS, and JavaScript, powered by a live exchange-rate API. It allows users to quickly convert any amount between global currencies with real-time accuracy and a clean, minimal interface.

✅ Features

🔄 Real-time currency conversion using a live API

🌐 Supports multiple international currencies

🚩 Automatic country flag update based on selected currency

💡 Smart input validation

🔃 One-click swap between From & To currencies

🎨 Modern glassy UI with responsive layout

⚡ Fast & lightweight — no page reloads

📱 Works on mobile, tablet, and desktop

🚀 Live Demo

(Add your deployed project link here, e.g., Netlify / GitHub Pages)

https://your-demo-link-here.com

🛠️ Tech Stack

HTML5 – structure

CSS3 – modern UI styling (glassy/light theme)

JavaScript (ES6) – API calls + logic

Exchange API – Frankfurter API for conversion

https://api.frankfurter.app/latest?amount=AMOUNT&from=FROM&to=TO

📡 How It Works

User selects From Currency

User selects To Currency

Enter the amount

Click Convert

The app fetches live exchange rates and calculates the final conversion instantly

Flags update automatically based on each currency selection.

📁 Project Structure
currency-converter/
│
├── index.html       # UI structure
├── style.css        # Styling and responsive design
├── script.js        # API calls + conversion logic
└── countryList.js   # Currency-to-country flag mapping

🔗 API Used

This project uses the Frankfurter API, which provides:
✅ free access
✅ no API key required
✅ daily updated European Central Bank rates

Example endpoint:

https://api.frankfurter.app/latest?amount=1&from=USD&to=INR

📸 Screenshots

<img width="1917" height="865" alt="Screenshot 2025-11-08 145227" src="https://github.com/user-attachments/assets/3604e079-55c4-496c-a44e-6f96169b72e9" />


🔧 Setup & Usage

Clone the repository

git clone https://github.com/yourusername/currency-converter.git


Open the folder

Run index.html in any browser

Start converting currencies!

No server required — it runs directly in the browser.
