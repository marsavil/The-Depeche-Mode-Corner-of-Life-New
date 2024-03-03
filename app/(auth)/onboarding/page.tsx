
import DevoteeProfile from "@/components/forms/DevoteeProfile";
import { fetchDevotee } from "@/lib/actions/devotee.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from 'next/navigation';


export default async function Page() {
  const devotee = await currentUser();
  console.log(devotee?.id)
  const devoteeDB = await fetchDevotee(devotee?.id);
  const devoteeData = {
    id: devotee?.id,
    objectId: devoteeDB?._id,
    username: devoteeDB?.username || devotee?.username,
    name: devoteeDB?.name || devotee?.firstName || '',
    lastname: devoteeDB?.lastname || '',
    bio: devoteeDB?.bio || '',
    country: devoteeDB?.country || '',
    image: devoteeDB?.image ||devotee?.imageUrl
  };
  if (devoteeDB?.onboarded ) redirect( '/')

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">Completa tu perfil para poder continuar</p>
      <section className="mt-9 bg-dark-2 p-10">
        <DevoteeProfile 
          user={ devoteeData }
          btnTitle='Continue'
        />
      </section>
    </main>
  );
}