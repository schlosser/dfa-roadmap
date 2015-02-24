from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)
app.config['DEBUG'] = True
resources = {}


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/resources')
def resources():
    global resources
    return jsonify(resources)


def get_resources():
    global resources
    with open('data/resources.json') as in_file:
        resources = json.loads(in_file.read())

get_resources()

if __name__ == '__main__':
    app.run()
