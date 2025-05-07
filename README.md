**LLM Journal Club GitHub Site**

Below is a scaffold for a static GitHub Pages website (pure HTML/CSS) that you can host directly from a repository. It includes:

- **index.html**: Home page with Introduction and social links
- **sessions.html**: List of latest sessions and YouTube links
- **contact.html**: Contact section with mail link and Telegram/Twitter
- **assets/css/style.css**: Basic styling
- **README.md**: Setup instructions

```
llm-journal-club-site/            # repo root (e.g. UserName/llm-journal-club-site)
├── index.html                   # Home / Introduction
├── sessions.html                # Latest sessions list & video links
├── contact.html                 # Contact information & form
├── assets/
│   └── css/
│       └── style.css            # Global styles
└── README.md                    # Setup & deploy instructions
```

---

<!-- index.html -->
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LLM Journal Club | Sharif University</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <header>
    <nav>
      <a href="index.html">Home</a>
      <a href="sessions.html">Sessions</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <section id="intro">
      <h1>LLM Journal Club</h1>
      <p>Hosted by Moein Salimi, PhD Candidate in AI, Computer Department, Sharif University of Technology.</p>
      <p>We meet weekly to discuss the latest papers, tools, and advances in large language models.</p>
      <div class="social-links">
        <a href="https://x.com/LLM_CLUB" target="_blank">Twitter</a>
        <a href="https://www.youtube.com/@LLM_CLUB" target="_blank">YouTube</a>
        <a href="https://t.me/LLM_CLUB" target="_blank">Telegram</a>
      </div>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 LLM Journal Club, Sharif University of Technology</p>
  </footer>
</body>
</html>
```

---

<!-- sessions.html -->
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sessions | LLM Journal Club</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <header>
    <nav>
      <a href="index.html">Home</a>
      <a href="sessions.html">Sessions</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <section id="sessions">
      <h1>Latest Sessions</h1>
      <ul>
        <!-- Copy & paste rows from your Google Sheet here -->
        <li><strong>Session 1:</strong> "Paper Title" — <a href="https://www.youtube.com/watch?v=..." target="_blank">Watch on YouTube</a></li>
        <li><strong>Session 2:</strong> "Another Title" — <a href="https://www.youtube.com/watch?v=..." target="_blank">Watch on YouTube</a></li>
        <!-- ... -->
      </ul>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 LLM Journal Club</p>
  </footer>
</body>
</html>
```

---

<!-- contact.html -->
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact | LLM Journal Club</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <header>
    <nav>
      <a href="index.html">Home</a>
      <a href="sessions.html">Sessions</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <section id="contact">
      <h1>Contact Us</h1>
      <p>For inquiries or to join our mailing list, email: <a href="mailto:llmclub@sharif.edu">llmclub@sharif.edu</a></p>
      <p>Follow us on:</p>
      <div class="social-links">
        <a href="https://x.com/LLM_CLUB" target="_blank">Twitter</a>
        <a href="https://t.me/LLM_CLUB" target="_blank">Telegram</a>
      </div>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 LLM Journal Club</p>
  </footer>
</body>
</html>
```

---

<!-- assets/css/style.css -->
```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background: #f9f9f9;
  color: #333;
}
header {
  background: #00529b;
  padding: 1rem;
}
nav a {
  color: #fff;
  margin-right: 1rem;
  text-decoration: none;
}
main {
  padding: 2rem;
}
h1 {
  color: #00529b;
}
.social-links a {
  margin-right: 1rem;
  text-decoration: none;
  color: #00529b;
}
footer {
  text-align: center;
  padding: 1rem;
  background: #e1e1e1;
  position: fixed;
  width: 100%;
  bottom: 0;
}
```

---

<!-- README.md -->
```markdown
# LLM Journal Club Website

**Deployment on GitHub Pages**

1. Create a new repository named `llm-journal-club-site` under your GitHub account.
2. Clone it locally:
   ```bash
   git clone https://github.com/<YourUsername>/llm-journal-club-site.git
   cd llm-journal-club-site
   ```
3. Copy all the above files into this directory.
4. Commit & push:
   ```bash
   git add .
   git commit -m "Initial site scaffold"
   git push origin main
   ```
5. In GitHub, go to **Settings > Pages**, set **Source** to `main` branch and `/ (root)`, then save.
6. Your site will be live at: `https://<YourUsername>.github.io/llm-journal-club-site`

**Updating Sessions**
- Edit `sessions.html`, adding or removing `<li>` entries for each new session.

**Customization**
- Change colors, fonts in `assets/css/style.css`.
- Add new pages by creating additional `.html` files and linking them in the `<nav>`.
