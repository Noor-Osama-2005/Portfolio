import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Download, Eye, MapPin, Mail, Phone, Linkedin, Github, Award, GraduationCap, Briefcase } from 'lucide-react';

export function CVSection() {
  const contactInfo = {
    email: "Nour.osama2023@feps.edu.eg",
    phone: "+20 1095512203",
    linkedin: "https://www.linkedin.com/in/noor-osama2005/",
    github: "https://github.com/Noor-Osama-2005"
  };

  const education = {
    institution: "Cairo University – Faculty of Economics & Political Science",
    degree: "B.A. in Economics, Junior (3rd Year)",
    gpa: "3.333",
    period: "Oct 2023 – Present"
  };

  const topSkills = [
    "Python", "Machine Learning", "Data Analysis", "PyTorch", "SQL", 
    "Statistical Analysis", "Time Series", "NLP", "XGBoost", "Git"
  ];

  const languages = [
    { language: "Arabic", level: "Native" },
    { language: "English", level: "IELTS 6.5" },
    { language: "French", level: "B1" },
    { language: "Japanese", level: "Basic" }
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-purple-50/50 via-violet-50/30 to-blue-50/50 dark:from-purple-900/20 dark:via-violet-900/10 dark:to-blue-900/20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-100/25 to-transparent dark:from-transparent dark:via-purple-800/12 dark:to-transparent" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Curriculum Vitae</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              <Download size={20} className="mr-2 group-hover:animate-bounce" />
              Download PDF
            </Button>
            <Button size="lg" variant="outline">
              <Eye size={20} className="mr-2" />
              View Online
            </Button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact & Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6 bg-gradient-to-br from-white via-blue-50/80 to-purple-50/80 dark:from-slate-800/95 dark:via-blue-900/80 dark:to-purple-900/80 border border-blue-200/60 dark:border-blue-700/60 shadow-xl backdrop-blur-sm">
              <CardContent className="p-0">
                <h3 className="text-xl mb-6 flex items-center gap-2">
                  <Mail className="text-violet-600 dark:text-violet-400" size={20} />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail size={16} className="text-muted-foreground" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors break-all">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone size={16} className="text-muted-foreground" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Linkedin size={16} className="text-muted-foreground" />
                    <a href={contactInfo.linkedin} className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors" target="_blank" rel="noopener noreferrer">
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Github size={16} className="text-muted-foreground" />
                    <a href={contactInfo.github} className="hover:text-indigo-600 transition-colors" target="_blank" rel="noopener noreferrer">
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-background border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-xl mb-6 flex items-center gap-2">
                  <GraduationCap className="text-green-500" size={20} />
                  Education
                </h3>
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">{education.institution}</h4>
                  <p className="text-sm text-muted-foreground">{education.degree}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">GPA: {education.gpa}</span>
                    <Badge variant="outline" className="text-xs">{education.period}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    <span>Cairo, Egypt</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-background border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-xl mb-6">Languages</h3>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={lang.language}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm">{lang.language}</span>
                      <Badge variant="secondary" className="text-xs">
                        {lang.level}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Skills */}
            <Card className="p-6 bg-gradient-to-br from-card to-background border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-xl mb-6 flex items-center gap-2">
                  <Award className="text-purple-500" size={20} />
                  Technical Skills
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-sm mb-3 text-muted-foreground">Programming & Data</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Pandas", "NumPy", "SQL", "Git"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-3 text-muted-foreground">Machine Learning</h4>
                    <div className="flex flex-wrap gap-2">
                      {["PyTorch", "Scikit-learn", "XGBoost", "NLP", "Time Series"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-xl mb-6 flex items-center gap-2">
                  <Award className="text-yellow-500" size={20} />
                  Key Achievements
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2" />
                    <div>
                      <h4 className="font-medium text-sm">Top 1% DataCamp Learner</h4>
                      <p className="text-sm text-muted-foreground">
                        Ranked #23 globally out of 227,465 learners on I4G 2024 leaderboard
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2" />
                    <div>
                      <h4 className="font-medium text-sm">Professional Certifications</h4>
                      <p className="text-sm text-muted-foreground">
                        DataCamp Certified Data Scientist Professional & Associate
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2" />
                    <div>
                      <h4 className="font-medium text-sm">Leadership Excellence</h4>
                      <p className="text-sm text-muted-foreground">
                        Active scholarship administrator and academic mentor
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Experience */}
            <Card className="p-6 bg-gradient-to-br from-card to-background border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-xl mb-6 flex items-center gap-2">
                  <Briefcase className="text-blue-500" size={20} />
                  Recent Experience
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-indigo-200 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">EMAM Organization - Scholarship Admin</h4>
                      <Badge variant="outline" className="text-xs">2025</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Managing scholarship recipients and coordinating program delivery
                    </p>
                  </div>
                  <div className="border-l-2 border-purple-200 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">Commercial International Bank</h4>
                      <Badge variant="outline" className="text-xs">Aug 2024</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Summer training in banking operations and fintech innovation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}