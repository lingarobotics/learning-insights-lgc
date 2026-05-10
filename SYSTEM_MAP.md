# SYSTEM_MAP — Learn With Linga (Engineering Insights Platform)

---

## 1. Purpose

This document maps:

- filesystem structure
- rendering flow
- routing hierarchy
- component ownership
- content organization
- API relationships

The goal is:

> understanding where everything belongs and how the system connects

---

## 2. High-Level System Map

```txt
Markdown Insights
        ↓
Serverless API
        ↓
JSON Response
        ↓
React Frontend
        ↓
Rendered Insight UI
```

---

## 3. Repository Structure

```txt
learning-insights-lgc/
├── api/
├── client/
├── docs/
├── README.md
├── ARCHITECTURE.md
└── SYSTEM_MAP.md
```

---

## 4. API Layer

Location:

```txt
api/
```

Current Structure:

```txt
api/
└── insights/
    └── [domain].js
```

---

### Purpose

The API layer:

- reads markdown files
- converts them into JSON
- sends structured data to frontend

---

### Request Flow

```txt
Frontend Request
        ↓
/api/insights/:domain
        ↓
Filesystem Read
        ↓
Markdown Extraction
        ↓
JSON Response
```

---

## 5. Frontend Structure

Location:

```txt
client/src/
```

---

### Main Structure

```txt
src/
├── components/
├── pages/
├── index.css
└── App.jsx
```

---

## 6. Routing System

Main routing is controlled by:

```txt
client/src/App.jsx
```

---

### Route Map

```txt
/                         → Home
/domains                  → DomainsPage
/domain/:name             → DomainPage
/domain/:name/insights    → InsightsPage
/why-this-exists          → WhyThisExists
/how-to-use-insights      → HowToUseInsights
```

---

## 7. Page Ownership

---

### Home.jsx

Purpose:
- landing experience
- CTA hierarchy
- platform introduction
- connected platforms access

Responsibilities:
- hero section
- primary navigation
- secondary navigation
- external ecosystem access

---

### DomainsPage.jsx

Purpose:
- structured domain exploration

Responsibilities:
- domain listing
- engineering categorization
- exploration hierarchy

---

### DomainPage.jsx

Purpose:
- domain-level explanation

Responsibilities:
- explain domain purpose
- explain expected insight type
- guide exploration flow

---

### InsightsPage.jsx

Purpose:
- insight rendering system

Responsibilities:
- fetch API data
- render markdown
- handle animations
- manage insight navigation
- render structured sections

---

### WhyThisExists.jsx

Purpose:
- platform philosophy
- engineering intent
- learning methodology explanation

---

### HowToUseInsights.jsx

Purpose:
- explain reading approach
- explain insight extraction methodology
- prevent passive reading behavior

---

## 8. Content System

Location:

```txt
client/public/insights/
```

---

### Domain Structure

```txt
client/public/insights/
├── frontend/
├── backend/
├── cloud/
├── dsa/
├── projects/
├── failures-and-fixes/
├── communication/
├── dbms/
├── nosql/
└── reasons-behind-thoughts/
```

---

### Insight Structure

Each domain contains:

```txt
insights/
└── *.md
```

Example:

```txt
client/public/insights/dsa/insights/
└── 2026-05-10-arrays-and-big-o.md
```

---

## 9. Image System

Location:

```txt
client/public/images/
```

---

### Purpose

Stores:
- debugging screenshots
- engineering-thought posts
- architecture visuals
- rendering references

---

### Markdown Image Usage

Images are referenced as:

```md
![Alt Text](/images/folder/image.png)
```

---

### Current Image Categories

```txt
images/
├── development-and-debugging-screenshots/
├── engineering-thoughts-posts/
└── ...
```

---

## 10. Rendering Pipeline

---

### Step-by-Step Flow

#### 1. Markdown file created

```txt
/public/insights/domain/insights/*.md
```

↓

#### 2. API receives domain request

```txt
/api/insights/:domain
```

↓

#### 3. API reads filesystem

```js
fs.readdirSync(...)
```

↓

#### 4. Markdown content extracted

```js
fs.readFileSync(...)
```

↓

#### 5. API converts to JSON

```json
{
  "title": "...",
  "category": "...",
  "content": "..."
}
```

↓

#### 6. Frontend fetches insights

```js
fetch(...)
```

↓

#### 7. ReactMarkdown renders content

↓

#### 8. CSS applies layout + animation

---

## 11. Markdown Rendering Map

Rendering uses:

```txt
ReactMarkdown
```

---

### Section Splitting

Content split rule:

```js
split(/(?=\n## )/g)
```

Purpose:
- convert markdown sections into render blocks
- support animation pipeline
- improve readability

---

### Render Hierarchy

```txt
Insight
  ↓
Sections
  ↓
Cards
  ↓
Animated UI Blocks
```

---

## 12. Styling System

Main stylesheet:

```txt
client/src/index.css
```

---

### Styling Responsibilities

Controls:
- layout
- spacing
- typography
- CTA hierarchy
- card systems
- responsive behavior
- animations
- markdown rendering appearance

---

## 13. Navigation Hierarchy

The platform intentionally uses layered navigation.

---

### Navigation Flow

```txt
Home
  ↓
Domains
  ↓
Domain
  ↓
Insights
  ↓
Insight Detail
```

Purpose:
- preserve focus
- reduce overload
- separate engineering layers clearly

---

## 14. Connected Platform System

Homepage provides controlled access to:

```txt
LGC Systems
Founder Portfolio
```

Purpose:
- ecosystem connection
- external navigation
- platform relationship visibility

This avoids:
- homepage clutter
- excessive external exposure

---

## 15. Responsive Development Workflow

Development server:

```txt
vite --host
```

Purpose:
- phone testing
- real-device responsive debugging
- touch interaction validation

---

## 16. System Dependencies

The platform depends on:

- markdown file integrity
- valid folder structure
- consistent routing
- proper image paths
- API filesystem access
- correct build configuration

---

## 17. Failure Points

If these fail:

| Failure | Result |
|---|---|
| wrong folder path | insights fail to load |
| invalid image path | images fail to render |
| malformed markdown | broken section rendering |
| API failure | blank insights page |
| CSS overflow | layout instability |

---

## 18. Current Architectural Characteristics

The system is currently:

- markdown-first
- filesystem-driven
- serverless-based
- frontend-rendered
- animation-supported
- responsive-focused
- domain-organized

---

## 19. Future Expandability

Potential future additions:

```txt
metadata system
search layer
tagging system
graph-linked insights
cross-domain references
reading analytics
```

while preserving:

> markdown-first engineering insight architecture

---

## Author

**Ramalingam Jayavelu**  
Founder & Builder — LGC Systems

Focused on:
- engineering learning systems
- structured insight extraction
- debugging-driven understanding
- system-first thinking

---

## Platform

**Learn With Linga — Engineering Insights**  
Part of the LGC Systems ecosystem.