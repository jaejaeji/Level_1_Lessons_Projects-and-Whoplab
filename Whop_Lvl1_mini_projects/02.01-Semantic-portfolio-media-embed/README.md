# Semantic HTML — 3 Mini Projects — v3 (Detailed Comments + iframe)

This bundle is designed to teach **Semantic HTML** and **media embedding** step-by-step, using 3 mini projects.

✅ Every project requires:

- Semantic structure: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`
- Links: internal `#id` anchors + at least one external link
- Media: `img` (with `alt`), `audio controls`, `video controls`
- Embed: `iframe` (example: YouTube embed OR Google Maps embed)
- Accessibility basics: descriptive link text, `alt` text, titles/labels where helpful

---

## What “semantic” means

Semantic tags describe what content **IS**, not how it looks.

- `<header>` = top intro of the page/section
- `<nav>` = navigation links area
- `<main>` = the unique main content of the page
- `<section>` = grouped topic chunk
- `<article>` = a standalone item (card/post/resource)
- `<aside>` = supporting info (tips, related links)
- `<footer>` = bottom info (copyright, extra links)

---

## Why include media + iframe?

Because real websites are not just text.  
Mentees must learn:

- how to embed images/audio/video
- how to embed 3rd-party content via iframe
- how to keep it accessible (alt text, descriptive captions)

Open each `index.html` in your browser to test.

<!DOCTYPE html>
<html lang="en">
  <head>
    <!--
      🧠 PROJECT: Semantic Portfolio + Media + Embed

      ✅ MODULE TOPICS THIS PROJECT PRACTICES
      1) Introduction to Semantic HTML
      2) Understanding Semantic HTML (choosing tags by meaning)
      3) Anchor Tags & Hyperlinks
      4) Adding Images, Audio, and Video
      5) Embedding content with <iframe>

      🎯 PROJECT GOAL
      Build a simple portfolio landing page that uses semantic layout, includes media (image/audio/video), and embeds an iframe (YouTube or Maps).

  
    -->

    <!-- STEP 1 — Add the basic <meta> tags -->
    <!--
      Inside <head>, create these tags EXACTLY:
      1) <meta charset="UTF-8">
      2) <meta name="viewport" content="width=device-width, initial-scale=1.0">
      3) <title> ... </title> (use the project name)
      4) <meta name="description" content="..."> (1 sentence about the page)
      (Optional) 5) <meta name="author" content="Your Name">
    -->

    <!-- STEP 2 — Link the CSS file -->
    <!--
      Add this line in <head>:
      <link rel="stylesheet" href="styles.css">
      This CSS is just a helper so you can SEE your sections.
    -->
  </head>

  <body>
    <!-- STEP 3 — Create the outer page container -->
    <!--
      Add ONE wrapper <div> with class="page".
      Everything else will go inside this wrapper.
      Example structure (do NOT copy literally; you must write it):
      <div class="page"> ... </div>
    -->

    <!-- STEP 4 — Add the main semantic layout tags -->
    <!--
      Inside .page, add these tags in this order:
      1) <header> ... </header>
      2) <nav> ... </nav>
      3) <main> ... </main>
      4) <aside> ... </aside>
      5) <footer> ... </footer>

      WHY THIS MATTERS:
      These tags tell the browser and screen readers what each part is.
    -->

    <!-- STEP 5 — Header content -->
    <!--
      Inside <header>, add:
      - One <h1> (the main title of the page)
      - One <p class="small"> (a short subtitle)
      - OPTIONAL but recommended: a skip link at the very top:
        <a class="skip" href="#content">Skip to content</a>
    -->

    <!-- STEP 6 — Navigation with internal anchor links -->
    <!--
      Inside <nav>, create a list of links using:
      <ul> and <li> tags.

      You MUST include at least 4 links that jump to sections on the page:
      - One link to the main content area: href="#content"
      - One link to your media section: href="#media"
      - One link to your embed section: href="#embed"
      - One link to a final section: href="#extras" (or another id you choose)

      IMPORTANT RULE:
      The href like "#media" ONLY works if a section later has id="media".
    -->

    <!-- STEP 7 — Main content + section IDs -->
    <!--
      Give <main> an id="content" so the "Skip to content" link works.
      Inside <main>, you will create MULTIPLE <section> blocks.
      Each section should have:
      - A heading (<h2>)
      - Content inside (paragraphs, lists, articles, etc.)

      REQUIRED sections inside <main>:
      A) <section id="media"> ... </section>
      B) <section id="embed"> ... </section>
      C) <section id="extras"> ... </section>
    -->
    <!-- STEP 8 — Portfolio sections using <section> + <article> -->
    <!--
      Inside <section id="extras"> create a 'Projects' area.
      Use 2–3 <article class="card"> blocks.
      Each <article> must include:
      - <h3> project title
      - <p> 1–2 sentence description
      - <a> link (external OR internal) with descriptive text
    -->

    <!-- STEP 9 — Media section (image + audio + video) -->
    <!--
      Inside <section id="media"> you MUST add:
      A) An image using <figure>:
         - <figure class="card">
             <img src="..." alt="...">
             <figcaption> ... </figcaption>
           </figure>
      B) An audio player:
         - <audio controls>
             <source src="assets/sample-audio.mp3" type="audio/mpeg">
           </audio>
      C) A video player:
         - <video controls>
             <source src="assets/sample-video.mp4" type="video/mp4">
           </video>
      
      NOTE:
      The audio/video file paths can be placeholders if you don’t have files yet.
    -->

    <!-- STEP 10 — Embed section (iframe) -->
    <!--
      Inside <section id="embed"> add an iframe embed.
      Pick ONE:
      Option 1: YouTube embed iframe
      Option 2: Google Maps embed iframe
      
      IMPORTANT:
      - Your iframe MUST have a title attribute for accessibility.
      - Example: <iframe title="Map to campus" src="..."></iframe>
    -->

    <!-- STEP 11 — Aside content -->
    <!--
      Inside <aside>, add:
      - <h2>Quick Tips</h2>
      - A <ul> with 3 tips about semantic HTML
      - One external link to MDN (descriptive text!)
    -->

    <!-- STEP 12 — Footer content -->
    <!--
      Inside <footer>, add:
      - A <p class="small"> with copyright
      - One external link that opens in a new tab:
        target="_blank" and rel="noopener"
    -->

    <!-- STEP LAST — Checklist before you finish -->
    <!--
      ✅ Semantic tags used: header/nav/main/section/article/aside/footer
      ✅ Nav links jump correctly (ids exist)
      ✅ Image uses alt text + (preferably) figure/figcaption
      ✅ Audio uses controls + has a <source>
      ✅ Video uses controls + has a <source>
      ✅ iframe is embedded (YouTube or Maps) + has a title attribute
      ✅ Link text is descriptive (not 'click here')
    -->
  </body>
</html>