# Failure & Fix — Portfolio Contact Form Email Delivery (My Debugging Journey)

---

## 1. Context

I wanted to add a fully functional contact form to my portfolio.

The stack consisted of:

- React (Vite)
- Vercel Serverless Functions
- Brevo Transactional Email API

At first, it looked like a simple feature.

The expected flow was:

```
Visitor
    ↓
Contact Form
    ↓
Serverless Function
    ↓
Brevo
    ↓
Inbox
```

Instead, implementing this feature turned into a complete debugging journey involving deployment environments, serverless runtime configuration, third-party API security, and email infrastructure.

This document is not theory.

It is exactly:

- What I faced
- How I debugged it
- How I fixed it

---

## 2. Contact Form Failed Immediately

![Initial Contact Form Failure](/images/development-and-debugging-screenshots/initial-stage-of-contact-form-broken-one.png)

### What I saw

The UI looked correct.

However, clicking **Send Message** failed immediately.

### What I thought initially

I assumed:

- Brevo API issue
- Frontend fetch issue
- Serverless function bug

### What was actually happening

The request never completed successfully.

The next step was to investigate the backend instead of the frontend.

---

## 3. Environment Variables Were Missing

![Runtime Debug](/images/development-and-debugging-screenshots/console-log-serverless-function-running-terminal-proved-that-in-local-dev-vercel-brevo-api-key-not-exist-and-loaded.png)

### What I did

I added debugging information inside the serverless function.

The function printed:

```
githubTokenExists
brevoKeyExists
senderEmailExists
```

### What I found

GitHub variables existed.

Brevo variables did not.

### What I realized

The issue was not inside my code.

The runtime itself was missing the required environment variables.

---

## 4. Confirming with Vercel Environment

![Vercel Environment](/images/development-and-debugging-screenshots/vercel-env-ls-command-confirms-that-vercel-don't-have-brevo-api-key-that-is-present-in-local-dev.png)

### What I checked

Instead of assuming, I verified Vercel's environment.

```
vercel env ls
```

### What I found

Only GitHub-related variables existed.

```
BREVO_API_KEY
BREVO_SENDER_EMAIL
```

were completely absent.

### Root Cause

The variables existed locally inside:

```
.env.local
```

but they were never configured in Vercel.

---

## 5. Fix — Adding Missing Environment Variables

![Adding Environment Variables](/images/development-and-debugging-screenshots/after-finding-root-cause-absence-of-env-for-brevo-manually-added-in-vercel-those-api-keys-in-environmental-variable.png)

### What I changed

I manually added:

- BREVO_API_KEY
- BREVO_SENDER_EMAIL

through the Vercel Dashboard.

### Result

The serverless function could finally access the required credentials.

---

## 6. Production Still Failed

![401 Unauthorized](/images/development-and-debugging-screenshots/even-after-pushing-to-production-that-it-shown-in-devtools-that-its-unauthorized-then-realized-its-brevo-was-careful-about-IP-address.png)

### What happened

After deployment, I tested the production portfolio.

The request still failed.

Chrome DevTools showed:

```
401 Unauthorized
```

### My assumption

I suspected:

- Wrong API key
- Incorrect sender email
- Invalid request

---

## 7. Network Inspection Revealed the Real Cause

![Unauthorized IP](/images/development-and-debugging-screenshots/in-devtools-network-found-that-request-fetch-and-found-the-root-cause-is-brevo-is-not-allowing-due-to-unauthorized-IP-address.png)

### What I did

I opened:

- DevTools
- Network Tab
- Response Body

### What I found

Brevo responded with:

```
Unauthorized IP Address
```

The request reached Brevo successfully.

Brevo itself rejected the request because Vercel's server IP had not been authorized.

### What I learned

Reading the response body is often more valuable than looking only at the HTTP status code.

---

## 8. Sender Validation Issue

![Sender Verification](/images/development-and-debugging-screenshots/verifying-dimension-in-new-brevo-account-for-portfolio.png)

### What happened

Even after creating a dedicated Brevo account and API key, email delivery still failed.

### What I discovered

Transactional Logs reported:

```
Sender not validated
```

The sender email had not yet been verified.

### Fix

I verified:

- Sender email
- dimension
- DNS configuration

---

## 9. Final Success

![Email Delivered](/images/development-and-debugging-screenshots/at-last-email-received-from-contact-form-to-my-primary-email-inbox.png)

### Result

The complete workflow finally worked.

```
Visitor
      ↓
Portfolio Contact Form
      ↓
Vercel Serverless Function
      ↓
Brevo Transactional API
      ↓
Validated Sender
      ↓
Inbox
```

The first email successfully arrived in my inbox.

---

## 10. Final Fixes I Applied

### Backend

- Implemented a Vercel Serverless Function
- Integrated Brevo Transactional Email API
- Added runtime validation for required environment variables

### Deployment

- Configured missing environment variables in Vercel
- Redeployed the application after updating production configuration

### Debugging

- Used runtime logging instead of guessing
- Inspected Network responses through DevTools
- Verified Transactional Logs inside Brevo

### Email Infrastructure

- Created a dedicated Brevo API key
- Verified sender identity
- Authenticated the sending dimension

---

## 11. What I Learned

The failures were not random.

They came from:

- Assuming local configuration automatically exists in production
- Not validating runtime environment variables
- Looking only at HTTP status codes instead of response bodies
- Overlooking third-party security policies
- Missing sender validation requirements

---

## 12. My Final Understanding

A production-ready contact form depends on much more than frontend code.

It requires:

1. Correct frontend integration
2. Proper serverless runtime configuration
3. Environment variables configured in deployment
4. Third-party API authentication
5. Infrastructure security compliance
6. Verified sender identity
7. Valid email delivery pipeline

A simple **"Send Message"** button ultimately relies on multiple systems working together.

If any one of them fails, the entire feature appears broken—even when the application code itself is correct.