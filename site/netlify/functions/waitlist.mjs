// Netlify Function: waitlist signup handler
// Stores emails as JSON files via Netlify's built-in KV (environment-based)
// Falls back to logging if storage unavailable

export default async (req, context) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  if (req.method === "OPTIONS") {
    return new Response("", { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405, headers: corsHeaders,
    });
  }

  try {
    let email;
    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body = await req.json();
      email = body.email;
    } else {
      const text = await req.text();
      const params = new URLSearchParams(text);
      email = params.get("email");
    }

    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Valid email required" }), {
        status: 400, headers: corsHeaders,
      });
    }

    const timestamp = new Date().toISOString();
    const entry = { email, timestamp, source: "lobstercondo.net" };

    // Log to function logs (always available, retrievable via Netlify dashboard)
    console.log("WAITLIST_SIGNUP:", JSON.stringify(entry));

    // Try Netlify Blobs via context if available
    try {
      const store = context?.storage?.getStore?.("waitlist");
      if (store) {
        const key = `${timestamp}_${email.replace(/[^a-zA-Z0-9@._-]/g, "")}`;
        await store.set(key, JSON.stringify(entry));
      }
    } catch (e) {
      console.log("Blobs unavailable, logged to function logs:", e.message);
    }

    return new Response(JSON.stringify({ ok: true, message: "You're on the list!" }), {
      status: 200, headers: corsHeaders,
    });
  } catch (err) {
    console.error("Waitlist error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500, headers: corsHeaders,
    });
  }
};
