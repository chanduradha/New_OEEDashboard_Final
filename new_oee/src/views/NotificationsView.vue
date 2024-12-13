<template>
    <div class="notifications-container">
      <header class="notifications-header">
        <h1 class="notifications-title">Notifications</h1>
      </header>
      <main class="notifications-content">
        <div class="notifications-grid">
          <!-- Recent Notifications -->
          <div class="notification-card">
            <h3 class="section-title">Recent Notifications</h3>
            <div class="notifications-list">
              <div class="notification-item">
                <div class="notification-icon success">✓</div>
                <div class="notification-content">
                  <h4>Success Notification</h4>
                  <p>Your changes have been saved successfully.</p>
                  <span class="notification-time">5 minutes ago</span>
                </div>
              </div>
              <div class="notification-item">
                <div class="notification-icon warning">!</div>
                <div class="notification-content">
                  <h4>Warning Notification</h4>
                  <p>Please update your profile information.</p>
                  <span class="notification-time">1 hour ago</span>
                </div>
              </div>
              <div class="notification-item">
                <div class="notification-icon error">×</div>
                <div class="notification-content">
                  <h4>Error Notification</h4>
                  <p>Failed to connect to the server.</p>
                  <span class="notification-time">2 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  // Component logic can be added here
  </script>
  
  <style scoped>
  .notifications-container {
    padding: 3rem;
    margin-left: 250px;
    min-height: 100vh;
    background-color: #f5f5f5;
  }
  
  @media (max-width: 768px) {
    .notifications-container {
      margin-left: 0;
      padding-top: 60px;
    }
  }
  
  .notifications-header {
    margin-bottom: 2rem;
    padding: 1rem 0;
  }
  
  .notifications-title {
    font-size: 1.875rem;
    font-weight: bold;
    color: #1a1a1a;
    margin: 0;
  }
  
  .notifications-content {
    padding: 1rem;
  }
  
  .notifications-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 1rem;
  }
  
  .notification-card {
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .section-title {
    font-size: 1.25rem;
    color: #666;
    margin-bottom: 1.5rem;
  }
  
  .notifications-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .notification-item {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.375rem;
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
  }
  
  .notification-icon {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  
  .notification-icon.success {
    background-color: #10b981;
    color: white;
  }
  
  .notification-icon.warning {
    background-color: #f59e0b;
    color: white;
  }
  
  .notification-icon.error {
    background-color: #ef4444;
    color: white;
  }
  
  .notification-content {
    flex: 1;
  }
  
  .notification-content h4 {
    margin: 0;
    font-size: 1rem;
    color: #1a1a1a;
  }
  
  .notification-content p {
    margin: 0.25rem 0;
    color: #666;
  }
  
  .notification-time {
    font-size: 0.875rem;
    color: #94a3b8;
  }
  </style>