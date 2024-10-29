# PROMPTHUB - Admin Panel

## 📋 Table of Contents

- [✨ Introduction](#-introduction)
- [🚀 Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📥 Installation](#-installation)
- [⚙️ Configuration](#️-configuration)
- [📜 License](#-license)

## ✨ Introduction

**PROMPTHUB** Admin Panel For Prompt hub [PromptHub Repo](https://github.com/sithijakavee/PromptHub) 🌟

## 🚀 Features

- 🏪 **Prompt Marketplace**: Buy and sell unique AI prompts with ease.
- 🔒 **Secure Authentication**: Clerk-powered secure user login.
- 🌐 **Media Hosting**: Prompt images managed with [Cloudinary](https://cloudinary.com) for fast, reliable delivery.
- 📱 **Responsive Design**: A seamless experience across all devices.
- 💸 **Secure Payments**: Process transactions with confidence using [Stripe](https://stripe.com).
- 🖼 **User Profiles**: Showcase your prompts and track purchase history.
- 🔍 **Search & Filter**: Easily locate prompts by style, tags, and popularity.

## 🛠 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for responsive, fast design
- **Authentication**: [Clerk](https://clerk.dev)
- **Payments**: [Stripe](https://stripe.com) for secure transaction processing
- **State Management**: Context API and custom hooks as needed

## 📥 Installation

To set up locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sithijakavee/PromptHub.git
   cd prompthub
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**: Add your Clerk Public Key, MongoDB Url in `.env.local`.

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Access it at `http://localhost:3000`.

## ⚙️ Configuration

Set up your environment variables in `.env.local`:

```plaintext
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=clerk_publishable_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL=your_database_uri

```


## 📜 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

---

