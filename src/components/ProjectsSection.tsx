import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, Clock, Target, ChevronRight, Zap, Activity, Cpu, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import stocknewsScreenshot1 from '@/assets/stocknews-screenshot1.jpg';
import stocknewsScreenshot2 from '@/assets/stocknews-screenshot2.jpg';
import genreaiScreenshot1 from '@/assets/genreai-screenshot1.png';
import genreaiScreenshot2 from '@/assets/genreai-screenshot2.png';
import chronosScreenshot1 from '@/assets/chronos-screenshot1.png';
import chronosScreenshot2 from '@/assets/chronos-screenshot2.png';

const projects = [
  {
    title: 'GenreAI – Music Genre Classification & Fusion Analysis',
    description:
      'An end-to-end music genre classification system that analyzes audio files and predicts multi-genre presence, enabling genre fusion detection.',
    longDescription:
      'Designed an end-to-end music genre classification system that analyzes audio files and predicts multi-genre presence, enabling genre fusion detection beyond single-label classification. Implemented a FastAPI backend with a /predict endpoint, handling audio preprocessing (mel-spectrogram extraction, normalization) and real-time model inference with robust error handling.',
    images: [genreaiScreenshot1, genreaiScreenshot2],
    techStack: [
      'FastAPI',
      'TensorFlow',
      'Keras',
      'Python',
      'Librosa',
      'NumPy',
      'Tailwind CSS',
      'JavaScript',
    ],
    metrics: [
      { icon: TrendingUp, label: 'Multi-Genre Detection', value: 'Yes', color: 'from-green-500 to-emerald-500' },
      { icon: Clock, label: 'Real-time Inference', value: 'Fast', color: 'from-primary to-accent' },
      { icon: Target, label: 'Genre Fusion Analysis', value: 'High', color: 'from-purple-500 to-pink-500' },
    ],
    highlights: [
      'Deep learning model trained on thousands of audio samples',
      'Mel-spectrogram extraction and audio preprocessing',
      'Multi-genre prediction for fusion detection (Rock-Metal, Jazz-Blues)',
      'Robust error handling for corrupted/unsupported files',
    ],
    github: 'https://github.com/Ayushverma2005/GenreAI',
    live: 'https://genre-ai-jade.vercel.app/',
  },
  {
    title: 'StockNews Market News Sentiment Analysis',
    description:
      'A sophisticated 5-stage ML pipeline that analyzes market news sentiment in real-time, providing traders with actionable insights for informed decision-making.',
    longDescription:
      'Built an end-to-end sentiment analysis system that processes financial news through a multi-stage pipeline: data collection, preprocessing, FinBERT-based sentiment classification, Gemini AI enhancement, and real-time visualization. The system achieves sub-30 second latency while maintaining high accuracy.',
    images: [stocknewsScreenshot1, stocknewsScreenshot2],
    techStack: [
      'FastAPI',
      'PyTorch',
      'FinBERT',
      'Gemini AI',
      'React',
      'Next.js',
      'Tailwind CSS',
      'WebSocket',
    ],
    metrics: [
      { icon: TrendingUp, label: 'Accuracy Improvement', value: '31.6%', color: 'from-green-500 to-emerald-500' },
      { icon: Clock, label: 'Pipeline Latency', value: '<30s', color: 'from-primary to-accent' },
      { icon: Target, label: 'Positive Class Precision', value: '100%', color: 'from-purple-500 to-pink-500' },
    ],
    highlights: [
      '5-stage ML pipeline with real-time processing',
      'FinBERT transformer model for financial sentiment',
      'Gemini AI integration for enhanced analysis',
      'Live WebSocket updates for instant insights',
    ],
    github: 'https://github.com/Ayushverma2005/Stock_News',
    live: 'https://stock-news-oqp3.vercel.app/',
  },
  {
    title: 'Chronos – AI System Monitoring & Prediction Dashboard',
    description:
      'A real-time AI-powered system monitoring dashboard to visualize telemetry and ML predictions for temperature, power, and latency.',
    longDescription:
      'Designed and built a real-time AI-powered system monitoring dashboard to visualize telemetry and ML predictions for temperature, power, and latency using a modern React + Tailwind frontend. Implemented a FastAPI backend pipeline with Redis and Celery for asynchronous telemetry processing and prediction. Developed interactive time-series charts (real vs predicted) with rolling history, start/stop control for polling, and animated metric cards displaying mode, predicted overload, algorithm used, latency, power cost, and result quality.',
    images: [chronosScreenshot1, chronosScreenshot2], // Placeholder - replace with actual Chronos screenshots
    techStack: [
      'FastAPI',
      'React',
      'Vite',
      'Tailwind CSS',
      'Redis',
      'Celery',
      'Recharts',
      'Docker',
      'Python',
    ],
    metrics: [
      { icon: Activity, label: 'Real-time Telemetry', value: 'Live', color: 'from-green-500 to-emerald-500' },
      { icon: Cpu, label: 'Async Processing', value: 'Redis+Celery', color: 'from-primary to-accent' },
      { icon: BarChart3, label: 'Prediction Charts', value: 'Interactive', color: 'from-purple-500 to-pink-500' },
    ],
    highlights: [
      'Real-time telemetry visualization for temperature, power & latency',
      'FastAPI + Redis + Celery async prediction pipeline',
      'Interactive time-series charts with real vs predicted data',
      'Animated metric cards with start/stop polling control',
    ],
    github: 'https://github.com/Ayushverma2005/Chronos',
    live: 'https://chronos-wine-five.vercel.app/',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]"
        animate={{ x: [100, 0, 100], opacity: [0.2, 0.4, 0.2] }}
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
            Real-World Impact
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            End-to-end AI solutions demonstrating technical depth and business value
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
            {/* Card glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-2xl">
              {/* Project Images Grid */}
              <div className="grid md:grid-cols-2 gap-4 p-6 bg-gradient-to-br from-secondary/50 to-secondary/20">
                {project.images.map((image, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    className="relative group/img overflow-hidden rounded-xl"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${imgIndex + 1}`}
                      className="w-full h-48 md:h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute inset-0 border-2 border-primary/50 rounded-xl opacity-0 group-hover/img:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Project Content */}
              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <motion.div
                      className="inline-flex items-center gap-2 text-primary mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <Zap className="w-5 h-5" />
                      <span className="text-sm font-semibold uppercase tracking-wider">Featured Project</span>
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  {project.longDescription}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {project.metrics.map((metric, metricIndex) => (
                    <motion.div
                      key={metricIndex}
                      className="relative bg-secondary/30 rounded-2xl p-5 text-center border border-border/50 hover:border-primary/30 transition-colors group/metric overflow-hidden"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + metricIndex * 0.1 }}
                      whileHover={{ y: -3 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover/metric:opacity-10 transition-opacity`} />
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center`}>
                        <metric.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-3xl font-bold text-foreground mb-1">{metric.value}</p>
                      <p className="text-xs text-muted-foreground font-medium">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    Key Features
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project.highlights.map((highlight, hIndex) => (
                      <motion.li 
                        key={hIndex} 
                        className="flex items-start gap-3 text-muted-foreground group/item"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * hIndex }}
                      >
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0 group-hover/item:shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                        <span className="group-hover/item:text-foreground transition-colors">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * techIndex }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-secondary/80 text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button
                    className="relative group/btn bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;