import { ExperienceItem } from "@/types"

export const experience: ExperienceItem[] = [
  {
    title: "Software Engineering Intern",
    subtitle: "Area22 - Jun 2026 - Present - Dublin, Ireland",
    logo: "/logos/area22_logo.jpg",
    category: "technical",
    side: "left",
    points: [
      "Work across backend development, automated testing, and DevOps workflows in a production software engineering environment",
      "Contribute to software features, debugging, test automation, and deployment support",
    ],
  },
  {
    title: "Google Summer of Code 2026 Contributor",
    subtitle: "JBoss/WildFly - Apr 2026 - Present - Remote",
    logo: "/logos/GSoC-logo.png",
    category: "technical",
    side: "right",
    points: [
      "Selected as a Google Summer of Code contributor for JBoss/WildFly, working on WildFly Elytron",
      "Contribute to Java security infrastructure, including ACME External Account Binding support, WildFly server integration, and native PEM KeyStore support for Kubernetes TLS secrets",
    ],
  },
  {
    title: "Open Source Contributor",
    subtitle: "Red Hat / WildFly Elytron - Feb 2026 - Present",
    logo: "/logos/redhat-logo-v2.png",
    category: "technical",
    side: "left",
    points: [
      "Contributed to WildFly Elytron, a core security subsystem of the WildFly application server",
      "Identified and fixed concurrency issues in LRURealmIdentityCache involving synchronization and stale mappings",
      "Added negative test coverage for malformed DynamicSSLContext configurations and participated in maintainer code review",
    ],
  },
  {
    title: "AI Model Evaluation Analyst",
    subtitle: "Outlier - Apr 2025 - Apr 2026 - Remote",
    logo: "/logos/outlier.png",
    category: "technical",
    side: "right",
    points: [
      "Wrote and reviewed computer science questions and answers to train generative AI models",
      "Evaluated AI-generated responses for correctness, clarity, and depth",
      "Provided detailed technical feedback and prompt designs to improve model behaviour",
    ],
  },
  {
    title: "Open Source Contributor",
    subtitle: "The Linux Foundation - Feb 2026 - Mar 2026",
    logo: "/logos/linux-logo-v2.png",
    category: "technical",
    side: "left",
    points: [
      "Contributed to the a2a-java project, focusing on REST API error handling",
      "Mapped invalid historyLength values in the getTask endpoint from 500 responses to correct 422 client errors",
      "Scoped exception handling to prevent masking server-side failures and added regression coverage through maintainer review",
    ],
  },
  {
    title: "Open Source Contributor",
    subtitle: "Microsoft Azure Documentation - Feb 2026",
    logo: "/logos/microsoft.png",
    category: "technical",
    side: "right",
    points: [
      "Contributed 10+ merged pull requests fixing broken links and incorrect references across Microsoft Azure documentation",
      "Improved consistency and clarity through grammar, title, and technical reference updates across service guides",
    ],
  },
  {
    title: "Microsoft 365 Migration Steering Committee - Student Representative",
    subtitle: "University College Dublin - Jan 2026 - Present",
    logo: "/logos/ucd-logo.png",
    category: "school",
    side: "left",
    points: [
      "Chosen to represent about 41,000 UCD students in discussions around the university-wide Microsoft 365 migration affecting learning and campus systems",
      "Worked with senior university leaders and stakeholders to share the student perspective on rollout plans, communications, and service continuity",
    ],
  },
  {
    title: "Science Taught Programmes Board - Computer Science Representative",
    subtitle: "UCD Students' Union - Sep 2025 - Present",
    logo: "/logos/su.png",
    category: "school",
    side: "right",
    points: [
      "Represent the School of Computer Science on the Science Taught Programmes Board for 1,200+ students",
      "Review proposed changes to curriculum structure, assessment weightings, and module offerings",
    ],
  },
  {
    title: "Students' Union Class Representative",
    subtitle: "UCD Students' Union - Sep 2025 - Present",
    logo: "/logos/su.png",
    category: "school",
    side: "left",
    points: [
      "Collaborate with faculty and the Students' Union on academic policy and assessment improvements",
      "Support communication between Stage 3 students, the School of Computer Science, and UCDSU",
    ],
  },
  {
    title: "Access Leader",
    subtitle: "UCD Access and Lifelong Learning - Mar 2025 - Present",
    logo: "/logos/access.png",
    category: "school",
    side: "right",
    points: [
      "Delivered campus tours and outreach activities for diverse groups of prospective students",
      "Assisted UCD Access and Lifelong Learning staff with event setup, registration, and student engagement activities",
    ],
  },
  {
    title: "Ordinary Council Member",
    subtitle: "UCD Netsoc - Internet and Computer Science Society - Sep 2025 - May 2026",
    logo: "/logos/netsoc.png",
    category: "school",
    side: "left",
    points: [
      "Supported society events, workshops, and technical initiatives for UCD's internet and computer science community",
    ],
  },
  {
    title: "Class Representative",
    subtitle: "University College Dublin - Sep 2024 - Aug 2025",
    logo: "/logos/ucd-logo.png",
    category: "school",
    side: "right",
    points: [
      "Elected to represent a class of about 150 Computer Science students",
      "Collected feedback, raised academic concerns, and negotiated deadline and assessment adjustments",
      "Organised a funded five-a-side football event with Netsoc to support student wellbeing",
    ],
  },
  {
    title: "Sales and Warehouse Colleague",
    subtitle: "Currys - Jul 2023 - Aug 2024 - Dublin, Ireland",
    logo: "/logos/currys.png",
    category: "other",
    side: "left",
    points: [
      "Worked part-time during university term and full-time during peak periods at Ireland's No. 1 Currys store",
      "Advised customers on laptops, TVs, and smart devices while building strong technical product knowledge",
      "Supported stock handling, deliveries, and inventory updates to keep sales and logistics running smoothly",
    ],
  },
  {
    title: "Warehouse Operative",
    subtitle: "Amazon - Aug 2022 - Oct 2022 - Dublin, Ireland",
    logo: "/logos/amazon-new.png",
    category: "other",
    side: "right",
    points: [
      "Supported the launch of Amazon's first fulfilment facility in Ireland, assisting with setup and daily operations",
      "Operated scanners and pallet trucks to manage inventory efficiently in a fast-paced warehouse",
      "Completed First Aid training and served as a certified First Aider while helping onboard new team members",
    ],
  },
]
