export type Locale = "en" | "zh"

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      team: "Team",
      testimonials: "Testimonials",
      contact: "Contact",
      getStarted: "Get Started",
    },
    // Hero
    hero: {
      tagline: "Trusted by 20+ Enterprises",
      title1: "Your Strategic Partner in",
      title2: "Software Development",
      description:
        "Craft cutting edge software solutions that slash costs, elevate experiences, and ignite digital acceleration. Our systems empower organizations in finance, energy, and mobility to thrive in fast evolving world. Join us to redefine what's possible.",
      cta1: "Start Your Project",
      cta2: "View Our Work",
      stat1: "Projects Delivered",
      stat2: "Global Clients",
      stat3: "Team Experts",
      stat4: "Years Innovation",
    },
    // About
    about: {
      tag: "About Us",
      title: "C3 Core",
      description:
        "C3 Core is a cutting edge IT agency building the engines behind modern digital products from AI systems and blockchain platforms to scalable web and mobile applications.",
      description2:
        "We combine deep compute expertise with rock solid engineering core to deliver reliable, high performance solutions that power everything from DEXs to AI SaaS. Positioned at the center of the digital cosmos, C3 Core helps ambitious teams explore, build, and scale without limits.",
      mission: "Our Mission",
      missionText:
        "To empower businesses worldwide with innovative, scalable, and intelligent software solutions that drive growth and digital transformation.",
      vision: "Our Vision",
      visionText:
        "To become the most trusted bridge between China's technology innovation and the global digital economy.",
      values: "Our Values",
      valuesText:
        "Innovation, Excellence, Integrity, and Collaboration drive every decision we make and every solution we deliver.",
    },
    // Services
    services: {
      tag: "Our Services",
      title: "End to End Technology Solutions",
      subtitle:
        "From strategy to execution, we provide comprehensive software consulting services tailored for the modern digital enterprise.",
      items: [
        {
          title: "Modern Web Development",
          description:
            "Building and maintaining websites, web applications, and seamless digital user experiences that drive business growth and engagement.",
          icon: "globe",
        },
        {
          title: "AI & Machine Learning",
          description:
            "Intelligent solutions powered by cutting edge AI, from natural language processing to computer vision and predictive analytics platforms.",
          icon: "brain",
        },
        {
          title: "Cloud Architecture",
          description:
            "Cloud-native solutions on AWS, Azure, and Alibaba Cloud. We design, migrate, and optimize your infrastructure for peak performance.",
          icon: "cloud",
        },
        {
          title: "Mobile Development",
          description:
            "Cross-platform mobile applications using React Native and Flutter, with deep integration into WeChat Mini Programs and Alipay ecosystem.",
          icon: "mobile",
        },
        {
          title: "Blockchain Development",
          description:
            "Building decentralized applications, smart contracts, and blockchain infrastructure for the next generation of digital trust and transparency.",
          icon: "bitcoin",
        },
        {
          title: "DevOps & Security",
          description:
            "CI/CD pipelines, container orchestration with Kubernetes, and comprehensive cybersecurity solutions to protect your digital assets.",
          icon: "shield",
        },
      ],
    },
    // Portfolio
    portfolio: {
      tag: "Our Work",
      title: "Featured Projects",
      subtitle:
        "Real-world solutions that drive real business results. Explore our latest projects across multiple industries.",
      viewProject: "View Project",
      viewAll: "View All Projects",
      items: [
        {
          title: "ShopStream E-Commerce Platform",
          category: "E-Commerce",
          description:
            "A high-performance e-commerce platform handling 10M+ monthly active users with real time inventory management and AI-powered recommendations.",
          tech: ["React", "Node.js", "MongoDB", "Redis"],
          link: "https://shopify.com",
        },
        {
          title: "FinVault Digital Banking",
          category: "FinTech",
          description:
            "A comprehensive digital banking solution with secure transaction processing, KYC verification, and blockchain-based audit trails.",
          tech: ["Vue.js", "Go", "PostgreSQL", "Blockchain"],
          link: "https://stripe.com",
        },
        {
          title: "AI Chatbot Platform",
          category: "AI & Machine Learning",
          description:
            "Botsify is built for agencies, consultants, and businesses that want to deploy or sell AI agents without building software from scratch.",
          tech: ["Python", "TensorFlow", "Chatbot", "Workflow"],
          link: "https://botsify.com/",
        },
        {
          title: "MedAI Diagnostic System",
          category: "Healthcare",
          description:
            "AI-powered medical imaging analysis platform achieving 98.5% accuracy in early disease detection, deployed across 50+ hospitals.",
          tech: ["PyTorch", "FastAPI", "React", "DICOM"],
          link: "https://cloud.google.com/solutions/healthcare",
        },
        {
          title: "CloudERP Enterprise Suite",
          category: "Enterprise",
          description:
            "Modular cloud ERP system for manufacturing enterprises with supply chain optimization and predictive maintenance capabilities.",
          tech: ["Java", "Spring Boot", "Kubernetes", "Kafka"],
          link: "https://azure.microsoft.com",
        },
        {
          title: "Zkrollup Defi Platform",
          category: "Blockchain",
          description:
            "Koi is a DeFi platform, serving as liquidity hub for all projects on zkSync. Koi's dynamic dApp features both concentrated and standard pool AMM DEX, complete with limit orders, farming platform, and bond platform.  Experience the evolution of DeFi 2.0 with low fees and gas less swaps.",
          tech: ["Solidity", "Hardhat", "Truffle", "Ethers.js"],
          link: "https://koi.finance/",
        },
      ],
    },
    // Team
    team: {
      tag: "Our Team",
      title: "Meet the Innovators",
      subtitle:
        "A passionate team of tech veterans and rising stars driving innovation from China to the world.",
      members: [
        {
          name: "Chen Wei",
          role: "CEO & Co Founder",
          bio: "Former Tencent engineer with 10+ years in software architecture. Passionate about bridging China's tech ecosystem with global markets.",
        },
        {
          name: "Liu Mei",
          role: "CTO & Co Founder",
          bio: "Ex-Alibaba Cloud architect specializing in distributed systems. Led teams of 50+ engineers delivering enterprise scale solutions.",
        },
        {
          name: "Zhang Hao",
          role: "Lead Developer",
          bio: "Full Stack wizard with deep expertise in React, Go, and cloud native architectures. Open source contributor and tech blogger.",
        },
        {
          name: "Wang Xiaoli",
          role: "Design Director",
          bio: "Award winning UX designer who believes in human centered design. Previously led design at a top Shenzhen AI startup.",
        },
      ],
    },
    // Testimonials
    testimonials: {
      tag: "Client Stories",
      title: "What Our Clients Say",
      subtitle:
        "Trusted by enterprises across Asia and beyond. Here is what our partners have to say about working with us.",
      items: [
        {
          quote:
            "C3 Core transformed our legacy system into modern cloud native platform in just 4 months. Their technical expertise and agile approach exceeded our expectations.",
          author: "Sarah Thompson",
          company: "VP of Engineering, TechGlobal Inc.",
        },
        {
          quote:
            "The AI recommendation engine they built for our e-commerce platform increased our conversion rate by 35%. Their team truly understands both technology and business.",
          author: "Michael Zhang",
          company: "CEO, Pacific Retail Group",
        },
        {
          quote:
            "Working with C3 Core was seamless. Their bilingual team made cross border collaboration effortless. The smart city platform they delivered is now managing data for 3 cities.",
          author: "Li Jianguo",
          company: "Director of IT, Guangdong Smart Infrastructure",
        },
      ],
    },
    // Stats
    stats: {
      title: "Numbers That Speak",
      items: [
        { value: "100+", label: "Projects Delivered" },
        { value: "50+", label: "Global Clients" },
        { value: "30+", label: "Team Members" },
        { value: "99.9%", label: "Uptime SLA" },
      ],
    },
    // Contact
    contact: {
      tag: "Get In Touch",
      title: "Let's Build Something Great Together",
      subtitle:
        "Whether you have a clear vision or just an idea, our team is ready to help you navigate the path from concept to launch.",
      form: {
        name: "Your Name",
        email: "Email Address",
        company: "Company Name",
        message: "Tell us about your project",
        submit: "Send Message",
        sending: "Sending...",
      },
      info: {
        address: "C3 Core, 2010 Caitian Rd, Futian District, Shenzhen",
        email: "admin@c3core.org",
        phone: "+86 755 4958 0295",
        hours: "Mon - Fri: 9:00 AM - 6:00 PM (CST)",
      },
    },
    // Footer
    footer: {
      description:
        "C3 Core is a cutting edge IT agency building the engines behind modern digital products from AI systems and blockchain platforms to scalable web and mobile applications.",
      quickLinks: "Quick Links",
      services: "Services",
      connect: "Connect",
      newsletter: "Newsletter",
      newsletterText: "Stay updated with our latest insights and tech trends.",
      emailPlaceholder: "Enter your email",
      subscribe: "Subscribe",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  zh: {
    // Navigation
    nav: {
      home: "\u9996\u9875",
      about: "\u5173\u4e8e\u6211\u4eec",
      services: "\u670d\u52a1",
      portfolio: "\u4f5c\u54c1\u96c6",
      team: "\u56e2\u961f",
      testimonials: "\u5ba2\u6237\u8bc4\u4ef7",
      contact: "\u8054\u7cfb\u6211\u4eec",
      getStarted: "\u5f00\u59cb\u5408\u4f5c",
    },
    // Hero
    hero: {
      tagline: "20\u591a\u5bb6\u4f01\u4e1a\u4fe1\u8d56",
      title1: "\u60a8\u7684\u6218\u7565\u5408\u4f5c\u4f19\u4f34",
      title2: "\u8f6f\u4ef6\u5f00\u53d1",
      description:
        "\u6253\u9020\u524d\u6cbf\u8f6f\u4ef6\u89e3\u51b3\u65b9\u6848\uff0c\u5927\u5e45\u964d\u4f4e\u6210\u672c\uff0c\u63d0\u5347\u7528\u6237\u4f53\u9a8c\uff0c\u52a0\u901f\u6570\u5b57\u5316\u8f6c\u578b\u3002\u6211\u4eec\u7684\u7cfb\u7edf\u52a9\u529b\u91d1\u878d\u3001\u80fd\u6e90\u548c\u51fa\u884c\u9816\u57df\u7684\u4f01\u4e1a\u5728\u77ac\u606f\u4e07\u53d8\u7684\u4e16\u754c\u4e2d\u84ec\u52c3\u53d1\u5c55\u3002\u52a0\u5165\u6211\u4eec\uff0c\u5171\u540c\u91cd\u65b0\u5b9a\u4e49\u65e0\u9650\u53ef\u80fd\u3002",
      cta1: "\u542f\u52a8\u9879\u76ee",
      cta2: "\u67e5\u770b\u4f5c\u54c1",
      stat1: "\u5df2\u4ea4\u4ed8\u9879\u76ee",
      stat2: "\u5168\u7403\u5ba2\u6237",
      stat3: "\u56e2\u961f\u4e13\u5bb6",
      stat4: "\u521b\u65b0\u5e74\u4efd",
    },
    // About
    about: {
      tag: "\u5173\u4e8e\u6211\u4eec",
      title: "C3 Core",
      description:
        "\u6211\u4eec\u76f8\u4fe1\u6280\u672f\u53ef\u4ee5\u6539\u53d8\u4f01\u4e1a\u3002\u6211\u4eec\u7684\u654f\u6377\u65b9\u6cd5\u7ed3\u5408\u4e2d\u56fd\u5145\u6ee1\u6d3b\u529b\u7684\u79d1\u6280\u751f\u6001\u7cfb\u7edf\uff0c\u4f7f\u6211\u4eec\u80fd\u591f\u63d0\u4f9b\u4e0d\u4ec5\u529f\u80fd\u5f3a\u5927\u800c\u4e14\u771f\u6b63\u9769\u547d\u6027\u7684\u89e3\u51b3\u65b9\u6848\u3002",
      description2:
        "\u534e\u8f6f\u54a8\u8be2\u4e8e2022\u5e74\u521b\u7acb\u4e8e\u6df1\u5733\u521b\u65b0\u4e2d\u5fc3\uff0c\u662f\u4e00\u5bb6\u5145\u6ee1\u6d3b\u529b\u7684\u521d\u521b\u516c\u53f8\uff0c\u81f4\u529b\u4e8e\u5c06\u4e1c\u65b9\u521b\u65b0\u4e0e\u5168\u7403\u6280\u672f\u9700\u6c42\u8fde\u63a5\u8d77\u6765\u3002\u6211\u4eec\u7684\u56e2\u961f\u7531\u5145\u6ee1\u6fc0\u60c5\u7684\u5de5\u7a0b\u5e08\u3001\u8bbe\u8ba1\u5e08\u548c\u6218\u7565\u5bb6\u7ec4\u6210\uff0c\u5c06\u6df1\u539a\u7684\u6280\u672f\u4e13\u957f\u4e0e\u65b0\u89c6\u89d2\u878d\u5408\uff0c\u89e3\u51b3\u590d\u6742\u7684\u6570\u5b57\u6311\u6218\u3002",
      mission: "\u6211\u4eec\u7684\u4f7f\u547d",
      missionText:
        "\u4ee5\u521b\u65b0\u3001\u53ef\u6269\u5c55\u548c\u667a\u80fd\u7684\u8f6f\u4ef6\u89e3\u51b3\u65b9\u6848\u8d4b\u80fd\u5168\u7403\u4f01\u4e1a\uff0c\u63a8\u52a8\u589e\u957f\u548c\u6570\u5b57\u5316\u8f6c\u578b\u3002",
      vision: "\u6211\u4eec\u7684\u613f\u666f",
      visionText:
        "\u6210\u4e3a\u4e2d\u56fd\u6280\u672f\u521b\u65b0\u4e0e\u5168\u7403\u6570\u5b57\u7ecf\u6d4e\u4e4b\u95f4\u6700\u503c\u5f97\u4fe1\u8d56\u7684\u6865\u6881\u3002",
      values: "\u6211\u4eec\u7684\u4ef7\u503c\u89c2",
      valuesText:
        "\u521b\u65b0\u3001\u5353\u8d8a\u3001\u8bda\u4fe1\u548c\u534f\u4f5c\u9a71\u52a8\u6211\u4eec\u7684\u6bcf\u4e00\u4e2a\u51b3\u7b56\u548c\u6bcf\u4e00\u4e2a\u89e3\u51b3\u65b9\u6848\u3002",
    },
    // Services
    services: {
      tag: "\u6211\u4eec\u7684\u670d\u52a1",
      title: "\u7aef\u5230\u7aef\u6280\u672f\u89e3\u51b3\u65b9\u6848",
      subtitle:
        "\u4ece\u6218\u7565\u5230\u6267\u884c\uff0c\u6211\u4eec\u4e3a\u73b0\u4ee3\u6570\u5b57\u4f01\u4e1a\u63d0\u4f9b\u5168\u9762\u7684\u8f6f\u4ef6\u54a8\u8be2\u670d\u52a1\u3002",
      items: [
        {
          title: "\u73b0\u4ee3\Web\u5f00\u53d1",
          description:
            "\u6784\u5efa\u548c\u7ef4\u62a4\u7f51\u7ad9\u3001\u0057\u0065\u0062\u5e94\u7528\u7a0b\u5e8f\u4ee5\u53ca\u6d41\u7545\u7684\u6570\u5b57\u7528\u6237\u4f53\u9a8c\uff0c\u4ece\u800c\u63a8\u52a8\u4e1a\u52a1\u589e\u957f\u548c\u7528\u6237\u53c2\u4e0e\u3002",
          icon: "globe",
        },
        {
          title: "AI\u4e0e\u673a\u5668\u5b66\u4e60",
          description:
            "\u7531\u5c16\u7aef AI \u9a71\u52a8\u7684\u667a\u80fd\u89e3\u51b3\u65b9\u6848\uff0c\u4ece\u81ea\u7136\u8bed\u8a00\u5904\u7406\u5230\u8ba1\u7b97\u673a\u89c6\u89c9\u548c\u9884\u6d4b\u5206\u6790\u5e73\u53f0\u3002",
          icon: "brain",
        },
        {
          title: "\u4e91\u67b6\u6784",
          description:
            "\u57fa\u4e8eAWS\u3001Azure\u548c\u963f\u91cc\u4e91\u7684\u4e91\u539f\u751f\u89e3\u51b3\u65b9\u6848\u3002\u6211\u4eec\u8bbe\u8ba1\u3001\u8fc1\u79fb\u548c\u4f18\u5316\u60a8\u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u4ee5\u8fbe\u5230\u5cf0\u503c\u6027\u80fd\u3002",
          icon: "cloud",
        },
        {
          title: "\u79fb\u52a8\u5f00\u53d1",
          description:
            "\u4f7f\u7528React Native\u548cFlutter\u5f00\u53d1\u8de8\u5e73\u53f0\u79fb\u52a8\u5e94\u7528\uff0c\u6df1\u5ea6\u96c6\u6210\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u548c\u652f\u4ed8\u5b9d\u751f\u6001\u7cfb\u7edf\u3002",
          icon: "mobile",
        },
        {
          title: "\u533a\u5757\u94fe\u5f00\u53d1",
          description:
            "\u6784\u5efa\u53bb\u4e2d\u5fc3\u5316\u5e94\u7528\u7a0b\u5e8f\u3001\u667a\u80fd\u5408\u7ea6\u548c\u533a\u5757\u94fe\u57fa\u7840\u8bbe\u65bd\uff0c\u4ee5\u5b9e\u73b0\u4e0b\u4e00\u4ee3\u6570\u5b57\u4fe1\u4efb\u548c\u900f\u660e\u5ea6\u3002",
          icon: "bitcoin",
        },
        {
          title: "DevOps\u4e0e\u5b89\u5168",
          description:
            "CI/CD\u7ba1\u9053\u3001Kubernetes\u5bb9\u5668\u7f16\u6392\u548c\u5168\u9762\u7684\u7f51\u7edc\u5b89\u5168\u89e3\u51b3\u65b9\u6848\uff0c\u4fdd\u62a4\u60a8\u7684\u6570\u5b57\u8d44\u4ea7\u3002",
          icon: "shield",
        },
      ],
    },
    // Portfolio
    portfolio: {
      tag: "\u6211\u4eec\u7684\u4f5c\u54c1",
      title: "\u7cbe\u9009\u9879\u76ee",
      subtitle:
        "\u771f\u5b9e\u7684\u89e3\u51b3\u65b9\u6848\u5e26\u6765\u771f\u5b9e\u7684\u4e1a\u52a1\u6210\u679c\u3002\u63a2\u7d22\u6211\u4eec\u5728\u591a\u4e2a\u884c\u4e1a\u7684\u6700\u65b0\u9879\u76ee\u3002",
      viewProject: "\u67e5\u770b\u9879\u76ee",
      viewAll: "\u67e5\u770b\u6240\u6709\u9879\u76ee",
      items: [
        {
          title: "ShopStream\u7535\u5546\u5e73\u53f0",
          category: "\u7535\u5b50\u5546\u52a1",
          description:
            "\u4e00\u4e2a\u9ad8\u6027\u80fd\u7535\u5546\u5e73\u53f0\uff0c\u5904\u74061000\u4e07+\u6708\u6d3b\u7528\u6237\uff0c\u5177\u5907\u5b9e\u65f6\u5e93\u5b58\u7ba1\u7406\u548cAI\u63a8\u8350\u529f\u80fd\u3002",
          tech: ["React", "Node.js", "MongoDB", "Redis"],
          link: "https://shopify.com",
        },
        {
          title: "FinVault\u6570\u5b57\u94f6\u884c",
          category: "\u91d1\u878d\u79d1\u6280",
          description:
            "\u5168\u9762\u7684\u6570\u5b57\u94f6\u884c\u89e3\u51b3\u65b9\u6848\uff0c\u5177\u5907\u5b89\u5168\u4ea4\u6613\u5904\u7406\u3001KYC\u9a8c\u8bc1\u548c\u57fa\u4e8e\u533a\u5757\u94fe\u7684\u5ba1\u8ba1\u8ddf\u8e2a\u3002",
          tech: ["Vue.js", "Go", "PostgreSQL", "Blockchain"],
          link: "https://stripe.com",
        },
        {
          title: "AI\u804a\u5929\u673a\u5668\u4eba\u5e73\u53f0 ",
          category: "\u4eba\u5de5\u667a\u80fd\u4e0e\u673a\u5668\u5b66\u4e60",
          description:
            "Botsify \u662f\u4e3a\u5e0c\u671b\u90e8\u7f72\u6216\u9500\u552e\u0020\u0041\u0049\u0020\u4ee3\u7406\u800c\u65e0\u9700\u4ece\u5934\u5f00\u59cb\u6784\u5efa\u8f6f\u4ef6\u7684\u673a\u6784\u3001\u987e\u95ee\u548c\u4f01\u4e1a\u800c\u6253\u9020\u7684\u3002",
          tech: ["Python", "TensorFlow", "Chatbot", "Workflow"],
          link: "https://botsify.com/",
        },
        {
          title: "MedAI\u8bca\u65ad\u7cfb\u7edf",
          category: "\u533b\u7597\u5065\u5eb7",
          description:
            "AI\u9a71\u52a8\u7684\u533b\u5b66\u5f71\u50cf\u5206\u6790\u5e73\u53f0\uff0c\u65e9\u671f\u75be\u75c5\u68c0\u6d4b\u51c6\u786e\u7387\u8fbe98.5%\uff0c\u5df2\u572850+\u5bb6\u533b\u9662\u90e8\u7f72\u3002",
          tech: ["PyTorch", "FastAPI", "React", "DICOM"],
          link: "https://cloud.google.com/solutions/healthcare",
        },
        {
          title: "CloudERP\u4f01\u4e1a\u5957\u4ef6",
          category: "\u4f01\u4e1a\u7ea7",
          description:
            "\u9762\u5411\u5236\u9020\u4f01\u4e1a\u7684\u6a21\u5757\u5316\u4e91ERP\u7cfb\u7edf\uff0c\u5177\u5907\u4f9b\u5e94\u94fe\u4f18\u5316\u548c\u9884\u6d4b\u6027\u7ef4\u62a4\u529f\u80fd\u3002",
          tech: ["Java", "Spring Boot", "Kubernetes", "Kafka"],
          link: "https://azure.microsoft.com",
        },
        {
          title: "Zkrollup DeFi \u5e73\u53f0",
          category: "\u533a\u5757\u94fe",
          description:
            "\u004b\u006f\u0069\u0020\u662f\u4e00\u4e2a\u0020\u0044\u0065\u0046\u0069\u0020\u5e73\u53f0\uff0c\u4e3a\u0020\u007a\u006b\u0053\u0079\u006e\u0063\u0020\u4e0a\u7684\u6240\u6709\u9879\u76ee\u63d0\u4f9b\u6d41\u52a8\u6027\u3002\u004b\u006f\u0069\u0020\u7684\u52a8\u6001\u0020\u0064\u0041\u0070\u0070\u0020\u5305\u542b\u96c6\u4e2d\u5f0f\u548c\u6807\u51c6\u6c60\u0020\u0041\u004d\u0044\u0020\u0044\u0045\u0058\uff0c\u5e76\u914d\u5907\u9650\u4ef7\u5355\u3001\u6316\u77ff\u5e73\u53f0\u548c\u503a\u5238\u5e73\u53f0\u3002\u4f53\u9a8c\u0020\u0044\u0065\u0046\u0069\u0020\u0032\u002e\u0030\u0020\u7684\u5168\u65b0\u6f14\u8fdb\uff0c\u5e74\u53d7\u4f4e\u624b\u7eed\u8d39\u548c\u514d\u0020\u0067\u0061\u0073\u0020\u8d39\u7684\u4e92\u6362\u670d\u52a1\u3002",
          tech: ["Solidity", "Hardhat", "Truffle", "Ethers.js"],
          link: "https://koi.finance/",
        },
      ],
    },
    // Team
    team: {
      tag: "\u6211\u4eec\u7684\u56e2\u961f",
      title: "\u8ba4\u8bc6\u521b\u65b0\u8005",
      subtitle:
        "\u4e00\u652f\u5145\u6ee1\u6fc0\u60c5\u7684\u6280\u672f\u8001\u5c06\u548c\u65b0\u661f\u56e2\u961f\uff0c\u4ece\u4e2d\u56fd\u63a8\u52a8\u521b\u65b0\u8d70\u5411\u4e16\u754c\u3002",
      members: [
        {
          name: "\u9648\u4f1f",
          role: "CEO\u4e0e\u8054\u5408\u521b\u59cb\u4eba",
          bio: "\u524d\u817e\u8baf\u5de5\u7a0b\u5e08\uff0c\u62e510\u5e74\u4ee5\u4e0a\u8f6f\u4ef6\u67b6\u6784\u7ecf\u9a8c\u3002\u70ed\u8877\u4e8e\u5c06\u4e2d\u56fd\u79d1\u6280\u751f\u6001\u4e0e\u5168\u7403\u5e02\u573a\u8fde\u63a5\u3002",
        },
        {
          name: "\u5218\u7f8e",
          role: "CTO\u4e0e\u8054\u5408\u521b\u59cb\u4eba",
          bio: "\u524d\u963f\u91cc\u4e91\u67b6\u6784\u5e08\uff0c\u4e13\u6ce8\u4e8e\u5206\u5e03\u5f0f\u7cfb\u7edf\u3002\u66fe\u9886\u5bfc50+\u4eba\u5de5\u7a0b\u5e08\u56e2\u961f\u4ea4\u4ed8\u4f01\u4e1a\u7ea7\u89e3\u51b3\u65b9\u6848\u3002",
        },
        {
          name: "\u5f20\u6d69",
          role: "\u9996\u5e2d\u5f00\u53d1\u8005",
          bio: "\u5168\u6808\u5f00\u53d1\u4e13\u5bb6\uff0c\u7cbe\u901aReact\u3001Go\u548c\u4e91\u539f\u751f\u67b6\u6784\u3002\u5f00\u6e90\u8d21\u732e\u8005\u548c\u6280\u672f\u535a\u4e3b\u3002",
        },
        {
          name: "\u738b\u5c0f\u4e3d",
          role: "\u8bbe\u8ba1\u603b\u76d1",
          bio: "\u83b7\u5956UX\u8bbe\u8ba1\u5e08\uff0c\u575a\u4fe1\u4ee5\u4eba\u4e3a\u672c\u7684\u8bbe\u8ba1\u3002\u66fe\u5728\u6df1\u5733\u9876\u7ea7AI\u521d\u521b\u516c\u53f8\u9886\u5bfc\u8bbe\u8ba1\u56e2\u961f\u3002",
        },
      ],
    },
    // Testimonials
    testimonials: {
      tag: "\u5ba2\u6237\u6545\u4e8b",
      title: "\u5ba2\u6237\u8bc4\u4ef7",
      subtitle:
        "\u53d7\u5230\u4e9a\u6d32\u53ca\u5176\u4ed6\u5730\u533a\u4f01\u4e1a\u7684\u4fe1\u8d56\u3002\u4ee5\u4e0b\u662f\u6211\u4eec\u7684\u5408\u4f5c\u4f19\u4f34\u7684\u8bc4\u4ef7\u3002",
      items: [
        {
          quote:
            "\u534e\u8f6f\u54a8\u8be2\u4ec5\u7528\u56db\u4e2a\u6708\u5c31\u5c06\u6211\u4eec\u7684\u4f20\u7edf\u7cfb\u7edf\u8f6c\u53d8\u4e3a\u73b0\u4ee3\u4e91\u539f\u751f\u5e73\u53f0\u3002\u4ed6\u4eec\u7684\u6280\u672f\u4e13\u957f\u548c\u654f\u6377\u65b9\u6cd5\u8d85\u51fa\u4e86\u6211\u4eec\u7684\u9884\u671f\u3002",
          author: "Sarah Thompson",
          company: "\u5de5\u7a0b\u526f\u603b\u88c1\uff0cTechGlobal Inc.",
        },
        {
          quote:
            "\u4ed6\u4eec\u4e3a\u6211\u4eec\u7535\u5546\u5e73\u53f0\u6784\u5efa\u7684AI\u63a8\u8350\u5f15\u64ce\u5c06\u6211\u4eec\u7684\u8f6c\u5316\u7387\u63d0\u9ad8\u4e8635%\u3002\u4ed6\u4eec\u7684\u56e2\u961f\u771f\u6b63\u7406\u89e3\u6280\u672f\u548c\u4e1a\u52a1\u3002",
          author: "\u5f20\u660e",
          company: "CEO\uff0c\u592a\u5e73\u6d0b\u96f6\u552e\u96c6\u56e2",
        },
        {
          quote:
            "\u4e0e\u534e\u8f6f\u54a8\u8be2\u7684\u5408\u4f5c\u975e\u5e38\u987a\u7545\u3002\u4ed6\u4eec\u7684\u53cc\u8bed\u56e2\u961f\u4f7f\u8de8\u5883\u5408\u4f5c\u53d8\u5f97\u8f7b\u677e\u3002\u4ed6\u4eec\u4ea4\u4ed8\u7684\u667a\u6167\u57ce\u5e02\u5e73\u53f0\u73b0\u5df2\u4e3a3\u4e2a\u57ce\u5e02\u7ba1\u7406\u6570\u636e\u3002",
          author: "\u674e\u5efa\u56fd",
          company: "IT\u603b\u76d1\uff0c\u5e7f\u4e1c\u667a\u6167\u57fa\u7840\u8bbe\u65bd",
        },
      ],
    },
    // Stats
    stats: {
      title: "\u6570\u636e\u8bf4\u8bdd",
      items: [
        { value: "150+", label: "\u5df2\u4ea4\u4ed8\u9879\u76ee" },
        { value: "80+", label: "\u5168\u7403\u5ba2\u6237" },
        { value: "35+", label: "\u56e2\u961f\u6210\u5458" },
        { value: "99.9%", label: "\u53ef\u7528\u6027SLA" },
      ],
    },
    // Contact
    contact: {
      tag: "\u8054\u7cfb\u6211\u4eec",
      title: "\u8ba9\u6211\u4eec\u4e00\u8d77\u521b\u9020\u4f1f\u5927\u7684\u4e8b\u4e1a",
      subtitle:
        "\u65e0\u8bba\u60a8\u6709\u660e\u786e\u7684\u613f\u666f\u8fd8\u662f\u4e00\u4e2a\u60f3\u6cd5\uff0c\u6211\u4eec\u7684\u56e2\u961f\u90fd\u51c6\u5907\u597d\u5e2e\u52a9\u60a8\u4ece\u6982\u5ff5\u5230\u53d1\u5e03\u3002",
      form: {
        name: "\u60a8\u7684\u59d3\u540d",
        email: "\u7535\u5b50\u90ae\u7bb1",
        company: "\u516c\u53f8\u540d\u79f0",
        message: "\u8bf7\u544a\u8bc9\u6211\u4eec\u60a8\u7684\u9879\u76ee",
        submit: "\u53d1\u9001\u6d88\u606f",
        sending: "\u53d1\u9001\u4e2d...",
      },
      info: {
        address: "\u6df1\u5733\u5e02\u798f\u7530\u533a\u5f69\u7530\u8def\u0032\u0030\u0031\u0030\u53f7, C3 Core",
        email: "admin@c3core.org",
        phone: "+86 755 4958 0295",
        hours: "\u5468\u4e00\u81f3\u5468\u4e94: \u4e0a\u53489:00 - \u4e0b\u53486:00 (CST)",
      },
    },
    // Footer
    footer: {
      description:
        "\u6211\u4eec\u76f8\u4fe1\u6280\u672f\u53ef\u4ee5\u6539\u53d8\u4f01\u4e1a\u3002\u6211\u4eec\u7684\u654f\u6377\u65b9\u6cd5\u7ed3\u5408\u4e2d\u56fd\u5145\u6ee1\u6d3b\u529b\u7684\u79d1\u6280\u751f\u6001\u7cfb\u7edf\uff0c\u4f7f\u6211\u4eec\u80fd\u591f\u63d0\u4f9b\u4e0d\u4ec5\u529f\u80fd\u5f3a\u5927\u800c\u4e14\u771f\u6b63\u9769\u547d\u6027\u7684\u89e3\u51b3\u65b9\u6848\u3002",
      quickLinks: "\u5feb\u901f\u94fe\u63a5",
      services: "\u670d\u52a1",
      connect: "\u8054\u7cfb",
      newsletter: "\u65b0\u95fb\u901a\u8baf",
      newsletterText: "\u5173\u6ce8\u6211\u4eec\u7684\u6700\u65b0\u89c1\u89e3\u548c\u6280\u672f\u8d8b\u52bf\u3002",
      emailPlaceholder: "\u8f93\u5165\u60a8\u7684\u90ae\u7bb1",
      subscribe: "\u8ba2\u9605",
      rights: "\u7248\u6743\u6240\u6709\u3002",
      privacy: "\u9690\u79c1\u653f\u7b56",
      terms: "\u670d\u52a1\u6761\u6b3e",
    },
  },
} as const

export type Translations = (typeof translations)[Locale]
