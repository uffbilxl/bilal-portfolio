export const profile = {
  name: 'Bilal Arshad',
  tagline: 'Cyber Security Student · Ethical Hacker in Training · Full-Stack Builder',
  shortBio:
    'BSc (Hons) Cyber Security student at Birmingham City University (Predicted: First Class Honours). Combining technical depth in security, networking, and programming with real-world leadership experience. Currently seeking placements in cyber security, penetration testing, or software development.',
  longBio:
    'A proactive and customer-focused individual currently pursuing a BSc (Hons) Cyber Security at Birmingham City University with a predicted grade of First Class Honours. Demonstrates adaptability, resilience, and strong communication skills, with proven experience in customer service and leadership under pressure. Skilled in problem-solving and committed to contributing effectively within both independent and team-based environments.',
  linkedin: 'https://www.linkedin.com/in/bilal-arshad-4a07812b4/',
  cvPath: '/Bilal-Arshad-CV.pdf',
  email: 'mbarshad1461@outlook.com', // Replace with real email
  location: 'Birmingham, UK',
}

export const skills = [
  {
    category: 'Programming',
    icon: '⟨/⟩',
    color: 'cyan',
    items: [
      'Python (Scripting, OOP, Web Dev)',
      'HTML5 & CSS3',
      'SQL (MySQL, SQLite)',
      'Shell Scripting (Bash)',
    ],
  },
  {
    category: 'Systems & OS',
    icon: '⚙',
    color: 'green',
    items: [
      'Linux System Administration',
      'Command-Line Operations',
      'User & Permission Management',
      'Process Automation',
    ],
  },
  {
    category: 'Networking',
    icon: '◈',
    color: 'purple',
    items: [
      'Cisco Packet Tracer',
      'LAN/WAN Configuration',
      'IPv4 / IPv6 Addressing',
      'DHCP & DNS Setup',
    ],
  },
  {
    category: 'Cyber Security',
    icon: '\./',
    color: 'cyan',
    items: [
      'Penetration Testing',
      'Vulnerability Scanning',
      'Cryptography Fundamentals',
      'Digital Forensics',
      'SQL Injection Defence',
      'Brute Force Mitigation',
    ],
  },
  {
    category: 'Cloud & Virtualisation',
    icon: '☁',
    color: 'green',
    items: [
      'AWS EC2',
      'VirtualBox',
      'Virtual Machine Management',
      'Cloud Security Basics',
    ],
  },
  {
    category: 'Tools & Creative',
    icon: '◉',
    color: 'purple',
    items: [
      'Adobe Premiere Pro',
      'Adobe After Effects',
      'Adobe Illustrator',
      'Final Cut Pro',
      'CAD Tools',
    ],
  },
]

