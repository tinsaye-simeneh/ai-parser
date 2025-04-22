# AI Text Parser

A simple web application built with Next.js, Mantine, and Tailwind CSS to clean AI-generated text by removing hashtags (#, ##, ###, etc.) and double asterisks (\*\*). The app provides a user-friendly interface to paste text, process it, and view the cleaned output.

## Features

- Input textarea for pasting AI-generated text
- Button to trigger text cleaning
- Display of cleaned text with removed hashtags and double asterisks
- Responsive design using Mantine components and Tailwind CSS
- Proper handling of extra whitespace after cleaning

## Tech Stack

- **Next.js**: React framework for server-side rendering and static site generation
- **Mantine**: UI component library for React
- **Tailwind CSS**: Utility-first CSS framework for styling
- **TypeScript**: For type-safe JavaScript development

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Installation

1. **Clone the repository** (if applicable) or create a new Next.js project:

   ```bash
   npx create-next-app@latest ai-text-parser
   cd ai-text-parser
   ```

2. **Install dependencies**:

   ```bash
   npm install @mantine/core @mantine/hooks tailwindcss postcss autoprefixer
   ```

3. **Initialize Tailwind CSS**:

   ```bash
   npx tailwindcss init -p
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

1. Paste AI-generated text containing hashtags (#, ##, etc.) or double asterisks (\*\*) into the input textarea.
2. Click the "Clean Text" button.
3. View the cleaned text in the output area below, with hashtags and double asterisks removed and whitespace normalized.

## Potential Enhancements

- Add real-time text cleaning as the user types
- Support additional markdown symbol removal (e.g., \*, \_, etc.)
- Implement copy-to-clipboard functionality for the cleaned text
- Add file upload for batch text processing

## Contributing

Feel free to submit issues or pull requests to enhance the functionality or fix bugs. Ensure code follows the existing style and includes appropriate tests.

## License

This project is licensed under the MIT License.
