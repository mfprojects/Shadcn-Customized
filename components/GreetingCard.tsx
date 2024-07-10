import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export interface GreetingCardProps {
  onSignInClick: () => void;
  onRegisterClick: () => void;
  imgPath: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
}

const defaultGreetingProps: Omit<
  GreetingCardProps,
  'onSignInClick' | 'onRegisterClick'
> = {
  imgPath: '/imgs/shubham-dhage-RJEuYGR5tBg-unsplash.jpg',
  imgAlt: 'Userform',
  imgWidth: 400,
  imgHeight: 400,
};

const GreetingCard: React.FC<GreetingCardProps> = (cardProps) => {
  const {
    imgPath,
    imgAlt,
    imgWidth,
    imgHeight,
    onSignInClick,
    onRegisterClick,
  } = { ...defaultGreetingProps, ...cardProps };

  return (
    <div className="flex justify-center items-center mx-auto w-full max-w-4xl p-4 bg-secondary">
      <Card className="w-full max-w-4xl md:grid md:grid-cols-2 gap-4 p-4 frosted-glass">
        <div className="flex justify-center items-center">
          <Image
            src={imgPath}
            alt={imgAlt}
            width={imgWidth}
            height={imgHeight}
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center p-4">
          <CardHeader className="text-center">
            <CardTitle className="text-textDark">Welcome!</CardTitle>
            <CardDescription className="text-textDark">
              Please sign in or create an account to continue.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            {/* Any additional content */}
          </CardContent>
          <CardFooter className="flex justify-around mt-4">
            <Button onClick={onSignInClick} className="btn-primary">
              Sign In
            </Button>
            <Button onClick={onRegisterClick} className="btn-secondary">
              Create Account
            </Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default GreetingCard;
