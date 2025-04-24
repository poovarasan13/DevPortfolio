import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "BTech in  Information Technology",
      institution: "Karpagam College of Engineering , Coimbatore",
      year: "2022 - Pressnt",
      description: " CGPA : 8.5"
    },
    {
      degree: "Higher Secondary Education",
      institution: "E.R.K Higher Secondary School , Dharmapuri",
      year: "2021 - 2022",
      description: "Percentage: 87.5 "
    }
    ,
    {
      degree: "Secondary School Eduaction",
      institution: "E.R.K Higher Secondary School , Dharmapuri",
      year: "2020 - 2021",
      description: "Percentage: 98.2 "
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and qualifications that shaped my technical skills.
          </p>
        </motion.div>

        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">{edu.institution}</p>
                  <span className="hidden sm:block text-gray-400">•</span>
                  <p className="text-gray-500 dark:text-gray-400">{edu.year}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;