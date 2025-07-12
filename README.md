# ProductApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.0.

# 🌐 Angular Live API Project – Product CRUD  + Weather App

This is a **frontend-only Angular project** using live public APIs.  
It includes two modules:

1. 🛍️ **Product CRUD App** – powered by [FakeStoreAPI](https://fakestoreapi.com)
2. 🌦️ **Weather App** – powered by [Wttr.in](https://wttr.in)

---

## 📦 Tech Stack

- Angular 20
- HTML + CSS
- TypeScript
- RxJS
- Angular Routing
- Live Public REST APIs
- Angular CLI

---

## 🔸 Part A – Product CRUD App

### 🌐 API Used:
https://fakestoreapi.com/products


### ✅ Features:
- ✅ View all products (GET)
- 🚫 Add product (POST)
- 🚫 Edit product (PUT)
- 🚫 Delete product (DELETE)

> ⚠️ **Note:** FakeStoreAPI is a mock API.  
> Only `GET` requests work fully.  
> `POST`, `PUT`, and `DELETE` are implemented correctly in code but **do not persist changes**.

### 📁 Component:
| Name              | Purpose                             |
|-------------------|-------------------------------------|
| `product-crud`    | Handles displaying & form for CRUD  |

### 📂 Service:
| File                  | Description                            |
|------------------------|----------------------------------------|
| `product.service.ts`   | Calls FakeStoreAPI for CRUD actions    |

---

## 🔸 Part B – Weather App

### ✅ Features:
- Input city name
- Fetch weather info:
  - Temperature
  - Weather description
  - Humidity
  - Feels-like temperature
- Loading indicator
- Error handling

### 📁 Component:
| Name          | Purpose                        |
|---------------|--------------------------------|
| `dashboard`   | Search input and display result |

### 📂 Service:
| File                  | Description                       |
|------------------------|-----------------------------------|
| `weather.service.ts`   | Calls Wttr.in API using HttpClient |

---

## 📁 Folder Structure


---

## ⚙️ How to Setup and Run

Follow these steps to run the app locally:

### ✅ Prerequisites:
- Node.js and npm installed
- Angular CLI installed (`npm install -g @angular/cli`)

### 🔧 Setup

```bash
# Step 1: Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Step 2: Navigate into project
cd YOUR_REPO_NAME

# Step 3: Install dependencies
npm install

# Start Angular app
ng serve -o

http://localhost:4200

