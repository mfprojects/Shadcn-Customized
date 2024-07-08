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
    <div className="flex flex-col justify-center items-center shrink">
      <div className="mb-2 flex-auto">
        <h2 className="text-2xl font-light leading-tight tracking-wide text-indigo-100 text-center bg-gradient-to-r from-indigo-50 to-blue-100 bg-clip-text text-transparent mt-6 lg:mb-2">
          Tap or Click to enlarge
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <Carousel
          setApi={setApi}
          className="shrink justify-center content-center max-h-screen w-screen contain-content"
        >
          <CarouselContent className="">
            {[
              '/testData/arkitek1.jpg',
              '/testData/arkitek2.jpg',
              '/testData/gate.jpg',
              '/testData/katt.jpg',
              '/testData/mann.jpg',
            ].map((src, index) => (
              <CarouselItem key={index} className="">
                <Card className="w-full max-h-[1000px] xl:max-w-screen-2xl mx-auto ">
                  <CardContent className="flex flex-row justify-center p-0 mr-[156px]  pr-5">
                    <div className="flex-auto  ">
                      <Image
                        className="aspect-auto"
                        src={src}
                        alt={`Image ${index + 1}`}
                        layout="responsive"
                        objectFit="fill"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA..."
                        placeholder="blur"
                        height={500}
                        width={300}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex-row justify-center mb-10  h-full">
            <CarouselPrevious className="flex relative ml-6 mt-2 lg:ml-12 lg:mt-3" />
            <div className="py-2 flex-1 text-center text-sm text-muted-foreground">
              Slide {current} of {count}
            </div>
            <CarouselNext className="flex relative mr-6 mt-2 lg:mr-12 lg:mt-3" />
          </div>
        </Carousel>
      </div>
      <div className="flex items-center justify-center pb-4 gap-4">
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
