const Videos = [
  {
    id: 1,
    title: "Understanding Cardiovascular Health",
    subject: "Cardiology",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
  {
    id: 2,
    title: "Basics of Human Anatomy",
    subject: "Anatomy",
    image:
      "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
  {
    id: 3,
    title: "Nutrition & Balanced Diet",
    subject: "Nutrition",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
  {
    id: 4,
    title: "Mental Health Awareness",
    subject: "Psychology",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
  {
    id: 5,
    title: "Emergency First Aid Training",
    subject: "First Aid",
    image:
      "https://images.unsplash.com/photo-1587556930776-4bf5a5fcc142?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
  {
    id: 6,
    title: "Basics of Medical Terminology",
    subject: "Medical Terminology",
    image:
      "https://images.unsplash.com/photo-1583912595583-e2ce8c174889?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
  {
    id: 7,
    title: "Introduction to Pharmacology",
    subject: "Pharmacology",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b4123a21?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
  {
    id: 8,
    title: "Common Infectious Diseases",
    subject: "Epidemiology",
    image:
      "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
  {
    id: 9,
    title: "How Vaccines Work",
    subject: "Immunology",
    image:
      "https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
  {
    id: 10,
    title: "Healthy Lifestyle Habits",
    subject: "Wellness",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
  {
    id: 11,
    title: "The Science of Sleep",
    subject: "Sleep Health",
    image:
      "https://images.unsplash.com/photo-1631002165729-081e6c35ca2d?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
  {
    id: 12,
    title: "Diabetes: Causes & Prevention",
    subject: "Endocrinology",
    image:
      "https://images.unsplash.com/photo-1586015555751-63c29b43efcc?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
  {
    id: 13,
    title: "Hypertension & Heart Disease",
    subject: "Cardiology",
    image:
      "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
  {
    id: 14,
    title: "The Impact of Stress on Health",
    subject: "Psychology",
    image:
      "https://images.unsplash.com/photo-1541199249251-f713e6145474?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
  {
    id: 15,
    title: "Gut Health & Digestion",
    subject: "Gastroenterology",
    image:
      "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
  {
    id: 16,
    title: "Women's Health & Wellness",
    subject: "Gynecology",
    image:
      "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
  {
    id: 17,
    title: "Pediatric Health & Growth",
    subject: "Pediatrics",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
  {
    id: 18,
    title: "Common Cancers & Prevention",
    subject: "Oncology",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
  {
    id: 19,
    title: "Understanding Arthritis",
    subject: "Rheumatology",
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
  {
    id: 20,
    title: "Introduction to Public Health",
    subject: "Public Health",
    image:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&h=300&fit=crop",
    url: "https://youtu.be/Ae4MadKPJC0?si=qqRrP-2z04Z0L-_C",
  },
];

export default Videos;
