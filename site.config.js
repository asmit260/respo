/**
 * ═══════════════════════════════════════════════════════════════════
 *  LITTLE STARS PRESCHOOL — SITE CONFIGURATION
 *  ─────────────────────────────────────────────────────────────────
 *  ✏️  Edit THIS FILE to update ALL pages at once.
 *  No coding knowledge needed — just change the text/values below.
 *
 *  WHAT YOU CAN EDIT HERE:
 *   1. school       → Name, phone, address, timings, social links
 *   2. hero         → Homepage heading, subtext, button labels
 *   3. stats        → Achievement numbers (students, teachers, years)
 *   4. trust        → "Why Parents Trust Us" card content
 *   5. programs     → Playgroup, Nursery, Kindergarten details
 *   6. gallery      → ADD / REMOVE / REORDER gallery images here
 *   7. testimonials → Parent review text and names
 *   8. teachers     → Teacher names, roles, bios
 *   9. about        → School story, founder message, vision/mission
 *  10. admission    → Age criteria, documents required
 *
 *  💡 HOW TO ADD A GALLERY PHOTO:
 *     Add a new line inside gallery[] like:
 *     { src: "images/your-photo.jpg", alt: "Description", category: "activities" }
 *     Categories: "activities" | "learning" | "play" | "events"
 *
 *  💡 HOW TO REMOVE A GALLERY PHOTO:
 *     Delete the line with that photo from the gallery[] array.
 * ═══════════════════════════════════════════════════════════════════
 */

