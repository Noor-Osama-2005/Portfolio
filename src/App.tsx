import { Mail, Github, Linkedin, ExternalLink, TrendingUp, BarChart3, Brain, Sparkles, Zap, Rocket } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { motion } from 'motion/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { AnimatedLogo } from './components/AnimatedLogo';

export default function App() {
  const skills = [
    { 
      category: "Data Science", 
      items: ["Python", "R", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      icon: BarChart3,
      color: "from-amber-400 to-yellow-500"
    },
    { 
      category: "Machine Learning", 
      items: ["Scikit-learn", "TensorFlow", "PyTorch", "Deep Learning", "Neural Networks", "Statistics"],
      icon: Brain,
      color: "from-orange-400 to-red-500"
    },
    { 
      category: "Economics", 
      items: ["Econometrics", "Financial Analysis", "Market Research", "Statistical Modeling", "Economic Theory"],
      icon: TrendingUp,
      color: "from-yellow-400 to-orange-500"
    },
    { 
      category: "Tools & Technologies", 
      items: ["Jupyter", "Git", "Docker", "AWS", "Tableau", "Excel", "SPSS"],
      icon: Zap,
      color: "from-amber-500 to-yellow-600"
    }
  ];

  const projects = [
    {
      title: "Economic Forecasting Model",
      description: "Built a machine learning model to predict economic indicators using time series analysis and neural networks.",
      technologies: ["Python", "TensorFlow", "Pandas", "Econometrics"],
      type: "Economics & ML",
      image: "https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NTU4MzY3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Consumer Behavior Analysis",
      description: "Analyzed consumer purchasing patterns using statistical modeling and data visualization techniques.",
      technologies: ["R", "ggplot2", "Statistical Analysis", "Data Mining"],
      type: "Data Science",
      image: "https://images.unsplash.com/photo-1607184023678-63ea486d62cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBuZW9ufGVufDF8fHx8MTc1NTkxMDA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Financial Risk Assessment",
      description: "Developed a comprehensive risk assessment framework using machine learning algorithms for financial institutions.",
      technologies: ["Python", "Scikit-learn", "Financial Modeling", "Risk Analysis"],
      type: "Finance & ML",
      image: "https://images.unsplash.com/photo-1752253604157-65fb42c30816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xvZ3JhcGhpYyUyMHRlY2hub2xvZ3klMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU1OTEwMDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  // Particle animation variants
  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, -10, 0],
      rotate: [0, 180, 360],
      scale: [1, 1.2, 0.8, 1],
      transition: {
        duration: 4,
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
      initial: { opacity: 0, y: 20, scale: 0.9 },
      animate: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: { 
          duration: 0.5,
          type: "spring",
          bounce: 0.4
        }
      }
    }
  };

  // Generate random particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Fast rotating orbs */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-amber-300/40 to-yellow-300/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-10 w-52 h-52 bg-gradient-to-r from-orange-300/40 to-red-300/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 30, -30, 0],
            rotate: 360,
            scale: [1, 1.4, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-yellow-300/30 to-orange-300/30 rounded-full blur-2xl"
        />

        {/* Animated particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-amber-400 to-yellow-500"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            variants={particleVariants}
            animate="animate"
            transition={{ delay: particle.delay }}
          />
        ))}

        {/* Neon streaks */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"
          animate={{
            x: ['100%', '-100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Navigation with enhanced animations */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-amber-200 z-50 shadow-lg"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <AnimatedLogo size="w-10 h-10" />
              <motion.span 
                className="text-amber-800 font-semibold text-lg"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(245, 158, 11, 0)",
                    "0 0 10px rgba(245, 158, 11, 0.5)",
                    "0 0 0px rgba(245, 158, 11, 0)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Noor Osama
              </motion.span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ 
                    scale: 1.1, 
                    color: '#d97706',
                    textShadow: "0 0 8px rgba(217, 119, 6, 0.6)"
                  }}
                  className="text-amber-800 hover:text-amber-600 transition-all duration-300"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with enhanced visuals */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated hero background */}
          <div className="absolute inset-0 -z-10">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1637139171575-86e5ff1b398d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm4lMjBnb2xkZW58ZW58MXx8fHwxNzU1OTEwMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Abstract background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8 relative"
          >
            <AnimatedLogo size="w-24 h-24 mx-auto mb-6" />
            
            <motion.h1 
              className="text-6xl md:text-8xl mb-6 text-amber-900 font-serif relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              style={{
                background: 'linear-gradient(45deg, #d97706, #f59e0b, #fbbf24)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 20px rgba(251, 191, 36, 0.5)",
                    "0 0 40px rgba(245, 158, 11, 0.8)",
                    "0 0 20px rgba(251, 191, 36, 0.5)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Noor Osama
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.div
            className="flex items-center justify-center gap-2 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Sparkles className="w-6 h-6 text-amber-500" />
            <motion.p 
              className="text-xl md:text-3xl text-amber-700 leading-relaxed"
              animate={{
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Aspiring Data Scientist & Machine Learning Expert
            </motion.p>
            <Rocket className="w-6 h-6 text-amber-500" />
          </motion.div>
          
          <motion.p 
            className="text-lg text-amber-600 mb-12 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Passionate about extracting insights from data and building intelligent systems. 
            Currently pursuing expertise in economics, data science, and machine learning.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-300"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 0px rgba(255, 255, 255, 0)",
                    "0 0 10px rgba(255, 255, 255, 0.8)",
                    "0 0 0px rgba(255, 255, 255, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                View My Work
              </motion.span>
            </Button>
          </motion.div>
        </div>

        {/* Enhanced floating geometric shapes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${2 + i % 3} h-${2 + i % 3} bg-gradient-to-r from-amber-400 to-yellow-500 opacity-70`}
            style={{
              top: `${20 + (i * 12) % 60}%`,
              left: `${10 + (i * 15) % 80}%`,
              borderRadius: i % 2 === 0 ? '50%' : '0%',
              transform: i % 2 === 0 ? 'none' : 'rotate(45deg)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, -15, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </section>

      {/* About Section with enhanced visuals */}
      <motion.section 
        id="about" 
        className="py-20 px-6 bg-white/60 backdrop-blur-sm relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-5xl text-center mb-16 text-amber-900 font-serif"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            animate={{
              textShadow: [
                "0 0 20px rgba(217, 119, 6, 0.3)",
                "0 0 40px rgba(217, 119, 6, 0.6)",
                "0 0 20px rgba(217, 119, 6, 0.3)"
              ]
            }}
            style={{
              background: 'linear-gradient(45deg, #92400e, #d97706)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.p 
                className="text-lg text-amber-800 mb-6 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                I am a dedicated and ambitious individual working towards becoming a data scientist and machine learning expert. 
                My passion lies in discovering patterns in complex datasets and building predictive models that drive meaningful insights.
              </motion.p>
              
              <motion.p 
                className="text-lg text-amber-800 mb-6 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                As an aspiring economics student, I bring a unique perspective that combines quantitative analysis with economic theory, 
                enabling me to approach problems with both technical rigor and economic intuition.
              </motion.p>
              
              <motion.p 
                className="text-lg text-amber-800 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
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
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-amber-200 shadow-lg"
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)",
                  borderColor: "#f59e0b"
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl text-amber-900 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-600" />
                  Current Focus
                </h3>
                <ul className="text-amber-800 space-y-2">
                  <li>• Advanced Machine Learning Techniques</li>
                  <li>• Economic Data Analysis</li>
                  <li>• Statistical Modeling</li>
                  <li>• Deep Learning Applications</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 p-6 rounded-xl border-2 border-amber-200 shadow-lg"
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)",
                  borderColor: "#f59e0b"
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl text-amber-900 mb-3 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-amber-600" />
                  Goals
                </h3>
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

      {/* Enhanced Skills Section */}
      <motion.section 
        id="skills" 
        className="py-20 px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl text-center mb-16 text-amber-900 font-serif"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(45deg, #92400e, #d97706)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
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
                    scale: 1.08, 
                    rotate: 3,
                    boxShadow: "0 25px 50px rgba(245, 158, 11, 0.4)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 bg-gradient-to-br from-white via-amber-50 to-yellow-50 border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 h-full shadow-lg">
                    <div className="flex items-center mb-4">
                      <motion.div
                        className={`p-2 rounded-lg bg-gradient-to-r ${skillGroup.color} mr-3`}
                        animate={{
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-xl text-amber-900 font-semibold">{skillGroup.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ scale: 0, rotate: 180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ 
                            delay: skillIndex * 0.1,
                            type: "spring",
                            bounce: 0.6
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            boxShadow: "0 5px 15px rgba(245, 158, 11, 0.4)"
                          }}
                        >
                          <Badge 
                            variant="secondary"
                            className="bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 hover:from-amber-200 hover:to-yellow-200 transition-all duration-300 shadow-sm"
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

      {/* Enhanced Projects Section */}
      <motion.section 
        id="projects" 
        className="py-20 px-6 bg-white/60 backdrop-blur-sm relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl text-center mb-16 text-amber-900 font-serif"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(45deg, #92400e, #d97706)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
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
                  y: -15,
                  rotateY: 5,
                  boxShadow: "0 30px 60px rgba(245, 158, 11, 0.3)"
                }}
                transition={{ duration: 0.4 }}
              >
                <Card className="overflow-hidden bg-white border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 h-full shadow-lg">
                  <div className="aspect-video overflow-hidden relative">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.4 }}
                      className="relative"
                    >
                      <ImageWithFallback 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white mb-3 shadow-lg">
                        {project.type}
                      </Badge>
                    </motion.div>
                    <h3 className="text-xl text-amber-900 mb-3">{project.title}</h3>
                    <p className="text-amber-700 leading-relaxed mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge 
                            variant="outline"
                            className="text-amber-700 border-amber-300 hover:bg-amber-50 transition-colors"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="outline" className="w-full border-amber-300 text-amber-700 hover:bg-amber-50 hover:border-amber-400 transition-all duration-300">
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

      {/* Enhanced Contact Section */}
      <motion.section 
        id="contact" 
        className="py-20 px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-5xl mb-12 text-amber-900 font-serif"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(45deg, #92400e, #d97706)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Let's Connect
          </motion.h2>
          
          <motion.p 
            className="text-lg text-amber-700 mb-12 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
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
              { 
                icon: Mail, 
                title: 'Email', 
                value: 'noor123osama1234@gmail.com',
                color: 'from-blue-400 to-blue-600'
              },
              { 
                icon: Linkedin, 
                title: 'LinkedIn', 
                value: 'linkedin.com/in/noor-osama2005',
                color: 'from-blue-500 to-blue-700'
              },
              { 
                icon: Github, 
                title: 'GitHub', 
                value: 'github.com/Noor-Osama-2005',
                color: 'from-gray-600 to-gray-800'
              }
            ].map(({ icon: Icon, title, value, color }, index) => (
              <motion.div
                key={index}
                variants={staggerVariants.item}
                whileHover={{ 
                  scale: 1.08,
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center p-8 bg-gradient-to-br from-white via-amber-50 to-yellow-50 rounded-xl border-2 border-amber-200 cursor-pointer shadow-lg"
              >
                <motion.div
                  className={`p-4 rounded-full bg-gradient-to-r ${color} mb-4 shadow-lg`}
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-lg text-amber-900 mb-2">{title}</h3>
                <p className="text-amber-700 text-sm">{value}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-amber-500/30 transition-all duration-300"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 0px rgba(255, 255, 255, 0)",
                    "0 0 15px rgba(255, 255, 255, 0.8)",
                    "0 0 0px rgba(255, 255, 255, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Get In Touch
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Footer */}
      <motion.footer 
        className="py-8 px-6 bg-gradient-to-r from-amber-900 via-yellow-900 to-orange-900 text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Footer background animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-800/20 to-transparent"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            className="flex justify-center items-center mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatedLogo size="w-8 h-8 mr-3" />
            <span className="text-amber-100">© 2025 Noor Osama. All rights reserved.</span>
          </motion.div>
          <motion.p 
            className="text-amber-200 text-sm"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            animate={{
              textShadow: [
                "0 0 10px rgba(251, 191, 36, 0.3)",
                "0 0 20px rgba(251, 191, 36, 0.6)",
                "0 0 10px rgba(251, 191, 36, 0.3)"
              ]
            }}
          >
            Crafted with passion for data science and machine learning ✨
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}