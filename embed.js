(function () {
  const scripts = document.querySelectorAll('script[data-ginlltrust-workspace]');
  scripts.forEach(async (script) => {
    if (script.dataset.ginlltrustLoaded) return;
    script.dataset.ginlltrustLoaded = "true";

    const workspaceId = script.getAttribute("data-ginlltrust-workspace");
    if (!workspaceId) return;

    const container = document.createElement("div");
    container.className = "ginlltrust-widget";
    script.parentNode.insertBefore(container, script.nextSibling);

    try {
      const origin = new URL(script.src).origin;
      const res = await fetch(`${origin}/v1/widget?workspace=${encodeURIComponent(workspaceId)}`);
      const data = await res.json();
      const items = data.testimonials || [];

      if (!items.length) {
        container.innerHTML = `<p style="font-family:sans-serif;color:#64748b;font-size:14px;">No approved reviews yet.</p>`;
        return;
      }

      container.innerHTML = `
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;font-family:system-ui,-apple-system,sans-serif;">
          ${items.map((t) => `
            <div style="border:1px solid #e2e8f0;border-radius:12px;padding:16px;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
              <div style="color:#f59e0b;font-size:16px;margin-bottom:8px;">${"\u2605".repeat(Math.round(t.rating || 5))}</div>
              <p style="margin:0 0 12px;color:#1e293b;font-size:14px;line-height:1.5;">"${t.text}"</p>
              <div style="font-size:13px;font-weight:600;color:#0f172a;">${t.authorName}</div>
              ${t.authorCompany ? `<div style="font-size:12px;color:#64748b;">${t.authorCompany}</div>` : ""}
            </div>
          `).join("")}
        </div>
      `;
    } catch (err) {
      console.error("GinllTrust widget failed to load:", err);
    }
  });
})();