const SITE_CONFIG = {

  // ─── 1. SCHOOL DETAILS ─────────────────────────────────────────────
  school: {
    name:         "Amazing Pathshala - Best Pre school in Vastrapur Ahmedabad",
    logo:         "images/logo.png",
    tagline:      "Where Every Child Shines",
    phone:        "092658 81804",
    whatsapp:     "919265881804",       // No spaces, no +, with country code
    email:        "hello@amazingpathshala.in",
    address:      "Trilok Row House, 19, Parmeshwar Mahadev Rd, Lad Society, Vastrapur, Ahmedabad, Gujarat 380015",
    mapEmbed:     "https://maps.google.com/maps?q=Vastrapur,Ahmedabad&output=embed",
    visitTiming:  "Open – Closes 8 pm",
    founded:      "2010",
    instagram:    "#",   // Replace with your Instagram page URL
    facebook:     "#",   // Replace with your Facebook page URL
  },

  // ─── 2. NAVIGATION LINKS ───────────────────────────────────────────
  nav: [
    { label: "Home",      href: "index.html"     },
    { label: "About",     href: "about.html"     },
    { label: "Programs",  href: "programs.html"  },
    { label: "Gallery",   href: "gallery.html"   },
    { label: "Admission", href: "admission.html" },
    { label: "Contact",   href: "contact.html"   },
  ],

  // ─── 3. HOMEPAGE HERO ──────────────────────────────────────────────
  hero: {
    label:       "⭐ Admissions Open 2025–26",
    heading:     "A Safe & Happy Preschool for Your Child's First Learning Journey",
    subtext:     "Play-based learning, caring teachers, and a nurturing environment for children aged 2–5 years.",
    primaryBtn:  { label: "📅 Book a School Visit", href: "contact.html"  },
    secondaryBtn:{ label: "Our Programs",           href: "programs.html" },
    badges:      ["✔ Safe Campus", "✔ Qualified Teachers", "✔ Play Based Learning"],
    image:       "images/real_img1.jpg",
    slideshow:   [
      "images/real_img1.jpg",
      "images/real_img2.jpeg",
      "images/real_img3.jpg",
      "images/real_img4.jpg",
      "images/real_img5.jpg",
      "images/real_img6.jpeg"
    ]
  },

  // ─── 4. ACHIEVEMENT STATS ──────────────────────────────────────────
  stats: [
    { value: "500+", label: "Happy Students"      },
    { value: "15+",  label: "Expert Teachers"     },
    { value: "15+",  label: "Years of Excellence" },
    { value: "3",    label: "Programs Offered"    },
  ],

  // ─── 5. TRUST CARDS ────────────────────────────────────────────────
  trust: [
    {
      icon:  "🛡️",
      title: "Safe Environment",
      desc:  "CCTV-monitored campus with secure entry/exit and trained staff for complete child safety.",
    },
    {
      icon:  "🎓",
      title: "Experienced Teachers",
      desc:  "Our educators are certified professionals with years of early childhood development expertise.",
    },
    {
      icon:  "🎮",
      title: "Play Based Learning",
      desc:  "Learning through play, stories, and hands-on activities that spark curiosity and creativity.",
    },
    {
      icon:  "👨‍👩‍👧",
      title: "Small Class Size",
      desc:  "Low student-to-teacher ratio ensures personalized attention and faster learning outcomes.",
    },
  ],

  // ─── 5B. PRINCIPAL MESSAGE ─────────────────────────────────────────
  principal: {
    photo: "images/principal.jpg",
    message: "Welcome to Little Stars Preschool! We believe that early childhood is a magical time of discovery. Our goal is to nurture every child's innate curiosity and provide a safe, loving environment where they can blossom into confident learners. We look forward to partnering with you on this beautiful journey.",
    name: "Mrs. Kavita Sharma",
    title: "Principal & Founder"
  },

  // ─── 6. PROGRAMS ───────────────────────────────────────────────────
  programs: [
    {
      name:        "Playgroup",
      age:         "2 – 3 Years",
      description: "A gentle introduction to school life. Focus on play, social interaction, and sensory development in a loving, home-like environment.",
      image:       "images/program-playgroup.jpg",
      activities:  ["Sensory Play", "Story Time", "Music & Movement", "Art & Craft"],
      colorClass:  "orange",
    },
    {
      name:        "Nursery",
      age:         "3 – 4 Years",
      description: "Focus on social skills, basic numbers, letters, and creative activities. Building confidence through guided play and structured learning.",
      image:       "images/program-nursery.jpg",
      activities:  ["Number Fun", "ABC Learning", "Creative Art", "Outdoor Play"],
      colorClass:  "green",
    },
    {
      name:        "Kindergarten",
      age:         "4 – 5 Years",
      description: "School readiness program covering literacy, numeracy, and critical thinking to prepare your child for primary school with confidence.",
      image:       "images/program-kindergarten.jpg",
      activities:  ["Reading & Writing", "Math Concepts", "Science Experiments", "Public Speaking"],
      colorClass:  "purple",
    },
  ],

  // ─── 7. GALLERY ────────────────────────────────────────────────────
  // ✏️  ADD A PHOTO: Add a new { src, alt, category } line.
  // ✏️  REMOVE A PHOTO: Delete that line.
  // ✏️  REORDER: Move lines up/down.
  // Categories: "activities" | "learning" | "play" | "events"
  gallery: [
    { src: "images/gallery-1.jpg",  alt: "Kids enjoying art and craft",         category: "activities" },
    { src: "images/gallery-2.jpg",  alt: "Teacher reading story to students",   category: "learning"   },
    { src: "images/gallery-3.jpg",  alt: "Children in outdoor play area",       category: "play"       },
    { src: "images/gallery-4.jpg",  alt: "Group activity time in classroom",    category: "activities" },
    { src: "images/gallery-5.jpg",  alt: "Teacher helping child with letters",  category: "learning"   },
    { src: "images/gallery-6.jpg",  alt: "Annual day celebration",              category: "events"     },
    { src: "images/gallery-7.jpg",  alt: "Birthday celebration in class",       category: "events"     },
    { src: "images/gallery-8.jpg",  alt: "Kids learning with building blocks",  category: "play"       },
  ],

  // ─── 8. LEARNING APPROACH ──────────────────────────────────────────
  learningApproach: [
    {
      emoji: "🎯",
      title: "Play-Based Learning",
      desc:  "Children learn best through play. Every activity is designed to teach key concepts while keeping children joyfully engaged all day.",
    },
    {
      emoji: "🎨",
      title: "Creative Activities",
      desc:  "Art, music, dance, and storytelling nurture creativity, self-expression, and imagination from the earliest stages.",
    },
    {
      emoji: "💪",
      title: "Confidence Building",
      desc:  "Group activities and individual recognition help every child grow into a confident, happy, and resilient learner.",
    },
  ],

  // ─── 9. TESTIMONIALS ───────────────────────────────────────────────
  testimonials: [
    {
      name:     "Sonal Soni",
      location: "3 years ago",
      text:     "My daughter Anaya studies in Little Stars in Nursery. I took the admission after a lot of research and positive feedback from parents and I must say that I am very happy with my decision. They make each and every kid comfortable and work on their weak areas.",
      rating:   5,
      initials: "SS",
      color:    "#FF7A00",
    },
    {
      name:     "Pinky Nathbawa",
      location: "3 years ago",
      text:     "Little Stars is the best pre school. They have very friendly and calm staff members, who are very well trained. The education system is just great. They have a very clean, bright, and well maintained space.",
      rating:   5,
      initials: "PN",
      color:    "#4CAF50",
    },
    {
      name:     "Revati More",
      location: "2 years ago",
      text:     "Finalised this school for our son after considering 3-4 other options. I am glad we did so. Little Stars is amazing in following aspects: Structured curriculum, engaging events, and caring teachers.",
      rating:   5,
      initials: "RM",
      color:    "#7C3AED",
    },
    {
      name:     "Vala Dhara",
      location: "3 years ago",
      text:     "The pre-school is located in a building which is very nice, spacious and beautiful. The staffs are very friendly, caring and supportive. My child is very happy there and is learning a lot of new things everyday.",
      rating:   5,
      initials: "VD",
      color:    "#E91E63",
    },
  ],

  // ─── 10. ADMISSION ─────────────────────────────────────────────────
  admissionSteps: [
    { step: "01", title: "Schedule a Visit",   desc: "Call us or fill the enquiry form to book a free school tour at your convenience." },
    { step: "02", title: "Meet Our Teachers",  desc: "Visit the campus, see the classrooms, meet the educators, and ask all your questions." },
    { step: "03", title: "Complete Admission", desc: "Submit required documents and complete the simple registration process." },
  ],
  admissionInfo: {
    ageGroups: [
      { program: "Playgroup",    age: "2 – 3 years", cutoff: "Child must be 2 years by June 1" },
      { program: "Nursery",      age: "3 – 4 years", cutoff: "Child must be 3 years by June 1" },
      { program: "Kindergarten", age: "4 – 5 years", cutoff: "Child must be 4 years by June 1" },
    ],
    documents: [
      "Birth Certificate (original + photocopy)",
      "2 recent passport-size photographs",
      "Parent / Guardian Aadhaar Card (photocopy)",
      "Address proof (utility bill or rental agreement)",
      "Medical / vaccination record",
    ],
    academicYear:   "April – March",
    admissionOpen:  true,   // Set to false to show "Admissions Closed" message
  },

  // ─── 10B. POPUP BANNER ─────────────────────────────────────────────
  popup: {
    enabled: true,
    title: "Admissions Open 2026",
    text: "Enroll your child today for a bright future. Limited seats available!",
    btnText: "Apply Now",
    btnLink: "admission.html",
    delaySeconds: 8
  },

  // ─── 11. TEACHERS ──────────────────────────────────────────────────
  teachers: [
    {
      name:     "Mrs. Kavita Sharma",
      role:     "Head Teacher & Founder",
      initials: "KS",
      bio:      "M.Ed in Early Childhood Education with 15+ years of experience in preschool pedagogy and child development.",
    },
    {
      name:     "Ms. Deepa Mehta",
      role:     "Nursery & Playgroup Teacher",
      initials: "DM",
      bio:      "Diploma in Early Childhood Education. Passionate about play-based learning and child psychology.",
    },
    {
      name:     "Ms. Anjali Singh",
      role:     "Kindergarten Teacher",
      initials: "AS",
      bio:      "B.Ed graduate specializing in primary education. Expert in building school readiness skills in young learners.",
    },
  ],

  // ─── 12. ABOUT PAGE ────────────────────────────────────────────────
  about: {
    story:          "Founded in 2010, Little Stars Preschool began with a simple dream — to create a safe, loving, and stimulating environment where every child could discover the joy of learning. What started as a small classroom of 20 students has grown into a trusted institution for hundreds of Jaipur families.",
    founderMessage: "Our philosophy is simple: every child is unique and deserves a learning experience that nurtures their individual strengths. We believe the first five years are the most important in a child's life. We are proud partners with parents in shaping confident, curious, and happy learners.",
    founderName:    "Mrs. Kavita Sharma",
    founderTitle:   "Founder & Head Teacher, Little Stars Preschool",
    vision:         "To be the most trusted preschool in Jaipur, where every child flourishes academically, socially, and emotionally.",
    mission:        "To provide a safe, inclusive, and stimulating early learning environment that develops confident, curious, and creative children ready for lifelong learning.",
  },

  // ─── 13. SEO META ──────────────────────────────────────────────────
  seo: {
    siteName:    "Little Stars Preschool",
    description: "Little Stars Preschool in Jaipur — A safe, play-based learning environment for children aged 2–5. Playgroup, Nursery & Kindergarten programs.",
    keywords:    "preschool jaipur, playgroup jaipur, nursery school jaipur, kindergarten near me, best preschool jaipur",
  },

};
