<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verified Reviews — GinllTrust</title>
  <style>
    :root {
      --bg: #f8fafc;
      --surface: #ffffff;
      --text: #0f172a;
      --muted: #64748b;
      --border: #e2e8f0;
      --primary: #4f46e5;
      --primary-hover: #4338ca;
      --verified-bg: #ecfdf5;
      --verified-text: #047857;
      --star: #f59e0b;
      --radius-lg: 16px;
      --radius-md: 12px;
      --radius-sm: 8px;
      --shadow: 0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 24px rgba(15, 23, 42, 0.04);
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      line-height: 1.5;
    }

    a {
      color: inherit;
    }

    /* Top Bar */
    .topbar {
      background: var(--surface);
      border-bottom: 1px solid var(--border);
      padding: 14px 20px;
    }

    .topbar-inner {
      max-width: 1080px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .brand-lockup {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
    }

    .brand-check {
      width: 24px;
      height: 24px;
      border-radius: 999px;
      background: #10b981;
      color: #ffffff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 700;
    }

    .brand-name {
      font-weight: 800;
      font-size: 18px;
      letter-spacing: -0.02em;
    }

    .project-pill {
      font-size: 12px;
      color: var(--muted);
      background: #f1f5f9;
      border: 1px solid var(--border);
      padding: 3px 9px;
      border-radius: 999px;
      font-weight: 500;
    }

    /* Main Container */
    .container {
      max-width: 1080px;
      margin: 28px auto 0;
      padding: 0 20px;
    }

    /* Store Profile Header Card */
    .profile-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      padding: 24px;
      box-shadow: var(--shadow);
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
      gap: 20px;
    }

    .profile-left {
      display: flex;
      gap: 18px;
      align-items: flex-start;
      flex: 1 1 540px;
    }

    .store-avatar {
      width: 72px;
      height: 72px;
      border-radius: 999px;
      background: #eef2ff;
      color: var(--primary);
      border: 1px solid #c7d2fe;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 18px;
      flex-shrink: 0;
      overflow: hidden;
    }

    .store-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .store-title-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
      margin-bottom: 4px;
    }

    .store-name {
      margin: 0;
      font-size: 22px;
      font-weight: 800;
    }

    .verified-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: var(--verified-bg);
      color: var(--verified-text);
      font-size: 12px;
      font-weight: 600;
      padding: 3px 10px;
      border-radius: 999px;
    }

    .rating-summary {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
      font-size: 14px;
    }

    .stars {
      color: var(--star);
      letter-spacing: 1px;
      font-size: 15px;
    }

    .rating-score {
      font-weight: 700;
    }

    .rating-count {
      color: var(--muted);
    }

    .store-bio {
      margin: 0 0 12px;
      color: #334155;
      font-size: 14px;
    }

    .stats-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      font-size: 12px;
      color: #475569;
    }

    .stat-chip {
      background: #f8fafc;
      border: 1px solid var(--border);
      padding: 5px 10px;
      border-radius: var(--radius-sm);
      font-weight: 500;
    }

    .profile-actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
      min-width: 165px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 10px 16px;
      border-radius: var(--radius-sm);
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;
      border: 1px solid transparent;
      transition: background-color 0.15s ease, border-color 0.15s ease;
    }

    .btn-primary {
      background: var(--primary);
      color: #ffffff;
    }

    .btn-primary:hover {
      background: var(--primary-hover);
    }

    .btn-secondary {
      background: var(--surface);
      color: var(--text);
      border-color: var(--border);
    }

    .btn-secondary:hover {
      background: #f8fafc;
    }

    /* Filter Tabs */
    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 22px 0 16px;
    }

    .filter-btn {
      background: var(--surface);
      border: 1px solid var(--border);
      color: #334155;
      padding: 7px 14px;
      border-radius: 999px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
    }

    .filter-btn.active {
      background: var(--text);
      color: #ffffff;
      border-color: var(--text);
    }

    /* Reviews Grid */
    .reviews-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 16px;
    }

    .review-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      padding: 18px;
      box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .review-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .reviewer-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      font-size: 13px;
    }

    .reviewer-name {
      font-weight: 700;
    }

    .buyer-tag {
      background: var(--verified-bg);
      color: var(--verified-text);
      font-size: 11px;
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 999px;
    }

    .review-date {
      font-size: 12px;
      color: var(--muted);
      white-space: nowrap;
    }

    .review-headline {
      margin: 0;
      font-size: 15px;
      font-weight: 700;
    }

    .review-body {
      margin: 0;
      font-size: 14px;
      color: #334155;
    }

    .review-photo {
      width: 100%;
      max-height: 200px;
      object-fit: cover;
      border-radius: var(--radius-sm);
      border: 1px solid var(--border);
    }

    .owner-reply {
      margin-top: auto;
      background: #f8fafc;
      border-left: 3px solid var(--primary);
      padding: 10px 12px;
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
      font-size: 13px;
    }

    .owner-reply-label {
      font-weight: 700;
      color: var(--text);
      margin-bottom: 2px;
    }

    .owner-reply-text {
      margin: 0;
      color: #475569;
    }

    .empty-state {
      grid-column: 1 / -1;
      background: var(--surface);
      border: 1px dashed #cbd5e1;
      border-radius: var(--radius-md);
      padding: 36px 20px;
      text-align: center;
      color: var(--muted);
    }

    /* Footer */
    .gt-footer {
      margin-top: 56px;
      padding: 26px 16px 36px;
      border-top: 1px solid var(--border);
      background: var(--surface);
      text-align: center;
      font-size: 13px;
      color: var(--muted);
    }

    .gt-footer-links {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 8px 12px;
      margin-bottom: 10px;
    }

    .gt-footer-links a,
    .gt-footer-brand a {
      color: #334155;
      text-decoration: none;
      font-weight: 500;
    }

    .gt-footer-links a:hover,
    .gt-footer-brand a:hover {
      color: var(--text);
      text-decoration: underline;
    }

    .gt-footer-brand {
      margin: 0;
      font-size: 12px;
      color: var(--muted);
    }

    @media (max-width: 640px) {
      .profile-card {
        padding: 18px;
      }
      .profile-actions {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <header class="topbar">
    <div class="topbar-inner">
      <a class="brand-lockup" href="https://trust.ginll.com" target="_blank" rel="noopener">
        <span class="brand-check" aria-hidden="true">✓</span>
        <span class="brand-name">ginlltrust</span>
      </a>
      <span class="project-pill">A project of Ginll</span>
    </div>
  </header>

  <main class="container">
    <section class="profile-card" aria-label="Store Profile">
      <div class="profile-left">
        <div class="store-avatar" id="storeAvatar">GT</div>
        <div>
          <div class="store-title-row">
            <h1 class="store-name" id="storeName">Loading Store...</h1>
            <span class="verified-badge">✓ Verified Business</span>
          </div>
          <div class="rating-summary">
            <span class="stars" id="storeStars">★★★★★</span>
            <span class="rating-score" id="storeRating">5.0 out of 5.0</span>
            <span class="rating-count" id="storeCount">(0 verified reviews)</span>
          </div>
          <p class="store-bio" id="storeBio">Verified customer feedback hosted on GinllTrust.</p>
          <div class="stats-row" id="storeStats"></div>
        </div>
      </div>

      <div class="profile-actions">
        <a class="btn btn-primary" id="writeReviewBtn" href="https://cdn.ginll.com/review.html">+ Write a Review</a>
        <a class="btn btn-secondary" id="visitStoreBtn" href="https://trust.ginll.com" target="_blank" rel="noopener">Visit Store ↗</a>
      </div>
    </section>

    <div class="filters" role="tablist" aria-label="Filter reviews">
      <button class="filter-btn active" data-filter="all" type="button">All Reviews</button>
      <button class="filter-btn" data-filter="photos" type="button">With Photos</button>
      <button class="filter-btn" data-filter="5" type="button">5 Star</button>
      <button class="filter-btn" data-filter="4" type="button">4 Star</button>
      <button class="filter-btn" data-filter="3" type="button">3 Star</button>
    </div>

    <section class="reviews-grid" id="reviewsGrid" aria-live="polite"></section>
  </main>

  <footer class="gt-footer">
    <div class="gt-footer-links">
      <a href="https://trust.ginll.com/about" target="_blank" rel="noopener">About Us</a>
      <span aria-hidden="true">•</span>
      <a href="https://trust.ginll.com/anti-fake-review-guidelines" target="_blank" rel="noopener">Anti-Fake Review Guidelines</a>
      <span aria-hidden="true">•</span>
      <a href="https://trust.ginll.com/privacy" target="_blank" rel="noopener">Privacy Policy</a>
      <span aria-hidden="true">•</span>
      <a href="https://trust.ginll.com/terms" target="_blank" rel="noopener">Terms &amp; Services</a>
      <span aria-hidden="true">•</span>
      <a href="mailto:support@ginll.com">support@ginll.com</a>
    </div>
    <p class="gt-footer-brand">
      Powered by <a href="https://trust.ginll.com" target="_blank" rel="noopener">GinllTrust</a> — <strong>A project of Ginll</strong>
    </p>
  </footer>

  <script>
    // Replace with your live endpoint when ready, e.g.:
    // const API_BASE = "https://cdn.ginll.com/v1/wall";
    const API_BASE = "";

    const SAMPLE_DATA = {
      store: {
        name: "Zuri Collections",
        initials: "ZC",
        logoUrl: "",
        bio: "Curated everyday essentials, streetwear, and accessories with fast local & online order fulfillment.",
        storeUrl: "https://trust.ginll.com",
        rating: 4.9,
        totalReviews: 148,
        recommendPercent: "99% Recommended",
        responseTime: "Avg. reply: under 2 hrs"
      },
      reviews: [
        {
          id: "1",
          author: "Sarah N.",
          verified: true,
          rating: 5,
          date: "2 days ago",
          headline: "Fast delivery & exact quality shown",
          body: "Ordered and received my package right on time. The quality matched the description and packaging was clean.",
          photoUrl: "",
          ownerReply: "Thank you Sarah! We appreciate your support and look forward to serving you again."
        },
        {
          id: "2",
          author: "Brian K.",
          verified: true,
          rating: 5,
          date: "5 days ago",
          headline: "Smooth communication from start to finish",
          body: "Quick answers before I placed my order and clear updates until delivery. Very reliable store.",
          photoUrl: "",
          ownerReply: ""
        },
        {
          id: "3",
          author: "Aisha M.",
          verified: true,
          rating: 4,
          date: "1 week ago",
          headline: "Great item, slight delay during peak hours",
          body: "Love the product itself. Delivery took a little longer than expected on a busy day, but support kept me posted.",
          photoUrl: "",
          ownerReply: "Thanks for the honest feedback Aisha—we've added extra dispatch slots for busy days."
        }
      ]
    };

    const params = new URLSearchParams(window.location.search);
    const slug = (params.get("slug") || "demo").trim();

    let allReviews = [];
    let activeFilter = "all";

    function renderStars(count) {
      const rounded = Math.max(1, Math.min(5, Math.round(Number(count) || 5)));
      return "★".repeat(rounded) + "☆".repeat(5 - rounded);
    }

    function escapeHtml(value) {
      const div = document.createElement("div");
      div.textContent = String(value || "");
      return div.innerHTML;
    }

    function renderStore(store) {
      document.title = `${store.name} Reviews — GinllTrust`;
      document.getElementById("storeName").textContent = store.name;
      document.getElementById("storeBio").textContent = store.bio || "Verified customer reviews on GinllTrust.";

      const avg = Number(store.rating || 5).toFixed(1);
      document.getElementById("storeStars").textContent = renderStars(store.rating || 5);
      document.getElementById("storeRating").textContent = `${avg} out of 5.0`;
      document.getElementById("storeCount").textContent = `(${store.totalReviews || 0} verified reviews)`;

      const avatarEl = document.getElementById("storeAvatar");
      if (store.logoUrl) {
        avatarEl.innerHTML = `<img src="${escapeHtml(store.logoUrl)}" alt="${escapeHtml(store.name)} logo" />`;
      } else {
        avatarEl.textContent = store.initials || store.name.slice(0, 2).toUpperCase();
      }

      const statsEl = document.getElementById("storeStats");
      const chips = [
        `${store.totalReviews || allReviews.length} Published Reviews`,
        store.recommendPercent || "Verified Storefront",
        store.responseTime || "Active Seller"
      ];
      statsEl.innerHTML = chips.map((c) => `<span class="stat-chip">${escapeHtml(c)}</span>`).join("");

      const reviewUrl = new URL("https://cdn.ginll.com/review.html");
      reviewUrl.searchParams.set("slug", slug);
      document.getElementById("writeReviewBtn").href = reviewUrl.toString();

      if (store.storeUrl) {
        document.getElementById("visitStoreBtn").href = store.storeUrl;
      }
    }

    function getFilteredReviews() {
      if (activeFilter === "photos") {
        return allReviews.filter((r) => Boolean(r.photoUrl));
      }
      if (["5", "4", "3"].includes(activeFilter)) {
        return allReviews.filter((r) => Number(r.rating) === Number(activeFilter));
      }
      return allReviews;
    }

    function renderReviews() {
      const grid = document.getElementById("reviewsGrid");
      const filtered = getFilteredReviews();

      if (!filtered.length) {
        grid.innerHTML = `<div class="empty-state">No reviews match this filter yet.</div>`;
        return;
      }

      grid.innerHTML = filtered
        .map((review) => {
          const buyerBadge = review.verified
            ? `<span class="buyer-tag">✓ Verified Buyer</span>`
            : "";
          const photoHtml = review.photoUrl
            ? `<img class="review-photo" src="${escapeHtml(review.photoUrl)}" alt="Customer review photo" loading="lazy" />`
            : "";
          const replyHtml = review.ownerReply
            ? `
              <div class="owner-reply">
                <div class="owner-reply-label">Store Response</div>
                <p class="owner-reply-text">${escapeHtml(review.ownerReply)}</p>
              </div>
            `
            : "";

          return `
            <article class="review-card">
              <div class="review-top">
                <div class="reviewer-meta">
                  <span class="reviewer-name">${escapeHtml(review.author || "Customer")}</span>
                  ${buyerBadge}
                </div>
                <span class="review-date">${escapeHtml(review.date || "")}</span>
              </div>
              <div class="stars" aria-label="${escapeHtml(review.rating)} out of 5 stars">${renderStars(review.rating)}</div>
              ${review.headline ? `<h2 class="review-headline">${escapeHtml(review.headline)}</h2>` : ""}
              <p class="review-body">${escapeHtml(review.body || "")}</p>
              ${photoHtml}
              ${replyHtml}
            </article>
          `;
        })
        .join("");
    }

    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeFilter = btn.dataset.filter;
        renderReviews();
      });
    });

    async function loadWall() {
      if (!API_BASE) {
        allReviews = SAMPLE_DATA.reviews;
        renderStore(SAMPLE_DATA.store);
        renderReviews();
        return;
      }

      try {
        const res = await fetch(`${API_BASE}?slug=${encodeURIComponent(slug)}`);
        if (!res.ok) throw new Error("Failed to load workspace wall");
        const data = await res.json();
        allReviews = Array.isArray(data.reviews) ? data.reviews : [];
        renderStore(data.store || SAMPLE_DATA.store);
        renderReviews();
      } catch (err) {
        allReviews = SAMPLE_DATA.reviews;
        renderStore(SAMPLE_DATA.store);
        renderReviews();
      }
    }

    loadWall();
  </script>
</body>
</html>
