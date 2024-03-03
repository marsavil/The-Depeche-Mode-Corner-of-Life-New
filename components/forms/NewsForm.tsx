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
import { NewsValidation } from "@/lib/validations/news";
import { z } from "zod";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { Textarea } from "../ui/textarea";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { updateDevotee } from "@/lib/actions/devotee.actions";
import { usePathname, useRouter } from "next/navigation";
import { addNew } from "@/lib/actions/news.actions";


const NewsForm = ({author}: {author: string}) => {
  console.log(author.toString())
  const APP = process.env.APP
  const pathname = usePathname();
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing("media");
  console.log(APP)
  const form = useForm({
    resolver: zodResolver(NewsValidation),
    defaultValues: {
      image: `${APP}/assets/news_image.svg`,
      title: "",
      author: author,
      text: "",
    },
  });
  console.log(form)

  async function onSubmit(values: z.infer<typeof NewsValidation>) {
    console.log("empieza el submit")
    const blob = values.image;
    console.log("clicked");
    const hasImageChanged = isBase64Image(blob);
    console.log("cambio la imagen?",hasImageChanged);
    if (hasImageChanged) {
      const imgRes = await startUpload(files);
      if (imgRes && imgRes[0].url) {
        values.image = imgRes[0].url;
      }
    }
    await addNew({
      image: values.image,
      title: values.title,
      author: author,
      text: values.text,
    });
    router.push("/");
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
      console.log(file)
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
          name="image"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="news-form_image-label">
                {field.value ? (
                  <Image
                    src={field.value}
                    alt="image"
                    width={96}
                    height={96}
                    priority
                    className="rounded-15px object-contain"
                  />
                ) : (
                  <Image
                    src="/assets/news_image.svg"
                    alt="image"
                    width={120}
                    height={120}
                    className="rounded-15px object-contain"
                  />
                )}
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold text-gray-200">
                <Input
                  placeholder="Upload a photo"
                  type="file"
                  accept="image/*"
                  className="news-form_image-input"
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Titular
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Cuerpo
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={10}
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-primary-500">
          Enviar
        </Button>
      </form>
    </Form>
  );
};
export default NewsForm;
