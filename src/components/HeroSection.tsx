import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronDown, FileText, Microscope } from 'lucide-react';
import profileImage from 'figma:asset/edc1bbf9a54b626929ab69f8e133567eafa98a92.png';

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

export function HeroSection({ onSectionChange }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-transparent via-violet-50/30 to-blue-50/30 dark:from-transparent dark:via-indigo-900/20 dark:to-purple-900/20">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 mx-auto mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.3 }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/40 via-indigo-500/40 to-purple-500/40 blur-xl"
            />
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.2 }}
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
            >
              <ImageWithFallback
                src={profileImage}
                alt="Noor Osama Abd-elsabour"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
        >
          Noor — Data Scientist & Researcher
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto"
        >
          Exploring AI, Economics, and Research at the intersection of data science and human understanding
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            onClick={() => onSectionChange('cv')}
            className="group relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative flex items-center gap-2">
              <FileText size={20} />
              View CV
            </span>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => onSectionChange('research')}
            className="group"
          >
            <motion.span
              className="flex items-center gap-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Microscope size={20} />
              Explore My Research
            </motion.span>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() => onSectionChange('about')}
          >
            <ChevronDown size={32} className="text-muted-foreground hover:text-foreground transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}