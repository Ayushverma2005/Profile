import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: '💻',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'C', level: 70 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: '🤖',
    skills: [
      { name: 'TensorFlow', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'OpenAI API', level: 90 },
      { name: 'FinBERT', level: 85 },
      { name: 'Scikit-learn', level: 88 },
      { name: 'NumPy/Pandas', level: 92 },
    ],
  },
  {
    title: 'Frontend Development',
    icon: '🎨',
    skills: [
      { name: 'React', level: 88 },
      { name: 'Next.js', level: 82 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Redux', level: 78 },
      { name: 'Framer Motion', level: 75 },
    ],
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    skills: [
      { name: 'FastAPI', level: 90 },
      { name: 'Flask', level: 85 },
      { name: 'Django', level: 80 },
      { name: 'WebSocket', level: 82 },
      { name: 'OAuth 2.0 / JWT', level: 85 },
    ],
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: '🔧',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 78 },
      { name: 'Streamlit', level: 85 },
      { name: 'CI/CD', level: 75 },
    ],
  },
];

const SkillBar = ({ skill, delay, isInView }: { skill: Skill; delay: number; isInView: boolean }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [skill.level, delay, isInView]);

  return (
    <div className="space-y-2 group">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        <motion.span 
          className="text-sm font-bold text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: delay / 1000 + 0.5 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-3 bg-secondary/50 rounded-full overflow-hidden border border-border/50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: delay / 1000 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, delay: delay / 1000 + 1 }}
          />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        </motion.div>
      </div>
    </div>
  );
};

const SkillCategory = ({ category, index }: { category: SkillCategory; index: number }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,140,0,0.15)] transition-all duration-300 relative overflow-hidden group"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <motion.span 
            className="text-3xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
          >
            {category.icon}
          </motion.span>
          <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
        </div>
        <div className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <SkillBar 
              key={skill.name} 
              skill={skill} 
              delay={100 + skillIndex * 150} 
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-secondary/20" />
      <motion.div
        className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]"
        animate={{ x: [-200, 0, -200], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]"
        animate={{ y: [0, -100, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            What I Work With
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit spanning AI/ML, full-stack development, and cloud technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;