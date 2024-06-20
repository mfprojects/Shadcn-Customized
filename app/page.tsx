import Image from 'next/image';
import Nav from '../components/Nav';
import UserForm from '../components/UserForm';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="p-24">
      <Nav />
      <div className="grid grid-row-auto grid-cols-7 gap-4 p-4">
        <section className="col-start-3 col-end-6 py-12 flex flex-col items-center text-center gap-8">
          <h1 className="text-5xl font-medium leading-12">
            Shadcn is what we use
          </h1>
          <p className="text-2xl leading-7 text-muted-foreground">
            Customize and create
          </p>
        </section>
        <div className="col-start-1 col-span-7 sm:col-start-2 md:col-start-3 sm:col-span-5 md:col-span-3 pb-6 flex-1 flex-col items-center gap-8">
          <UserForm />
        </div>
        <div className="col-start-4 flex gap-6 items-center justify-center">
          <Button variant={'secondary'}>Learn More</Button>
          <Button>Enroll Now</Button>
        </div>
      </div>
    </main>
  );
}
