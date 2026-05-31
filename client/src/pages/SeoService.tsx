import { Helmet } from "react-helmet";
import React from "react";

const PriceCard: React.FC<{
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
}> = ({ title, price, features, highlight }) => {
  // derive numeric amount from price string like "349 USD" -> "349"
  const amountNumber = price.replace(/[^\d.]/g, "");
  const tier = title.toLowerCase();

  return (
    <div
      style={{
        border: highlight ? "2px solid #0ea5a4" : "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 20,
        boxShadow: highlight
          ? "0 6px 20px rgba(14,165,164,0.08)"
          : "0 2px 8px rgba(0,0,0,0.03)",
        background: "#fff",
        flex: 1,
        minWidth: 240,
        margin: 8,
      }}
    >
      <h3 style={{ margin: 0, fontSize: 20 }}>{title}</h3>
      <p
        style={{
          color: "#111827",
          fontWeight: 700,
          fontSize: 28,
          margin: "8px 0 12px",
        }}
      >
        {price}
      </p>
      <ul style={{ paddingLeft: 18, margin: 0 }}>
        {features.map((f, i) => (
          <li key={i} style={{ marginBottom: 6 }}>
            {f}
          </li>
        ))}
      </ul>
      <a
        href={`/payment?tier=${encodeURIComponent(tier)}&amount=${encodeURIComponent(amountNumber)}&currency=USD`}
        style={{
          display: "inline-block",
          marginTop: 14,
          padding: "10px 14px",
          background: highlight ? "#0ea5a4" : "#111827",
          color: "#fff",
          borderRadius: 8,
          textDecoration: "none",
        }}
      >
        Get started
      </a>
    </div>
  );
};

