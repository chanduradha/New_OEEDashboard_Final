<template>
    <div class="typography-container">
      <header class="typography-header">
        <h1 class="typography-title">Typography</h1>
      </header>
      <main class="typography-content">
        <div class="typography-grid">
          <!-- Headings Section -->
          <div class="typography-card">
            <h3 class="section-title">Headings</h3>
            <div class="typography-examples">
              <h1 class="example-h1">Heading 1</h1>
              <h2 class="example-h2">Heading 2</h2>
              <h3 class="example-h3">Heading 3</h3>
              <h4 class="example-h4">Heading 4</h4>
              <h5 class="example-h5">Heading 5</h5>
              <h6 class="example-h6">Heading 6</h6>
            </div>
          </div>
  
          <!-- Paragraph Styles -->
          <div class="typography-card">
            <h3 class="section-title">Paragraph Styles</h3>
            <div class="typography-examples">
              <p class="text-regular">Regular paragraph text</p>
              <p class="text-lead">Lead paragraph text for important content</p>
              <p class="text-small">Small text for less emphasis</p>
            </div>
          </div>
  
          <!-- Text Styles -->
          <div class="typography-card">
            <h3 class="section-title">Text Styles</h3>
            <div class="typography-examples">
              <p><strong>Bold text</strong> for emphasis</p>
              <p><em>Italic text</em> for subtle emphasis</p>
              <p><u>Underlined text</u> for highlighting</p>
              <p><code>Monospace text</code> for code</p>
            </div>
          </div>
  
          <!-- Colors and Emphasis -->
          <div class="typography-card">
            <h3 class="section-title">Colors and Emphasis</h3>
            <div class="typography-examples">
              <p class="text-primary">Primary text color</p>
              <p class="text-secondary">Secondary text color</p>
              <p class="text-success">Success text color</p>
              <p class="text-danger">Danger text color</p>
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
  .typography-container {
    padding: 3rem;
    margin-left: 250px; /* Match the width of expanded sidebar */
    min-height: 100vh;
    background-color: #f5f5f5;
  }
  
  @media (max-width: 768px) {
    .typography-container {
      margin-left: 0;
      padding-top: 60px;
    }
  }
  
  .typography-header {
    margin-bottom: 2rem;
    padding: 1rem 0;
  }
  
  .typography-title {
    font-size: 1.875rem;
    font-weight: bold;
    color: #1a1a1a;
    margin: 0;
  }
  
  .typography-content {
    padding: 1rem;
  }
  
  .typography-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }
  
  .typography-card {
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .section-title {
    font-size: 1.25rem;
    color: #666;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #eee;
  }
  
  .typography-examples {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  /* Example Typography Styles */
  .example-h1 { font-size: 2.25rem; font-weight: 700; }
  .example-h2 { font-size: 1.875rem; font-weight: 700; }
  .example-h3 { font-size: 1.5rem; font-weight: 600; }
  .example-h4 { font-size: 1.25rem; font-weight: 600; }
  .example-h5 { font-size: 1.125rem; font-weight: 600; }
  .example-h6 { font-size: 1rem; font-weight: 600; }
  
  .text-regular { font-size: 1rem; line-height: 1.5; }
  .text-lead { font-size: 1.125rem; line-height: 1.6; font-weight: 500; }
  .text-small { font-size: 0.875rem; color: #666; }
  
  .text-primary { color: #2563eb; }
  .text-secondary { color: #6b7280; }
  .text-success { color: #059669; }
  .text-danger { color: #dc2626; }
  </style>