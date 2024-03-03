
import NewsForm from "@/components/forms/NewsForm";
import { fetchDevotee } from "@/lib/actions/devotee.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Page() {
  const devotee = await currentUser();
  const devoteeDB = await fetchDevotee(devotee?.id);


  if (!devoteeDB?.onboarded) {
    redirect('/onboarding');
    return; // Detener la ejecución de la función después de redireccionar.
  }

  console.log("¿Soy administrador?", devoteeDB?.isAdmin);

  if (!devoteeDB?.isAdmin) redirect('/')

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Redacción</h1>
      <p className="mt-3 text-base-regular text-light-2">Completa el formulario para agregar una nueva noticia</p>
      <section className="mt-9 bg-dark-2 p-10">
        <NewsForm 
          author={devoteeDB._id}
        />
      </section>
    </main>
  )

}
