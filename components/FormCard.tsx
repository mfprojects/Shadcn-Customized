import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SignInForm from './SignInForm';
import RegisterForm from './RegisterForm';

interface FormCardProps {
  formType: 'signin' | 'register';
  onBackClick: () => void;
}

const FormCard: React.FC<FormCardProps> = ({ formType, onBackClick }) => (
  <div className="flex flex-col justify-center items-center mx-auto w-full p-4 bg-secondary">
    <Card className="w-full gap-4 p-4 frosted-glass">
      <CardHeader className="">
        <CardTitle>
          {formType === 'signin' ? 'Sign In' : 'Create Account'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {formType === 'signin' ? <SignInForm /> : <RegisterForm />}
      </CardContent>

      <CardFooter>
        <Button onClick={onBackClick} className="btn-secondary">
          Back
        </Button>
      </CardFooter>
    </Card>
  </div>
);

export default FormCard;
