import { AnimatePresence, motion } from 'motion/react';
import { moodPhrases, type MoodKey } from '../data/mood-phrases';

interface PhraseModalProps {
  moodName: string;
  bgColor: string;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  setMoodSelected: (value: string) => void;
}

export const PhraseModal: React.FC<PhraseModalProps> = ({
  moodName,
  bgColor,
  setShowModal,
  showModal,
  // setMoodSelected,
}) => {
  const getPhrase = (mood: MoodKey) => {
    const phrases = moodPhrases[mood];

    return phrases[Math.floor(Math.random() * phrases.length)];
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className='fixed top-0 left-0 z-50 grid justify-center items-center h-screen w-screen bg-slate-800/80'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            setShowModal(false);
            // setMoodSelected('');
          }}
        >
          <motion.div
            style={{ backgroundColor: bgColor }}
            className='p-6 rounded-2xl text-center mx-2'
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{
              scale: 0.7,
              opacity: 0,
              y: 30,
              transition: { duration: 0.2 },
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className='text-2xl'>{getPhrase(moodName as MoodKey)}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
