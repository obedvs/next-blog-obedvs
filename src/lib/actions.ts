'use server'

import { db } from '@/db';
import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { z } from 'zod'

const FormSchema = z.object({
  id: z.number(),
  email: z.string().min(1, { message: 'Email es Requerido' }),
  isSubscribed: z.boolean()
});

const CreateSubscriber = FormSchema.omit({ id: true, isSubscribed: true });

type State = {
  errors?: {
    email?: string[];
  },
  message?: string | null;
}

export async function createSubscriber(prevState: State, formData: FormData) {
  const validatedField = CreateSubscriber.safeParse({
    email: formData.get('email')
  });

  if (!validatedField.success) {
    return { errors: validatedField.error.flatten().fieldErrors, message: "Email es Requerido" };
  }

  const { email } = validatedField.data;

  try {
    await db.subscriber.create({
      data: {
        email,
      }
    });
    revalidatePath('/')
    return { message: "¡Gracias por Suscribirte!" };
  } catch (error) {
    if (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          return { message: "¡El Correo electrónico ya está registrado!" };
        }
      }
    }
    return { message: 'Error de Base de Datos: Falló al Suscribir.' };
  }
}