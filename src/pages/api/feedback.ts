import type { APIRoute } from 'astro';

export const POST = async ({ request }) => {
  const body = await request.json();

  console.log(JSON.stringify({ route: "/api/feedback", message: body.message, time: new Date().toISOString() }));

  return new Response(JSON.stringify({ status: "received" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const GET = () =>
  new Response(JSON.stringify({ info: "send a POST with a message" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });