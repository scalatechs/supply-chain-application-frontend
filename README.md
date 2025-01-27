# Scala Dashboard

A feature-rich and responsive dashboard application built using Vite and React.js. This application allows users to manage their inventory, sales, and orders. It is designed with performance and scalability in mind, making it a robust solution for task management.

---

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [Technology Choices and Rationale](#technology-choices-and-rationale)
- [Known Limitations/Trade-offs](#known-limitationstrade-offs)
- [Future Improvements](#future-improvements)

---

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/project-name.git
   cd project-name
   ```

2. **Install Dependencies:**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:5173` in your browser to view the application.

4. **Build for Production:**
   To create an optimized build, run:
   ```bash
   npm run build
   ```
   The output will be in the `dist` folder.

5. **Preview the Production Build:**
   ```bash
   npm run preview
   ```

---

## Technology Choices and Rationale

### **Vite:**
- Chosen for its fast build times and efficient development environment.
- Supports modern JavaScript and ensures optimized production builds.

### **React.js:**
- Provides a component-based structure, making it easier to manage state and UI updates.
- Well-suited for building interactive user interfaces like a Kanban board.

### **TailwindCSS:**
- Ensures scoped and maintainable styling.
- Provides rapid UI development with pre-defined classes.

### **Shadcn UI:**
- Provides a set of pre-built components for consistent styling.
- Ensures consistent styling across the application.

### **React Context API:**
- Provides a way to share data betweetn components without having o pass props down manually.
- Ensures that the data is shared between components efficiently.

### **Lucide React Icons:**
- Provides a set of pre-built icons for consistent styling.
- Ensures that the icons are consistent across the application.

---