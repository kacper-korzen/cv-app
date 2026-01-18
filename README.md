# CV Application

A React-based CV / résumé generator built with React (Vite), HTML, and CSS.
The project was developed as part of The Odin Project React curriculum, with additional focus on clean UI, component architecture, and real-world usability.

## 🧩 Description

CV Application allows users to input personal details, educational background, and professional experience to dynamically generate a clean, print-ready résumé.

The app is built using React components, state management, and conditional rendering to support edit and preview modes across all sections.
Users can freely switch between editing their data and viewing the final CV layout.

---

## ✨ Features

- 🧱 Component-Based Architecture

  Structured React components for general information, education, and practical experience.

- 📝 Form Sections
  -Separate inputs for:
  - personal details (name, email, phone)

  - education (school, degree, dates)

  - experience (company, position, responsibilities, dates)

- 👀 Live Preview Mode

  Toggle between edit and preview modes using conditional rendering and the inert attribute to disable inputs for a clean CV view.

- ✏️ Edit / Submit Toggle

  Seamless switching between forms and displayed CV content with preserved state.

- 📄 Print-Ready PDF Export

  Dedicated @media print styles allow exporting the résumé as a professional PDF.

- 🎨 Responsive Styling

  Layout built with CSS Grid and Flexbox, optimized for both screen and print.

- ⚙️ Client-Side Only

  No backend, fully focused on mastering React fundamentals.

- 🚀 Built with Vite

  Fast development server and optimized production builds.

---

## 🧠 What I Learned

- Building reusable and maintainable React components

- Managing shared state across multiple form sections

- Implementing conditional rendering for edit and preview workflows

- Improving UX by separating data input from presentation

- Creating print-friendly layouts using CSS @media print

- Structuring a scalable React project

---

## 🚀 Extra Improvements Beyond the Curriculum

- Implemented print-optimized CV layout for PDF export

- Used the inert attribute to lock inputs in preview mode

- Focused on UX with clear edit / submit interaction flow

- Applied responsive layout techniques for better readability

## 🔗Demo

[**Live Demo**](rootresume.netlify.app) | [**Project Specs**](https://www.theodinproject.com/lessons/node-path-react-new-cv-application)

## 🎥Demo Video

[Podgląd aplikacji](https://github.com/user-attachments/assets/a9cf9e2b-0ac8-4df0-8003-99695fbf9f2a)

## 🛠️Getting Started

To run this project locally:

1. Clone the repository:

```
git clone https://github.com/kacper-korzen/cv-application.git
cd cv-application
npm install
npm run dev
```

2. Open `http://localhost:5173` in your browser.

## 🌍Deployment

Deploy to **Netlify**, **Vercel**, or **Cloudflare Pages** by connecting your GitHub repo (build command: `npm run build`, output: `dist`).

---

Built for The Odin Project React curriculum.
