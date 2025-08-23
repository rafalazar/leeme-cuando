import type React from 'react';
import { motion } from 'motion/react';

interface MoodCardProps {
  emoji: string;
  mood: string;
  color: string;
  setMoodSelected: (value: string) => void;
  setBgSelected: (value: string) => void;
  setShowModal: (value: boolean) => void;
}

export const MoodCard: React.FC<MoodCardProps> = ({
  mood,
  color,
  emoji,
  setMoodSelected,
  setBgSelected,
  setShowModal,
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      style={{ backgroundColor: color }}
      className='border border-dashed rounded-2xl p-4 py-8 flex justify-center items-center gap-2'
      onClick={() => {
        setMoodSelected(mood);
        setBgSelected(color);
        setShowModal(true)
      }}
    >
      <h1 className='text-2xl'>{mood.toUpperCase()}</h1>
      <span className='text-3xl'>{emoji}</span>
    </motion.div>
  );
};
