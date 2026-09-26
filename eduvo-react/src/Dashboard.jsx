import { useState, useEffect } from "react";

const tabs = [
  { id: "assignments", label: "Assignments" },
  { id: "grades", label: "Grades" },
  { id: "fees", label: "Fees" },
  { id: "comments", label: "Comments" },
  { id: "chat", label: "Chat" },
];

function Dashboard({ token, ward, onLogout }) {
  const [activeTab, setActiveTab] = useState("assignments");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/api/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) setData(result.data);
        setLoading(false);
      });
  }, [token]);

  if (loading) {
    return (
      <section className="dashboard">
        <div className="container">Loading…</div>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="dashboard">
        <div className="container">Couldn't load dashboard data.</div>
      </section>
    );
  }

  return (
    <section className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <div>
            <p className="eyebrow">Welcome back</p>
            <h1>{ward.name}'s Dashboard</h1>
            <p className="dashboard-sub">{ward.class}</p>
          </div>
          <button className="btn btn-ghost" onClick={onLogout}>
            Log Out
          </button>
        </div>

        <div className="dashboard-layout">
          <nav className="dash-sidebar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`dash-tab ${activeTab === tab.id ? "is-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="dash-panel">
            {activeTab === "assignments" && (
              <div className="dash-card">
                <h3>Assignments</h3>
                {data.assignments.map((a) => (
                  <div className="dash-row" key={a.title}>
                    <span>{a.title}</span>
                    <span className={`badge badge--${a.status.toLowerCase()}`}>
                      {a.status}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "grades" && (
              <div className="dash-card">
                <h3>Grades</h3>
                {data.grades.map((g) => (
                  <div className="dash-row" key={g.subject}>
                    <span>{g.subject}</span>
                    <span className="dash-score">{g.score}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "fees" && (
              <div className="dash-card">
                <h3>Fees</h3>
                <div className="dash-row">
                  <span>{data.fees.term}</span>
                  <span className="dash-score">{data.fees.amount}</span>
                </div>
                <span
                  className={`badge badge--${data.fees.status.toLowerCase()}`}
                >
                  {data.fees.status}
                </span>
              </div>
            )}

            {activeTab === "comments" && (
              <div className="dash-card">
                <h3>Teacher Comments</h3>
                {data.comments.map((c) => (
                  <div className="dash-comment" key={c.from}>
                    <p>"{c.text}"</p>
                    <span>— {c.from}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "chat" && <ChatPanel token={token} />}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatPanel({ token }) {
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/chat", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) setMessages(result.messages);
      });
  }, [token]);

  async function handleSend(event) {
    event.preventDefault();
    if (!draft.trim()) return;

    const res = await fetch("http://localhost:4000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        sender: "parent",
        senderName: "You",
        text: draft.trim(),
      }),
    });
    const result = await res.json();
    if (result.success) setMessages(result.messages);
    setDraft("");
  }

  return (
    <div className="dash-card chat-card">
      <h3>Chat with Teacher</h3>

      <div className="chat-thread">
        {messages.map((m, i) => (
          <div className={`chat-bubble chat-bubble--${m.sender}`} key={i}>
            <span className="chat-name">{m.name}</span>
            <p>{m.text}</p>
          </div>
        ))}
      </div>

      <form className="chat-input-row" onSubmit={handleSend}>
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Type a message…"
        />
        <button type="submit" className="btn btn-dark">
          Send
        </button>
      </form>
    </div>
  );
}

export default Dashboard;
