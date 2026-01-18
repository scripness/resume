# Resume Refactor Design

## Context

Andrei's resume from May 2025 needs updating:
- Add FinancialDocs role (2025)
- Shift from tech-heavy format to outcome-focused
- Balance modern AI skills without appearing hype-focused
- Modest, factual tone throughout

## Target Role

Architect/design focused with implementation capability. Full loop: design systems, then deliver them. AI as a force multiplier for both phases.

## Key Principles

1. **Depth of delivery** — Show complete systems shipped end-to-end, repeatedly
2. **Problem-solving range** — Legacy, greenfield, scaling, integrations
3. **Modest style** — No buzzwords, no superlatives, let work speak
4. **Tech as context** — Mention only when it clarifies the challenge

## Structure

### Summary (2-3 lines)

```
Software engineer with 13 years designing and delivering complete systems.
I work across the full stack — architecture, backend, frontend, infrastructure —
and focus on shipping software that solves the actual problem.
```

### Skills (compact)

```
- System Architecture & Design
- End-to-End Delivery
- Technical Leadership
- AI-Assisted Development

Primarily TypeScript/Node.js/Bun; comfortable across Go, PHP, Ruby, Python,
SQL/NoSQL, and cloud platforms.
```

### Experience Format

Each role:
- Company name
- Title | Contract/Full-Time | Remote/Hybrid/In-Office
- 1-3 bullets focused on outcomes
- No "Key Tech" lines
- Tech mentioned in bullets only when it adds context

### New Entry: FinancialDocs

```
FinancialDocs
Full-Stack Engineer | Contract | Remote

- Maintained three legacy paystub platforms (thepaystubs.com, paystubs.net,
  paystubcreator.com) serving hundreds of users, evolving a shared codebase
  of 2,000+ service classes without breaking production
- Architected a legal document platform (legaldocs.com) — designed the CMS
  data model with 14 collections, built the document generation pipeline,
  and integrated dual payment providers
- Designed a webhook-based caching system with CDN integration to handle
  content updates across interconnected documents
```

### Existing Roles (Rewrite Pattern)

**Before (NIXAP):**
```
- Led full-stack development (PHP/Symfony/Laravel, Node.js, Vue.js) for custom
  client web applications and internal tools
- Engineered and deployed scalable VoIP multi-service and multi-tenant system
  integrating PBX/SIP protocols using Node.js and Electron
- Key Tech: PHP, Node.js, TypeScript, Vue.js, SQL, VoIP/PBX/SIP, Electron,
  RabbitMQ, Elasticsearch, WebSocket
```

**After (NIXAP):**
```
- Built custom web applications and internal tools for client projects
- Engineered a multi-tenant VoIP system integrating PBX/SIP protocols with
  a desktop application for call management
```

**Before (Dispatch42):**
```
- Architected and built Node.js/GraphQL microservices and React frontend for
  a real-time logistics CRM & mobile app
- Implemented real-time notifications/messaging using AWS SQS/Lambda and
  integrated proprietary hardware data via DynamoDB
- Key Tech: Node.js, TypeScript, GraphQL, React, AWS (Lambda, SQS, DynamoDB, CDK), Jest
```

**After (Dispatch42):**
```
- Architected a real-time logistics CRM with microservices backend and mobile app
- Built real-time notifications and integrated proprietary hardware data feeds
```

**Before (GoodLeap):**
```
- Built and maintained Node.js microservices on AWS (Lambda, SQS, S3) for a
  large-scale solar financing platform, integrating services like DocuSign
- Key Tech: Node.js, TypeScript, AWS (Lambda, SQS, S3), REST, Jest
```

**After (GoodLeap):**
```
- Built and maintained microservices for a large-scale solar financing platform,
  integrating document signing and payment workflows
```

## All Roles to Rewrite

1. FinancialDocs (new)
2. NIXAP
3. Rio
4. Crawless
5. Dispatch42
6. Deditech Com
7. eToro
8. MKM
9. GoodLeap
10. RentInsider
11. Virail
12. Deutsche Fintech Solutions
13. Travod

## Output Format

Final resume as markdown file, which can be converted to PDF.

## What Changed from Original

| Aspect | Before | After |
|--------|--------|-------|
| Summary | Long, tech-heavy | 2-3 lines, outcome-focused |
| Skills | ~40 items in 5 categories | 4 competencies + 1 tech line |
| Key Tech lines | Every role | Removed entirely |
| Tech mentions | Listed exhaustively | Only when adds context |
| Tone | Promotional ("proven ability") | Modest, factual |
| AI mention | None | One subtle competency line |
| Length | 4 pages | ~3 pages estimated |
