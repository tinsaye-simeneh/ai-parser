AI Text Parser
A simple web application built with Next.js, Mantine, and Tailwind CSS to clean AI-generated text by removing hashtags (#, ##, ###, etc.) and double asterisks (\*\*). The app provides a user-friendly interface to paste text, process it, and view the cleaned output.
Features

Input textarea for pasting AI-generated text
Button to trigger text cleaning
Display of cleaned text with removed hashtags and double asterisks
Responsive design using Mantine components and Tailwind CSS
Proper handling of extra whitespace after cleaning

Tech Stack

Next.js: React framework for server-side rendering and static site generation
Mantine: UI component library for React
Tailwind CSS: Utility-first CSS framework for styling
TypeScript: For type-safe JavaScript development

Prerequisites

Node.js (v16 or higher)
npm (v7 or higher)

Installation

Clone the repository (if applicable) or create a new Next.js project:
npx create-next-app@latest ai-text-parser
cd ai-text-parser

Install dependencies:
npm install @mantine/core @mantine/hooks tailwindcss postcss autoprefixer

Initialize Tailwind CSS:
npx tailwindcss init -p

Configure Tailwind CSS:Replace the content of tailwind.config.js with:
/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: [
'./app/**/_.{js,ts,jsx,tsx}',
'./pages/\*\*/_.{js,ts,jsx,tsx}',
'./components/\*_/_.{js,ts,jsx,tsx}',
],
theme: {
extend: {},
},
plugins: [],
}

Update global styles:Replace the content of app/globals.css with:
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
@apply bg-gray-100;
}

Set up Mantine provider:Update app/layout.tsx to include the Mantine provider:
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './globals.css';

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body>
<MantineProvider>{children}</MantineProvider>
</body>
</html>
);
}

Add the main page:Replace app/page.tsx with the provided parser code (see project files).

Run the development server:
npm run dev

Open http://localhost:3000 in your browser to view the app.

Usage

Paste AI-generated text containing hashtags (#, ##, etc.) or double asterisks (\*\*) into the input textarea.
Click the "Clean Text" button.
View the cleaned text in the output area below, with hashtags and double asterisks removed and whitespace normalized.

Project Structure

app/page.tsx: Main page component with the text parser UI and cleaning logic
app/layout.tsx: Root layout with Mantine provider
app/globals.css: Global styles with Tailwind CSS setup
tailwind.config.js: Tailwind CSS configuration
postcss.config.js: PostCSS configuration for Tailwind

Potential Enhancements

Add real-time text cleaning as the user types
Support additional markdown symbol removal (e.g., \*, \_, etc.)
Implement copy-to-clipboard functionality for the cleaned text
Add file upload for batch text processing

Contributing
Feel free to submit issues or pull requests to enhance the functionality or fix bugs. Ensure code follows the existing style and includes appropriate tests.
License
This project is licensed under the MIT License.
