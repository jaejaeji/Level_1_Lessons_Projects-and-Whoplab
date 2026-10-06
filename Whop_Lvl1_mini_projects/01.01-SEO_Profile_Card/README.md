# SEO Profile Card

## What you will build

Build a simple personal profile landing page that practices HTML structure, meta tags for SEO, headings/paragraphs, div/span grouping, lists, a small table, and a contact form.

## What you will practice (HTML Essentials)

1. **Overview of HTML**  
   You will see how HTML is the _structure_ of a webpage.

2. **HTML Structure**  
   You will use: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`

3. **Meta Tags & SEO**  
   You will add:

   - `charset` (character set)
   - `viewport` (mobile responsiveness)
   - `description`, `keywords`, `author` (SEO + page info)

4. **Headings, Paragraphs, Divs, and Spans**  
   You will use:

   - Headings (`<h1>`, `<h2>`, `<h3>`)
   - Paragraphs (`<p>`)
   - Divs (`<div>`) to group sections
   - Spans (`<span>`) to style small parts of text

5. **Working with Tables**  
   You will use:

   - `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`

6. **Working with Lists**  
   You will use:

   - Unordered lists (`<ul><li>`)
   - Ordered lists (`<ol><li>`)

7. **Forms and User Input**  
   You will use:
   - `<form>`, `<label>`, `<input>`, `<select>`, `<textarea>`, `<button>`

## How to run

Open `index.html` in your browser.


###
    <!--
      🧠 PROJECT TITLE: SEO Profile Card

      ✅ WHAT YOU ARE PRACTICING (HTML Essentials)
      - HTML Structure (doctype, html, head, body)
      - Meta Tags & SEO (charset, viewport, description, keywords, author)
      - Headings + Paragraphs
      - Divs + Spans (grouping + styling hooks)
      - Lists (ul/ol)
      - Tables (table, thead, tbody, tr, th, td)
      - Forms + User Input (form, label, input, select, textarea, button)

      🎯 PROJECT GOAL
      Build a simple personal profile landing page that practices HTML structure, meta tags for SEO, headings/paragraphs, div/span grouping, lists, a small table, and a contact form.

    -->

    <!-- STEP 1 — Add your basic meta tags -->
    <!--
      Inside <head>, add:
      1) <meta charset="UTF-8">
      2) <meta name="viewport" content="width=device-width, initial-scale=1.0">
      3) <title>...</title> (use a title that matches this project)
      4) <meta name="description" content="..."> (short: 1–2 sentences)
      5) <meta name="keywords" content="..."> (comma-separated keywords)
      6) <meta name="author" content="...">
    -->

    <!-- STEP 2 — Link your CSS file (optional but recommended) -->
    <!--
      Add: <link rel="stylesheet" href="styles.css">
      Even if the focus is HTML, a tiny bit of CSS helps you *see* your structure.
    -->
  </head>
  <body>
    <!-- STEP 3 — Create a semantic page layout -->
    <!--
      Create the main layout using semantic tags:
      - <header> for the top section
      - <main> for the main content
      - <footer> for the bottom section
      Tip: Wrap everything in a <div class="page"> if you want a single container.
    -->

    <!-- STEP 4 — Header content (Headings + span) -->
    <!--
      Inside <header>, add:
      - One <h1> with your name or brand
      - One <p> that describes you in 1–2 lines
      - Inside that <p>, wrap ONE important word in a <span class="small">...</span> OR <span>...</span>
        (Example idea: "Front-End" or "Mentor")
    -->

    <!-- STEP 5 — Main content with 2 sections (Divs + Lists) -->
    <!--
      Inside <main>, create a <div class="grid-2"> to hold two cards side-by-side (on desktop).
      Card A: <section class="card"> with:
      - <h2>About</h2>
      - 2–3 <p> lines about the person/brand
      Card B: <section class="card"> with:
      - <h2>Skills</h2>
      - A <ul> list of at least 5 skills
      - A <p class="small"> note under the list
    -->

    <!-- STEP 6 — Add a small table (Tables) -->
    <!--
      Below the cards, add another <section class="card"> with:
      - <h2>Weekly Focus</h2>
      - A <table> with a <thead> and <tbody>
      - Include 3 rows in <tbody> (example: Day / Topic / Goal)
    -->

    <!-- STEP 7 — Add a contact form (Forms) -->
    <!--
      Add another <section class="card"> with:
      - <h3>Contact</h3>
      - A <form> that contains:
        1) Name input (text)
        2) Email input (email)
        3) Reason dropdown (select with 3 options)
        4) Message textarea
        5) Submit button
      Important: each input MUST have a matching <label> with for/id.
    -->

    <!-- STEP 8 — Footer (Structure) -->
    <!--
      Inside <footer>, add:
      - A <p> with copyright text
      - An <ol> with 3 quick links you *would* add (just placeholders)
    -->

    <!-- STEP LAST — Validate your HTML -->
    <!--
      Quick self-check:
      ✅ Do you have ONLY ONE <h1>?
      ✅ Are your headings in order? (h1 → h2 → h3)
      ✅ Does every <label> connect to an input using for="..." and id="..."?
      ✅ Does your table have <thead> and <tbody>?
      ✅ Did you use BOTH a list and a table somewhere?
      ✅ Did you use a <span> to style a *small* piece of text inside a bigger element?
    -->