const SeoService: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sifabora | SEO Management</title>
        <meta
          name="description"
          content="Sifabora SEO Management — full-service SEO to increase visibility, traffic and conversions. Packages: Standard, Plus, Enterprise."
        />
        <meta property="og:title" content="Sifabora | SEO Management" />
        <meta
          property="og:description"
          content="Full-service SEO management from on-page optimization to technical SEO and content strategy — tailored packages to grow your online presence."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main
        style={{
          fontFamily:
            "Inter, Open Sans, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
          color: "#0f172a",
        }}
      >
        <section
          style={{
            padding: "56px 20px",
            background: "linear-gradient(180deg,#f8fafc,transparent)",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div>
                <h1 style={{ fontSize: 36, margin: "0 0 8px" }}>
                  SEO Management
                </h1>
                <p style={{ margin: 0, color: "#475569", fontSize: 16 }}>
                  Comprehensive SEO management to increase organic visibility,
                  drive qualified traffic, and protect your brand reputation
                  online.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="#pricing"
                  style={{
                    padding: "10px 14px",
                    background: "#0ea5a4",
                    color: "#fff",
                    borderRadius: 8,
                    textDecoration: "none",
                  }}
                >
                  View pricing
                </a>
                <a
                  href="/contact"
                  style={{
                    padding: "10px 14px",
                    background: "#111827",
                    color: "#fff",
                    borderRadius: 8,
                    textDecoration: "none",
                  }}
                >
                  Speak to an expert
                </a>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "40px 20px" }}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 360px",
              gap: 28,
            }}
          >
            <div>
              <h2 style={{ fontSize: 22, marginBottom: 12 }}>What we do</h2>
              <p style={{ color: "#475569" }}>
                Sifabora's SEO Management blends technical SEO, content
                strategy, on-page optimization, link building, and ongoing
                performance tracking. The service is tailored according to your
                needs — from local businesses to national enterprise brands.
              </p>

              <h3 style={{ marginTop: 18 }}>Core services</h3>
              <ul style={{ paddingLeft: 18, color: "#374151" }}>
                <li>
                  SEO audit: technical, on-page, content gaps, and backlink
                  profile
                </li>
                <li>
                  Keyword research & prioritization based on intent and ROI
                </li>
                <li>
                  On-page optimization: meta tags, schema, content improvements
                </li>
                <li>
                  Technical SEO: crawlability, site structure, speed and mobile
                  performance
                </li>
                <li>Content strategy & creation guidance for organic growth</li>
                <li>Local SEO & GMB optimization (if applicable)</li>
                <li>
                  Ongoing performance tracking, reporting and iterative
                  improvements
                </li>
              </ul>

              <h3 style={{ marginTop: 18 }}>Deliverables</h3>
              <ul style={{ paddingLeft: 18, color: "#374151" }}>
                <li>Comprehensive initial SEO audit report</li>
                <li>
                  Prioritized action roadmap with quick wins and long-term
                  strategy
                </li>
                <li>
                  Monthly performance reports (rankings, traffic, conversions)
                </li>
                <li>Technical fixes and on-page implementation guidance</li>
                <li>Content briefs and optimization suggestions</li>
              </ul>
            </div>

            <aside
              style={{
                background: "#fff",
                border: "1px solid #e6eef0",
                borderRadius: 12,
                padding: 18,
              }}
            >
              <h4 style={{ marginTop: 0 }}>Why choose Sifabora</h4>
              <p style={{ color: "#475569" }}>
                We combine reputation-aware SEO with technical best practices —
                protecting your brand while improving visibility and driving
                qualified traffic.
              </p>

              <div style={{ marginTop: 14 }}>
                <strong>Fast onboarding</strong>
                <p style={{ margin: "8px 0 0", color: "#6b7280" }}>
                  Audit delivered in 5–7 business days, then prioritized roadmap
                  and kickoff.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section
          id="pricing"
          style={{ padding: "36px 20px", background: "#f8fafc" }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, marginBottom: 12 }}>Pricing</h2>
            <p style={{ color: "#475569", marginBottom: 18 }}>
              Clear, transparent packages to suit different needs. If you need a
              custom enterprise plan, contact us for a proposal.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <PriceCard
                title="Standard"
                price="349 USD"
                features={[
                  "Initial SEO audit",
                  "Keyword & on-page recommendations (up to 10 pages)",
                  "Technical checklist",
                  "Monthly summary report",
                ]}
              />
              <PriceCard
                title="Plus"
                price="600 USD"
                highlight
                features={[
                  "Everything in Standard",
                  "On-page optimization (up to 25 pages)",
                  "Content briefs & optimization",
                  "Monthly performance reporting & strategy call",
                ]}
              />
              <PriceCard
                title="Enterprise"
                price="1000 USD"
                features={[
                  "Everything in Plus",
                  "Technical SEO fixes & implementation support",
                  "Advanced link strategy",
                  "Dedicated account manager & weekly reporting",
                ]}
              />
            </div>
          </div>
        </section>

        <section style={{ padding: "36px 20px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, marginBottom: 12 }}>Process</h2>
            <ol style={{ paddingLeft: 18, color: "#374151" }}>
              <li>
                <strong>Audit & kickoff</strong> — deep audit and prioritized
                roadmap.
              </li>
              <li>
                <strong>Implement</strong> — on-page, technical fixes, and
                content guidance.
              </li>
              <li>
                <strong>Measure</strong> — track rankings, traffic and
                conversions.
              </li>
              <li>
                <strong>Iterate</strong> — continuous optimization and growth.
              </li>
            </ol>
          </div>
        </section>

        <section style={{ padding: "36px 20px", background: "#f1f5f9" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, marginBottom: 12 }}>FAQ</h2>
            <details style={{ marginBottom: 8 }}>
              <summary style={{ cursor: "pointer" }}>
                How long until I see results?
              </summary>
              <div style={{ marginTop: 8, color: "#475569" }}>
                SEO is iterative — some improvements (technical fixes, on-page
                gains) can show within weeks; meaningful organic growth
                typically takes 3–6 months.
              </div>
            </details>

            <details style={{ marginBottom: 8 }}>
              <summary style={{ cursor: "pointer" }}>
                Do you do content creation?
              </summary>
              <div style={{ marginTop: 8, color: "#475569" }}>
                We provide content strategy and briefs. Content creation and
                publication can be handled by us or your team depending on the
                package.
              </div>
            </details>

            <details>
              <summary style={{ cursor: "pointer" }}>
                Can this integrate with reputation services?
              </summary>
              <div style={{ marginTop: 8, color: "#475569" }}>
                Yes — our SEO approach is reputation-aware and can be integrated
                with Sifabora's reputation protection workflows for consistent
                brand messaging.
              </div>
            </details>
          </div>
        </section>

        <section style={{ padding: "36px 20px" }}>
          <div
            style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}
          >
            <h2 style={{ fontSize: 22 }}>Ready to get started?</h2>
            <p style={{ color: "#475569" }}>
              Choose a package or contact us for a tailored enterprise plan.
            </p>
            <div style={{ display: "inline-flex", gap: 12 }}>
              <a
                href="#pricing"
                style={{
                  padding: "10px 14px",
                  background: "#0ea5a4",
                  color: "#fff",
                  borderRadius: 8,
                  textDecoration: "none",
                }}
              >
                View pricing
              </a>
              <a
                href="/contact"
                style={{
                  padding: "10px 14px",
                  background: "#111827",
                  color: "#fff",
                  borderRadius: 8,
                  textDecoration: "none",
                }}
              >
                Contact sales
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SeoService;
