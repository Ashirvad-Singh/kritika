import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FloatingHearts } from '@/components/FloatingHearts';
import { LandingScreen } from '@/components/screens/LandingScreen';
import { TransitionScreen } from '@/components/screens/TransitionScreen';
import { MemoriesScreen } from '@/components/screens/MemoriesScreen';
import { PromiseScreen } from '@/components/screens/PromiseScreen';
import { ProposalScreen } from '@/components/screens/ProposalScreen';
import { SuccessScreen } from '@/components/screens/SuccessScreen';
import { ForeverScreen } from '@/components/screens/ForeverScreen';
import { FinalScreen } from '@/components/screens/FinalScreen';

type Screen = 
  | 'landing' 
  | 'transition' 
  | 'memories' 
  | 'promises' 
  | 'proposal' 
  | 'success' 
  | 'forever' 
  | 'final';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen bg-romantic-gradient overflow-hidden relative">
      {/* Floating Hearts Background */}
      <FloatingHearts count={25} />

      {/* Screen Container */}
      <AnimatePresence mode="wait">
        {currentScreen === 'landing' && (
          <LandingScreen key="landing" onContinue={() => navigateTo('transition')} />
        )}
        {currentScreen === 'transition' && (
          <TransitionScreen key="transition" onContinue={() => navigateTo('memories')} />
        )}
        {currentScreen === 'memories' && (
          <MemoriesScreen key="memories" onContinue={() => navigateTo('promises')} />
        )}
        {currentScreen === 'promises' && (
          <PromiseScreen key="promises" onContinue={() => navigateTo('proposal')} />
        )}
        {currentScreen === 'proposal' && (
          <ProposalScreen key="proposal" onYes={() => navigateTo('success')} />
        )}
        {currentScreen === 'success' && (
          <SuccessScreen key="success" onFinalMessage={() => navigateTo('forever')} />
        )}
        {currentScreen === 'forever' && (
          <ForeverScreen key="forever" onContinue={() => navigateTo('final')} />
        )}
        {currentScreen === 'final' && <FinalScreen key="final" />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
