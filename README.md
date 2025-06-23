# Yohannes Portfolio Website

This is a personal portfolio website for Yohannes, showcasing fashion design and art direction work.

**Live Site:** https://yohannesroell.github.io

## 🎯 For Complete Beginners

This guide assumes you know very basic command line and have a GitHub account. Don't worry - we'll walk through everything step by step!

---

## 🔑 First Time Setup: SSH Key (Do This Once)

Before you can easily update your website from the command line, you need to set up an SSH key. This is like giving your computer a special password to talk to GitHub.

### Step 1: Check if you already have an SSH key

Open Terminal (Mac) or Command Prompt (Windows) and type:

```bash
ls -la ~/.ssh
```

If you see files like `id_rsa` and `id_rsa.pub`, you already have a key - skip to Step 3.

### Step 2: Create a new SSH key

```bash
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"
```

- Replace `your.email@example.com` with your actual email
- When it asks where to save the key, just press Enter (uses default location)
- When it asks for a passphrase, you can either:
  - Press Enter twice for no passphrase (easier)
  - Or type a password you'll remember (more secure)

### Step 3: Add your SSH key to GitHub

1. **Copy your public key**:
   
   **On Mac:**
   ```bash
   cat ~/.ssh/id_rsa.pub | pbcopy
   ```
   
   **On Windows:**
   ```bash
   cat ~/.ssh/id_rsa.pub
   ```
   Then manually select and copy the output.

2. **Add key to GitHub**:
   - Go to GitHub.com and log in
   - Click your profile picture (top right)
   - Click "Settings"
   - Click "SSH and GPG keys" (left sidebar)
   - Click "New SSH key"
   - Give it a title like "My Computer"
   - Paste your key in the "Key" field
   - Click "Add SSH key"

### Step 4: Test your connection

```bash
ssh -T git@github.com
```

You should see a message like: "Hi yohannesroell! You've successfully authenticated..."

### Step 5: Clone your repository with SSH

Now you can download your website files:

```bash
git clone git@github.com:yohannesroell/yohannesroell.github.io.git
cd yohannesroell.github.io
```

**🎉 You're all set! Now you can easily update your website from the command line.**

---

## 📝 How to Update Text/Copy on the Website

### What You'll Need:
- A computer with internet
- Your GitHub login
- A text editor (Notepad on Windows, TextEdit on Mac, or VS Code)
- SSH key set up (see above)

### Method 1: Edit Directly on GitHub (Easiest)

1. **Go to your repository**: https://github.com/yohannesroell/yohannesroell.github.io
2. **Find the file to edit**: Click on `index.html`
3. **Click the pencil icon** (✏️) in the top right to edit
4. **Find the text you want to change**:
   - **Main tagline**: Look for `"Empowering through design, creating change through art"`
   - **About section**: Look for `"At 19, I am a fashion designer..."`
   - **Quote**: Look for `"We must love all and give power to the people"`
   - **Contact info**: Look for `"Let's Create Something Powerful Together"`
5. **Make your changes** by typing new text
6. **Save your changes**:
   - Scroll to bottom
   - Add a description like "Updated about section"
   - Click "Commit changes"
7. **Wait 2-3 minutes** - your website will automatically update!

### Method 2: Edit on Your Computer (More Control)

1. **Navigate to your website folder**:
   ```bash
   cd yohannesroell.github.io
   ```

2. **Make sure you have the latest version**:
   ```bash
   git pull
   ```

3. **Open `index.html` in a text editor**

4. **Make your changes** to any text you see

5. **Upload your changes**:
   ```bash
   git add .
   git commit -m "Updated website copy"
   git push
   ```

6. **Wait 2-3 minutes** for the website to update

### 🔍 Common Text Locations in `index.html`:

- **Line 43**: Main tagline under your name
- **Line 72**: First paragraph about you
- **Line 73**: Second paragraph about your work
- **Line 69**: The quote banner
- **Line 84**: Contact section heading

---

## 🖼️ How to Update Portfolio Images

