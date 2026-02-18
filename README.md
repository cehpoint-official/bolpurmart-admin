# Pakur Mart Admin Panel 🚀

[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A premium, high-performance administrative dashboard designed for **Pakur Mart** (formerly Bolpur Mart). This application manages the entire ecosystem including products, multi-vendor operations, order lifecycles, and delivery logistics.

---

## 🛠 Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend Framework** | React 18 (TypeScript) |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS + Shadcn/UI + Lucide Icons |
| **State Management** | React Query + React Context API |
| **Backend Services** | Firebase (Auth, Firestore, Cloud Messaging) |
| **Animations** | Framer Motion + Tailwind Animate |
| **Data Handling** | Zod + React Hook Form |

---

## 🏗 System Architecture

```mermaid
graph TD
    A[Admin User] -->|HTTPS| B[React Frontend]
    B -->|State Management| C[React Query / Context]
    B -->|Real-time| D[Firebase Service Layer]
    
    subgraph "Firebase Backend"
        D --> E[Authentication]
        D --> F[Firestore Database]
        D --> G[Cloud Messaging - Notifications]
    end
    
    F --> H[(Products)]
    F --> I[(Orders)]
    F --> J[(Vendors)]
    F --> K[(Users/Roles)]
```

---

## 🔄 Order Lifecycle Workflow

```mermaid
stateDiagram-v2
    [*] --> Placed: User places order
    Placed --> Confirmed: Admin verifies payment
    Confirmed --> Preparing: Vendor notified
    Preparing --> OutForDelivery: Partner assigned
    OutForDelivery --> Delivered: Customer receives
    Placed --> Cancelled: Payment failure/User cancel
    Confirmed --> Cancelled: Stock issue
```

---

## 📂 Project Structure

```text
bolpurmart-admin/
├── client/                 # Frontend Application
│   ├── src/
│   │   ├── components/     # UI & Feature Components
│   │   ├── services/       # Firebase Logic (Orders, Auth, Deliveries)
│   │   ├── contexts/       # Global State (Auth, Theme)
│   │   ├── hooks/          # Custom Hooks (Toasts, Auth)
│   │   ├── types/          # TypeScript Interfaces
│   │   └── pages/          # Top-level Views (AdminPanel, Login)
│   └── public/             # Static Assets & Service Workers
├── firebase.json           # Firebase Hosting/Rules Config
├── tailwind.config.ts      # Styling System
└── package.json            # Scripts & Dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Local Setup

1. **Clone and Install**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   Create a `.env` file in the `client/` directory based on `.env.example`:
   ```env
   VITE_FIREBASE_API_KEY=your_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

### Deployment
The project is configured for **Firebase Hosting**.
```bash
npm run build
firebase deploy
```

---

## 🛡 Security & Rules
- **Authentication**: Firebase Auth with role-based access (Admin/Sub-admin).
- **Firestore Rules**: Restricted access based on admin roles defined in `firebase.rules`.

---

## ✨ Key Features
- **Real-time Metrics**: Live dashboard with revenue and order growth analytics.
- **Inventory Control**: Comprehensive product and category management.
- **Vendor Dashboard**: Dedicated section for managing partner vendors.
- **Logistics**: Integrated delivery partner tracking and assignment.
- **Automated Notifications**: FCM-powered alerts for new transactions.

---
*Generated for Pakur Mart*
