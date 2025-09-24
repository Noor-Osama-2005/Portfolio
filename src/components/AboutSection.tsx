import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Trophy, MapPin, Calendar } from 'lucide-react';

export function AboutSection() {
  const achievements = [
    {
      title: "Top 1% DataCamp Learner",
      description: "Ranked #23 globally out of 227,465 learners on I4G 2024 leaderboard",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "DataCamp Certified Professional",
      description: "Data Scientist Professional & Associate certifications",
      icon: GraduationCap,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Leadership & Research Excellence",
      description: "Active scholarship administrator and economics research contributor",
      icon: Trophy,
      color: "from-violet-500 to-purple-500"
    }
  ];

  const skills = [
    "Python", "Pandas", "NumPy", "Scikit-learn", "PyTorch", "XGBoost",
    "Machine Learning", "NLP", "Time Series", "SQL", "PySpark", "Git"
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-blue-50/40 via-indigo-50/30 to-violet-50/40 dark:from-blue-900/15 dark:via-indigo-900/10 dark:to-violet-900/15 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-100/20 to-transparent dark:from-transparent dark:via-purple-800/10 dark:to-transparent" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-white via-violet-50/80 to-blue-50/80 dark:from-slate-800 dark:via-indigo-900/80 dark:to-violet-900/80 border border-violet-200/60 dark:border-violet-700/60 shadow-2xl backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-full border border-violet-300/50 dark:border-violet-600/50">
                    <GraduationCap className="text-violet-600 dark:text-violet-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl">Economics Student & Data Scientist</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={16} />
                      <span>Cairo University</span>
                      <Calendar size={16} />
                      <span>Junior Year</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate Economics student at Cairo University with a deep fascination for data science, 
                  artificial intelligence, and economic research. My journey combines rigorous academic training 
                  with hands-on experience in machine learning and data analysis.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  As an aspiring AI engineer, I bridge the gap between economic theory and practical data science 
                  applications, exploring how artificial intelligence can transform our understanding of economic 
                  systems and human behavior.
                </p>
              </CardContent>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h4 className="text-lg mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="secondary" className="px-3 py-1 bg-gradient-to-r from-violet-100 to-blue-100 dark:from-violet-900/70 dark:to-blue-900/70 text-violet-700 dark:text-violet-300 border border-violet-200/50 dark:border-violet-600/50">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl mb-6">Key Achievements</h4>
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 border border-blue-200/50 dark:border-blue-700/50 bg-gradient-to-br from-white via-blue-50/70 to-indigo-50/70 dark:from-slate-800/95 dark:via-blue-900/70 dark:to-indigo-900/70 shadow-xl backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full bg-gradient-to-br ${achievement.color} text-white`}>
                        <achievement.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h5 className="mb-2">{achievement.title}</h5>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}