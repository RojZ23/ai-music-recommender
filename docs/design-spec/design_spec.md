# Design Specification – AI Music Recommender System

## Overview
This document breaks down each page, component, and tool of the project.

## Pages  Screens

### Login  Registration Page
- Purpose Authenticate users and create new accounts.
- Key UI elements
  - Email field, password field, login button, register link.
- Backend interaction
  - `POST authlogin`
  - `POST authregister`

### Home Screen
- Sections
  - Recommended Songs
  - Mood Playlist
  - Friends’ Picks
  - Quick Mix button
- Key interactions
  - Play track, like, skip, change mood, followunfollow users.

### Search Screen
- Purpose Search songs by title, artist, or genre.
- Backend interaction
  - `GET songssearchquery=...`

### Now Playing Screen
- Purpose Show currently playing track and controls.
- Controls Play, pause, next, previous, like, skip.

## Tools  Modules

### Recommendation Engine
- Inputs User ID, optional mood, social graph.
- Outputs Ranked list of tracks.
- Strategies
  - Content-based (track metadata  features)
  - Mood-based (mood labels, energy, valence)
  - Collaborative (friends’ likes, similar users)

### Mood Preference Handler
- Stores `MoodPreference(userId, mood, selectedAt)`.
- Annotates interactions with active mood.

### Social Service
- Manages `Follow(userId, followsUserId)`.
- Provides friends’ liked songs used in “Friends’ Picks”.

### Quick Mix Engine
- Combines recent history, mood signals, and collaborative signals into a hybrid playlist.
