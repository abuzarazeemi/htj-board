import { readBody } from "h3";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();
  console.log("config >>>>>> ", config.public);
  const supabase = await createClient(
    config.public.supabaseUrl,
    config.public.supabaseKey
  );

  // Your Paddle webhook secret
  const webhookSecret =
    "pdl_ntfset_01j1wv8td7ekcvq406xc0wz5m7_zKsyGaYAGcxnqsm7umdQ3y5QBl6fthNu";

  // Function to verify the webhook signature
  const isValidSignature = (data, secret) => {
    const { p_signature, ...fields } = data;
    const sortedKeys = Object.keys(fields).sort();
    const sortedData = {};
    sortedKeys.forEach((key) => {
      sortedData[key] = fields[key];
    });

    const serializedData = JSON.stringify(sortedData);
    const hash = crypto
      .createHmac("sha256", secret)
      .update(serializedData)
      .digest("base64");

    return p_signature === hash;
  };

  // Verify the webhook
  //   if (!isValidSignature(body, webhookSecret)) {
  //     return { status: 400, message: 'Invalid signature' };
  //   }
  // const { $supabase } = useNuxtApp();
  if (body.event_type === "transaction.completed") {
    const { data, error } = await supabase
      .from("jobs")
      .update({
        status: "active",
      })
      .eq("id", body.data.custom_data.jobId)
      .select();
  }

  return { status: 200, message: "Webhook received" };
});
