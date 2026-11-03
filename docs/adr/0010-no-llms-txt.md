# 0010 — No llms.txt

**Status:** Accepted · **Date:** 2026-11-03

## Context

`llms.txt` is a proposed file that summarises a site for language models. AI search
features (Google's AI Overviews and AI Mode, ChatGPT search) are a growing way to be
found, so the question is whether the site needs one.

## Decision

No `llms.txt`. Google's guidance on AI features says: "You don't need to create new
machine readable files, AI text files, or markup to appear in these features", and
"There are no additional requirements to appear in AI Overviews or AI Mode"
([AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)).
The site relies on what search already reads: indexable pages, structured data, a
sitemap, hreflang, and a `robots.txt` that lets AI search crawlers such as
OAI-SearchBot in.

## Alternatives

- **An `llms.txt` anyway.** Costs little, but is a second copy of the content that has
  to be kept in sync, for a benefit no search provider documents.

## Consequences

If a search provider starts to document a use for such a file, this is revisited.
