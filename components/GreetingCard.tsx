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
import { AspectRatio } from './ui/aspect-ratio';

export interface GreetingCardProps {
  onSignInClick: () => void;
  onRegisterClick: () => void;
  imgPath: string;
  imgAlt: string;
  fitStyle: string;
}

const defaultGreetingProps: Omit<
  GreetingCardProps,
  'onSignInClick' | 'onRegisterClick'
> = {
  imgPath: '/imgs/marek-piwnicki-gynUp68f1mI-unsplash.jpg',
  imgAlt: 'Userform',
  fitStyle: 'cover',
};

const GreetingCard: React.FC<GreetingCardProps> = (cardProps) => {
  const { imgPath, imgAlt, fitStyle, onSignInClick, onRegisterClick } = {
    ...defaultGreetingProps,
    ...cardProps,
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-full max-w-screen-2xl bg-secondary rounded-md  pb-20 xs:pb-10 md:pb-0">
      <AspectRatio ratio={16 / 9}>
        <Card className="w-full h-full md:grid md:grid-cols-2 gap-4 border-none">
          <div className="relative overflow-hidden">
            <Image
              src={imgPath}
              alt={imgAlt}
              layout="fill"
              objectFit={fitStyle}
            />
          </div>
          <div className="flex flex-col justify-center p-4 w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-textDark">Welcome!</CardTitle>
              <CardDescription className="text-textDark">
                Please sign in or create an account to continue.
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              {/* Any additional content */}
            </CardContent>
            <CardFooter className="flex justify-center mt-4">
              <div className="flex flex-col space-y-4 w-full">
                <Button
                  onClick={onSignInClick}
                  className="w-full lg:w-2/3 mx-auto"
                >
                  Sign In
                </Button>
                <Button
                  onClick={onRegisterClick}
                  className="w-full lg:w-2/3 mx-auto"
                >
                  Create Account
                </Button>
              </div>
            </CardFooter>
          </div>
        </Card>
      </AspectRatio>
    </div>
  );
};

export default GreetingCard;
