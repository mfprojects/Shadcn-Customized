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
}

export function SheetComponent<T extends Record<string, any>>({
  props,
  buttonText = 'Open Sheet',
  onSubmit,
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
        <Button className="w-full text-left px-4 py-2 rounded bg-highlightColor text-white">
          {buttonText}
        </Button>
      </SheetTrigger>
      <SheetContent className="lg:w-full">
        <SheetHeader>
          <SheetTitle>Edit Props</SheetTitle>
          <SheetDescription>
            <form className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Values</h4>
                <p className="text-sm text-muted-foreground">Set properties</p>
              </div>
              <div className="grid gap-2">
                {Object.entries(formData).map(([key, value]) => (
                  <div
                    key={key}
                    className="grid grid-cols-3 items-center gap-4"
                  >
                    <Label htmlFor={key}>{key}</Label>
                    <Input
                      id={key}
                      name={key}
                      value={value.toString()}
                      onChange={handleInputChange}
                      className="col-span-2 h-8"
                    />
                  </div>
                ))}
              </div>
            </form>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="button" onClick={handleSaveChanges}>
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
