# 📑 ABC Company Website & CMS

Build a pixel‑perfect, **responsive** landing page that pulls its main heading from a CMS you host yourself.

---

## 🛠 Tech Stack
| Layer        | Tech                       |
|--------------|----------------------------|
| Front‑end    | **React**, **CoreUi**      |
| Back‑end     | **Spring Boot 3**          |
| Database     | **MySQL** (any SQL OK)     |
| Deploy demo  | Netlify (FE) · Render (BE) |

---

---

## 🚀 Quick Start

1. **Clone & install**

   ```bash
   git clone https://github.com/your‑org/abc‑site.git
   cd abc‑site
   npm install          # front‑end
   cd server && ./mvnw clean install

2. **Configure DB – create /server/.env**

   ```bash

   SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/abc_cms
   SPRING_DATASOURCE_USERNAME=abc_user
   SPRING_DATASOURCE_PASSWORD=secret

   ```

2. **Run Locally**

   ```bash
   # API
   cd server && ./mvnw spring-boot:run
   # UI
   cd ../client && npm run dev

## 🔗 Links
[![Link](https://img.shields.io/badge/UI_link-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://abc-company-das.netlify.app)
[UI] : (https://abc-company-das.netlify.app)

[![Link](https://img.shields.io/badge/API_link-000?style=for-the-badge&logo=&logoColor=white)](https://abc-company-das.render.com/api/v1/heading)

[API] : (http://localhost:8080/api/v1/heading)
or

[API] : (https://abc-company-das.render.com/api/v1/heading)


## 🗂 Project Structure
   ```bash
abc‑company-website/
     ├─ client/          # React UI
     │   └─ src/
     │   ├─ components/
     │   ├─ pages/
     │   └─ App.jsx
     └─ server/          # Spring Boot
         ├─ src/main/java/com/abc/…
         ├─ src/main/resources/
         └─ Application.java

```

## 🌐 Deployment 
``` bash
# Front (build → Netlify/Vercel)
cd client && npm run build

# Back (JAR → Render/Fly.io/AWS)
cd ../server && ./mvnw package

```

## ✅ Done‑Checklist
    Pixel‑perfect landing (Figma)

    Single dynamic heading via CMS

    Responsive @ ≥ 320 px

    GET / POST APIs with validation

    Clean, commented code + docs


## 📸 ScreenShots
