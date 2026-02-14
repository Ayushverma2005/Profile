import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  const education = [
    {
      institution: 'Dr. Akhilesh Das Gupta Institute of Professional Studies',
      degree: 'Bachelor of Technology',
      field: 'Artificial Intelligence and Machine Learning',
      year: 'Expected 2027',
      highlight: false,
    },
    {
      institution: 'Indian Institute of Technology, Ropar',
      degree: 'Minor Degree',
      field: 'Artificial Intelligence and Machine Learning',
      year: '2025-2026',
      highlight: true,
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Ayush Verma"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>daringkhiladi23@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 76781 39195</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Ghaziabad, India</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* About Text and Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm an aspiring <span className="text-foreground font-medium">AI/ML Engineer</span> with 
                hands-on experience in building intelligent systems that leverage cutting-edge technologies. 
                My expertise spans across natural language processing, sentiment analysis, and building 
                scalable machine learning pipelines.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With a strong foundation in both <span className="text-foreground font-medium">Python</span> and 
                modern <span className="text-foreground font-medium">web technologies</span>, I bridge the gap 
                between complex ML models and user-friendly applications. I'm passionate about transforming 
                raw data into actionable insights that drive business decisions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Currently pursuing my B.Tech in AI/ML along with a minor degree from 
                <span className="text-primary font-medium"> Dr. Akhilesh Das Gupta Institute of Professional Studies</span>, I combine academic excellence 
                with practical project experience to deliver production-ready solutions.
              </p>
            </div>

            {/* Education Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`bg-card border-border ${edu.highlight ? 'border-primary/50' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {edu.institution}
                            {edu.highlight && (
                              <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                                IIT
                              </span>
                            )}
                          </h4>
                          <p className="text-muted-foreground">
                            {edu.degree} in {edu.field}
                          </p>
                        </div>
                        <span className="text-sm text-primary font-medium">{edu.year}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
