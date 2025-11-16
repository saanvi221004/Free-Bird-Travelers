# 🌟 Getting Started Guide for Mikasa

Hello! This guide will help you set up and work on the Free Bird Travelers project. Don't worry if you're new to coding - we'll take it step by step!

---

## 📋 Prerequisites - What You Need First

Before you start, make sure you have these installed on your computer:

1. **Node.js** (version 18 or newer)

   - Download from: https://nodejs.org/
   - Choose the "LTS" version (recommended)
   - After installing, verify by opening a terminal and typing: `node --version`
   - You should see something like: `v18.x.x` or higher

2. **Git** (for cloning the project)

   - Download from: https://git-scm.com/
   - Or use GitHub Desktop: https://desktop.github.com/ (easier for beginners)

3. **A Code Editor** (we recommend Windsurf since you'll be using it with AI)
   - Windsurf: https://codeium.com/windsurf
   - It's a code editor with built-in AI assistant

---

## 🚀 Step 1: Clone the Project

"Cloning" means downloading the project to your computer.

### Option A: Using Windsurf (Recommended)

1. Open Windsurf
2. Click on "Clone Repository" or "Open Folder"
3. Enter the repository URL: `https://github.com/saket-i3th/Free-Bird-Travelers`
4. Choose where to save the project on your computer
5. Click "Clone" or "Open"

### Option B: Using Terminal/Command Prompt

1. Open Terminal (Mac/Linux) or Command Prompt (Windows)
2. Navigate to where you want to save the project:
   ```bash
   cd Desktop
   # or
   cd Documents
   ```
3. Clone the repository:
   ```bash
   git clone https://github.com/saket-i3th/Free-Bird-Travelers
   ```
4. Go into the project folder:
   ```bash
   cd Free-Bird-Travelers
   ```

---

## 🔧 Step 2: Install Dependencies

Think of this as "downloading all the tools the project needs."

1. Open Terminal/Command Prompt in the project folder (`Free-Bird-Travelers`)
2. Run this command:
   ```bash
   npm install
   ```
3. Wait for it to finish (it may take a few minutes)
4. When you see "added X packages" - you're done! ✅

**What this does:** Downloads all the libraries and tools the website needs (like React, Next.js, etc.)

---

## ⚙️ Step 3: Set Up Environment Variables

Environment variables are settings that the website needs to work properly (like email addresses, API keys, etc.).

1. In the project folder, you'll see a file called `.env.example`
2. Make a copy of it and rename it to `.env.local`:

   - **On Mac/Linux:** In terminal, run: `cp .env.example .env.local`
   - **On Windows:** Copy the file in File Explorer and rename it to `.env.local`
   - **Or in Windsurf:** Right-click `.env.example` → Copy → Paste → Rename to `.env.local`

3. Open `.env.local` in your editor
4. Fill in your information (you can leave placeholders for now if you don't have them yet):

   ```env
   # EmailJS Configuration (you'll get these from https://www.emailjs.com/)
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

   # Contact Information
   NEXT_PUBLIC_BUSINESS_EMAIL=your-email@example.com
   NEXT_PUBLIC_BUSINESS_PHONE=+91-XXXXXXXXXX
   NEXT_PUBLIC_BUSINESS_WHATSAPP=+91-XXXXXXXXXX

   # Google Analytics (Optional - can leave empty for now)
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   ```

---

## 🎨 Step 4: Run the Development Server

This starts the website on your computer so you can see it and make changes.

1. In Terminal/Command Prompt (make sure you're in the `Free-Bird-Travelers` folder)
2. Run this command:
   ```bash
   npm run dev
   ```
3. Wait a few seconds - you'll see a message like:
   ```
   ✓ Ready in 2.3s
   ○ Local: http://localhost:3000
   ```
4. Open your web browser and go to: **http://localhost:3000**
5. You should see the Free Bird Travelers website! 🎉

**Important:** Keep this terminal window open while you're working. To stop the server, press `Ctrl + C` (or `Cmd + C` on Mac).

---

## 🤖 Step 5: Working with Windsurf AI Assistant

Windsurf has a built-in AI assistant that can help you code! Here's how to use it:

### Opening Files

- Click on any file in the left sidebar to open it
- Main files you'll work with are in the `src` folder:
  - `src/app/` - Pages and layouts
  - `src/components/` - Reusable components
  - `src/lib/` - Helper functions

### Using AI to Make Changes

1. **Ask the AI to help you:**

   - Select code or a file
   - Ask questions like:
     - "How do I change the homepage text?"
     - "Where do I update the contact email?"
     - "Can you add a new section to the about page?"
     - "How do I change the colors?"

2. **Let AI write code for you:**

   - Describe what you want: "Add a testimonials section to the homepage"
   - AI will suggest code changes
   - Review the suggestions and apply them

3. **Ask for explanations:**
   - Select any code you don't understand
   - Ask: "What does this code do?"
   - AI will explain it in simple terms

### Common Questions to Ask AI:

- "How do I update the business contact information?"
- "Where do I add new images?"
- "How do I change the website colors?"
- "How do I add a new page?"
- "How do I update the services list?"

---

## 📝 Step 6: Making Changes to the Website

### Understanding the Project Structure:

```
Free-Bird-Travelers/
├── src/
│   ├── app/              ← Website pages (home, about, contact, etc.)
│   ├── components/       ← Reusable pieces (buttons, forms, etc.)
│   ├── lib/              ← Helper functions and settings
│   └── data/             ← Content data (services, destinations, etc.)
├── public/
│   ├── images/          ← All images go here
│   └── icons/            ← Icons and logos
└── .env.local            ← Your settings (email, API keys, etc.)
```

### Common Tasks:

**1. Update Contact Information:**

- Edit `src/lib/constants.ts` → Look for `COMPANY_INFO`
- Or update `.env.local` for email/phone

**2. Change Homepage Content:**

- Edit `src/app/page.tsx` (the main homepage)

**3. Add/Change Images:**

- Put images in `public/images/`
- Reference them as `/images/your-image.jpg`

**4. Update Services/Destinations:**

- Edit files in `src/data/` folder (like `services.ts`, `destinations.ts`)

---

## 🏗️ Step 7: Building for Production

When you're ready to put the website online, you need to "build" it:

1. Stop the development server (`Ctrl + C`)
2. Run this command:
   ```bash
   npm run build
   ```
3. Wait for it to finish (it may take 1-2 minutes)
4. When done, you'll see a folder called `out/` - this contains your website!
5. You can upload the `out/` folder to any hosting service (Vercel, Netlify, etc.)

---

## 🐛 Troubleshooting - Common Issues

### "Command not found" or "npm: command not found"

- **Solution:** Node.js isn't installed or isn't in your PATH
- Install Node.js from https://nodejs.org/

### "Port 3000 is already in use"

- **Solution:** Another program is using port 3000
- Stop other development servers, or run: `npm run dev -- -p 3001` to use a different port

### Website shows errors in browser

- **Solution:** Check the terminal for error messages
- Make sure you ran `npm install`
- Check that `.env.local` exists and has values

### "Module not found" errors

- **Solution:** Run `npm install` again
- Delete `node_modules` folder and run `npm install` again

### Changes not showing up

- **Solution:** Save all files
- Check that the dev server is running (`npm run dev`)
- Hard refresh browser: `Ctrl + Shift + R` (or `Cmd + Shift + R` on Mac)

---

## 💡 Tips for Success

1. **Save Frequently:** Always save your files (Ctrl+S / Cmd+S)

2. **Test After Changes:**

   - Make a small change
   - Check it in the browser (refresh if needed)
   - If it works, move on to the next change

3. **Ask AI for Help:**

   - Don't hesitate to ask Windsurf AI anything
   - It's designed to help beginners!
   - Be specific in your questions

4. **One Change at a Time:**

   - Make small, incremental changes
   - Test each change before moving to the next
   - This makes it easier to find problems

5. **Read Error Messages:**
   - When something breaks, read the error message
   - Copy it and ask AI: "I'm getting this error: [paste error]"

---

## 📚 Useful Resources

- **Next.js Documentation:** https://nextjs.org/docs
- **Tailwind CSS (Styling):** https://tailwindcss.com/docs
- **Windsurf Help:** Use the built-in help in Windsurf

---

## 🆘 Need More Help?

If you get stuck:

1. **Ask Windsurf AI** - It's very helpful!
2. **Check the README.md** - It has more technical details
3. **Check the code comments** - Many files have helpful comments
4. **Don't panic!** - Most issues have simple solutions

---

## ✅ Quick Reference - Commands You'll Use Most

```bash
# Install dependencies (do this first time)
npm install

# Start development server (see website locally)
npm run dev

# Build for production (when ready to deploy)
npm run build

# Stop the server (press Ctrl+C)
```

---

## 🎯 Next Steps After Setup

1. ✅ Clone the project
2. ✅ Run `npm install`
3. ✅ Create `.env.local` file
4. ✅ Run `npm run dev`
5. ✅ Open http://localhost:3000
6. ✅ Start exploring the code with AI help!
7. ✅ Make small changes and test them

**Remember:** The AI in Windsurf is your friend! Don't be afraid to ask it questions and get help. Good luck! 🚀
