# Employee Task List

This is a React + Vite project with separate dashboards for Admin and Employee. The Admin can create tasks and assign them to employees, while Employees can view their assigned tasks.

## Features

- **Login System:** Both Admin and Employee can log in.
- **Role-Based Dashboard:** After login, the dashboard is shown according to the user's role.
- **Admin:** Can create tasks and manage all employees.
- **Employee:** Can view tasks assigned to them.
- **Tailwind CSS:** Modern UI built with Tailwind CSS.
- **LocalStorage:** Login state and tasks are saved in localStorage, so data persists after refresh.
- **Deploy:** The project can be deployed to GitHub Pages.

## Project Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/mandarlad1987/EmpTaskList.git
   cd EmpTaskList
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. **Build for production:**
   ```sh
   npm run build
   ```

5. **Deploy to GitHub Pages:**
   ```sh
   npm run deploy
   ```

## Folder Structure

- `src/component/` — All React components (Login, AdminDashboard, EmployeDashboard, etc.)
- `src/context/` — AuthContext (login, logout, user info, task list)
- `src/localStorage/` — LocalStorage helper functions
- `src/UI/` — UI components (TaskList, CreateTask, etc.)

## Important Scripts

- `npm run dev` — Start local development server
- `npm run build` — Build for production (`dist` folder)
- `npm run deploy` — Deploy to GitHub Pages

## Demo

[Live Demo](https://mandarlad1987.github.io/EmpTaskList)

---

**Note:**  
You can update user details and tasks as needed.  
If you face any issues, try clearing your browser's localStorage and log in again.

---
