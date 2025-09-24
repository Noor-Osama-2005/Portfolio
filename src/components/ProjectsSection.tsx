import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Brain, TrendingUp, Database } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: "DataCamp Professional Certification Project",
      description: "Built an end-to-end predictive model using real-world datasets with EDA, feature engineering, hyperparameter tuning, and model evaluation.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Seaborn"],
      category: "Machine Learning",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      status: "2025",
      hasViewCertificate: true,
      certificateUrl: "https://www.datacamp.com/certificate/DS0023962240339"
    },
    {
      title: "Scheduler Pro",
      description: "A comprehensive Python GUI application that enables users to create printable schedules using Pillow and provides intelligent reminder system for tasks and events.",
      technologies: ["Python", "Tkinter", "Pillow", "GUI", "Task Management"],
      category: "Desktop Application",
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500",
      status: "Completed",
      githubUrl: "https://github.com/Noor-Osama-2005/scheduler-pro"
    },
    {
      title: "NLP & Text Mining Framework",
      description: "Natural language processing pipeline for analyzing economic texts and research papers using PyTorch and transformers.",
      technologies: ["PyTorch", "NLP", "Transformers", "Text Mining"],
      category: "AI Research",
      icon: Database,
      gradient: "from-green-500 to-teal-500",
      status: "In Development"
    }
  ];

  const certifications = [
    "DataCamp Certified Data Scientist Professional",
    "DataCamp Certified Data Scientist Associate",
    "Machine Learning Scientist Track (85 hours)",
    "Udacity Data Analysis Challenger Track"
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-violet-50/60 via-blue-50/40 to-indigo-50/60 dark:from-violet-900/25 dark:via-blue-900/15 dark:to-indigo-900/25 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-violet-100/30 to-transparent dark:from-transparent dark:via-violet-800/15 dark:to-transparent" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Projects & Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Showcasing my journey in data science, machine learning, and economic research
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border border-indigo-200/60 dark:border-indigo-700/60 bg-gradient-to-br from-white via-indigo-50/80 to-violet-50/80 dark:from-slate-800/95 dark:via-indigo-900/80 dark:to-violet-900/80 group shadow-xl backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${project.gradient} text-white`}>
                      <project.icon size={24} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit text-xs">
                    {project.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-gradient-to-r from-blue-100 to-violet-100 dark:from-blue-900/70 dark:to-violet-900/70 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-600/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    )}
                    {project.hasViewCertificate && (
                      <Button 
                        size="sm" 
                        variant="default" 
                        className="flex-1"
                        onClick={() => window.open(project.certificateUrl, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Certificate
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-0">
            <CardContent className="p-0">
              <h3 className="text-2xl mb-6 text-center">Professional Certifications</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 bg-background/50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                    <span className="text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}