export const projects = [
  {
    id: 8,
    title: 'Unihack × Centauri Media Hackathon — 1st Place',
    tech: ['UX Design', 'User Research', 'Prototyping', 'Presentation'],
    category: 'Hackathon Win',
    color: 'cyan',
    winner: true,
    liveUrl: 'https://www.linkedin.com/posts/bilal-arshad-4a07812b4_over-the-past-two-days-i-competed-at-the-activity-7447754585806557184-Z9ck?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuTpXgBLCb1WjLQMEw-8WCFAC4C3QO-P7k',
    summary:
      'Placed 1st overall at the Unihack × Centauri Media LTD hackathon held at STEAMhouse, Birmingham. Our team tackled the Umrah Supermarket challenge, delivering a user-centred design solution for a supermarket chain across two intensive days.',
    bullets: [
      'Won 1st place overall competing against high-calibre teams at STEAMhouse, Birmingham.',
      'Tackled the Umrah Supermarket challenge with a design-first approach, focusing on usability and real-world impact.',
      'Iterated rapidly on feedback across two days to deliver a polished final solution and presentation.',
      'Collaborated as a team of five — Muhammad Asim Raza, Samuel Adegbusi, Savia Monteiro, Houssame-Eddine Ait Moulay, and myself — under pressure to deliver a cohesive, well-presented outcome.',
    ],
  },
  {
    id: 1,
    title: 'Hospital Management System',
    tech: ['Python', 'MySQL', 'Database Design', 'Authentication'],
    category: 'Full-Stack Application',
    color: 'cyan',
    summary:
      'A fully functional healthcare management platform with role-based access for administrators, doctors, and patients — built from the ground up in Python.',
    bullets: [
      'Designed relational database schema to model complex healthcare relationships across three user roles.',
      'Implemented secure user authentication and session management to protect sensitive patient records.',
      'Built CRUD operations for appointments, prescriptions, and patient histories with data integrity constraints.',
      'Focused on input validation and parameterised queries to prevent SQL injection vulnerabilities.',
    ],
  },
  {
    id: 2,
    title: 'Small LAN Configuration',
    tech: ['Cisco Packet Tracer', 'IPv4/IPv6', 'DHCP', 'DNS'],
    category: 'Network Engineering',
    color: 'green',
    summary:
      'Simulated a production-grade enterprise LAN environment with full routing, addressing, and service configuration in Cisco Packet Tracer.',
    bullets: [
      'Configured routers, managed switches, and end-user PCs across a multi-subnet topology.',
      'Assigned and validated dual-stack IPv4 and IPv6 addressing with correct subnet masks and gateways.',
      'Set up DHCP server pools for automatic address allocation and a local DNS server for hostname resolution.',
      'Verified end-to-end connectivity using ping, traceroute, and packet capture diagnostics.',
    ],
  },
  {
    id: 3,
    title: 'Cyber Security Labs',
    tech: ['Kali Linux', 'Nmap', 'Metasploit', 'Wireshark'],
    category: 'Security & Penetration Testing',
    color: 'purple',
    summary:
      'Hands-on offensive and defensive security practicals covering the full attack-and-defend lifecycle.',
    bullets: [
      'Conducted vulnerability scans against intentionally vulnerable systems to identify open ports and CVEs.',
      'Performed controlled password cracking exercises using dictionary and brute-force techniques.',
      'Analysed network traffic captures to identify anomalies and potential intrusion indicators.',
      'Hardened system configurations as countermeasures against SQL injection, XSS, and brute-force attacks.',
    ],
  },
  {
    id: 4,
    title: 'Operating System Administration',
    tech: ['Linux', 'Bash', 'Shell Scripting', 'Cron Jobs'],
    category: 'Systems Administration',
    color: 'cyan',
    summary:
      'Built and managed a full Linux environment from scratch, automating administration tasks through bespoke shell scripts.',
    bullets: [
      'Provisioned user accounts with role-appropriate permissions and group memberships for a multi-user system.',
      'Managed running processes, daemons, and system services using systemctl and task schedulers.',
      'Developed Bash scripts to automate backups, log rotation, and system health reporting.',
      'Configured firewall rules and audited system logs to maintain a secure operating environment.',
    ],
  },
  {
    id: 5,
    title: 'Network Scanning & Vulnerability Analysis Lab',
    tech: ['Kali Linux', 'Nmap', 'Metasploitable', 'VirtualBox'],
    category: 'Penetration Testing',
    color: 'green',
    summary:
      'Built a virtual penetration testing lab to analyse how systems expose services on a network and identify potential vulnerabilities using industry-standard reconnaissance tools.',
    bullets: [
      'Configured a virtual lab environment using Kali Linux as the attacker machine and Metasploitable as the intentionally vulnerable target.',
      'Performed network discovery and service enumeration using Nmap, identifying open ports, service versions, and software configurations.',
      'Used advanced Nmap scanning (-A flag) to perform OS detection, traceroute, and script scanning for a complete picture of the target system.',
      'Researched known vulnerabilities associated with discovered services such as FTP, Telnet, and exposed web servers.',
      'Developed a structured, evidence-based approach to network reconnaissance — directly applicable to analysing IoT devices and connected systems.',
    ],
  },
  {
    id: 6,
    title: 'Network Traffic Analysis & Protocol Inspection',
    tech: ['Wireshark', 'HTTP', 'SQL', 'Network Forensics'],
    category: 'Software Security',
    color: 'purple',
    summary:
      'Conducted hands-on network traffic analysis using Wireshark to intercept and inspect unencrypted protocols, exposing real-world risks of plaintext data transmission.',
    bullets: [
      'Captured and analysed live network traffic using Wireshark to inspect HTTP communications at the packet level.',
      'Successfully intercepted and decoded plaintext HTTP requests, revealing hidden text information and credentials transmitted without encryption.',
      'Identified and extracted SQL queries embedded within network traffic, demonstrating how database interactions can be exposed on unprotected networks.',
      'Observed clear-text username and password leaks transmitted over unencrypted HTTP, highlighting the critical importance of HTTPS and transport layer security.',
      'Developed practical understanding of why encryption protocols such as TLS are essential for protecting data in transit across modern networks.',
    ],
  },
  {
    id: 7,
    title: 'SentinelIQ — AI Security Dashboard',
    tech: ['Python', 'Streamlit', 'Claude API', 'Nmap', 'SQLite', 'NVD API', 'Plotly'],
    category: 'Full-Stack Security Tool',
    color: 'purple',
    liveUrl: 'https://sentinel-iq-production.up.railway.app',
    githubUrl: 'https://github.com/uffbilxl/Sentinel-IQ',
    summary:
      'A fully deployed AI-powered network security dashboard that scans networks, identifies CVEs, scores risk, and generates plain-English threat summaries using the Claude AI API — with a built-in prompt injection defence layer based on the Sentinel Framework.',
    bullets: [
      'Built a real-time network scanner using python-nmap to discover devices, open ports, and running services across a target IP range.',
      'Integrated the NVD (National Vulnerability Database) API to cross-reference discovered services against known CVEs and automatically assign risk scores from 1–10.',
      'Connected the Claude AI API to generate plain-English threat summaries and actionable security recommendations from raw scan data.',
      'Implemented a prompt injection defence layer based on the original Sentinel Framework proposed in my conference paper (Arshad, 2026).',
      'Built PDF and Excel report export functionality, scan history tracking, and interactive Plotly visualisations in a Streamlit web dashboard.',
      'Deployed live to Railway — visit the live demo at sentinel-iq-production.up.railway.app.',
    ],
  },
]

