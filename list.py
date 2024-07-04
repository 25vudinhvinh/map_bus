from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    buses = [
        {'name': 'Bus 1', 'destination': 'Trường ĐH QNU', 'time': '8:00'},
        {'name': 'Bus 2', 'destination': 'Trung tâm thương mại Vincom', 'time': '8:15'},
        # Thêm thông tin xe bus khác vào đây
    ]
    return render_template('index.html', buses=buses)

if __name__ == '__main__':
    app.run(debug=True)
