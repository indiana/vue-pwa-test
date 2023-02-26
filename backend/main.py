import json
from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/items", methods=['GET'])
@cross_origin()
def items():
    with open("db.json") as file:
        item_list = json.load(file)
    return json.dumps(item_list)

@app.route("/item", methods=['POST'])
@cross_origin()
def item():
    with open("db.json") as file:
        item_list = json.load(file)
    item_list.append(request.get_json())
    with open("db.json", "w") as file:
        json.dump(item_list, file)
    return ""

if __name__ == "__main__":
    app.run(debug=True, port=5100)