# System — Learn With Linga (Insights Engine)

---

## 1. Overview

Learn With Linga is a markdown-driven insights system.

It converts structured markdown files into a readable, animated UI.

The system is designed to:

- separate content from UI  
- enable fast writing (markdown-first)  
- render structured insights dynamically  
- maintain a clean reading experience  

---

## 2. Core Idea

The system works on a simple principle:

> Write once in markdown → render dynamically in UI

There is no manual UI building per insight.

The system handles:
- parsing  
- structuring  
- rendering  
- styling  

---

## 3. High-Level Architecture

The system consists of three layers:

### 1. Content Layer

Location:

client/public/insights/{domain}/insights/


Contains:
- markdown files (`.md`)
- structured by domain

Example:

insights/
dsa/
insights/
2026-03-25-arrays.md


---

### 2. API Layer (Serverless)

Location:

/api/insights/[domain]


Responsibilities:
- read markdown files  
- convert to JSON  
- send to frontend  

Response format:

[
{
title: "file-name",
category: "domain",
content: "markdown string"
}
]


---

### 3. Frontend Layer (React)

Responsibilities:
- fetch insights from API  
- display list view  
- render selected insight  
- apply animations  
- handle image rendering  

---

## 4. Data Flow

The system follows this pipeline:

1. Markdown file is created  
2. API reads file from filesystem  
3. API converts content into JSON  
4. Frontend fetches JSON  
5. ReactMarkdown renders content  
6. CSS applies styling and layout  

---

## 5. Rendering Model

### Markdown Rendering

- Uses `ReactMarkdown`
- Entire content is preserved (no destructive parsing)
- Sections are split using safe regex:


split(/(?=\n## )/)


This allows:
- section-based animation  
- structured UI blocks  

---

### Image Handling

Images are:

- stored in:

client/public/images/


- referenced in markdown as:

/images/...


Rendering behavior:
- small preview inside card  
- edge-aligned layout  
- click → zoom modal  

---

### UI Layout

Each section is rendered as a **card**:

- alternating left/right animation  
- scroll-based reveal  
- consistent spacing  

---

## 6. Routing Structure

Routes:


/domain/:name
/domain/:name/insights


Flow:

- user selects domain  
- insights list loads  
- user selects insight  
- detailed view renders  

---

## 7. Design Decisions

### 1. Markdown-first approach

Reason:
- faster content creation  
- no UI duplication  
- portable content  

---

### 2. Serverless API

Reason:
- lightweight backend  
- no persistent server required  
- easy deployment  

---

### 3. Public asset strategy

Images stored in:

client/public/


Reason:
- directly accessible by browser  
- no API overhead  

---

### 4. Controlled UI rendering

- images resized via CSS  
- layout enforced at component level  
- animations applied after render  

---

## 8. Constraints

The system depends on:

- correct folder structure  
- correct markdown formatting  
- consistent image paths  
- proper build configuration  

If any of these break:

- content will not render correctly  

---

## 9. What This System Is Not

This system is not:

- a CMS  
- a database-driven app  
- a dynamic content editor  

It is:

> a structured rendering engine for markdown-based insights

---

## 10. Summary

The system works by:

- keeping content simple (markdown)  
- keeping rendering controlled (React + CSS)  
- keeping logic minimal (API layer)  

This separation ensures:

- clarity  
- scalability  
- maintainability  