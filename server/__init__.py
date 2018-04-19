from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='')


@app.route('/')
def hello_world():
    return send_from_directory('webapp/src', 'index.html')


if __name__ == '__main__':
    app.run()
