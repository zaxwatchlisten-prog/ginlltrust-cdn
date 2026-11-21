export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const workspaceId = url.searchParams.get("workspace");

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Content-Type": "application/json"
  };

  if (!workspaceId) {
    return new Response(JSON.stringify({ error: "Missing workspace parameter" }), {
      status: 400,
      headers: corsHeaders
    });
  }

  const cacheKey = `widget:${workspaceId}`;
  if (env.GINLLTRUST_KV) {
    const cached = await env.GINLLTRUST_KV.get(cacheKey);
    if (cached) {
      return new Response(cached, {
        status: 200,
        headers: { ...corsHeaders, "X-Cache": "HIT" }
      });
    }
  }

  const projectId = env.FIREBASE_PROJECT_ID || "studio-6180730764-3daa0";

  const queryBody = {
    structuredQuery: {
      from: [{ collectionId: "testimonials" }],
      where: {
        fieldFilter: {
          field: { fieldPath: "status" },
          op: "EQUAL",
          value: { stringValue: "APPROVED" }
        }
      },
      limit: 50
    }
  };

  const parentPath = `projects/${projectId}/databases/(default)/documents/workspaces/${workspaceId}`;
  const res = await fetch(`https://firestore.googleapis.com/v1/${parentPath}:runQuery`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(queryBody)
  });

  const rows = await res.json();
  const testimonials = (Array.isArray(rows) ? rows : [])
    .filter((row) => row.document && row.document.fields)
    .map((row) => {
      const f = row.document.fields;
      return {
        id: row.document.name.split("/").pop(),
        authorName: f.authorName?.stringValue || "Anonymous",
        authorCompany: f.authorCompany?.stringValue || "",
        rating: Number(f.rating?.integerValue || f.rating?.doubleValue || 5),
        text: f.text?.stringValue || ""
      };
    });

  const payload = JSON.stringify({ workspaceId, testimonials });

  if (env.GINLLTRUST_KV) {
    await env.GINLLTRUST_KV.put(cacheKey, payload, { expirationTtl: 3600 });
  }

  return new Response(payload, {
    status: 200,
    headers: { ...corsHeaders, "X-Cache": "MISS" }
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}