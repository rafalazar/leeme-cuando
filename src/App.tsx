import { useEffect, useState } from 'react';
import './App.css';
import { MoodCard } from './components/MoodCard';
import { PhraseModal } from './components/PhraseModal';

const moods = [
  { id: 'M001', mood: 'feliz', bgColor: '#cdb4db', emoji: '😄' },
  { id: 'M002', mood: 'triste', bgColor: '#bde0fe', emoji: '😭' },
  { id: 'M003', mood: 'enojada', bgColor: '#ffafcc', emoji: '😡' },
  { id: 'M004', mood: 'desmotivada', bgColor: '#f4a261', emoji: '😕' },
  { id: 'M005', mood: 'preocupada', bgColor: '#c7f9cc', emoji: '😣' },
];

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [moodSelected, setMoodSelected] = useState<string>('');
  const [bgSelected, setBgSelected] = useState<string>('');

  useEffect(() => {
    if (moodSelected !== '') {
      setShowModal(true);
    }
  }, [moodSelected]);
  return (
    <>
      <PhraseModal
        showModal={showModal}
        setShowModal={setShowModal}
        setMoodSelected={setMoodSelected}
        moodName={moodSelected}
        bgColor={bgSelected}
      />
      <div className='flex justify-center flex-col items-center'>
        <h1 className='mt-3 text-2xl'>Querida Emily</h1>
        <h2 className='mt-4 text-2xl'>léeme cuando te sientas:</h2>
      </div>
      <div className='flex flex-col gap-2 mt-4 px-2'>
        {moods.map((mood) => (
          <MoodCard
            key={mood.id}
            mood={mood.mood}
            color={mood.bgColor}
            emoji={mood.emoji}
            setMoodSelected={setMoodSelected}
            setBgSelected={setBgSelected}
          />
        ))}
      </div>
    </>
  );
}

export default App;