export const education = [
  {
    period: '2024 – Present',
    institution: 'Birmingham City University',
    qualification: 'BSc (Hons) Cybersecurity',
    grade: 'Predicted: First Class Honours',
    note: 'Progressing to MSc Cybersecurity',
    modules: [
      'Computer Systems',
      'Cyber Security Fundamentals',
      'Applied Operating Systems',
      'Computer Programming',
      'Network Fundamentals & Software Security',
      'System Security Attacks and Defences',
    ],
    current: true,
  },
  {
    period: '2022 – 2024',
    institution: 'College Education',
    qualification: 'Level 3 Extended Diploma in IT (Networking and Cybersecurity)',
    grade: 'Grade: D*, D*, D* (Triple Distinction*)',
    modules: [],
    current: false,
  },
  {
    period: '2017 – 2022',
    institution: 'School Education',
    qualification: 'GCSEs',
    grade: '9 GCSEs at Grade 6 and above',
    note: 'Including English Language, Mathematics, and IT Level 2',
    modules: [],
    current: false,
  },
]

export const experience = [
  {
    period: 'Sep 2025 – Present',
    role: 'Visiting Demonstrator',
    company: 'Birmingham City University',
    type: 'employment',
    bullets: [
      'Assisted students in modules where I excelled, providing tailored support and academic guidance.',
      'Leveraged speaking and teaching experience to enhance student understanding of complex concepts.',
      'Collaborated with faculty to identify student challenges and improve overall learning outcomes.',
    ],
  },
  {
    period: '2022 – 2023',
    role: 'Project Manager',
    company: 'Digital Innovators with HS2',
    type: 'employment',
    bullets: [
      'Managed and quality-controlled design deliverables using professional CAD tooling.',
      'Communicated complex technical information clearly to non-technical stakeholders.',
      'Developed workflow automation tools that improved team efficiency and reduced manual overhead.',
      'Awarded Best Innovator Project for outstanding contributions to the programme.',
    ],
  },
  {
    period: '2025',
    role: 'Volunteer — International Student Welcome Programme',
    company: 'Birmingham City University',
    type: 'volunteering',
    bullets: [
      'Supported international students during university induction — providing guidance on processes, accommodation, and campus services.',
      'Delivered friendly, inclusive assistance both in-person and via email communication.',
      'Demonstrated strong cross-cultural communication while collaborating with staff and fellow volunteers.',
    ],
  },
]

export const achievements = [
  { label: '🏆 Best Innovator Project — HS2, 2022', type: 'award' },
  { label: '🏏 2nd Best County Figures — Warwickshire Cricket League, 2023', type: 'award' },
  { label: '🎓 Multiple Excellence Awards throughout academic career', type: 'award' },
  { label: '⚽ Football & Cricket Enthusiast', type: 'interest' },
  { label: '🚗 Full UK Driving Licence', type: 'credential' },
  { label: '🎬 Adobe Creative Suite (Premiere, After Effects, Illustrator)', type: 'skill' },
  { label: '✂️ Final Cut Pro — Video Editing', type: 'skill' },
  { label: '🔐 Aspiring Certified Ethical Hacker (CEH)', type: 'goal' },
]

export const terminalLines = [
  '> initialising portfolio.exe...',
  '> scanning skills database...',
  '> loading projects: [████████░░] 80%',
  '> compiling achievements...',
  '> establishing secure connection...',
  '> running vulnerability assessments...',
  '> optimising network configurations...',
  '> deploying to production...',
  '> status: ready for placements 🟢',
  '> awaiting incoming connections...',
]

export const stats = [
  { label: 'Degree', value: 'BSc Cyber Security', sub: 'Predicted: 1st Class' },
  { label: 'Experience', value: '2+ Years', sub: 'Leadership & Tech' },
  { label: 'Projects', value: '4+', sub: 'Shipped & Documented' },
  { label: 'Grade', value: 'D*, D*, D*', sub: 'Level 3 Diploma' },
]
