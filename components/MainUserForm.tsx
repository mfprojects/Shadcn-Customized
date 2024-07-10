import React, { useState } from 'react';
import GreetingCard, { GreetingCardProps } from './GreetingCard';
import FormCard from './FormCard';

const MainUserForm: React.FC = () => {
  const [view, setView] = useState<'initial' | 'signin' | 'register'>(
    'initial'
  );

  const greetingCardProps: GreetingCardProps = {
    imgPath: '/imgs/shubham-dhage-RJEuYGR5tBg-unsplash.jpg',
    imgAlt: 'Userform',
    imgWidth: 400,
    imgHeight: 400,
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
