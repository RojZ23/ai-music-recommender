const loginBtn = document.getElementById("login-btn");
const quickMixBtn = document.getElementById("quick-mix-btn");
const homeSection = document.getElementById("home-section");
const loginSection = document.getElementById("login-section");
const recommendedList = document.getElementById("recommended-list");

let token = null;

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please enter email and password.");
    return;
  }

  const res = await fetch("http://localhost:5000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  if (res.ok) {
    const data = await res.json();
    token = data.token;
    loginSection.hidden = true;
    homeSection.hidden = true === false; // ensure visible
    homeSection.hidden = false;
  } else {
    alert("Login failed.");
  }
});

quickMixBtn.addEventListener("click", async () => {
  const res = await fetch("http://localhost:5000/songs/quick-mix", {
    headers: token ? { Authorization: `Bearer ${token}` } : {}
  });

  if (!res.ok) {
    alert("Failed to load Quick Mix.");
    return;
  }

  const data = await res.json();
  recommendedList.innerHTML = "";

  (data.tracks || []).forEach((track) => {
    const li = document.createElement("li");
    li.textContent = track.title || "Demo track";
    recommendedList.appendChild(li);
  });
});
