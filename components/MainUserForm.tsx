import React, { useState } from 'react';
import GreetingCard, { GreetingCardProps } from './GreetingCard';
import FormCard from './FormCard';
import Image from 'next/image';

const MainUserForm: React.FC = () => {
  const [view, setView] = useState<'initial' | 'signin' | 'register'>(
    'initial'
  );

  const greetingCardProps: GreetingCardProps = {
    imgPath: '/imgs/marek-piwnicki-gynUp68f1mI-unsplash.jpg',
    imgAlt: 'Userform',
    fitStyle: 'cover',
    onSignInClick: () => setView('signin'),
    onRegisterClick: () => setView('register'),
  };

  return (
    <div className="container mx-auto p-4">
      {view === 'initial' && <GreetingCard {...greetingCardProps} />}
      {(view === 'signin' || view === 'register') && (
        <FormCard formType={view} onBackClick={() => setView('initial')} />
      )}
    </div>
  );
};

export default MainUserForm;
