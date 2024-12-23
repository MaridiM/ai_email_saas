// /api/clerk/webhook

import { db } from "@/server/db";

export async function POST(req: Request) {
    const { data } = await req.json()

    const newUser = {
      id: data.id,
      email_address: data.email_addresses[0].email_address,
      first_name: data.first_name,
      last_name: data.last_name,
      image_url: data.image_url,
    };

    await db.user.create({
        data: {...newUser}
    })

    return new Response('[]Webhook received', { status: 200 })
}