### What You'll Need:
- New images (JPG or PNG format)
- Images should be square (1:1 ratio) and ideally 800x800px or larger
- SSH key set up (see above)

### Step 1: Prepare Your Images

1. **Resize your images** to be square (same width and height)
2. **Name them clearly** like:
   - `spring-collection-2024.jpg`
   - `sustainable-fashion-line.jpg`
   - `avant-garde-series.jpg`
3. **Keep file sizes reasonable** (under 2MB each)

### Step 2: Add Images to Your Website

#### Method A: Using GitHub Website (Easiest)

1. **Go to your repository**: https://github.com/yohannesroell/yohannesroell.github.io
2. **Navigate to the portfolio folder**: Click `data` → `portfolio`
3. **Upload new images**:
   - Click "Add file" → "Upload files"
   - Drag your new images into the browser
   - Write a commit message: "Added new portfolio images"
   - Click "Commit changes"

#### Method B: Using Command Line

1. **Navigate to your website folder**:
   ```bash
   cd yohannesroell.github.io
   ```

2. **Get the latest version**:
   ```bash
   git pull
   ```

3. **Copy your new images** to the portfolio folder:
   ```bash
   cp /path/to/your/new-image.jpg data/portfolio/
   ```
   
   **Example**:
   ```bash
   # If your image is on Desktop:
   cp ~/Desktop/my-new-design.jpg data/portfolio/
   ```

4. **Upload the changes**:
   ```bash
   git add .
   git commit -m "Added new portfolio images"
   git push
   ```

### Step 3: Remove Old Images (Optional)

To remove images you don't want anymore:

1. **On GitHub website**: 
   - Go to `data` → `portfolio`
   - Click on the image you want to delete
   - Click the trash can icon 🗑️
   - Commit the change

2. **On command line**:
   ```bash
   cd yohannesroell.github.io
   git pull
   rm data/portfolio/old-image-name.jpg
   git add .
   git commit -m "Removed old portfolio image"
   git push
   ```

---

## 🚨 Important Notes

### Image Requirements:
- ✅ **Good formats**: `.jpg`, `.jpeg`, `.png`
- ✅ **Good size**: 800x800px to 2000x2000px
- ✅ **Square ratio**: Same width and height
- ❌ **Avoid**: Very large files (over 5MB), non-square images

### After Making Changes:
- **Wait 2-3 minutes** for changes to appear on your live website
- **Clear your browser cache** if you don't see changes (Ctrl+F5 or Cmd+Shift+R)
- **Check your site**: https://yohannesroell.github.io

### Common Command Line Tips:
- **Always pull first**: Run `git pull` before making changes to get the latest version
- **Check what changed**: Run `git status` to see what files you've modified
- **See your changes**: Run `git diff` to see exactly what text you changed

### Getting Help:
- **Can't find something?** Use Ctrl+F (or Cmd+F) to search for text in the `index.html` file
- **Broke something?** Don't panic! GitHub keeps history - you can always revert changes
- **SSH not working?** Try the GitHub website method instead
- **Need more help?** Create an "Issue" in your GitHub repository

---

## 🎨 Quick Reference: What Files Do What

- **`index.html`** - All the text and content of your website
- **`styles.css`** - How your website looks (colors, fonts, layout)
- **`data/portfolio/`** - Folder containing all your portfolio images
- **`data/assets/`** - Other images like your Y logo and hero image

---

## 🔄 Quick Workflow Summary

### Every time you want to make changes:

1. **Open Terminal and navigate to your site**:
   ```bash
   cd yohannesroell.github.io
   ```

2. **Get the latest version**:
   ```bash
   git pull
   ```

3. **Make your changes** (edit files, add images, etc.)

4. **Upload your changes**:
   ```bash
   git add .
   git commit -m "Describe what you changed"
   git push
   ```

5. **Wait 2-3 minutes** and check your live site!

**Remember**: Your website automatically updates every time you make changes to your GitHub repository. No need to manually deploy or publish - GitHub does it for you! 🎉