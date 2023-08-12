export function onRequest(context) {
  let email = request.body;
  let region = request.cf.region;
  let value = await env.NOTIFY.get("test");
  await env.NOTIFY.put(region + ":" + Date. now(), email);
  // Return the value, as is, for the Response
  return new Response(value + email + region);

};