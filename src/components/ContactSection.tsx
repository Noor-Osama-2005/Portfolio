import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "Nour.osama2023@feps.edu.eg",
      link: "mailto:Nour.osama2023@feps.edu.eg",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect professionally",
      link: "https://www.linkedin.com/in/noor-osama2005/",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "View my code",
      link: "https://github.com/Noor-Osama-2005",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Cairo, Egypt",
      link: null,
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-blue-50/60 via-indigo-50/40 to-purple-50/60 dark:from-blue-900/25 dark:via-indigo-900/15 dark:to-purple-900/25 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-100/30 to-transparent dark:from-transparent dark:via-blue-800/15 dark:to-transparent" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about data science and economics
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're interested in collaborating on a project, discussing research opportunities, 
                or exploring data science solutions, I'd love to hear from you. I'm particularly interested 
                in projects that combine economics with AI and machine learning.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`p-6 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-background group ${method.link ? 'cursor-pointer' : ''}`}>
                    <CardContent className="p-0">
                      {method.link ? (
                        <a
                          href={method.link}
                          target={method.link.startsWith('http') ? '_blank' : '_self'}
                          rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="block"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-full bg-gradient-to-br ${method.gradient} text-white group-hover:scale-110 transition-transform`}>
                              <method.icon size={20} />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm mb-1">{method.title}</h4>
                              <p className="text-sm text-muted-foreground group-hover:text-indigo-600 transition-colors">
                                {method.value}
                              </p>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-full bg-gradient-to-br ${method.gradient} text-white`}>
                            <method.icon size={20} />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {method.value}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-0">
                <CardContent className="p-0">
                  <h4 className="font-medium mb-3">Current Availability</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    I'm currently open to:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Data science internships and projects</li>
                    <li>• Research collaborations</li>
                    <li>• Freelance data analysis work</li>
                    <li>• Speaking opportunities</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}