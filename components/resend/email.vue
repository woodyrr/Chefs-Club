<template>
    <mjml>
      <mj-head>
        <mj-preview>Log in with this magic link</mj-preview>
        <mj-style inline="inline">
          .container {
            padding-left: 12px;
            padding-right: 12px;
            margin: 0 auto;
          }
  
          .heading {
            color: #333;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
              'Helvetica Neue', sans-serif;
            font-size: 24px;
            font-weight: bold;
            margin: 40px 0;
            padding: 0;
          }
  
          .link {
            color: #2754c5;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
              'Helvetica Neue', sans-serif;
            font-size: 14px;
            text-decoration: underline;
          }
  
          .text {
            color: #333;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
              'Helvetica Neue', sans-serif;
            font-size: 14px;
            margin: 24px 0;
          }
  
          .footer {
            color: #898989;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
              'Helvetica Neue', sans-serif;
            font-size: 12px;
            line-height: 22px;
            margin-top: 12px;
            margin-bottom: 24px;
          }
  
          .code {
            display: inline-block;
            padding: 16px 4.5%;
            width: 90.5%;
            background-color: #f4f4f4;
            border-radius: 5px;
            border: 1px solid #eee;
            color: #333;
          }
        </mj-style>
      </mj-head>
      <mj-body background-color="#ffffff">
        <mj-section>
          <mj-column>
            <mj-text css-class="heading">Login</mj-text>
            <mj-text>
              <a href="https://notion.so" class="link" target="_blank">
                Click here to log in with this magic link
              </a>
            </mj-text>
            <mj-text class="text">
              Or, copy and paste this temporary login code:
            </mj-text>
            <mj-text>
              <code class="code">{{ loginCode }}</code>
            </mj-text>
            <mj-text class="text" color="#ababab">
              If you didn&apos;t try to login, you can safely ignore this email.
            </mj-text>
            <mj-text class="text" color="#ababab">
              Hint: You can set a permanent password in Settings & members → My
              account.
            </mj-text>
            <mj-image
              src="{{ baseUrl }}/static/notion-logo.png"
              alt="Notion's Logo"
              width="32px"
              height="32px"
            />
            <mj-text class="footer">
              <a href="https://notion.so" class="link" style="color: #898989">
                Notion.so
              </a>
              , the all-in-one-workspace
              <br />
              for your notes, tasks, wikis, and databases.
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  </template>
  
  <script setup>
  const loginCode = "sparo-ndigo-amurt-secan"; // Replace with dynamic data
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
  </script>
  