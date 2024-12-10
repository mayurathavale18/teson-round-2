
# E-Commerce Cart Management

An elegant and interactive React-based shopping cart application that allows users to browse products, add them to the cart, and manage their purchases effortlessly. The project demonstrates robust state management, local storage integration, and responsive UI design.

## Features

- **Dynamic Product Catalog**: Browse through a collection of products with detailed descriptions and images.
- **Cart Management**: Add, update, or remove items from the cart with real-time price calculations.
- **Persistent Storage**: Cart items are saved in local storage for a seamless user experience across sessions.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **User Feedback**: Toast notifications provide real-time feedback for cart actions.
- **Navigation**: Intuitive navigation between product listing and cart views.

## Tech Stack

- **Frontend**: React.js, Vite, Tailwind CSS
- **State Management**: React Context API
- **UI Notifications**: React Toastify
- **Routing**: React Router

## Project Structure

```plaintext
teson-round-2
└─ react-shopping-cart
   ├─ public
   │  └─ vite.svg
   ├─ src
   │  ├─ assets
   │  │  └─ react.svg
   │  ├─ components
   │  │  ├─ Cart.jsx
   │  │  ├─ CartContext.jsx
   │  │  ├─ CartItem.jsx
   │  │  ├─ Navbar.jsx
   │  │  ├─ ProductCard.jsx
   │  │  └─ ProductList.jsx
   │  ├─ data
   │  │  └─ products.js
   │  ├─ pages
   │  │  ├─ CartPage.jsx
   │  │  └─ Home.jsx
   │  ├─ App.jsx
   │  ├─ main.jsx
   │  ├─ App.css
   │  └─ index.css
   ├─ tailwind.config.js
   ├─ vite.config.js
   ├─ package.json
   └─ README.md
```

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (>=16.0.0)
- npm (>=7.0.0)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-shopping-cart.git
   cd react-shopping-cart
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Deployment

The app is deployed on **Vercel** for frontend hosting. Update the `vercel.json` configuration file as needed before deployment.

Visit my deployed project : [React E-Commerce Cart Mangement](https://teson-round-2.vercel.app/)

## Key Components

1. **Cart**:
   - Displays items in the cart.
   - Allows quantity adjustments and item removal.
   - Calculates total price dynamically.

2. **CartContext**:
   - Manages global state for cart operations using React Context API.
   - Persists cart data in local storage.

3. **Navbar**:
   - Provides navigation and displays the cart item count with a badge.

4. **ProductCard**:
   - Displays individual product details with an "Add to Cart" button.

5. **ProductList**:
   - Renders a grid of all available products.

## Acknowledgments

- [React.js Documentation](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)



