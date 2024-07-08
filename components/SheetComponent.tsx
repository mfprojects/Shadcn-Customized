import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface SheetComponentProps<T extends Record<string, any>> {
  props: T;
  buttonText?: string;
  onSubmit: (newProps: T) => void;
  className?: string;
  buttonClassName?: string;
}

export function SheetComponent<T extends Record<string, any>>({
  props,
  buttonText = 'Open Sheet',
  onSubmit,
  className = '',
  buttonClassName = '', // Default to an empty string
}: SheetComponentProps<T>) {
  const [formData, setFormData] = useState<T>(props);

  // Sync formData when props change
  useEffect(() => {
    setFormData(props);
  }, [props]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: isNaN(Number(value)) ? value : Number(value),
    }));
  };

  const handleSaveChanges = () => {
    onSubmit(formData); // Call the onSubmit function with the updated props
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className={`w-full text-left py-4 rounded bg-highlightColor text-white ${buttonClassName} glow-on-hover`}
        >
          {buttonText}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full h-full max-h-screen overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="py-4 text-center">Edit Props</SheetTitle>
          <SheetDescription>
            <form className="grid gap-4">
              <div className="inline-flex flex-row w-full justify-between pt-4">
                <p className="font-semibold text-white leading-none justify-self-end text-left">
                  Properties
                </p>
                <p className="font-semibold text-white leading-none justify-self-start text-right">
                  Values
                </p>
              </div>
              <div className="grid gap-4">
                {Object.entries(formData).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex flex-col-2 col-span-3 justify-center items-center items-left gap-4"
                  >
                    <Label htmlFor={key} className="flex-1">
                      {key}
                    </Label>
                    <Input
                      id={key}
                      name={key}
                      value={value.toString()}
                      onChange={handleInputChange}
                      className="flex-1"
                    />
                  </div>
                ))}
              </div>
            </form>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <div className="flex flex-row justify-center items-center h-32 my-8 mx-auto">
              <Button
                type="button"
                onClick={handleSaveChanges}
                className="bg-color10/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-color10 hover:scale-110 duration-300"
              >
                Save changes
              </Button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
