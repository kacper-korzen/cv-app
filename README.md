# CV Application

A React-based CV/résumé generator web application built using **React (Vite)**, **HTML**, and **CSS** — developed as part of The Odin Project's React curriculum.

## 🧩 Description

CV Application allows users to input personal details, educational background, and practical experience to dynamically generate a professional résumé.  
The app uses **React components**, **state management**, and **conditional rendering** for edit/submit functionality across sections.

General info includes name, email, and phone; education covers school, title, and dates; experience details company, position, responsibilities, and work period.

---

## ✨ Features

- 🧱 **React Components** – structured into sections for general info, education, and practical experience (`src/components`).
- 📝 **Form Sections** – input fields for personal details, education (school, study title, dates), and experience (company, position, responsibilities, dates).
- ✨ **Live Preview Mode** – tryb podglądu, który blokuje edycję (użycie atrybutu inert), aby zobaczyć czysty dokument.

- 📄 **PDF Export** – możliwość zapisu CV do pliku PDF przy użyciu systemowego okna drukowania i dedykowanych stylów @media print.
- ✏️ **Edit/Submit Toggle** – buttons to switch between input forms and displayed CV content, pre-filling values on edit.
- 💾 **State & Props** – manages form data and rendering across components.
- 🎨 **Custom Styling** – CSS files in `src/styles`.
- ⚙️ **No Backend** – client-side React app for learning core concepts.
- 🚀 **Built with [Vite](https://vitejs.dev/)** – fast development server and builds.

---

## Demo

[**Live Demo**](YOUR_DEPLOYED_URL) | [**Project Specs**](https://www.theodinproject.com/lessons/node-path-react-new-cv-application)

## Demo Video
[Podgląd aplikacji](https://github.com/user-attachments/assets/a9cf9e2b-0ac8-4df0-8003-99695fbf9f2a)

## Getting Started

To run this project locally:

1. Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/cv-application.git
cd cv-application
npm install
npm run dev
```

2. Open `http://localhost:5173` in your browser.

## Deployment

Deploy to **Netlify**, **Vercel**, or **Cloudflare Pages** by connecting your GitHub repo (build command: `npm run build`, output: `dist`).

---

Built for The Odin Project React curriculum.
