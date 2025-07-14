# 📑 ABC Company Website & CMS

Pixel‑perfect, **responsive** landing page whose main heading text is managed by your own CMS.

---

## 🛠 Tech Stack

| Layer      | Tech                                   |
|------------|----------------------------------------|
| Front‑end  | **React**, CoreUI                      |
| Back‑end   | **Spring Boot 3**                      |
| Database   | **MySQL** (cloud instance on Railway)  |
| Demo Host  | Netlify (FE) · Railway (BE)            |

---

## 🚀 Quick Start

### 1. Clone & Install

``` bash
git clone https://github.com/your‑org/abc‑site.git
    cd abc‑site
# Front‑end
    cd client && npm install

# Back‑end
    cd ../server && ./mvnw clean install
```
# 2. Configure DB (Railway)

Create or edit /server/src/main/resources/application.properties:

    spring.datasource.url=jdbc:mysql://interchange.proxy.rlwy.net:51145/railway?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC
    spring.datasource.username=root
    spring.datasource.password=wvagmyUJhTpVRNtpGiNlhWIHJapbdBYq

    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

``
#  3 · Run Locally

### API
    cd server && ./mvnw spring-boot:run

### UI (new terminal)
    cd ../client && npm run dev


# 🔗 Links

    Service	URL
    UI (Netlify)	https://abc-company-das.netlify.app
    API – live (Railway)	https://abc-company-production.up.railway.app/heading
    API – local	http://localhost:8080/heading


### 🗂 Project Structure

    abc‑company-website/
    ├─ client/                # React UI
    │  └─ src/
    │     ├─ components/
    │     ├─ pages/
    │     └─ App.jsx
    └─ server/                # Spring Boot backend
       ├─ src/main/java/com/abc_company/…
       ├─ src/main/resources/
       └─ AbcCompanyApplication.java


### 🌐 Deployment

# Front‑end → Netlify
    cd client
    npm run build

# Back‑end → Railway
    cd ../server
    ./mvnw package     # Railway auto‑detects & deploys JAR from GitHub


### ✅ Done Checklist

     Pixel‑perfect landing (Figma)
    
     Single dynamic heading via CMS
    
     Responsive ≥ 320 px
    
     Secure GET / POST APIs with validation
    
     Clean, commented code & README docs


### 📸 Screenshots/Video Recording

[Video Recording](https://drive.google.com/file/d/15XdW5cEmFGn0qbzVnh-Q6HqDHv07deU4/view?usp=sharing)
