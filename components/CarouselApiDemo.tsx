'use client';
import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

export function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent className="max-w-xs">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem className="" key={index}>
              <Card className="m-3">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex flex-row justify-between">
          <CarouselPrevious className="flex relative ml-3 lg:mr-0 lg:absolute" />
          <div className="py-2 flex-1 text-center text-sm text-muted-foreground">
            Slide {current} of {count}
          </div>
          <CarouselNext className="flex relative mr-3 lg:mr-0 lg:absolute" />
        </div>
      </Carousel>
    </div>
  );
}
