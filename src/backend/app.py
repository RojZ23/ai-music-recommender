from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/auth/login", methods=["POST"])
def login():
    data = request.json or {}
    # TODO: validate user credentials from data["email"], data["password"]
    # For now, return a demo token and userId
    return jsonify({"token": "demo-token", "userId": 1})


@app.route("/songs/recommended", methods=["GET"])
def recommended():
    mood = request.args.get("mood")
    # TODO: use mood and user history to build recommendations
    # Demo response: empty list of tracks
    return jsonify({"tracks": []})


@app.route("/songs/quick-mix", methods=["GET"])
def quick_mix():
    # TODO: implement hybrid Quick Mix using recent history, mood, and social data
    # Demo response: empty list of tracks
    return jsonify({"tracks": []})


if __name__ == "__main__":
    # Development-only settings; in production use a proper WSGI server
    app.run(host="127.0.0.1", port=5000, debug=True)
