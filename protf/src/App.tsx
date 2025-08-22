import { Mail, Github, Linkedin, ExternalLink, TrendingUp, BarChart3, Brain } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { motion } from 'motion/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const skills = [
    { 
      category: "Data Science", 
      items: ["Python", "R", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      icon: BarChart3
    },
    { 
      category: "Machine Learning", 
      items: ["Scikit-learn", "TensorFlow", "PyTorch", "Deep Learning", "Neural Networks", "Statistics"],
      icon: Brain
    },
    { 
      category: "Economics", 
      items: ["Econometrics", "Financial Analysis", "Market Research", "Statistical Modeling", "Economic Theory"],
      icon: TrendingUp
    },
    { 
      category: "Tools & Technologies", 
      items: ["Jupyter", "Git", "Docker", "AWS", "Tableau", "Excel", "SPSS"],
      icon: BarChart3
    }
  ];

  const projects = [
    {
      title: "Economic Forecasting Model",
      description: "Built a machine learning model to predict economic indicators using time series analysis and neural networks.",
      technologies: ["Python", "TensorFlow", "Pandas", "Econometrics"],
      type: "Economics & ML",
      image: "https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29ub21pY3MlMjBmaW5hbmNlJTIwY2hhcnRzfGVufDF8fHx8MTc1NTkwNDgyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Consumer Behavior Analysis",
      description: "Analyzed consumer purchasing patterns using statistical modeling and data visualization techniques.",
      technologies: ["R", "ggplot2", "Statistical Analysis", "Data Mining"],
      type: "Data Science",
      image: "https://images.unsplash.com/photo-1750966580622-08d4d0812d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0cyUyMGdvbGRlbnxlbnwxfHx8fDE3NTU5MDQ4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Financial Risk Assessment",
      description: "Developed a comprehensive risk assessment framework using machine learning algorithms for financial institutions.",
      technologies: ["Python", "Scikit-learn", "Financial Modeling", "Risk Analysis"],
      type: "Finance & ML",
      image: "https://images.unsplash.com/photo-1598978028953-799807c097b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3AlMjBjb2Rpbmd8ZW58MXx8fHwxNzU1OTA0ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  // Floating animation variants
  const floatingVariants = {
    floating: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const staggerVariants = {
    container: {
      initial: {},
      animate: {
        transition: {
          staggerChildren: 0.1
        }
      }
    },
    item: {
      initial: { opacity: 0, y: 20 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5 }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-amber-200/30 to-yellow-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-full blur-2xl"
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-amber-200 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <span className="text-amber-800 font-semibold text-lg">Noor Osama</span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.1, color: '#d97706' }}
                  className="text-amber-800 hover:text-amber-600 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.h1 
              className="text-5xl md:text-7xl mb-6 text-amber-900 font-serif"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Noor Osama
            </motion.h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-amber-700 mb-8 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Aspiring Data Scientist & Machine Learning Expert
          </motion.p>
          
          <motion.p 
            className="text-lg text-amber-600 mb-12 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Passionate about extracting insights from data and building intelligent systems. 
            Currently pursuing expertise in economics, data science, and machine learning.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8 py-3 text-lg rounded-full shadow-lg"
            >
              View My Work
            </Button>
          </motion.div>
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          variants={floatingVariants}
          animate="floating"
          className="absolute top-20 right-20 w-4 h-4 bg-amber-400 rounded-full opacity-70"
        />
        <motion.div
          variants={floatingVariants}
          animate="floating"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-40 left-20 w-6 h-6 bg-yellow-400 rotate-45 opacity-60"
        />
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-20 px-6 bg-white/50 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl text-center mb-16 text-amber-900 font-serif"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.p 
                className="text-lg text-amber-800 mb-6 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                I am a dedicated and ambitious individual working towards becoming a data scientist and machine learning expert. 
                My passion lies in discovering patterns in complex datasets and building predictive models that drive meaningful insights.
              </motion.p>
              
              <motion.p 
                className="text-lg text-amber-800 mb-6 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                As an aspiring economics student, I bring a unique perspective that combines quantitative analysis with economic theory, 
                enabling me to approach problems with both technical rigor and economic intuition.
              </motion.p>
              
              <motion.p 
                className="text-lg text-amber-800 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                I believe in the power of data to transform businesses and society, and I'm committed to continuous learning 
                and staying at the forefront of technological advancements in AI and machine learning.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-lg border border-amber-200"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl text-amber-900 mb-3">Current Focus</h3>
                <ul className="text-amber-800 space-y-2">
                  <li>• Advanced Machine Learning Techniques</li>
                  <li>• Economic Data Analysis</li>
                  <li>• Statistical Modeling</li>
                  <li>• Deep Learning Applications</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg border border-amber-200"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl text-amber-900 mb-3">Goals</h3>
                <ul className="text-amber-800 space-y-2">
                  <li>• Master's in Economics</li>
                  <li>• Industry Data Science Role</li>
                  <li>• Research Publications</li>
                  <li>• Open Source Contributions</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-20 px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl text-center mb-16 text-amber-900 font-serif"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerVariants.container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon;
              return (
                <motion.div
                  key={index}
                  variants={staggerVariants.item}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 2,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200 hover:border-amber-300 transition-colors h-full">
                    <div className="flex items-center mb-4">
                      <IconComponent className="w-6 h-6 text-amber-600 mr-3" />
                      <h3 className="text-xl text-amber-900 font-semibold">{skillGroup.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: skillIndex * 0.1 }}
                        >
                          <Badge 
                            variant="secondary"
                            className="bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-20 px-6 bg-white/50 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl text-center mb-16 text-amber-900 font-serif"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerVariants.container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={staggerVariants.item}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden bg-white border-2 border-amber-200 hover:border-amber-300 transition-all duration-300 h-full">
                  <div className="aspect-video overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ImageWithFallback 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <Badge className="bg-amber-600 text-white mb-3">{project.type}</Badge>
                    <h3 className="text-xl text-amber-900 mb-3">{project.title}</h3>
                    <p className="text-amber-700 leading-relaxed mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="text-amber-700 border-amber-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button variant="outline" className="w-full border-amber-300 text-amber-700 hover:bg-amber-50">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-20 px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl mb-12 text-amber-900 font-serif"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>
          
          <motion.p 
            className="text-lg text-amber-700 mb-12 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            I'm always interested in discussing data science opportunities, research collaborations, 
            or simply connecting with fellow enthusiasts in the field.
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={staggerVariants.container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Mail, title: 'Email', value: 'noor.osama@example.com' },
              { icon: Linkedin, title: 'LinkedIn', value: 'linkedin.com/in/noorosama' },
              { icon: Github, title: 'GitHub', value: 'github.com/noorosama' }
            ].map(({ icon: Icon, title, value }, index) => (
              <motion.div
                key={index}
                variants={staggerVariants.item}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center p-6 bg-gradient-to-br from-white to-amber-50 rounded-lg border-2 border-amber-200 cursor-pointer"
              >
                <Icon className="w-8 h-8 text-amber-600 mb-4" />
                <h3 className="text-lg text-amber-900 mb-2">{title}</h3>
                <p className="text-amber-700">{value}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8 py-3 text-lg rounded-full shadow-lg"
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-8 px-6 bg-amber-900 text-center relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-100">© 2025 Noor Osama. All rights reserved.</span>
          </motion.div>
          <motion.p 
            className="text-amber-200 text-sm"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Crafted with passion for data science and machine learning
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}