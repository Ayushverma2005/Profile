// import { motion } from 'framer-motion';
// import { Quote } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';

// const testimonials = [
//   {
//     quote:
//       "Ayush's expertise in ML and his ability to translate complex AI concepts into practical solutions is remarkable. His StockNews project showcased exceptional technical depth.",
//     author: 'Prof. Sharma',
//     role: 'Faculty Advisor, AI/ML Department',
//     avatar: '👨‍🏫',
//   },
//   {
//     quote:
//       "Working with Ayush on the sentiment analysis pipeline was a great experience. His attention to detail and commitment to achieving high accuracy made the project successful.",
//     author: 'Rohit Kumar',
//     role: 'Project Collaborator',
//     avatar: '👨‍💻',
//   },
//   {
//     quote:
//       "Ayush demonstrates strong problem-solving skills and keeps up with the latest developments in AI/ML. His full-stack capabilities make him a versatile developer.",
//     author: 'Ananya Singh',
//     role: 'Team Lead, Tech Club',
//     avatar: '👩‍💼',
//   },
// ];

// const TestimonialsSection = () => {
//   return (
//     <section id="testimonials" className="py-24 relative bg-secondary/20">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             What People <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Say</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Feedback from mentors, collaborators, and peers
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Card className="bg-card border-border h-full hover:border-primary/50 transition-colors">
//                 <CardContent className="p-6 flex flex-col h-full">
//                   <Quote className="w-10 h-10 text-primary/30 mb-4" />
//                   <p className="text-muted-foreground flex-1 leading-relaxed italic mb-6">
//                     "{testimonial.quote}"
//                   </p>
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl">
//                       {testimonial.avatar}
//                     </div>
//                     <div>
//                       <p className="font-semibold text-foreground">{testimonial.author}</p>
//                       <p className="text-sm text-muted-foreground">{testimonial.role}</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
