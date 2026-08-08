# Chino's Auto Repair & Mechanic Shop — Website

This website is set up as **10 simple files, all in one folder** — no nested folders to worry about. This makes it easy to upload from a phone.

## What's inside
- `index.html` — the whole website
- `styles.css` — all colors, fonts, layout
- `script.js` — the interactive parts (menu board, reviews)
- `chinos-logo.jpg` — your logo, used as the hero image and throughout the site
- `repair-hood-dent.jpg`, `repair-door-dent.jpg`, `repair-highlander.jpg`, `repair-outback.jpg`, `repair-audi.jpg`, `repair-panel-dent.jpg` — your real before/after job photos, shown in the "Before & After" section

**Note:** if you're updating an older copy of this site on GitHub, the old files (`job1-before.svg`, `job1-after.svg`, etc.) are no longer used — delete them from your repo after uploading these new ones so they don't just sit there unused.

## Step 1: Get these files out of the zip
On your phone, open the zip file with your Files app and tap **Extract** (most Android phones can do this natively; if not, install the free "ZArchiver" app from the Play Store, open the zip with it, and tap Extract). You should end up with a folder containing the 10 files listed above.

## Step 2: Create the GitHub repository
1. Go to github.com in your phone's browser and sign in.
2. Tap **+ → New repository**.
3. Name it `chinos-auto-repair`, set it to **Public**, tap **Create repository**.

## Step 3: Upload all the files at once
1. On your new repo's page, tap **Add file → Upload files**.
2. Tap **choose your files**.
3. In the file picker, navigate to the extracted folder from Step 1.
4. Select **all 10 files** (tap one, then long-press to start multi-select, or look for a "select all" option in your file app).
5. Once all 10 are selected and added, scroll down and tap **Commit changes**.

That's it — no copying or pasting of code needed.

## Step 4: Make it live (free) with GitHub Pages
1. In your repo, tap **Settings**.
2. Tap **Pages** in the left-hand menu.
3. Under "Branch," choose **main** and folder **/ (root)**, then tap **Save**.
4. Wait about a minute, then refresh. GitHub will show your live link, something like:
   `https://yourusername.github.io/chinos-auto-repair/`
   Share that link with customers — that's your real website.

## Step 5: Activate the appointment & estimate forms
The booking and estimate forms already email **Chinosrepair1861@gmail.com** automatically (using a free service called FormSubmit — no setup required). One-time step:
1. The first time anyone submits either form, FormSubmit sends a confirmation email to Chinosrepair1861@gmail.com.
2. Open that email and click **Confirm my email**.
3. After that, every future submission lands directly in that inbox.

Test it yourself once on the live site to trigger that confirmation email.

## Step 6: Adding more before & after photos later
The "Before & After" section now shows your real job photos. To add another one later:
1. Upload the new photo to your repo (**Add file → Upload files**) — name it something clear, like `repair-brakes.jpg`.
2. Open `index.html` (tap the pencil/edit icon).
3. Find one of the existing `<figure class="ba-photo-card">` blocks, copy it, paste a new copy right after it, and change the `src="..."` and `<figcaption>` text to match your new photo.
4. Tap **Commit changes**.

## Step 7: Reviews
Six example reviews are built in. When a visitor submits the "Leave a Review" form, it only saves in *their own browser* — it won't show up for other visitors (this keeps the site free and simple, with no database).

To add a real review that **everyone** sees:
1. On GitHub, open `script.js` (tap the pencil icon to edit).
2. Find the `starterReviews` list near the top.
3. Copy one entry, then change the name, rating, text, and date.
4. Tap **Commit changes** — it'll now show for every visitor.

## Editing anything later (text, phone number, hours, address)
Everything visible on the page lives in `index.html`. On GitHub, tap the pencil icon on that file to edit text directly in your browser, then tap **Commit changes**.

## Colors used
- Black `#0a0b0c`, Charcoal `#16181b` — backgrounds
- White `#f5f4f0` — text
- Red `#c8182b` / `#e9293d` — accents, buttons
- Steel grey `#6d7178` — supporting metal tone, pulled from your logo

If you ever want changes — new sections, different colors, more photos — just describe what you want.
