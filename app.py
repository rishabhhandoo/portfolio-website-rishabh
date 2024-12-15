from flask import Flask, send_from_directory

app = Flask(__name__)

# Serve React App
@app.route('/')
def serve():
    return send_from_directory('static', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
    app.run(debug=True)