"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { Globe, Smartphone, Palette, Brain, Cloud, Link2, BarChart2, Sun, ShoppingCart } from "lucide-react";

type Language = "en" | "zh"

const translations = {
  en: {
    nav: { home: "Home", services: "Services", about: "About Us", blog: "Blog", careers: "Careers", contact: "Contact", getInTouch: "Get in Touch" },
    hero: {
      badge: "Trusted by 20+ Enterprises",
      title_1: "Your Strategic Partner in",
      title_2: "Software Development",
      disc: "Craft cutting edge software solutions that slash costs, elevate experiences, and ignite digital acceleration. Our systems empower organizations in finance, energy, and mobility to thrive in fast evolving world. Join us to redefine what's possible.",
      btn1: "Get a Free Consultation",
      btn2: "Explore Our Services",
      pro_desc: "Projects Delivered",
      pro_client: "Client Satisfaction",
      iso: "ISO 27001 Certified",
      iso_desc: "Security & Quality Assured"
    },
    marquee: {
      label: "Trusted by industry leaders",
      items: ["Fintech Corp", "SolarEdge Systems", "MobiPay", "DataVault", "CloudNine", "BlockTrust", "AI Nexus", "CyberShield"]
    },
    services_overview: {
      label: "Our Services",
      title: "What We Do Best",
      description: "Explore our wide range of services that help businesses thrive.",
      learn: "Learn More",
      all: "View All Services",
      services: [
        {
          title: "Web Development",
          description: "Building and maintaining websites, web applications, and seamless digital user experiences that drive business growth.",
          image: "/images/web.png",
          icon: Globe
        },
        {
          title: "Mobile Development",
          description: "Creating and optimizing mobile apps for iOS, Android, and cross-platform experiences that users love.",
          image: "/images/mobile.png",
          icon: Smartphone
        },
        {
          title: "Design & User Experience",
          description: "Crafting intuitive, visually appealing, and modernized user centered digital experiences and interfaces.",
          image: "/images/design.png",
          icon: Palette
        },
        {
          title: "AI & Machine Learning",
          description: "Developing intelligent systems, automating tasks, and enhancing decision-making with data-driven solutions.",
          image: "/images/AI.png",
          icon: Brain
        },
        {
          title: "Cloud Managed Services",
          description: "Optimizing, securing, and maintaining cloud infrastructure for seamless business operations at scale.",
          image: "/images/cloud.png",
          icon: Cloud
        },
        {
          title: "Blockchain Development",
          description: "Building decentralized applications, smart contracts, and blockchain infrastructure for the next generation of digital trust.",
          image: "/images/blockchain.png",
          icon: Link2
        },
      ]
    },
    cta_section: {
      label: "Ready to Build?",
      title: "Whether you want to build from scratch or enhance what exists",
      description:
        "There's no time like the present. Drop us a line and we'll jump on board to help accelerate your digital transformation journey.",
      start_project: "Start Your Project",
      explore_services: "Explore Services"
    },
    engagement: {
      label: "How We Work",
      title: "Empowering Growth with Flexibility & Expertise",
      description: "All our services are grounded in a customer-centric approach.",
      models: [
        { title: "Technical Staff Augmentation", desc: "A flexible, cost-effective way to quickly scale teams." },
        { title: "Dedicated Delivery Team", desc: "Agile-based approach for maximum alignment." },
        { title: "Project Based", desc: "Tailored for fixed-scope projects." },
        { title: "Technical Leadership", desc: "Strategic direction and mentorship." }
      ]
    },
    aboutHero: {
      badge: "About Us",
      title: "C3 Core",
      p1: "C3 Core is a cutting-edge IT agency building the engines behind modern digital products—from AI systems and blockchain platforms to scalable web and mobile applications.",
      p2: "We combine deep compute expertise with a rock-solid engineering core to deliver reliable, high-performance solutions that power everything from DEXs to AI SaaS.",
      p3: "Positioned at the center of the digital cosmos, C3 Core helps ambitious teams explore, build, and scale without limits."
    },
    teamStats: {
      badge: "By the Numbers",
      title: "Driving results for some of the best players on the market",
      stats: [
        { value: "100+", label: "Projects Delivered" },
        { value: "10+", label: "Team Members" },
        { value: "15+", label: "Countries Served" },
        { value: "98%", label: "Client Retention" },
        { value: "20+", label: "Enterprise Clients" }
      ]
    },
    testimonials: {
      label: "Testimonials",
      title: "What our clients think of us",
      items: [
        {
          quote:
            "Their commitment to delivering solid, reliable solutions is unmatched. They have consistently met or exceeded expectations across every engagement.",
          name: "Marcus Chen",
          role: "VP of Technology, SolarEdge Systems",
          rating: 5,
          stats: [
            { value: "+442", label: "New Users Onboarded" },
            { value: "+1,600", label: "Processes Automated" },
          ],
        },
        {
          quote:
            "C3 Core is a highly skilled software delivery partner. Their developers have immense experience building front-end solutions that are both scalable and secure. Communication is first class.",
          name: "Sarah Mitchell",
          role: "Group Product Manager, MobiPay",
          rating: 5,
          stats: [
            { value: "17,000+", label: "Devices in Use" },
            { value: "400+", label: "Trusted Partners" },
          ],
        },
        {
          quote:
            "Thanks to C3 Core we have seen significant improvement in system performance and uptime, and a reduction in cloud infrastructure costs. Their proactivity and customer-centric approach stands out.",
          name: "Viktor Jagar",
          role: "CTO, DataVault LLC",
          rating: 5,
          stats: [
            { value: "160+", label: "Retailers Supported" },
            { value: "35%", label: "Average Conversions Increase" },
          ],
        },
      ],
    },
    values: {
      label: "Our Values",
      title: "What guides us",
      description:
        "Our mission is to help build cutting-edge software solutions specifically designed to improve operational efficiency, increase productivity, and enhance customer experience.",
      items: [
        {
          title: "Customer Centricity",
          description:
            "Quality in software development comes from truly understanding the client's niche and industry. We focus not only on the quality of products we deliver but also on the experience clients have with us while we work together."
        },
        {
          title: "Innovation as a Collective Mindset",
          description:
            "We are intentional about creating a culture of innovation where everyone feels empowered to think outside the box. This is key to staying ahead and delivering the best possible products and services."
        },
        {
          title: "Collaboration as a Key Driver",
          description:
            "When starting a project, we always think about how important it is to focus not just on sharing results but to fully embrace the journey together, achieving milestones as one team with common goals."
        }
      ]
    },
    servicesHero: {
      badge: "Our Services",
      title_1: "Hit your business goals with our",
      title_2: "Software Development Services",
      description:
        "Covering the entire software development lifecycle, we build software that drives meaningful change and lasting success for enterprises worldwide."
    },
    blog: {
      categories: ["All", "Technical", "Business", "Blockchain", "AI & ML", "Cloud"],
      readMore: "Read more",
      posts: [
        {
          image: "/images/blog-1.jpg",
          category: "Blockchain",
          date: "February 10, 2026",
          title: "The Rise of Decentralized Applications in Enterprise",
          excerpt:
            "Exploring how blockchain technology is reshaping enterprise operations with transparency, security, and efficiency at scale.",
          url: "https://dataconomy.com/category/news/defi-blockchain-crypto/"
        },
        {
          image: "/images/blog-2.jpg",
          category: "AI & ML",
          date: "January 25, 2026",
          title: "AI Agents in Business: Where Do They Provide the Most Value?",
          excerpt:
            "When used right, AI agents can quietly transform how businesses operate. Learn where they deliver the most impact.",
          url: "https://techquarter.io/ai-machine-learning-services/"
        },
        {
          image: "/images/blog-3.jpg",
          category: "Cloud",
          date: "January 10, 2026",
          title: "Cloud Migration Strategies for Modern Enterprises",
          excerpt:
            "A comprehensive guide to planning and executing successful cloud migration with minimal disruption to operations.",
          url: "https://www.dynatrace.com/solutions/cloud-migration/"
        },
        {
          image: "/images/blog-4.jpg",
          category: "Technical",
          date: "December 22, 2025",
          title: "Scaling Beyond Product-Market Fit: SaaS Architecture Guide",
          excerpt:
            "The tech stack that fueled your MVP can become the very thing that slows you down. Learn how to architect for scale.",
          url: "https://www.xappifai.com/blog/mvp-guide-step-by-step"
        },
        {
          image: "/images/blog-5.jpg",
          category: "Business",
          date: "December 19, 2025",
          title: "The Hidden Tech Debt That Can Kill Your Series A Momentum",
          excerpt:
            "You just raised your Seed round. The clock is ticking. Learn how to avoid the most dangerous forms of technical debt.",
          url: "https://www.thoughtworks.com/insights/blog"
        },
        {
          image: "/images/blog-5.jpg",
          category: "Business",
          date: "December 18, 2025",
          title: "Building Compliant AI: How to Architect for GDPR and HIPAA",
          excerpt:
            "If one thing can derail an AI rollout faster than a weak model, it is compliance failure. Here is how to avoid it.",
          url: "https://www.simbo.ai/blog/ensuring-data-privacy-and-compliance-in-ai-healthcare-agents-best-practices-for-hipaa-and-gdpr-adherence-1325765/"
        },
        {
          image: "/images/blog-1.jpg",
          category: "Blockchain",
          date: "December 15, 2025",
          title: "Smart Contract Security: Best Practices for 2026",
          excerpt:
            "A deep dive into the most common vulnerabilities in smart contracts and how to build more secure decentralized applications.",
          url: "https://coinlaw.io/smart-contract-security-risks-and-audits-statistics"
        },
        {
          image: "/images/blog-4.jpg",
          category: "Technical",
          date: "December 10, 2025",
          title: "Is It Worth It? A Framework for Projecting AI Software Returns",
          excerpt:
            "Every company buying into AI hits the same moment of truth. Learn a proven framework for evaluating AI ROI.",
          url: "https://www.mckinsey.com/capabilities/tech-and-ai/our-insights"
        },
        {
          image: "/images/blog-3.jpg",
          category: "Cloud",
          date: "December 5, 2025",
          title: "Kubernetes in Production: Lessons From 100+ Deployments",
          excerpt:
            "After managing Kubernetes across dozens of enterprise clients, here are the patterns that actually work at scale.",
          url: "https://www.datadoghq.com/blog/"
        }
      ]
    },
    blogHero: {
      badge: "Blog",
      title: "Stay up to date!",
      description:
        "Stay up to date with our latest content on software development, emerging technologies, and industry insights from the C3 Core team."
    },
    careerHero: {
      badge: "Careers",
      title: "Power up your career!",
      description:
        "Join a results-driven technical team with a knack for innovation and using the latest technologies to help enterprises achieve digital acceleration. Ready to make an impact?"
    },
    openings: {
      label: "Current Openings",
      title: "Join like-minded individuals",
      description: "Join a team that builds bespoke software solutions by connecting data, technology, and aesthetics.",
      emptyMessage: "No open roles in team yet"
    },
    perks: {
      label: "Why C3 Core",
      title: "Perks & Benefits",
      description: "We invest in our people because great software is built by happy, motivated teams.",
      items: [
        {
          title: "Health & Wellness",
          description: "Comprehensive health insurance, dental, and vision coverage for you and your family."
        },
        {
          title: "Learning & Growth",
          description: "Annual learning budget, conference attendance, and access to top-tier online courses."
        },
        {
          title: "Flexible Work",
          description: "Work from anywhere with flexible hours. We trust you to manage your time effectively."
        },
        {
          title: "Gym & Fitness",
          description: "Monthly gym membership reimbursement to keep you healthy and energized."
        },
        {
          title: "Team Events",
          description: "Regular team outings, hackathons, and social events to build strong connections."
        },
        {
          title: "Travel Opportunities",
          description: "Work with international clients and travel to exciting locations for on-site projects."
        }
      ]
    },
    process: {
      label: "Our Process",
      title: "How We Deliver Results",
      description:
        "A proven methodology that ensures your project is delivered on time, on budget, and beyond expectations.",
      steps: [
        {
          step: "01",
          title: "Discovery & Strategy",
          description:
            "We start by understanding your business goals, challenges, and target audience to craft a tailored strategy."
        },
        {
          step: "02",
          title: "Design & Prototype",
          description:
            "Our design team creates wireframes and interactive prototypes to validate the user experience before development."
        },
        {
          step: "03",
          title: "Development & Testing",
          description:
            "Using agile methodology, we build and rigorously test your solution in iterative sprints for maximum quality."
        },
        {
          step: "04",
          title: "Launch & Support",
          description:
            "We deploy your product seamlessly and provide ongoing maintenance, monitoring, and support for continuous growth."
        }
      ]
    },
    contactForm: {
      badge: "Contact Us",
      title: "Your IT strategy begins here",
      description: "Tell us about your project and we'll get back to you within 24 hours.",
      labels: {
        name: "Full Name *",
        email: "Email *",
        company: "Company",
        message: "What's your biggest challenge that software can solve? *"
      },
      placeholders: {
        name: "John Doe",
        email: "john@company.com",
        company: "Your Company",
        message: "Tell us about your project, goals, and timeline..."
      },
      privacy: "By submitting, you agree to C3 Core's Privacy Policy.",
      submit: {
        default: "Send Message",
        sent: "Message Sent!"
      }
    },
    contactInfo: {
      title: "Get in Touch",
      items: [
        { label: "Email", value: "admin@c3core.org", href: "mailto:admin@c3core.org" },
        { label: "Phone", value: "+86 21 6206 1519", href: "tel:+862162061519" },
        { label: "Office", value: "200031 Shanghai, China", href: "#" },
        { label: "Hours", value: "Mon - Fri, 9:00 AM - 6:00 PM CST", href: "#" }
      ]
    },
    industries: {
      label: "Industries",
      title: "Industries we've worked with",
      description: "We bring deep domain expertise across multiple verticals to deliver solutions that truly understand your business.",
      items: [
        {
          title: "Solar & Energy",
          description: "Apps and systems designed to make installers' lives better, connecting data points and helping them manage projects and budgets efficiently."
        },
        {
          title: "Mobility",
          description: "Portals and apps created to make traveling smoother, payments faster, and managing programs and fleets smarter."
        },
        {
          title: "Education",
          description: "Solutions crafted to make communication more efficient between institutions and stakeholders with relevant integrations."
        },
        {
          title: "Fintech",
          description: "Secure, scalable financial technology platforms handling payments, lending, and regulatory compliance at enterprise scale."
        },
        {
          title: "eCommerce",
          description: "End-to-end commerce solutions with inventory management, multi-channel selling, and optimized checkout experiences."
        },
        {
          title: "Healthcare",
          description: "HIPAA-compliant healthcare applications connecting patients, providers, and payers with seamless data exchange."
        }
      ]
    },
    blogPreview: {
      label: "From Our Blog",
      title: "Latest articles on software development and beyond",
      readMore: "Read more",
      viewMore: "View More Articles",
      articles: [
        {
          category: "Blockchain",
          date: "February 10, 2026",
          title: "The Rise of Decentralized Applications in Enterprise",
          excerpt: "Exploring how blockchain technology is reshaping enterprise operations with transparency, security, and efficiency at scale."
        },
        {
          category: "AI & ML",
          date: "January 25, 2026",
          title: "AI Agents in Business: Where Do They Provide the Most Value?",
          excerpt: "When used right, AI agents can quietly transform how businesses operate. Learn where they deliver the most impact."
        },
        {
          category: "Cloud",
          date: "January 10, 2026",
          title: "Cloud Migration Strategies for Modern Enterprises",
          excerpt: "A comprehensive guide to planning and executing successful cloud migration with minimal disruption to operations."
        }
      ]
    },
    caseStudies: {
      label: "Case Studies",
      title: "Software Development Case Studies",
      description: "From scale-ups to large enterprises, we are trusted to build systems from their initial idea to their final release and further.",
      cases: [
        {
          number: "01",
          title: "FinStream",
          subtitle: "Fintech Dashboard & Payment Platform",
          description: "Built a comprehensive fintech dashboard that processes 10,000+ transactions daily with real-time analytics.",
          icon: BarChart2,
          tags: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
          image: "/images/case-study-1.jpg",
        },
        {
          number: "02",
          title: "SolarTrack Pro",
          subtitle: "Solar Energy Management System",
          description: "Mobile platform for monitoring and optimizing solar installations across 200+ commercial sites.",
          icon: Sun,
          tags: ["React Native", "Python", "TensorFlow", "Azure", "IoT"],
          image: "/images/case-study-2.jpg",
        },
        {
          number: "03",
          title: "MarketHub",
          subtitle: "eCommerce & Order Management",
          description: "End-to-end ecommerce platform handling virtual warehousing and multi-channel order management.",
          icon: ShoppingCart,
          tags: ["Next.js", "Tailwind", ".NET", "Azure", "Microservices"],
          image: "/images/case-study-3.jpg",
        }
      ]
    },
    techStack: {
      label: "Tech Stack",
      title: "Technologies We Work With",
      description:
        "We leverage the latest and most reliable technologies to deliver exceptional results for our clients.",
      categories: [
        {
          label: "Frontend",
          techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Flutter"],
        },
        {
          label: "Backend",
          techs: ["Node.js", ".NET", "Python", "Go", "Java", "Rust"],
        },
        {
          label: "Cloud & DevOps",
          techs: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
        },
        {
          label: "Data & AI",
          techs: ["TensorFlow", "PyTorch", "OpenAI", "PostgreSQL", "MongoDB", "Redis"],
        },
        {
          label: "Blockchain",
          techs: ["Solidity", "Ethereum", "Polygon", "Solana", "Hyperledger", "Web3.js"],
        },
      ],
    },
    servicesList: {
      offerLabel: "What We Offer",
      services: [
        {
          title: "Web Development",
          description:
            "Building and maintaining websites, web applications, and seamless digital user experiences that drive business growth and engagement.",
          features: [
            "Custom Web Applications",
            "Progressive Web Apps (PWA)",
            "Enterprise Portals & Dashboards",
            "API Development & Integration",
            "E-commerce Solutions",
            "Content Management Systems",
          ],
        },
        {
          title: "Mobile Development",
          description:
            "Creating and optimizing mobile apps for iOS, Android, and cross-platform experiences that users love and businesses depend on.",
          features: [
            "Native iOS & Android Apps",
            "Cross-Platform Development",
            "App Store Optimization",
            "Mobile UI/UX Design",
            "Performance Optimization",
            "Push Notifications & Analytics",
          ],
        },
        {
          title: "Design & User Experience",
          description:
            "Crafting intuitive, visually appealing, and user-centered digital experiences and interfaces that convert visitors to customers.",
          features: [
            "UI/UX Research & Strategy",
            "Wireframing & Prototyping",
            "Visual Design Systems",
            "Usability Testing",
            "Responsive Design",
            "Brand Identity Design",
          ],
        },
        {
          title: "AI & Machine Learning",
          description:
            "Developing intelligent systems, automating tasks, and enhancing decision-making with data-driven AI and machine learning solutions.",
          features: [
            "Predictive Analytics",
            "Natural Language Processing",
            "Computer Vision Solutions",
            "Recommendation Engines",
            "Process Automation with AI",
            "Custom Model Training",
          ],
        },
        {
          title: "Cloud Managed Services",
          description:
            "Optimizing, securing, and maintaining cloud infrastructure for seamless business operations at any scale.",
          features: [
            "Cloud Migration Strategy",
            "Networking Fundamentals",
            "DevOps & CI/CD Pipelines",
            "24/7 Monitoring & Support",
            "Cost Optimization",
            "Security & Compliance",
          ],
        },
        {
          title: "Blockchain Development",
          description:
            "Building decentralized applications, smart contracts, and blockchain infrastructure for the next generation of digital trust and transparency.",
          features: [
            "Smart Contract Development",
            "DeFi Protocol Engineering",
            "NFT Marketplace Development",
            "Tokenization Solutions",
            "Blockchain Security Audits",
            "Web3 Integration",
          ],
        },
      ],
    },
    footerLinks: {
      company: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/career" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
      services: [
        { label: "Web Development", href: "/services" },
        { label: "Mobile Development", href: "/services" },
        { label: "Blockchain Development", href: "/services" },
        { label: "AI & Machine Learning", href: "/services" },
        { label: "Cloud Services", href: "/services" },
        { label: "Design & UX", href: "/services" },
      ],
      contact: {
        email: "admin@c3core.org",
        phone: "+86 21 6206 1519",
        address: "200031 Shanghai, China"
      },
      labels: {
        company: "Company",
        services: "Services",
        contact: "Get in Touch",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      }
    },
    footer: {
      about: "Your strategic partner in software development and digital transformation. Building the future, one line of code at a time.",
      rights: "All rights reserved.",
      contact: "Get in Touch"
    }
  },
  zh: {
    nav: { home: "首页", services: "服务", about: "关于我们", blog: "博客", careers: "加入我们", contact: "联系我们", getInTouch: "立即咨询" },
    hero: {
      badge: "20多家企业信赖",
      title_1: "您的战略合作伙伴",
      title_2: "软件开发",
      disc: "打造前沿软件解决方案，大幅降低成本，提升用户体验，加速数字化转型。我们的系统助力金融、能源和出行领域的企业在瞬息万变的世界中蓬勃发展。加入我们，共同重新定义无限可能。",
      btn1: "获取免费咨询",
      btn2: "了解我们的服务",
      pro_desc: "已交付项目",
      pro_client: "客户满意度",
      iso: "ISO 27001认证",
      iso_desc: "安全与质量保证"
    },
    aboutHero: {
      badge: "关于我们",
      title: "C3 Core",
      p1: "C3 Core 是一家前沿 IT 技术机构，专注于构建现代数字产品的核心引擎，涵盖 AI 系统、区块链平台以及可扩展的 Web 与移动应用。",
      p2: "我们融合深厚的计算能力与坚实的工程基础，交付高可靠、高性能的解决方案，驱动从去中心化交易所到 AI SaaS 的各类产品。",
      p3: "立足数字宇宙的核心，C3 Core 助力有远见的团队无界探索、高效构建，并持续规模化发展。"
    },
    services_overview: {
      label: "我们的服务",
      title: "我们的专长",
      description: "探索我们广泛的服务，助力企业发展壮大。",
      learn: "了解更多",
      all: "查看所有服务",
      services: [
        {
          title: "网页开发",
          description: "构建和维护网站、Web 应用程序及无缝数字用户体验，推动业务增长。",
          image: "/images/web.png",
          icon: Globe
        },
        {
          title: "移动端开发",
          description: "为 iOS、Android 和跨平台体验创建和优化用户喜爱的移动应用。",
          image: "/images/mobile.png",
          icon: Smartphone
        },
        {
          title: "设计与用户体验",
          description: "打造直观、美观、以用户为中心的数字体验和界面。",
          image: "/images/design.png",
          icon: Palette
        },
        {
          title: "人工智能与机器学习",
          description: "开发智能系统、自动化任务，并利用数据驱动的解决方案增强决策。",
          image: "/images/AI.png",
          icon: Brain
        },
        {
          title: "云管理服务",
          description: "优化、保护并维护云基础设施，实现无缝业务运营。",
          image: "/images/cloud.png",
          icon: Cloud
        },
        {
          title: "区块链开发",
          description: "构建去中心化应用、智能合约及区块链基础设施，推动数字信任的下一代发展。",
          image: "/images/blockchain.png",
          icon: Link2
        },
      ]
    },
    teamStats: {
      badge: "数据一览",
      title: "为行业领先企业持续创造卓越成果",
      stats: [
        { value: "100+", label: "已交付项目" },
        { value: "10+", label: "核心团队成员" },
        { value: "15+", label: "服务国家与地区" },
        { value: "98%", label: "客户留存率" },
        { value: "20+", label: "企业级客户" }
      ]
    },
    values: {
      label: "我们的价值观",
      title: "指引我们的原则",
      description:
        "我们的使命是打造前沿的软件解决方案，帮助企业提升运营效率、提高生产力，并持续优化客户体验。",
      items: [
        {
          title: "以客户为中心",
          description:
            "高质量的软件开发源于对客户行业与业务场景的深刻理解。我们不仅关注交付成果的质量，也同样重视与客户协作过程中的整体体验。"
        },
        {
          title: "创新是一种集体思维",
          description:
            "我们有意识地打造鼓励创新的文化环境，让每一位成员都能大胆思考、突破边界，从而持续领先并交付卓越的产品与服务。"
        },
        {
          title: "协作是核心驱动力",
          description:
            "在项目启动之初，我们就重视与客户并肩同行的过程，不只是共享成果，而是以共同目标为导向，作为一个团队持续达成关键里程碑。"
        }
      ]
    },
    testimonials: {
      label: "客户评价",
      title: "客户如何评价我们",
      items: [
        {
          quote:
            "他们在交付稳定、可靠解决方案方面的投入无人能及。在每一次合作中，都持续达到甚至超出我们的预期。",
          name: "陈伟",
          role: "技术副总裁，SolarEdge Systems",
          rating: 5,
          stats: [
            { value: "+442", label: "新增用户数" },
            { value: "+1,600", label: "自动化流程" },
          ],
        },
        {
          quote:
            "C3 Core 是一家技术实力非常强的软件交付伙伴。他们的前端团队在可扩展性和安全性方面经验丰富，沟通也非常高效。",
          name: "Sarah Mitchell",
          role: "产品经理，MobiPay",
          rating: 5,
          stats: [
            { value: "17,000+", label: "设备在线数" },
            { value: "400+", label: "合作伙伴" },
          ],
        },
        {
          quote:
            "在 C3 Core 的帮助下，我们的系统性能和稳定性显著提升，同时云基础设施成本也明显下降。他们的主动性和以客户为中心的理念令人印象深刻。",
          name: "Viktor Jagar",
          role: "首席技术官，DataVault LLC",
          rating: 5,
          stats: [
            { value: "160+", label: "支持零售商" },
            { value: "35%", label: "转化率提升" },
          ],
        },
      ],
    },
    cta_section: {
      label: "准备好启动了吗？",
      title: "无论是从零开始构建还是优化现有系统",
      description:
        "现在就是最好的时机。联系我们，我们将助力加速您的数字化转型之旅。",
      start_project: "启动项目",
      explore_services: "探索服务"
    },
    blog: {
      categories: ["全部", "技术", "商业", "区块链", "AI 与机器学习", "云计算"],
      readMore: "阅读全文",
      posts: [
        {
          image: "/images/blog-1.jpg",
          category: "区块链",
          date: "2026年2月10日",
          title: "企业级去中心化应用的崛起",
          excerpt:
            "探讨区块链技术如何通过透明性、安全性和规模化效率重塑企业级业务模式。",
          url: "https://dataconomy.com/category/news/defi-blockchain-crypto/"
        },
        {
          image: "/images/blog-2.jpg",
          category: "AI 与机器学习",
          date: "2026年1月25日",
          title: "AI 智能体在企业中的价值体现",
          excerpt:
            "当正确使用时，AI 智能体能够悄然改变企业运作方式，本文解析其最具价值的应用场景。",
          url: "https://techquarter.io/ai-machine-learning-services/"
        },
        {
          image: "/images/blog-3.jpg",
          category: "云计算",
          date: "2026年1月10日",
          title: "现代企业的云迁移策略",
          excerpt:
            "一份系统指南，帮助企业在最小化业务影响的前提下成功完成云迁移。",
          url: "https://www.dynatrace.com/solutions/cloud-migration/"
        },
        {
          image: "/images/blog-4.jpg",
          category: "技术",
          date: "2025年12月22日",
          title: "突破产品市场契合点后的 SaaS 架构扩展指南",
          excerpt:
            "支撑 MVP 的技术栈，往往会在规模化阶段成为瓶颈。本文讲解如何为增长而设计架构。",
          url: "https://www.xappifai.com/blog/mvp-guide-step-by-step"
        },
        {
          image: "/images/blog-5.jpg",
          category: "商业",
          date: "2025年12月19日",
          title: "可能扼杀 A 轮融资动能的隐性技术债",
          excerpt:
            "完成种子轮融资只是开始，真正的挑战在后面。了解如何避免最危险的技术债。",
          url: "https://www.thoughtworks.com/insights/blog"
        },
        {
          image: "/images/blog-5.jpg",
          category: "商业",
          date: "2025年12月18日",
          title: "构建合规 AI：GDPR 与 HIPAA 架构指南",
          excerpt:
            "比模型性能更容易毁掉 AI 项目的，是合规失败。本文讲解如何从架构层面规避风险。",
          url: "https://www.simbo.ai/blog/ensuring-data-privacy-and-compliance-in-ai-healthcare-agents-best-practices-for-hipaa-and-gdpr-adherence-1325765/"
        },
        {
          image: "/images/blog-1.jpg",
          category: "区块链",
          date: "2025年12月15日",
          title: "智能合约安全：2026 年最佳实践",
          excerpt:
            "深入分析智能合约中最常见的安全漏洞，以及如何构建更安全的去中心化应用。",
          url: "https://coinlaw.io/smart-contract-security-risks-and-audits-statistics"
        },
        {
          image: "/images/blog-4.jpg",
          category: "技术",
          date: "2025年12月10日",
          title: "是否值得投入？AI 软件回报评估框架",
          excerpt:
            "几乎所有引入 AI 的企业都会面对同一个问题：值不值得？本文提供一个成熟的评估方法。",
          url: "https://www.mckinsey.com/capabilities/tech-and-ai/our-insights"
        },
        {
          image: "/images/blog-3.jpg",
          category: "云计算",
          date: "2025年12月5日",
          title: "Kubernetes 生产环境实战：100+ 部署经验总结",
          excerpt:
            "在为数十家企业管理 Kubernetes 后，我们总结了真正适用于规模化生产的实践模式。",
          url: "https://www.datadoghq.com/blog/"
        }
      ]
    },
    blogHero: {
      badge: "博客",
      title: "实时掌握最新动态！",
      description:
        "关注 C3 Core 团队发布的最新内容，获取软件开发、新兴技术及行业洞察的前沿资讯。",
    },
    careerHero: {
      badge: "加入我们",
      title: "激活你的职业生涯！",
      description:
        "加入一个注重成果的技术团队，我们以创新为核心，利用最新技术助力企业实现数字化加速。准备好创造影响了吗？"
    },
    openings: {
      label: "当前招聘",
      title: "与志同道合的人一起加入",
      description: "加入一个通过数据、技术与设计打造定制化软件解决方案的团队。",
      emptyMessage: "团队暂时没有开放职位"
    },
    perks: {
      label: "为什么选择 C3 Core",
      title: "福利与待遇",
      description: "我们投资于团队成员，因为卓越的软件源自快乐、充满动力的团队。",
      items: [
        {
          title: "健康与福祉",
          description: "为您和您的家人提供全面的医疗保险、牙科和视力保障。"
        },
        {
          title: "学习与成长",
          description: "年度学习预算、参加会议，并访问顶级在线课程。"
        },
        {
          title: "灵活工作",
          description: "可在任何地点灵活工作。我们信任您合理管理时间。"
        },
        {
          title: "健身与运动",
          description: "每月健身会员报销，助力健康与活力。"
        },
        {
          title: "团队活动",
          description: "定期团队聚会、黑客马拉松和社交活动，增进团队凝聚力。"
        },
        {
          title: "出差与旅行机会",
          description: "与国际客户合作，并有机会到现场项目地出差。"
        }
      ]
    },
    techStack: {
      label: "技术栈",
      title: "我们使用的技术",
      description:
        "我们采用最新、最可靠的技术，为客户交付卓越成果。",
      categories: [
        {
          label: "前端",
          techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Flutter"],
        },
        {
          label: "后端",
          techs: ["Node.js", ".NET", "Python", "Go", "Java", "Rust"],
        },
        {
          label: "云与 DevOps",
          techs: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
        },
        {
          label: "数据与 AI",
          techs: ["TensorFlow", "PyTorch", "OpenAI", "PostgreSQL", "MongoDB", "Redis"],
        },
        {
          label: "区块链",
          techs: ["Solidity", "Ethereum", "Polygon", "Solana", "Hyperledger", "Web3.js"],
        },
      ],
    },
    contactForm: {
      badge: "联系我们",
      title: "从这里开始您的 IT 策略",
      description: "告诉我们您的项目，我们将在 24 小时内回复您。",
      labels: {
        name: "姓名 *",
        email: "电子邮件 *",
        company: "公司",
        message: "软件可以解决的最大挑战是什么？ *"
      },
      placeholders: {
        name: "张三",
        email: "zhangsan@company.com",
        company: "您的公司",
        message: "告诉我们您的项目、目标和时间安排..."
      },
      privacy: "提交即表示您同意 C3 Core 的隐私政策。",
      submit: {
        default: "发送消息",
        sent: "消息已发送！"
      }
    },
    process: {
      label: "我们的流程",
      title: "我们如何交付成果",
      description:
        "经过验证的方法论，确保项目按时、按预算，并超出预期交付。",
      steps: [
        {
          step: "01",
          title: "调研与战略",
          description:
            "深入理解您的业务目标、挑战与用户群体，制定量身定制的技术与产品策略。"
        },
        {
          step: "02",
          title: "设计与原型",
          description:
            "通过线框图和交互式原型验证用户体验，为开发阶段奠定坚实基础。"
        },
        {
          step: "03",
          title: "开发与测试",
          description:
            "采用敏捷开发方式，在迭代冲刺中构建并严格测试，确保卓越质量。"
        },
        {
          step: "04",
          title: "上线与支持",
          description:
            "无缝部署产品，并提供持续的维护、监控与支持，助力长期增长。"
        }
      ]
    },
    servicesHero: {
      badge: "我们的服务",
      title_1: "通过我们的",
      title_2: "软件开发服务实现业务目标",
      description:
        "覆盖完整的软件开发生命周期，我们为全球企业打造推动变革与长期成功的软件解决方案。"
    },
    engagement: {
      label: "合作模式",
      title: "灵活专业的增长动力",
      description: "我们的所有服务都以客户为中心，并结合前沿技术。",
      models: [
        { title: "技术人员增援", desc: "一种灵活且具成本效益的方式，快速扩展团队。" },
        { title: "专属交付团队", desc: "采用敏捷开发模式，确保与客户目标高度一致。" },
        { title: "项目制开发", desc: "针对固定范围的项目，在规定时间内交付成果。" },
        { title: "技术领导力", desc: "经验丰富的技术专家提供战略指导和指导。" }
      ]
    },
    contactInfo: {
      title: "联系我们",
      items: [
        { label: "电子邮件", value: "admin@c3core.org", href: "mailto:admin@c3core.org" },
        { label: "电话", value: "+86 21 6206 1519", href: "tel:+862162061519" },
        { label: "办公地点", value: "200031 上海, 中国", href: "#" },
        { label: "工作时间", value: "周一 - 周五, 9:00 - 18:00 CST", href: "#" }
      ]
    },
    servicesList: {
      offerLabel: "服务内容",
      services: [
        {
          title: "Web 开发",
          description:
            "构建和维护高性能网站与 Web 应用，打造无缝的数字化用户体验，助力业务增长。",
          features: [
            "定制化 Web 应用",
            "渐进式 Web 应用（PWA）",
            "企业门户与数据仪表盘",
            "API 开发与系统集成",
            "电商解决方案",
            "内容管理系统",
          ],
        },
        {
          title: "移动应用开发",
          description:
            "为 iOS、Android 及跨平台打造高质量移动应用，兼顾用户体验与业务稳定性。",
          features: [
            "原生 iOS 与 Android 应用",
            "跨平台开发",
            "应用商店优化（ASO）",
            "移动端 UI / UX 设计",
            "性能优化",
            "推送通知与数据分析",
          ],
        },
        {
          title: "设计与用户体验",
          description:
            "打造直观、美观、以用户为中心的数字体验与界面，将访客转化为客户。",
          features: [
            "UI / UX 研究与策略",
            "线框图与原型设计",
            "视觉设计体系",
            "可用性测试",
            "响应式设计",
            "品牌视觉设计",
          ],
        },
        {
          title: "人工智能与机器学习",
          description:
            "构建智能系统，通过数据驱动的 AI 与机器学习技术实现自动化与智能决策。",
          features: [
            "预测分析",
            "自然语言处理",
            "计算机视觉解决方案",
            "推荐系统",
            "AI 驱动的流程自动化",
            "定制模型训练",
          ],
        },
        {
          title: "云托管服务",
          description:
            "优化、保护并维护云基础设施，支持企业在任何规模下稳定运行。",
          features: [
            "云迁移策略",
            "网络架构与基础设施",
            "DevOps 与 CI/CD 流水线",
            "7×24 监控与支持",
            "成本优化",
            "安全与合规",
          ],
        },
        {
          title: "区块链开发",
          description:
            "构建去中心化应用、智能合约及区块链基础设施，推动下一代数字信任。",
          features: [
            "智能合约开发",
            "DeFi 协议工程",
            "NFT 市场开发",
            "资产代币化解决方案",
            "区块链安全审计",
            "Web3 集成",
          ],
        },
      ],
    },
    industries: {
      label: "行业领域",
      title: "我们合作过的行业",
      description: "我们在多个垂直领域拥有深厚专业知识，提供真正理解您业务的解决方案。",
      items: [
        {
          title: "太阳能与能源",
          description: "为安装人员设计的应用和系统，连接数据点，高效管理项目和预算。"
        },
        {
          title: "出行",
          description: "创建门户和应用，使出行更顺畅、支付更快捷，并更智能地管理项目和车队。"
        },
        {
          title: "教育",
          description: "提供高效沟通解决方案，帮助机构与利益相关方协作，并进行相关集成。"
        },
        {
          title: "金融科技",
          description: "安全、可扩展的金融科技平台，处理支付、借贷及企业级合规。"
        },
        {
          title: "电商",
          description: "端到端电商解决方案，包括库存管理、多渠道销售及优化的结账体验。"
        },
        {
          title: "医疗健康",
          description: "符合 HIPAA 的医疗应用，连接患者、提供者和支付方，实现无缝数据交换。"
        }
      ]
    },
    blogPreview: {
      label: "博客精选",
      title: "软件开发及其他领域的最新文章",
      readMore: "阅读全文",
      viewMore: "查看更多文章",
      articles: [
        {
          category: "区块链",
          date: "2026年2月10日",
          title: "企业中去中心化应用的崛起",
          excerpt: "探讨区块链技术如何以透明、安全和高效的方式重塑企业运营。"
        },
        {
          category: "人工智能与机器学习",
          date: "2026年1月25日",
          title: "AI 代理在业务中的价值体现",
          excerpt: "如果使用得当，AI 代理可以悄然改变企业运营方式。了解它们的最大影响所在。"
        },
        {
          category: "云计算",
          date: "2026年1月10日",
          title: "现代企业的云迁移策略",
          excerpt: "全面指导规划和执行成功的云迁移，同时将运营干扰降到最低。"
        }
      ]
    },
    caseStudies: {
      label: "案例研究",
      title: "软件开发案例研究",
      description: "从初创企业到大型企业，我们受信任构建系统，从最初的想法到最终发布，甚至更进一步。",
      cases: [
        {
          number: "01",
          title: "FinStream",
          subtitle: "金融科技仪表板与支付平台",
          description: "构建了一个综合金融科技仪表板，每天处理超过10,000笔交易，并提供实时分析。",
          icon: BarChart2,
          tags: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
          image: "/images/case-study-1.jpg",
        },
        {
          number: "02",
          title: "SolarTrack Pro",
          subtitle: "太阳能管理系统",
          description: "用于监控和优化200多个商业场所的太阳能安装的移动平台。",
          icon: Sun,
          tags: ["React Native", "Python", "TensorFlow", "Azure", "IoT"],
          image: "/images/case-study-2.jpg",
        },
        {
          number: "03",
          title: "MarketHub",
          subtitle: "电子商务与订单管理",
          description: "端到端的电子商务平台，处理虚拟仓储和多渠道订单管理。",
          icon: ShoppingCart,
          tags: ["Next.js", "Tailwind", ".NET", "Azure", "Microservices"],
          image: "/images/case-study-3.jpg",
        }
      ]
    },
    marquee: {
      label: "深受行业领导者信赖",
      items: ["金融科技公司", "SolarEdge系统", "MobiPay", "数据保险库", "CloudNine", "BlockTrust", "AI Nexus", "网络盾"]
    },
    footerLinks: {
      company: [
        { label: "关于我们", href: "/about" },
        { label: "加入我们", href: "/career" },
        { label: "博客", href: "/blog" },
        { label: "联系我们", href: "/contact" },
      ],
      services: [
        { label: "网页开发", href: "/services" },
        { label: "移动端开发", href: "/services" },
        { label: "区块链开发", href: "/services" },
        { label: "人工智能与机器学习", href: "/services" },
        { label: "云服务", href: "/services" },
        { label: "设计与用户体验", href: "/services" },
      ],
      contact: {
        email: "admin@c3core.org",
        phone: "+86 21 6206 1519",
        address: "200031 上海, 中国"
      },
      labels: {
        company: "公司",
        services: "服务",
        contact: "联系我们",
        privacy: "隐私政策",
        terms: "服务条款"
      }
    },
    footer: {
      about: "您在软件开发和数字化转型方面的战略合作伙伴。",
      rights: "版权所有。",
      contact: "联系我们"
    }
  }
}

const LanguageContext = createContext({
  lang: "en" as Language,
  setLang: (lang: Language) => { },
  t: translations.en
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en")

  // Load preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language
    if (saved) setLang(saved)
  }, [])

  const handleSetLang = (newLang: Language) => {
    setLang(newLang)
    localStorage.setItem("lang", newLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)