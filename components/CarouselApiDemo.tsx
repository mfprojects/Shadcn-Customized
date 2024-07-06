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
  const [showLightbox, setShowLightbox] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState('');

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
    <div>
      <div className="flex-auto mb-2">
        <h2 className="flex-auto pt-2 text-lg font-light leading-7 tracking-widest text-indigo-100 opacity-80 hover:opacity-100 text-wrap text-center bg-gradient-to-r from-indigo-50 to-blue-100 bg-clip-text text-transparent">
          City of Athens
        </h2>
      </div>
      <div className="flex justify-center">
        <Carousel
          setApi={setApi}
          className="w-full h-full min-h-96 min-w-96 sm:max-h-800 sm:max-w-2xl xl:max-w-3xl"
        >
          <CarouselContent className="w-full h-full">
            {[
              '/testData/arkitek1.jpg',
              '/testData/arkitek2.jpg',
              '/testData/gate.jpg',
              '/testData/katt.jpg',
              '/testData/mann.jpg',
            ].map((src, index) => (
              <CarouselItem
                className="flex justify-center items-center w-full h-full"
                key={index}
              >
                <Card className="my-3 mx-3 w-full h-full flex justify-center items-center">
                  <CardContent className="relative w-full h-96 sm:h-112 md:h-[700px] overflow-hidden">
                    <Image
                      src={src}
                      alt={`The city of Athens ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex flex-row justify-between mb-10 w-full">
            <CarouselPrevious className="flex relative ml-6 lg:ml-14 lg:mt-3 2xl:absolute 2xl:top-1/2 2xl:-left-20" />
            <div className="py-2 flex-1 text-center text-sm text-muted-foreground">
              Slide {current} of {count}
            </div>
            <CarouselNext className="flex relative mr-6 lg:mr-14 lg:mt-3 2xl:absolute 2xl:top-1/2 2xl:-right-20" />
          </div>
        </Carousel>
      </div>
      <div className="flex-1 flex items-center justify-center w-full gap-4">
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
