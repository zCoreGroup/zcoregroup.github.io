# CLAUDE.md - zCoreGroup Jekyll Website

## Build Commands
- `bundle install` - Install dependencies
- `bundle exec jekyll build` - Build site
- `bundle exec jekyll serve` - Run local development server
- `bundle exec jekyll serve --livereload` - Run with live reload
- `bundle exec jekyll build --baseurl "/subfolder"` - Build with base URL

## Content Guidelines
- Use Markdown with YAML frontmatter for all content files
- Follow Jekyll collection organization (_about, _services, etc.)
- Image assets should be placed in /assets/images in appropriate subdirectories
- Blog posts follow YYYY-MM-DD-title-slug.md format in _posts directory

## Style & Structure
- Maintain consistent HTML structure in _includes and _layouts directories
- Follow existing naming conventions for files and collections
- All pages should have appropriate frontmatter (layout, title, permalink)
- Use relative URLs for internal links with site.baseurl prefix

## Deployment
- Main branch pushes automatically deploy to GitHub Pages
- CI/CD handled through .github/workflows/jekyll.yml
- Production builds use JEKYLL_ENV=production