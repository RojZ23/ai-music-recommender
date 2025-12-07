graph TB
    %% Users
    U[👤 Users<br/>Browser/Mobile] -->|HTTPS 80/443| NGINX[(🐳 NGINX<br/>Reverse Proxy)]
    
    %% Frontend Flow
    NGINX -->|Static Files| F[(🐳 Frontend<br/>React.js SPA)]
    NGINX -->|API Proxy| B[(🐳 Backend<br/>Flask API)]
    
    %% Backend API Routes
    B -->|REST API| FR1[📱 /auth/login<br/>/songs/recommended]
    B -->|Mood Param| FR2[🎵 /songs/recommended?mood=happy]
    B -->|Quick Mix| FR3[⚡ /songs/quick-mix]
    B -->|Social| FR4[👥 /social/follow<br/>/songs/friends-picks]
    
    %% Recommendation Engine (inside Backend)
    FR1 -.->|Calls| REC[(🤖 Recommendation Engine)]
    FR2 -.->|Calls| REC
    FR3 -.->|Calls| REC
    FR4 -.->|Calls| REC
    
    %% Data Sources
    REC -->|User History| P[(🐳 Postgres<br/>Users, Tracks, Interactions<br/>MoodPrefs, Follows)]
    REC -->|Sessions/Cache| R[(🐳 Redis<br/>Sessions, Rate Limit)]
    REC -->|Song Embeddings| Q[(🐳 Qdrant<br/>Vector Search<br/>Music Similarity)]
    
    %% Recommendation Logic
    REC -->|Content-based| P
    REC -->|Mood-based| P
    REC -->|Collaborative| P
    REC -->|Hybrid Quick Mix| Q
    REC -->|"Friends' Picks"| P
    
    %% Response Flow
    REC -->|Ranked Tracks| B
    B -->|JSON Response| NGINX
    NGINX -->|API Response| U
    
    %% Legend
    classDef docker fill:#e1f5fe,stroke:#01579b,stroke-width:3px
    classDef db fill:#f3e5f5,stroke:#4a148c,stroke-width:3px
    classDef api fill:#e8f5e8,stroke:#1b5e20,stroke-width:3px
    class F,B,NGINX,R,P,Q,REC docker
    class FR1,FR2,FR3,FR4 api
