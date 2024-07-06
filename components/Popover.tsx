import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface popoverProps {
  [key: string]: string | number | undefined;
}

export function PopoverComponent({ props }: { props: popoverProps }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Values</h4>
            <p className="text-sm text-muted-foreground">Set properties</p>
          </div>
          <div className="grid gap-2">
            {Object.entries(props).map(([key, value]) => (
              <div key={key} className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor={key}>{key}</Label>
                <Input
                  id={key}
                  defaultValue={value?.toString() || ''}
                  className="col-span-2 h-8"
                />
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
