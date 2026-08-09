# RBU Nagpur Website - Landing & Login Pages

A professional website for Ramdeobaba University (RBU), Nagpur featuring a landing page and login page with sign-in and login options.

## Project Structure

```
website/
├── index.html          # Landing page
├── login.html          # Login page with Sign In and Login tabs
├── styles.css          # All styling and animations
├── script.js           # Form functionality and tab switching
├── assets/
│   └── rbu-logo.png    # RBU Nagpur logo (to be added)
└── README.md           # This file
```

## Features

### Landing Page (index.html)
- RBU Nagpur logo centered on the page
- University name and tagline
- "Sign In" and "Login" navigation buttons
- Responsive design with smooth animations
- White background

### Login Page (login.html)
- RBU Nagpur logo centered at the top
- Two tabs: "Sign In" and "Login"
- **Sign In Tab**: Create account form with:
  - Full Name field
  - Email Address field
  - Password field
  - Confirm Password field
- **Login Tab**: Login form with:
  - Email Address field
  - Password field
  - "Remember me" checkbox
  - "Forgot your password?" link
- Back to Home link

## Setup Instructions

### 1. Add the RBU Logo
Save the RBU Nagpur logo image as `rbu-logo.png` in the `assets/` folder.

The website expects the image at: `website/assets/rbu-logo.png`

### 2. Open the Website
Simply open `index.html` in your web browser.

### 3. Navigation
- From landing page: Click "Sign In" or "Login" to go to the login page
- From login page: Click "Back to Home" to return to the landing page
- Switch between tabs using the "Sign In" and "Login" buttons

## Features Included

✅ **Responsive Design** - Works on desktop, tablet, and mobile devices
✅ **Smooth Animations** - Fade and slide animations on page load
✅ **Interactive Forms** - Form validation and submission handling
✅ **Tab Switching** - Easy navigation between Sign In and Login
✅ **RBU Branding** - University colors (Dark Blue #003d7a and Orange #ff6f00)
✅ **Professional UI** - Modern, clean interface

## Color Scheme

- **Primary Blue**: #003d7a (RBU Official)
- **Accent Orange**: #ff6f00 (RBU Official)
- **Background**: #ffffff (White)
- **Text**: #333333 (Dark Gray)

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## Customization

### Modify Form Fields
Edit the form sections in `login.html` to add or remove fields.

### Change Colors
Update the CSS variables in `styles.css` to match your brand colors.

### Add Functionality
The form submissions are currently showing alerts. To add real backend functionality:
1. Replace the alert() calls in `script.js` with actual API calls
2. Set up a backend server to handle user registration and login

## Notes

- The form validation is currently client-side only
- For production use, implement proper backend authentication
- Add HTTPS for secure password transmission
- Consider adding email verification for sign-up process

---

Created for Ramdeobaba University (RCOEM), Nagpur
**Learn | Innovate | Accomplish**
