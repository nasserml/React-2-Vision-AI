# 🖼️ React-2-Vision-AI Images To Code 🚀

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)


**Turn Wireframes into Code Magically with AI!** 🚀

Imagine ✨: You sketch a design, upload it, and poof! 🪄 React code appears ready to power your next web application!  React 2 Vision AI is your new best friend for rapid prototyping and frontend development.  Say goodbye 👋 to tedious manual coding from wireframes and hello 👋 to AI-powered efficiency!

## 💖 Support & Donations

If you find this project helpful and would like to support its development, you can make a donation:

- **PayPal**: [mnasserone@gmail.com](mailto:mnasserone@gmail.com)

Your support is greatly appreciated and helps us continue to improve and maintain the project.

## 🌟 Awesome Features

*   **🖼️ Wireframe to Code Conversion:** Effortlessly convert your wireframe images into clean, functional React code.
*   **🎨 Tailwind CSS Styling:**  Generated code is beautifully styled with Tailwind CSS, making it modern and responsive.
*   **🤖 AI Model Selection:** Choose from various cutting-edge AI models (like Gemini Google, Llama by Meta, DeepSeek) to power your code generation.
*   **☁️ Firebase Integration:** Secure user authentication and image storage powered by Firebase.
*   **💰 Credit System:** Manage your AI usage with a simple credit system.
*   **💾 Design History:** Keep track of all your wireframe-to-code conversions in your personal design library.
*   **📝 Code Editor Integration:**  View and tweak your generated code directly within the app using a Sandpack code editor.
*   **⚡️ Fast & Efficient:** Get your React code in seconds, boosting your development workflow.
*   **📱 Responsive Design:** Code output is designed to be responsive across devices.

## 🛠️ Tech Stack

Built with ❤️ and powered by the latest technologies:

