# Follow Diff

A privacy-first web application that allows you to see which Instagram users you follow who don't follow you back. This tool is designed with security in mind; all data processing happens directly in your browser. Your Instagram data is never uploaded to any server.

## Overview

Follow Diff provides a simple and secure way to analyze your Instagram follower relationships using your official data export. By processing your `followers.json` and `following.json` files directly in the browser, this tool ensures that your data remains completely private and never leaves your computer.

The core comparison logic is implemented efficiently using a Set, which provides a time complexity of O(n + m), a significant improvement over a less optimal O(n\*m) approach, ensuring a fast and responsive experience even with large datasets.

## Live Demo

You can try out the application here: [https://follow-diff.vercel.app/](https://follow-diff-theta.vercel.app/)

## How It Works

1.  **Request Your Data**: First, you'll need to request your data from Instagram. A tutorial on how to do this is available on the application's website.
2.  **Upload Your Files**: Once you have your `followers.json` and `following.json` files, you can drag and drop them into the application.
3.  **See the Difference**: The application will then process the files and display a list of users who do not follow you back.

## Key Features

* **Client-Side Processing**: All file processing and data analysis happen in the browser. No user data is ever sent to a server, guaranteeing privacy.

* **Efficient Comparison Algorithm**: Utilizes a JavaScript `Set` for fast and efficient comparison of follower and following lists.

* **Robust Type-Safety**: Employs TypeScript and Zod for schema validation to ensure the data from Instagram's export files is correctly parsed and handled, preventing runtime errors and improving maintainability.

* **Comprehensive Testing**: Includes a suite of tests using Jest and React Testing Library to ensure the reliability of core logic and UI components. The test suites achieve the following coverage:
    * **Statements**: 94.64%
    * **Branches**: 88.88%
    * **Functions**: 83.33%
    * **Lines**: 98.03%


## Setup

To run this project locally:

1.  Navigate to the project directory:
    ```bash
    cd follow-diff
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```

## Tech Stack

### Frontend

  * **React**
  * **Next.js**
  * **TypeScript**
  * **TailwindCSS**
  * **Zod** (for schema validation)
  * **React-Dropzone** (for file uploads)
  * **Jest & React Testing Library** (for testing)
  * **Vercel** (for deployment)

### Backend

This project is a pure frontend application and does not have a backend.
