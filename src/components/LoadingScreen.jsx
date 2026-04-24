import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.06, 1], opacity: 1 }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="font-display text-4xl font-bold"
          >
            <span className="gradient-text">Sksamin</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
