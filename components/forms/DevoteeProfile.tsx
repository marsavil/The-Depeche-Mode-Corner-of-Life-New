"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevoteeValidation } from "@/lib/validations/devotee";
import { z } from "zod";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { Textarea } from "../ui/textarea";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from '@/lib/uploadthing'
import { updateDevotee } from "@/lib/actions/devotee.actions";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    lastname: string;
    country: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}


const DevoteeProfile = ({ user, btnTitle }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing('media');

  const form = useForm({
    resolver: zodResolver(DevoteeValidation),
    defaultValues: {
      profile_photo: user?.image || "",
      name: user?.name || "",
      lastname: user?.lastname || "",
      username: user?.username || "",
      bio: user?.bio || "",
      country: user?.country || "",
    },
  });

  async function onSubmit(values: z.infer<typeof DevoteeValidation>) {
    const blob = values.profile_photo;
    console.log('clicked')
    const hasImageChanged = isBase64Image(blob)
    if (hasImageChanged){
      const imgRes = await startUpload(files)
      if(imgRes && imgRes[0].url){
        values.profile_photo = imgRes[0].url
      }
    }
    await updateDevotee({
      username: values.username,
      name: values.name,
      lastname: values.lastname,
      country: values.country,
      bio: values.bio,
      image: values.profile_photo,
      userId: user.id,
      path: pathname

  });
  if ( pathname === '/profile/edit') {
    router.back();
  } else {
    router.push('/');
  }  
  }


  function handleImage(
  e: ChangeEvent<HTMLInputElement>,
  fieldChange: (value: string) => void
) {
  e.preventDefault();

  const fileReader = new FileReader(); // Lee el archivo

  if (e.target.files && e.target.files.length > 0) {
    const file = e.target.files[0];

    setFiles(Array.from(e.target.files));

    if (!file.type.includes("image")) return;

    fileReader.onload = async (event) => {
      const imageDataUrl = event.target?.result?.toString() || "";
      fieldChange(imageDataUrl);
    };
    fileReader.readAsDataURL(file);
  }
  }
  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10"
      >
        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="account-form_image-label">
                {field.value ? (
                  <Image
                    src={field.value}
                    alt="profile photo"
                    width={96}
                    height={96}
                    priority
                    className="rounded-full object-contain"
                  />
                ) : (
                  <Image
                    src="/assets/profile.svg"
                    alt="profile photo"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                )}
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold text-gray-200">
                <Input
                  placeholder="Upload a photo"
                  type="file"
                  accept="image/*"
                  className="account-form_image-input"
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
              <FormMessage / >
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Nombre
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Escribe tu nombre"
                  type="text"
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage / >
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Apellido
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Escribe tu apellido"
                  type="text"
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage / >
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Nombre de Usuario
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Escribe tu nombre de usuario"
                  type="text"
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage / >
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                País
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Tu país de origen"
                  type="text"
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage / >
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Bio
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Cuentanos lo que gustes"
                  rows={10}
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage / >
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-primary-500">
          Submit
        </Button>
      </form>
    </Form>
  );
}; 
export default DevoteeProfile;
