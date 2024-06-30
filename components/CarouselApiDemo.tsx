'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
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
      <div className="flex-auto mb-8">
        <h2 className="flex-auto pt-8 text-xl font-light leading-7 text-indigo-300 opacity-80 hover:opacity-100 text-wrap text-center bg-gradient-to-r from-indigo-50 to-blue-100 bg-clip-text text-transparent">
          Family Photos
        </h2>
      </div>
      <div className="flex justify-center w-full">
        <Carousel
          setApi={setApi}
          className="w-full max-w-sm sm:max-w-md xl:max-w-xl"
        >
          <CarouselContent className="">
            {[
              '/testData/arkitek1.jpg',
              '/testData/arkitek2.jpg',
              '/testData/gate.jpg',
              '/testData/katt.jpg',
              '/testData/mann.jpg',
            ].map((src, index) => (
              <CarouselItem className="" key={index}>
                <Card className="my-3 mx-3">
                  <CardContent className="flex aspect-auto max-h-96 xl:max-h-600 items-center justify-center p-0 overflow-hidden">
                    <Image
                      src={src}
                      alt={`Family photo ${index + 1}`}
                      width={800}
                      height={800}
                      style={{ objectFit: 'contain' }}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex flex-row justify-between mb-10">
            <CarouselPrevious className="flex relative ml-3 lg:ml-14 lg:mt-3 xl:ml-0 xl:mt-0 xl:absolute" />
            <div className="py-2 flex-1 text-center text-sm text-muted-foreground">
              Slide {current} of {count}
            </div>
            <CarouselNext className="flex relative mr-3 lg:mr-14 lg:mt-3 xl:mr-0 xl:mt-0 xl:absolute" />
          </div>
        </Carousel>
      </div>
      <div className="flex-1 flex items-center justify-center w-full gap-4">
        <Button
          size="lg"
          className="justify-center shadow-md shadow-slate-300/25 bg-gradient-to-tr from-textColor to-slate-500"
        >
          Upload
        </Button>
      </div>
    </div>
  );
}
