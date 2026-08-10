// import React from 'react';

// Sample data for the daily schedule
const scheduleData = [
  {
    id: 1,
    member: "Alice Johnson",
    role: "Project Manager",
    time: "09:00 AM - 10:00 AM",
    visitor: "John Doe",
    company: "Acme Corp",
    purpose: "Project Kickoff"
  },
  {
    id: 2,
    member: "Bob Smith",
    role: "Lead Developer",
    time: "11:00 AM - 12:00 PM",
    visitor: "Jane Team",
    company: "Tech Solutions",
    purpose: "API Integration Review"
  },
  {
    id: 3,
    member: "Charlie Brown",
    role: "UI/UX Designer",
    time: "02:00 PM - 03:00 PM",
    visitor: "Sarah Connor",
    company: "Design Studio",
    purpose: "Design System Feedback"
  }
];

export default function DailySchedule() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Team Daily Visitor Schedule</h1>
      <p style={styles.subtitle}>Today's scheduled meetings and external visits</p>
      
      <div style={styles.grid}>
        {scheduleData.map((item) => (
          <div key={item.id} style={styles.card}>
            {/* Team Member Section */}
            <div style={styles.section}>
              <span style={styles.label}>Team Member</span>
              <div style={styles.name}>{item.member}</div>
              <div style={styles.role}>{item.role}</div>
            </div>

            {/* Time Slot Divider */}
            <div style={styles.timeBadge}>
              {item.time}
            </div>

            {/* Visitor Section */}
            <div style={{ ...styles.section, ...styles.visitorSection }}>
              <span style={styles.label}>Visitor</span>
              <div style={styles.name}>{item.visitor}</div>
              <div style={styles.company}>{item.company}</div>
              <div style={styles.purpose}>“{item.purpose}”</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Inline CSS styles for quick setup
const styles = {
  container: {
    padding: '24px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
  },
  title: {
    fontSize: '28px',
    color: '#0f172a',
    margin: '0 0 8px 0',
  },
  subtitle: {
    fontSize: '16px',
    color: '#64748b',
    margin: '0 0 24px 0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '1px solid #e2e8f0',
  },
  section: {
    marginBottom: '12px',
  },
  visitorSection: {
    borderTop: '1px dashed #e2e8f0',
    paddingTop: '12px',
    marginTop: '12px',
  },
  label: {
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: '#94a3b8',
    fontWeight: '600',
    display: 'block',
    marginBottom: '4px',
  },
  name: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1e293b',
  },
  role: {
    fontSize: '14px',
    color: '#64748b',
  },
  company: {
    fontSize: '14px',
    color: '#0284c7',
    fontWeight: '500',
  },
  purpose: {
    fontSize: '13px',
    color: '#475569',
    fontStyle: 'italic',
    marginTop: '6px',
  },
  timeBadge: {
    backgroundColor: '#f1f5f9',
    color: '#334155',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '500',
    alignSelf: 'flex-start',
    margin: '8px 0',
  }
};
