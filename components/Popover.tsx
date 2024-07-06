import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ArchiTextProps } from '@/components/ArchiText';
interface PopoverComponentProps {
  props: ArchiTextProps;
  buttonText?: string;
  onSubmit: (newProps: ArchiTextProps) => void;
}

export function PopoverComponent<T>({
  props,
  buttonText = 'Open popover',
  onSubmit,
}: PopoverComponentProps) {
  const [formData, setFormData] = useState<ArchiTextProps>(props);

  // Sync formData when props change
  useEffect(() => {
    setFormData(props);
  }, [props]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const isNumberField = ['fontSize', 'width', 'height'].includes(name);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: isNumberField ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); // Call the onSubmit function with the updated props
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">{buttonText}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Values</h4>
            <p className="text-sm text-muted-foreground">Set properties</p>
          </div>
          <div className="grid gap-2">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="grid grid-cols-3 items-center gap-4">
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
          <Button type="submit" variant="default">
            Submit
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
