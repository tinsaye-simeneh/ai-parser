# AI Parser

A web application with two tools built using Next.js, Mantine, and Tailwind CSS:

1. **AI Text Parser**: Cleans AI-generated text by removing hashtags (#, ##, ###, etc.) and double asterisks (\*\*).
2. **Code Comment Remover**: Removes comments from code in various programming languages, with options to select comment types or specify exceptions.

The app features a responsive UI with a navbar for navigation, autosize textareas, and copy/reset functionality.

## Features

### AI Text Parser

- Input for pasting AI-generated text
- Removes hashtags and double asterisks
- Side-by-side input/output layout
- Reset button to clear input/output
- Copy button for cleaned text
- Preserves newlines and normalizes whitespace

### Code Comment Remover

- Input for pasting code
- Removes single-line (//, #, --, ;, %), multi-line (/\* \*/), and XML/HTML (<!-- -->) comments
- Multiselect to choose comment types or remove all (default)
- Optional regex pattern to preserve specific comments (e.g., TODO, @author)
- Side-by-side input/output layout
- Reset button to clear input/output
- Copy button for cleaned code
- Preserves code structure and newlines

## Tech Stack

- **Next.js**: React framework for server-side rendering and routing
- **Mantine**: UI component library for React
- **Tailwind CSS**: Utility-first CSS framework for styling
- **TypeScript**: For type-safe JavaScript development
- **Tabler Icons**: Icon library for React

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Installation

1. **Clone the repository** (if applicable) or create a new Next.js project:

   ```bash
   npx create-next-app@latest ai-parser
   cd ai-parser
   ```

2. **Install dependencies**:

   ```bash
   npm install @mantine/core @mantine/hooks @tabler/icons-react tailwindcss postcss autoprefixer
   ```

3. **Initialize Tailwind CSS**:

   ```bash
   npx tailwindcss init -p
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) for the AI Text Parser or [http://localhost:3000/comment-remover](http://localhost:3000/comment-remover) for the Code Comment Remover.

## Usage

### AI Text Parser

1. Navigate to the root URL (`/`) using the navbar.
2. Paste AI-generated text with hashtags or double asterisks into the textarea.
3. Click "Clean Text" to remove hashtags and double asterisks.
4. View the cleaned text in the right-hand output area.
5. Use the "Copy" button to copy the cleaned text or "Reset" to clear all fields.

### Code Comment Remover

1. Navigate to `/comment-remover` using the navbar.
2. Paste code with comments into the textarea.
3. Select comment types to remove (e.g., "All Comments," "Single-line," "Multi-line," "XML/HTML") via the multiselect.
4. Optionally enter a regex pattern (e.g., `TODO|@author`) to preserve specific comments.
5. Click "Remove Comments" to process the code.
6. View the cleaned code in the right-hand output area.
7. Use the "Copy" button to copy the cleaned code or "Reset" to clear all fields.

## Project Structure

- `app/page.tsx`: AI Text Parser page with text cleaning logic
- `app/comment-remover/page.tsx`: Code Comment Remover page with comment removal logic
- `app/layout.tsx`: Root layout with Mantine provider and navbar
- `app/globals.css`: Global styles with Tailwind CSS setup
- `tailwind.config.js`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS configuration for Tailwind

## Potential Enhancements

- Add real-time text cleaning for both tools
- Support more comment types (e.g., Lua, MATLAB)
- Enhance exception handling for comment remover with predefined patterns
- Implement file upload for batch processing
- Add mobile-friendly collapsible navbar
- Highlight active navbar link with distinct styling

## Contributing

Submit issues or pull requests to enhance functionality or fix bugs. Ensure code follows the existing style and includes tests.

## License

This project is licensed under the MIT License.
