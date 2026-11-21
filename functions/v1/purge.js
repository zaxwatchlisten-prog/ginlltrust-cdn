export async function onRequestPost({ request, env }) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json"
  };

  const url = new URL(request.url);
  const workspaceId = url.searchParams.get("workspace");
  const authHeader = request.headers.get("Authorization") || "";
  const token = authHeader.replace(/^Bearer\s+/i, "").trim();

  if (env.PURGE_SECRET && token !== env.PURGE_SECRET) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: corsHeaders
    });
  }

  if (!workspaceId) {
    return new Response(JSON.stringify({ error: "Missing workspace parameter" }), {
      status: 400,
      headers: corsHeaders
    });
  }

  if (env.GINLLTRUST_KV) {
    await env.GINLLTRUST_KV.delete(`widget:${workspaceId}`);
  }

  return new Response(JSON.stringify({ purged: true, workspaceId }), {
    status: 200,
    headers: corsHeaders
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    }
  });
}