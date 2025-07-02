#  Dynamic Portfolio App – Lab 4 (React Router + Auth + Transitions)

This is a modern **React + Vite + Tailwind CSS** single-page application that demonstrates **dynamic routing**, **protected routes**, and **authentication** using `React Router v6` and `React Context`. It also includes **page transition animations** via `framer-motion`.

> Built for Lab 4: Dynamic Routing (React Router)

---

## Screenshot

![image](https://github.com/user-attachments/assets/54c36dcf-bd11-4800-93f5-80327158e407)


![image](https://github.com/user-attachments/assets/6556166e-e2c5-4baa-937e-b04f48dcb09e)


---

##  Features

- Dynamic route generation from project data (`/projects/:slug`)
- Protected route for admin page (`/admin`)
- Authentication using React Context (`login()` / `logout()`)
- Conditional rendering in navbar based on login state
- Page transitions using `framer-motion`
- Modern responsive UI with Tailwind CSS
-  Custom Footer and right-aligned navigation

---

##  Project Structure
``` src/
├── App.jsx
├── main.jsx
├── data/
│ └── projects.js
├── context/
│ └── AuthContext.jsx
├── components/
│ ├── Navbar.jsx
│ └── Footer.jsx
├── pages/
│ ├── ProjectsIndex.jsx
│ ├── ProjectDetail.jsx
│ ├── Login.jsx
│ ├── Admin.jsx
│ └── NotFound.jsx
├── routes/
│ └── ProtectedRoute.jsx

```

## Technologies Used

- React
- React Router v6
- Tailwind CSS
- Vite
- Framer Motion

## Clone the repository

```bash
git clone https://github.com/HaidaMarese/lab4-portfolio-router.git
cd lab4-portfolio-router
```

## Install dependencies
- npm install
- npm run dev






