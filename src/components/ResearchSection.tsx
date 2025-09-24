import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { BookOpen, ExternalLink, Users, Building, Award } from 'lucide-react';

export function ResearchSection() {
  const experiences = [
    {
      title: "EMAM Organization - Scholarship Admin",
      period: "2025",
      description: "Managing and monitoring scholarship recipients, coordinating communication and ensuring smooth program delivery.",
      type: "Leadership",
      icon: Users,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Ministry of Planning & Economic Development",
      period: "Sep - Oct 2024",
      description: "NIGSD Ambassador training in sustainability, SDGs, TOT, and soft skills development.",
      type: "Government Training",
      icon: Building,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Commercial International Bank (CIB)",
      period: "Aug 2024",
      description: "Summer training focusing on banking operations, digital markets, and fintech innovation.",
      type: "Banking & Fintech",
      icon: Award,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "IEEE Training Workshops",
      period: "Apr - Jun 2024",
      description: "Comprehensive training in ML (CNNs, decision trees, random forests), cybersecurity (penetration testing), and network fundamentals.",
      type: "Technical Training",
      icon: BookOpen,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const researchInterests = [
    "AI in Economic Analysis",
    "Behavioral Economics & Data Science",
    "Financial Technology Innovation",
    "Sustainable Development & AI",
    "Natural Language Processing for Economics",
    "Time Series Forecasting in Finance"
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-violet-50/50 dark:from-indigo-900/20 dark:via-purple-900/10 dark:to-violet-900/20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-100/25 to-transparent dark:from-transparent dark:via-indigo-800/12 dark:to-transparent" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Research & Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Bridging economics, technology, and research through hands-on experience and academic pursuit
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-8">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border border-purple-200/60 dark:border-purple-700/60 bg-gradient-to-br from-white via-purple-50/80 to-indigo-50/80 dark:from-slate-800/95 dark:via-purple-900/80 dark:to-indigo-900/80 shadow-xl backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full bg-gradient-to-br ${exp.gradient} text-white flex-shrink-0`}>
                          <exp.icon size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <CardTitle className="text-lg leading-tight">{exp.title}</CardTitle>
                            <Badge variant="outline" className="text-xs ml-2">
                              {exp.period}
                            </Badge>
                          </div>
                          <Badge variant="secondary" className="text-xs mb-3">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6">Research Interests</h3>
              <Card className="p-6 bg-gradient-to-br from-indigo-50/90 to-purple-50/90 dark:from-indigo-950/60 dark:to-purple-950/60 border border-indigo-200/60 dark:border-indigo-700/60 shadow-lg backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="grid gap-3">
                    {researchInterests.map((interest, index) => (
                      <motion.div
                        key={interest}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 p-3 bg-white/80 dark:bg-slate-800/80 rounded-lg hover:bg-white/90 dark:hover:bg-slate-800/90 transition-colors border border-indigo-200/40 dark:border-indigo-700/40"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                        <span className="text-sm">{interest}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl mb-6">Academic Recognition</h3>
              <Card className="p-6 bg-gradient-to-br from-violet-50/90 to-blue-50/90 dark:from-violet-950/60 dark:to-blue-950/60 border border-violet-200/60 dark:border-violet-700/60 shadow-lg backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Award className="text-yellow-600" size={24} />
                      <div>
                        <h4 className="font-medium">Top 1% Global Ranking</h4>
                        <p className="text-sm text-muted-foreground">
                          #23 out of 227,465 learners on I4G DataCamp leaderboard
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Trophy className="text-purple-600" size={24} />
                      <div>
                        <h4 className="font-medium">Leadership Excellence</h4>
                        <p className="text-sm text-muted-foreground">
                          Active role in scholarship administration and academic mentorship
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button className="w-full" variant="outline">
                <ExternalLink size={16} className="mr-2" />
                View Full Research Portfolio
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Import Trophy from lucide-react
import { Trophy } from 'lucide-react';