# EmailJS Setup Guide for Contact Form

## What is EmailJS?
EmailJS allows you to send emails directly from client-side JavaScript without a backend server. It's perfect for contact forms like yours!

## Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (since you're using Gmail)
4. Connect your Gmail account: `nssrinidhi72884@gmail.com`
5. Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:**
```
New Contact Message from Portfolio - {{from_name}}
```

**Content:**
```
Hello Srinidhi,

You have received a new message from your portfolio website:

**Name:** {{from_name}}
**Email:** {{from_email}}
**Message:**
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

### 5. Update Your Code
Replace the placeholder values in `components/Contact.tsx`:

```typescript
const serviceId = 'YOUR_EMAILJS_SERVICE_ID'; // Replace with your actual service ID
const templateId = 'YOUR_EMAILJS_TEMPLATE_ID'; // Replace with your actual template ID  
const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace with your actual public key
```

**Example:**
```typescript
const serviceId = 'service_abc123';
const templateId = 'template_xyz789';
const publicKey = 'user_def456';
```

### 6. Test Your Form
1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out the form and submit
4. Check your email inbox for the test message

## Features Added
✅ **Real email sending** - Messages go directly to your inbox  
✅ **Loading state** - Shows "Sending..." while processing  
✅ **Error handling** - Displays errors if something goes wrong  
✅ **Form validation** - Prevents empty submissions  
✅ **Success feedback** - Confirms when message is sent  
✅ **Disabled state** - Prevents multiple submissions  

## Free Tier Limits
- **200 emails per month** (perfect for a portfolio)
- **2 email templates**
- **1 email service**

## Troubleshooting
- **"Failed to send message"**: Check your EmailJS credentials
- **No emails received**: Check spam folder and EmailJS dashboard
- **Template not found**: Verify template ID is correct

## Security Notes
- Public key is safe to expose in frontend code
- EmailJS handles spam protection
- No sensitive data is stored on EmailJS servers

Your contact form will now actually send emails to your inbox! 🎉
