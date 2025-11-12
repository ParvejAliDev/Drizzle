# 🌊 Drizzel

<div align="center">

**A modern TypeScript-based Node.js application using Drizzle ORM with PostgreSQL for efficient user and project management.**

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15%2B-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-FF6B35?style=for-the-badge&logo=drizzle&logoColor=white)](https://orm.drizzle.team/)

[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![TypeScript](https://img.shields.io/badge/Type-Safe-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</div>

---

## 👤 Author

<div align="center">

**Parvej Ali**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/ParvejAliDev)

### 🌟 Star this repo if you find it helpful

</div>

---

## 📑 Table of Contents

- [🌊 Drizzel](#-drizzel)
  - [👤 Author](#-author)
    - [🌟 Star this repo if you find it helpful](#-star-this-repo-if-you-find-it-helpful)
  - [📑 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [📋 Prerequisites](#-prerequisites)
  - [🚀 Getting Started](#-getting-started)
    - [Installation](#installation)
      - [1️⃣ Clone the repository](#1️⃣-clone-the-repository)
      - [2️⃣ Install dependencies](#2️⃣-install-dependencies)
      - [3️⃣ Set up environment variables](#3️⃣-set-up-environment-variables)
      - [4️⃣ Start the PostgreSQL database](#4️⃣-start-the-postgresql-database)
      - [5️⃣ Run database migrations](#5️⃣-run-database-migrations)
  - [💻 Usage](#-usage)
    - [🚀 Development](#-development)
    - [🗄️ Database Operations](#️-database-operations)
      - [Generate Migration](#generate-migration)
      - [Run Migrations](#run-migrations)
      - [Drizzle Studio](#drizzle-studio)
    - [🎨 Code Formatting](#-code-formatting)
      - [Format Code](#format-code)
      - [Check Formatting](#check-formatting)
  - [📊 Database Schema](#-database-schema)
    - [👥 Users Table](#-users-table)
    - [📁 Projects Table](#-projects-table)
  - [📜 Available Scripts](#-available-scripts)
  - [🐳 Docker Database Setup](#-docker-database-setup)
    - [🚀 Start Database](#-start-database)
    - [🛑 Stop Database](#-stop-database)
  - [📄 License](#-license)

---

## ✨ Features

<div align="center">

| Feature | Description |
|:-------:|:------------|
| 🔐 **User Management** | Complete CRUD operations for user management |
| 📁 **Project Management** | Complete CRUD operations for project management |
| 🗄️ **PostgreSQL Database** | Robust relational database with Drizzle ORM |
| 🐳 **Docker Support** | Easy database deployment with Docker Compose |
| 📘 **TypeScript** | Full type safety with strict type checking |
| 🔄 **Migrations** | Seamless database schema versioning and migrations |
| 🎨 **Drizzle Studio** | Beautiful database visualization and management tool |

</div>

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technology | Badge |
|:--------:|:----------:|:-----:|
| **Runtime** | Node.js with TypeScript | ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) |
| **ORM** | Drizzle ORM | ![Drizzle](https://img.shields.io/badge/Drizzle-ORM-FF6B35?logo=drizzle&logoColor=white) |
| **Database** | PostgreSQL | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white) |
| **Package Manager** | npm / pnpm | ![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white) |

</div>

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

<div align="center">

| Requirement | Version | Download |
|:-----------:|:-------:|:--------:|
| **Node.js** | v18 or higher | [Download](https://nodejs.org/) |
| **Docker** | Latest | [Download](https://www.docker.com/) |
| **Docker Compose** | Latest | [Included with Docker](https://docs.docker.com/compose/) |
| **Package Manager** | npm or pnpm | [npm](https://www.npmjs.com/) / [pnpm](https://pnpm.io/) |

</div>

---

## 🚀 Getting Started

### Installation

<details>
<summary><b>📦 Step-by-step installation guide</b></summary>

#### 1️⃣ Clone the repository

```bash
git clone git@github.com:ParvejAliDev/Drizzle.git
cd Drizzle
```

#### 2️⃣ Install dependencies

```bash
npm install
# or
pnpm install
```

#### 3️⃣ Set up environment variables

Copy `.env.example` to `.env` and update the values if needed:

#### 4️⃣ Start the PostgreSQL database

```bash
docker-compose up -d
```

#### 5️⃣ Run database migrations

```bash
npm run db:migrate
```

</details>

---

## 💻 Usage

### 🚀 Development

Start the development server with hot reload:

```bash
npm run dev
```

> 💡 **Tip**: The development server automatically reloads when you make changes to your code.

### 🗄️ Database Operations

#### Generate Migration

Create a new database migration:

```bash
npm run db:generate <migration-name>
```

**Example:**

```bash
npm run db:generate add_user_avatar
```

#### Run Migrations

Apply pending migrations to the database:

```bash
npm run db:migrate
```

#### Drizzle Studio

Open Drizzle Studio for database visualization and management:

```bash
npm run db:studio
```

> 🎨 **Note**: Drizzle Studio provides a beautiful GUI to browse and edit your database.

### 🎨 Code Formatting

#### Format Code

Automatically format code using Prettier:

```bash
npm run format
```

#### Check Formatting

Verify code formatting without making changes:

```bash
npm run format:check
```

---

## 📊 Database Schema

### 👥 Users Table

<div align="center">

| Column | Type | Constraints | Description |
|:------:|:----:|:-----------:|:------------|
| `id` | `UUID` | 🔑 Primary Key | Unique identifier |
| `name` | `VARCHAR` | ⚠️ Not Null | User's full name |
| `email` | `VARCHAR` | 🔒 Unique, Not Null | User's email address |
| `password` | `VARCHAR` | ⚠️ Not Null | Hashed password |

</div>

### 📁 Projects Table

<div align="center">

| Column | Type | Constraints | Description |
|:------:|:----:|:-----------:|:------------|
| `id` | `UUID` | 🔑 Primary Key | Unique identifier |
| `name` | `VARCHAR` | ⚠️ Not Null | Project name |
| `description` | `VARCHAR` | ✅ Nullable | Project description |
| `userId` | `UUID` | 🔗 Foreign Key → users.id | Owner user reference |

</div>

> **ℹ️ Note**: Projects are linked to users via foreign key relationship. Deleting a user will cascade delete their projects.

---

## 📜 Available Scripts

<div align="center">

| Command | Description | Icon |
|:-------:|:------------|:----:|
| `npm run dev` | Start development server with hot reload | 🚀 |
| `npm run db:generate` | Generate a new database migration | 📝 |
| `npm run db:migrate` | Run database migrations | 🔄 |
| `npm run db:studio` | Open Drizzle Studio GUI | 🎨 |
| `npm run format` | Format code with Prettier | ✨ |
| `npm run format:check` | Check code formatting | ✔️ |

</div>

---

## 🐳 Docker Database Setup

The project includes a Docker Compose configuration for easy PostgreSQL deployment.

### 🚀 Start Database

```bash
docker-compose up -d
```

### 🛑 Stop Database

```bash
docker-compose down
```

---

## 📄 License

<div align="center">

This project is licensed under the **ISC License**.

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

</div>

---

<div align="center">

**Made with ❤️ using TypeScript and Drizzle ORM**

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-FF6B35?style=flat&logo=drizzle&logoColor=white)](https://orm.drizzle.team/)

</div>
