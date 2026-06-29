import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "BTech in Information Technology",
      institution: "Karpagam College of Engineering, Coimbatore",
      year: "2022 - 2026",
      description: "CGPA: 8.40"
    },
    {
      degree: "Higher Secondary Course (HSC)",
      institution: "E.R.K Higher Secondary School, Dharmapuri",
      year: "2021 - 2022",
      description: "Percentage: 87.5%"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "E.R.K Higher Secondary School, Dharmapuri",
      year: "2019 - 2020",
      description: "Percentage: 98.2%"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-cyber-dark relative overflow-hidden transition-colors duration-300">
      {/* Background neon orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-100">
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyber-purple/5 dark:bg-cyber-purple/5 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyber-cyan dark:to-cyber-purple dark:drop-shadow-[0_0_10px_rgba(0,242,254,0.3)]">Education</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-cyber-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic history and certifications that build the foundation of my technical knowledge.
          </p>
        </motion.div>

        <div className="relative space-y-10">
          {/* Vertical connecting line */}
          <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-500/30 via-purple-500/20 to-transparent dark:from-cyber-cyan/30 dark:via-cyber-purple/20 dark:to-transparent pointer-events-none"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-14"
            >
              {/* Radar pulse node */}
              <div className="absolute left-0 top-1 w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200/50 dark:bg-cyber-dark/80 dark:border-cyber-cyan/30 flex items-center justify-center shadow-sm">
                <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-cyber-cyan" />
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-gray-100 dark:border-cyber-border-dark shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.06)] dark:hover:shadow-[0_0_25px_rgba(0,242,254,0.06)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-4 right-4 bg-indigo-50 dark:bg-cyber-cyan/5 border border-indigo-100/50 dark:border-cyber-cyan/20 px-2 py-0.5 rounded text-[8px] font-mono text-indigo-600 dark:text-cyber-cyan tracking-wider">
                  // {index === 0 ? 'ACTIVE_STUDY' : 'COMPLETED'}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-display">{edu.degree}</h3>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3 text-sm">
                  <p className="text-indigo-600 dark:text-cyber-cyan font-bold font-mono tracking-wide">{edu.institution}</p>
                  <span className="hidden sm:block text-gray-300 dark:text-gray-700">•</span>
                  <p className="text-gray-500 dark:text-gray-400 font-medium">{edu.year}</p>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;