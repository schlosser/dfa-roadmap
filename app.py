from flask import Flask, render_template, jsonify
from sys import argv
import json

app = Flask(__name__)

if len(argv) == 2 and argv[1] == 'debug':
	app.config['DEBUG'] = True
resources = {}


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/resources/<category>')
def resources(category):
    global resources
    print resources.get(category)
    return jsonify(resources.get(category))


def get_resources():
    global resources
    with open('data/resources.json') as in_file:
        resources = json.loads(in_file.read())

get_resources()

if __name__ == '__main__':
    app.run()
