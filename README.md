🗂 Folder Structure Overview
Mahindra_Project/
│── public/
│   ├── m-logo.png
│   ├── car-1.png
│   ├── delete.png
│   └── ...assets
│
│── src/
│   │── App.jsx               # Main router config
│   │── main.jsx              # React root entry
│   │── index.css / App.css   # Global styling
│
│   ├── components/
│   │   ├── Sidebar.jsx       # Left navigation menu
│   │   ├── Profile.jsx       # User profile (top right)
│   │   ├── Createproject.jsx # Project list + create CTA
│   │   └── createProject/    # All tabs for create-project UI
│   │        ├── ProjectDetailsTab.jsx
│   │        ├── PartsSpecsTab.jsx
│   │        ├── TestsAndReportTab.jsx
│   │        ├── MetricWeightageTab.jsx
│   │        └── TeamEngineersTab.jsx
│
│── pages/
│   ├── Landing.jsx
│   ├── Projects.jsx          # Sidebar + routed workspace layout
│   └── Makeproject.jsx       # Multi-tab create project page
│
└── package.json

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/TheArshad/Mahindra_Project.git
cd Mahindra_Project

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev


Project will start at →
🌍 http://localhost:5173/
