#**🏡Bengaluru House Price Prediction**

#**🚀Overview**

This project predicts house prices in Bengaluru using Machine Learning. It takes user inputs like location, area, number of bedrooms, etc., and returns an estimated property price through a web interface.

#**🎯Key Features**

Predict house prices based on real input data
Simple and interactive web interface
Backend powered by Flask
Trained ML model for accurate predictions

#**🧠Tech Stack**

Frontend: HTML, CSS, JavaScript
Backend: Python (Flask)
ML Libraries: Pandas, NumPy, Scikit-learn
Environment: Jupyter Notebook

#**📂 Project Structure**

internship-project/
|
├── app.html              # Frontend UI
├── app.css               # Styling
├── app.js                # Frontend logic
├── app.py             # Flask backend
├── BENGALURU HOUSE PREDICTION.pdf  # Project report
└── README.md

#**📊Dataset**

Bengaluru housing dataset
Features include:
-Location
-Total area (sq ft)
-Number of bedrooms (BHK)
-Bathrooms
-Target: Price

#**⚙️How to Run**

#** Install dependencies**
pip install flask pandas numpy scikit-learn

#** Run the Flask app**
python render.py

Then open in browser:
👉 http://127.0.0.1:5000/

#**📈 Model Details**

Used regression-based Machine Learning model
Data preprocessing included:
-Handling missing values
-Feature engineering
-Outlier removal

#**🔥 Results**

-Achieved good prediction accuracy on Bengaluru dataset
-Model performs well for common residential scenarios

#**🌐 Future Improvements**

-Add more datasets for better accuracy
-Deploy on cloud (AWS/Render)
-Improve UI/UX with React
-Add map-based location input
