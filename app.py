from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')  #html file name

@app.route('/predict', methods=['POST'])
def calculate_total_price():
    area = int(request.form['area'])
    price_per_sqft = int(request.form['price'])
    total_price = area * price_per_sqft
    return render_template('index.html', total_price=total_price)

if __name__ == '__main__':
    app.run(debug=True)
