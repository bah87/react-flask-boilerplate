from flask import Flask
from typing import Dict

app = Flask(__name__)


@app.route("/test")
def get_name_to_test_route() -> Dict[str, str]:
    return {"name": "Brendan"}
