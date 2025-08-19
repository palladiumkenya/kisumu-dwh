# Kisumu DWH Landing Page

This is the **Kisumu Data Warehouse (DWH) Landing Page**, built using **React + TypeScript + Vite**.
It provides a modern, responsive interface showcasing Kisumu County’s data products and insights.

---

## 🚀 Tech Stack

* **React 18** with **TypeScript**
* **Vite** for fast development and build
* **Tailwind CSS + ShadCN UI** for styling
* **Lucide Icons**
* **pnpm** as the package manager

---

## 📦 Installation & Setup

Make sure you have [pnpm](https://pnpm.io/installation) installed globally:

```bash
npm install -g pnpm
```

### 1. Clone the repository

```bash
git clone https://github.com/palladiumkenya/kisumu-dwh
cd kisumu-dwh
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run in development mode

```bash
pnpm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

### 4. Build for production

```bash
pnpm run build
```

### 5. Preview the production build

```bash
pnpm run preview
```

---

## 🐳 Running with Docker

Build and run using Docker:

```bash
docker build -t kisumu-dwh .
docker run -p 8080:80 kisumu-dwh
```

Visit: [http://localhost:8080](http://localhost:8080)

---

## 📂 Project Structure

```
src/
 ├── components/     # Reusable UI components
 ├── dwh/            # Kisumu DWH-specific sections (Hero, Welcome, Information Products, etc.)
 ├── assets/         # Static images and logos
 ├── App.tsx         # Main app entry
 └── main.tsx        # React root
```

---

## 🛠️ Linting & Formatting

The project includes ESLint with recommended TypeScript + React rules.
Run lint checks with:

```bash
pnpm run lint
```

---
