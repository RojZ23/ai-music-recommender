# AI Music Recommender System

## Jira Project Link
- Jira board: https://your-org.atlassian.net/jira/software/c/projects/AI-MUSIC/boards/1

## Formal Objective
The objective of this project is to design and implement an AI-powered music recommender system that provides personalized playlists based on listening history, mood, and social signals.

The system will be delivered in four snapshots, each adding new capabilities while refining architecture, usability, and performance.

## Why This Software Matters
- Helps users discover new music aligned with their tastes and mood.
- Demonstrates real-world recommendation techniques (content-based, mood-based, collaborative, hybrid).
- Serves as a teaching example for full-stack design, documentation, and testing practices.

## How to Access / Run

### Prerequisites
- Python 3.10+
- Node.js (optional, if you later add a frontend build step)
- Git

### Clone the repository
git clone https://github.com/your-username/ai-music-recommender.git
cd ai-music-recommender

### Backend (example Flask API)
cd src/backend
python -m venv venv
source venv/bin/activate # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
The backend will start on `http://localhost:5000`.

### Frontend (static)
Open `src/frontend/index.html` in a browser, or serve it with a simple HTTP server:
cd src/frontend
python -m http.server 8000

Then visit `http://localhost:8000`.

## Repository Layout

- `docs/srs/group5_SRS.tex`  
  Combined Software Requirements Specification for snapshots 1–4.

- `docs/sdd/group5_SDD.tex`  
  Combined Software Design Document for snapshots 1–4.

- `docs/design-spec/design_spec.md`  
  Detailed breakdown of every page, part, and tool in the project.

- `docs/snapshot-objectives/`  
  Snapshot objective documents (start, checkpoints, final).

- `docs/testrail/*.csv`  
  TestRail exports for snapshots 2, 3, and 4 (test cases and results).

- `docs/diagrams/workflow_diagram.drawio`  
  High-level workflow diagram of the system.

- `src/backend/`  
  Example backend API implementation.

- `src/frontend/`  
  Example frontend UI structure.

## Getting Help
- Open a GitHub issue in this repository for bugs or questions.
- Use the Jira board for task tracking and sprint planning.
