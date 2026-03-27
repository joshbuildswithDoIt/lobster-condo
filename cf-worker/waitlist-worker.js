// Cloudflare Worker: waitlist signup handler
// Stores emails in CF KV namespace "WAITLIST"
// Bind KV namespace in wrangler.toml: [[kv_namespaces]] binding = "WAITLIST"

export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    };

    if (request.method === "OPTIONS") {
      return new Response("", { status: 200, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405, headers: corsHeaders,
      });
    }

    try {
      let email;
      const contentType = request.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const body = await request.json();
        email = body.email;
      } else {
        const text = await request.text();
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
      const key = `${timestamp}_${email.replace(/[^a-zA-Z0-9@._-]/g, "")}`;

      // Store in KV if available
      if (env.WAITLIST) {
        await env.WAITLIST.put(key, JSON.stringify(entry));
      }

      console.log("WAITLIST_SIGNUP:", JSON.stringify(entry));

      return new Response(JSON.stringify({ ok: true, message: "You're on the list!" }), {
        status: 200, headers: corsHeaders,
      });
    } catch (err) {
      console.error("Waitlist error:", err);
      return new Response(JSON.stringify({ error: "Server error" }), {
        status: 500, headers: corsHeaders,
      });
    }
  },
};
