
#  STRUCTIFY ESTATE

Structify Estate is a modern, one-page real estate web application that allows users to browse, filter, view, and save houses — all powered by a RESTful API deployed on Render.

---

## Author

**Melanie Akinyi**

---

## 📍 Live Links

- 🔗 **Frontend** (GitHub Pages): [View Structify Estate](https://your-username.github.io/structify-estate)  
- 🌐 **Backend API** (Render): [JSON Server API](https://json-server-olgr.onrender.com/houses)

>  *The API might take a few seconds to load if it's been idle — Render needs to “wake it up.”*

---

## Project Description

Structify Estate was built as part of a challenge project. It demonstrates mastery of HTML, CSS, and JavaScript fundamentals, including DOM manipulation, working with APIs, and handling dynamic user interactions.

###  Core Features
- Browse a collection of homes
- Filter homes by type: `Apartment`, `Maisonette`, `Bungalow`, `Bedsitter`
- View detailed information for each house
- Save favourite houses and view them separately
- Smooth scroll to details, responsive layout
- Stylish animated hero section using CSS keyframes

---

##  Tech Stack

| Technology  | Purpose                      |
|-------------|------------------------------|
| HTML5       | Page structure               |
| CSS3        | Styling & layout             |
| JavaScript  | Interactivity + DOM logic    |
| JSON Server | Mock REST API (on Render)    |
| Git & GitHub| Version control & deployment |
| GitHub Pages| Live frontend hosting        |
| Render      | Hosted backend/API           |

---

##  How to Run Locally

> _(Only needed if you want to test locally instead of using the deployed links)_

1. Clone the repo:
```bash
git clone git@github.com:Melanielante/structify-estate.git
cd structify-estate
````

2. Install JSON Server globally (if not already):

```bash
npm install -g json-server@0.17.4
```

3. Start the JSON server:

```bash
json-server --watch db.json
```

4. Open `index.html` using VS Code Live Server or any browser.

---

##  Sample API Data (db.json)

```json
{
  "houses": [
    {
      "id": 1,
      "name": "Palm Grove Villa",
      "type": "Bungalow",
      "description": "A cozy 3-bedroom bungalow with lush gardens.",
      "image": "https://example.com/villa.jpg"
    },
    ...
  ]
}
```


---

##  Project Highlights

*  One HTML file (single-page app)
*  Uses deployed API with `fetch()` and JSON
*  Has 3+ event listeners (`DOMContentLoaded`, `click`, `change`)
*  Responsive UI and clean blue color scheme


---

##  License

MIT License
© 2025 Melanie Akinyi

