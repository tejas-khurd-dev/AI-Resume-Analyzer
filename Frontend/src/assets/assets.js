import { FileSearch, KeyRound, TrendingUp, Target, ScanLine } from "lucide-react";

export const logoIcon = ScanLine;

export const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "How it Works", href: "#how" },
];

export const features = [
  {
    icon: FileSearch,
    title: "ATS Compatibility Check",
    desc: "Ensure your resume parses correctly in Applicant Tracking Systems before you apply.",
  },
  {
    icon: KeyRound,
    title: "Keyword Optimization",
    desc: "Identify missing industry keywords to boost your match rate for specific job descriptions.",
  },
  {
    icon: TrendingUp,
    title: "Impact Review",
    desc: "Upgrade weak action verbs and quantify achievements for maximum recruiter impact.",
  },
  {
    icon: Target,
    title: "Job Match Scoring",
    desc: "Paste a job link and get a concrete 0-100 score on how well your resume fits the role.",
  },
];

export const trustBadge = {
  avatars:["https://i.pinimg.com/1200x/9d/99/68/9d9968232177942be3d710afeb837262.jpg", 
            "https://i.pinimg.com/736x/96/96/a8/9696a86649cd725baf776744e4f5f5f7.jpg", 
            "https://i.pinimg.com/736x/9b/f0/56/9bf056bc3f7eae330ae8a566240508d2.jpg"
          ],
  text: "Trusted by 10,000+ job seekers",
};

export const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Privacy", href: "#privacy" },
];