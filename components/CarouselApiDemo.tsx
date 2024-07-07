'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/legacy/image';
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
    <div className="flex flex-col justify-center items-center">
      <div className="mb-2">
        <h2 className="text-2xl font-light leading-tight tracking-wide text-indigo-100 text-center bg-gradient-to-r from-indigo-50 to-blue-100 bg-clip-text text-transparent mt-6 lg:mb-2">
          Tap or Click to enlarge
        </h2>
      </div>
      <div className="flex-1 justify-center items-center mx-auto">
        <Carousel setApi={setApi} className="w-full max-w-2xl">
          <CarouselContent className="">
            {[
              '/testData/arkitek1.jpg',
              '/testData/arkitek2.jpg',
              '/testData/gate.jpg',
              '/testData/katt.jpg',
              '/testData/mann.jpg',
            ].map((src, index) => (
              <CarouselItem className="pl-0" key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-auto items-center justify-center">
                      <Image
                        src={src}
                        alt={`The city of Athens ${index + 1}`}
                        objectFit="cover"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA..."
                        placeholder="blur"
                        width={800}
                        height={1000}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex flex-row justify-between mb-10">
            <CarouselPrevious className="flex relative ml-6 mt-2 lg:ml-12 lg:mt-3 2xl:absolute 2xl:top-1/2 2xl:-left-20" />
            <div className="py-2 flex-1 text-center text-sm text-muted-foreground">
              Slide {current} of {count}
            </div>
            <CarouselNext className="flex relative mr-6 mt-2 lg:mr-12 lg:mt-3 2xl:absolute 2xl:top-1/2 2xl:-right-20" />
          </div>
        </Carousel>
      </div>
      <div className="flex items-center justify-center w-full pb-4 gap-4">
        <Button
          size="lg"
          className="justify-center shadow-md shadow-color10/30 bg-color10"
        >
          Upload
        </Button>
      </div>
    </div>
  );
}
