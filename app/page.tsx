import Image from 'next/image';
import Nav from '../components/Nav';
import UserForm from '../components/UserForm';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="p-12">
      <Nav />
      <div className="flex flex-col pt-16">
        <section className="pt-0 xs:pt-0 pb-12 flex flex-col items-center text-center gap-8 relative">
          <h1 className="text-5xl font-medium leading:10 lg:leading-12">
            Shadcn is what we use
          </h1>
          <p className="text-2xl leading-7 text-muted-foreground">
            Customize and create
          </p>
        </section>
        <div className="grid grid-row grid-cols-3 gap-4 p-4">
          <div className="col-start-1 col-span-3 lg:col-start-2 lg:col-span-1 pb-6 flex-col items-center gap-8">
            <UserForm />
          </div>
          <div className="col-span-1 col-start-2 flex gap-6 items-center justify-center">
            <Button variant={'secondary'}>Learn More</Button>
            <Button>Enroll Now</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
