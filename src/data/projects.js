// তিনটা project-এর সব লেখা এখানে। তথ্যগুলো তোমার README আর repo-র code থেকে নেওয়া।
// "challenges" অংশটা README/code থেকে বানানো। নিজের অভিজ্ঞতা অন্যরকম হলে নিজের কথায় বদলে দাও।
// Screenshot: public/projects/ ফোল্ডারে নিচের "image" নামে ছবি রাখলে নিজে থেকে দেখাবে।

export const PROJECTS = [
  {
    id: "dev-stack-builder",
    title: "Dev Stack Builder",
    type: "React Application",
    tagline: "Build your own technology stack.",
    summary:
      "Browse popular web technologies and assemble your own stack. Add, remove or clear selections with instant feedback.",
    overview: [
      "Dev Stack Builder is a React application for exploring popular web development technologies and putting together your own technology stack. Technologies are loaded from a local JSON file and shown as cards with their category, difficulty level and rating.",
      "I built it to practise core React ideas: components and props, state, useEffect, list rendering with keys, conditional rendering and event handling.",
    ],
    features: [
      "Technology cards showing category, difficulty and rating",
      "Add a technology to your stack, with a warning if it is already there",
      "Remove one technology or clear the whole stack",
      "Toast notifications for add, remove, clear and duplicate actions",
      "Loading state while data loads, and a message when the stack is empty",
    ],
    stack: ["React", "Vite", "JavaScript", "Tailwind CSS", "DaisyUI", "React Toastify", "JSON data"],
    challenges: [
      {
        title: "Keeping the stack free of duplicates",
        text: "Every technology has a unique id. Before adding, the app checks whether that id is already in the stack and shows a warning toast instead of adding it twice.",
      },
      {
        title: "Loading data when the page starts",
        text: "The technology list is read from a JSON file inside useEffect, and a loading state is shown until it is ready.",
      },
      {
        title: "Keeping components in sync",
        text: "The App component owns the stack state and passes data and handler functions down as props, so the cards and the stack panel always show the same thing.",
      },
    ],
    improvements: [
      "Enforce the one-technology-per-category rule described in the page heading. Today only duplicates are blocked.",
      "Save the stack in localStorage so it survives a refresh.",
      "Let people export or share their finished stack.",
      "Add search and filters by category or difficulty.",
    ],
    live: "https://dev-stack-builder-eosin.vercel.app/",
    github: "https://github.com/MahbubSifat/dev-stack-builder",
    image: "/projects/dev-stack-builder.png",
    accent: "from-cyan-500/30 via-sky-500/10 to-transparent",
    monogram: "DS",
  },
  {
    id: "fitlog",
    title: "Fitlog",
    type: "Next.js Application",
    tagline: "A focused gym companion.",
    summary:
      "Browse a workout library, lock lifts into today's plan, save others for later and see live totals. Everything persists in the browser.",
    overview: [
      "FitLog is a dark, no-nonsense workout app built with Next.js. It shows a library of workouts loaded from a REST API, lets you lock exercises into today's plan, save others for later, and keeps both lists in the browser so they survive a reload.",
      "Each workout has its own page with a spec table and step-by-step instructions, and the My Plan page summarises exercises, minutes and calories for the day.",
    ],
    features: [
      "Workout library in a responsive grid with category tags, equipment, duration, calories and rating",
      "Dynamic detail page for every workout with instructions and Add to Plan or Save actions",
      "Plan and Saved counters in the navbar that update instantly across the app",
      "My Plan page with Today's Plan and Saved tabs, live totals, sorting and Mark as Done",
      "Today's plan accepts up to five exercises",
      "Custom 404 page and a layout that works on mobile, tablet and desktop",
    ],
    stack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "React Context", "localStorage", "react-hot-toast", "REST API"],
    challenges: [
      {
        title: "Live counters on every page",
        text: "The Plan and Saved badges stay correct because both lists live in one shared React Context instead of inside individual pages.",
      },
      {
        title: "Keeping data after a reload",
        text: "The plan and saved lists are written to localStorage, so they come back after a full page refresh.",
      },
      {
        title: "Sorting without re-doing work",
        text: "The My Plan list is sorted by duration, calories or rating with useMemo, so it is only recalculated when the list or the sort option changes.",
      },
    ],
    improvements: [
      "Add accounts and cloud sync so a plan follows the user across devices.",
      "Show workout history and progress charts over time.",
      "Let users create their own custom workouts.",
      "Plan a whole week instead of a single day.",
    ],
    live: "https://fitlog-two-self.vercel.app/",
    github: "https://github.com/MahbubSifat/fitlog",
    image: "/projects/fitlog.png",
    accent: "from-teal-500/30 via-emerald-500/10 to-transparent",
    monogram: "FL",
  },
  {
    id: "bazar-dor",
    title: "Bazar Dor",
    type: "Next.js + Authentication",
    tagline: "Daily prices of everyday essentials.",
    summary:
      "Follow daily prices of essentials in Bangladesh with price changes, market-wise comparison and sign-in by email, Google or GitHub.",
    overview: [
      "BazarDor (বাজার দর) is a Bengali-language web app for following the daily prices of everyday essentials in Bangladesh: rice, pulses, oil, vegetables, fish, meat, dairy and spices. It shows today's price, how it changed since yesterday, and how prices differ between markets.",
      "The interface uses Bengali numerals and works on mobile, tablet and desktop. Product and profile pages are available to signed-in users.",
    ],
    features: [
      "Scrolling price ticker with the change in percent for each product",
      "Daily risers and fallers: the six biggest increases and six biggest drops",
      "Category pages with sorting by price, correct for Bengali numerals",
      "Product page with lowest, highest and average price and a market-wise table, for signed-in users",
      "Sign in with email and password, Google or GitHub using BetterAuth",
      "Profile page where users can update their name",
      "Loading skeletons and a custom 404 page",
    ],
    stack: ["Next.js (App Router)", "JavaScript", "Tailwind CSS", "DaisyUI", "BetterAuth", "MongoDB Atlas", "react-hot-toast", "REST API"],
    challenges: [
      {
        title: "Sorting Bengali-numeral prices",
        text: "Prices are shown in Bengali numerals, and sorting them as text gives wrong results. The app converts them to numbers before sorting low to high or high to low.",
      },
      {
        title: "Pages for signed-in users only",
        text: "A ProtectedRoute component checks the BetterAuth session before showing the product and profile pages.",
      },
      {
        title: "Three ways to sign in",
        text: "Email and password, Google and GitHub share one BetterAuth setup backed by MongoDB. Each environment needs its own OAuth callback URLs, so local and production are configured separately.",
      },
    ],
    improvements: [
      "Enforce page protection on the server as well, for example with middleware. Today the check runs in the browser.",
      "Add email verification and password reset.",
      "Show a price history chart for each product.",
      "Let users save favourite items and get price-change alerts.",
      "Move price data to my own database and API instead of an external endpoint.",
    ],
    live: "https://b14-a7-bazar-dor-wemq.vercel.app/",
    github: "https://github.com/MahbubSifat/B14-A7-Bazar-Dor",
    image: "/projects/bazar-dor.png",
    accent: "from-blue-500/30 via-indigo-500/10 to-transparent",
    monogram: "BD",
  },
];

export const getProject = (id) => PROJECTS.find((p) => p.id === id);
