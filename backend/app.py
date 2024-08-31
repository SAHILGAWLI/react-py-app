from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder='../frontend/build', static_url_path='')
CORS(app)  # This is important to allow CORS for cross-origin requests.

# Sample endpoint
@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"data": "Hello from Flask!"})

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
