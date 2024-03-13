from flask import Flask, jsonify
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app)


@app.route('/')
def hello_world():
    chopstick = {
        'color': 'bamboo',
        'left_handed': True
    }

    return jsonify(chopstick)
    #return "Hola, desde un contenedor con Python"

if __name__ == '__main__':
    app.run('0.0.0.0', 3002, debug = True)