*   **Frontend:**
    *   [<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge"/>](https://reactjs.org/) - For building a dynamic and interactive user interface.
    *   [<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js Badge"/>](https://nextjs.org/) -  For a production-ready, performant web application.
    *   [<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS Badge"/>](https://tailwindcss.com/) - For rapid and beautiful styling.
    *   [TypeScript](https://www.typescriptlang.org/) - For type safety and maintainability.
*   **Backend & AI:**
    *   **AI Models:** Powered by awesome models like Gemini, Llama, and DeepSeek via [OpenRouter](https://openrouter.ai/). 🧠
    *   [<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase Badge"/>](https://firebase.google.com/) - For authentication, storage, and more.
    *   [NeonDB](https://neon.tech/) - For a scalable and serverless PostgreSQL database. 🐘
*   **UI Components:**
    *   [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed and reusable UI components.


## 🚀 Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/nasserml/React-2-Vision-AI.git
    cd React-2-Vision-AI-main
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Set up environment variables:**

    Create a `.env` file based on the provided `.env.example` and fill in your Firebase and Neon DB credentials.

    ```
    NEXT_PUBLIC_FIREBASE_API_KEY=
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
    NEXT_PUBLIC_FIREBASE_APP_ID=
    NEXT_PUBLIC_FIREBASE_MESURMENT_ID=
    NEXT_PUBLIC_NEON_DB_CONNECTION_STRING=
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```



**🔑 Where to get these keys?**

*   **Firebase:**  [Firebase Console](https://console.firebase.google.com/) - Create a new project and find your project settings.
*   **NeonDB:** [Neon Console](https://console.neon.tech/) - Sign up and create a new project to get your connection string.
*   **OpenRouter AI API Key:** [OpenRouter](https://openrouter.ai/) - Sign up and get your API key to access various AI models.


Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see React 2 Vision AI in action!

## 🪄 How to Use - Unleash the AI Power!

1.  **Go to the Dashboard:** After signing in, navigate to the "Dashboard" in the sidebar. 🧭
2.  **Upload Your Wireframe Image:** Click the "Upload Image" area to select your wireframe image (PNG, JPG, etc.). 🖼️
3.  **Select AI Model:** Choose your preferred AI model from the "Select AI Model" dropdown. 🤖
4.  **Describe Your Webpage:**  Enter a brief description of your webpage in the "Enter Description" textarea. ✍️  This helps the AI understand the context.
5.  **Convert to Code:** Hit the "Convert to Code" button and watch the AI work its magic! ✨
6.  **View & Tweak Code:** Once the code is generated, you'll be redirected to a "View Code" page with a live code editor.  You can now explore, copy, and customize the generated React code! 💻

## 🖼️ Example Workflow

1.  **Sketch your Wireframe:**  Draw your website layout on paper or using your favorite design tool.
2.  **Take a Screenshot:** Capture a clear image of your wireframe.
3.  **Upload & Convert:** Use React 2 Vision AI to upload the image, select your AI model, and generate React code.
4.  **Customize & Deploy:**  Refine the generated code in the editor and integrate it into your project! 🎉


## 📂 Project Structure

The project is organized into the following directories:

-   **`app/(routes)`:** Contains the main application routes (e.g., `dashboard`, `credits`, `designs`, `view-code`).
    -   **`credits`:** Manages user credits.
    -   **`dashboard`:**  Handles image upload and conversion to code.
        -   `_components/ImageUpload.tsx`: Component for image selection, AI model selection, and description input.
    -   **`designs`:** Displays a list of user's generated wireframes and codes.
        -   `_components/DesignCard.tsx`: Card component to display each design.
    -   **`layout.tsx`:** Dashboard layout with sidebar and header.
    -   **`provider.tsx`:**  Provides authentication context and dashboard layout.
    -    **`view-code/[uid]`:** Displays generated code using Sandpack editor.
       -  `_components/SelectionDetails.tsx`: Displays details of user's image.
       -   `_components/CodeEditor.tsx`: Integrated Sandpack code editor.

-   **`app/api`:**  API routes for interacting with the backend.
    -   `ai-model/route.tsx`:  Handles AI model requests, interacts with OpenAI.
    -   `user/route.tsx`: Manages user data (creation, retrieval).
    -   `wireframe-to-code/route.tsx`: Manages wireframe data (creation, retrieval, updating).
-   **`app/_components`:** Reusable components used throughout the application.
    -   `AppHeader.tsx`: Application header with sidebar trigger and user profile.
    -   `AppSidebar.tsx`: Sidebar navigation.
    -   `Authentication.tsx`:  Handles Google authentication.
    -   `ProfileAvatar.tsx`: Displays user profile picture and logout option.
-   **`components/ui`:** Shadcn UI components.
    -   `button.tsx`: Button component.
    -   `input.tsx`: Input component.
    -   `popover.tsx`: Popover component.
    -   `select.tsx`: Select component.
     -   `separator.tsx`: Separator component.
    - `sheet.tsx`: Sheet component.
    - `sidebar.tsx`: Sidebar component
    -   `skeleton.tsx`: Skeleton loading component.
    -   `sonner.tsx`: Toaster component for notifications.
    -   `textarea.tsx`: Textarea component.
    - `tooltip.tsx`: Tooltip Component.

- **`configs`:** Configuration files.
  - `db.tsx`: Drizzle ORM configuration for Neon DB.
  - `firebaseConfig.tsx`: Firebase configuration.
  - `schema.ts`: Database schema for Drizzle ORM.
- **`context`:**  Context.
 - `AuthContext.tsx`: Authentication Context.
-   **`data`:** Data constants.
    - `Constants.tsx`:  Contains prompts, AI model list, and dependency information.
-   **`hooks`:** Custom hooks.
    -   `use-mobile.tsx`:  Hook to detect mobile devices.
-   **`lib`:** Utility functions.
    -   `utils.ts`:  `cn` function for combining class names.
-  `drizzle.config.ts`: Configuration of Drizzle ORM.
- `package.json`: The file contains the dependencies and devDependencies.
- `postcss.config.mjs`: Configuration of the postcss.
- `tailwind.config.ts`: Configuration file of tailwind CSS.
- `tsconfig.json`: Configuration file of Typescript.

## 🛠️ Technologies Used

-   **Next.js:** React framework for server-rendered applications.
-   **React:** JavaScript library for building user interfaces.
-   **Tailwind CSS:** Utility-first CSS framework.
-   **Shadcn UI:** UI component library.
-   **Firebase:** Backend-as-a-Service platform.
-   **Neon DB:** Serverless Postgres.
-   **Drizzle ORM:**  TypeScript ORM for SQL databases.
-   **OpenAI:**  AI platform for code generation.
-   **Lucide React:** Icon library.
-  **Sandpack:** For live running code editor.
-   **Axios:**  Promise-based HTTP client.
- **Typescript:** Programming language.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch: `git checkout -b feature/your-feature-name`
3.  Make your changes and commit them: `git commit -m 'Add some feature'`
4.  Push to the branch: `git push origin feature/your-feature-name`
5.  Submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

For any questions or inquiries, please contact Naser at mnasserone@gmail.com