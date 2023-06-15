===============================================================================

      ___  ____ ____ ____ ____          ____ ____ ____ _  _ ___
        /  |    |  | |__/ |___          | __ |__/ |  | |  | |__]
       /__ |___ |__| |  \ |___          |__] |  \ |__| |__| |

            ___  _    ____ ____ ___  _ _  _ ____          ____ ___  ____ ____
            |__] |    |___ |___ |  \ | |\ | | __          |___ |  \ | __ |___
            |__] |___ |___ |___ |__/ | | \| |__]          |___ |__/ |__] |___

                                    ____ ____ ____ ___ _ _ _ ____ ____ ____
                                    [__  |  | |___  |  | | | |__| |__/ |___
                                    ___] |__| |     |  |_|_| |  | |  \ |___

===============================================================================
### © Copyright 2023 [zCore Group](https://zcoregroup.com)

### zCore Group Website Repository
This repo contains the source code for the zCore Group website for the migration from v1 to v2.
### Description
This is the source code for the zCore Group website. It is a static website built with [Jekyll](https://jekyllrb.com/). The website is hosted on [GitHub Pages](https://pages.github.com/) until the migration to the legacy host GoDaddy is complete.
### Table of Contents
1. Understanding Jekyll
2. Directory Structure
    - 2.1 _about
    - 2.2 _action
    - 2.3 _careers
    - 2.4 _contact
    - 2.5 _counter
    - 2.6 _data
    - 2.7 _delivery
    - 2.8 _includes
    - 2.9 _layouts
    - 2.10 _posts
    - 2.11 _services
    - 2.12 _site
    - 2.13 _team
3. YAML files
    - 3.1 _config.yml
    - 3.2 navigation.yml
4. Workflows
    - 4.1 GitHub Actions
        - 4.1.1 CI.yml
        - 4.1.2 jekyll.yml
        - 4.1.3 dependabot.yml

==========================================================================
1. Understanding Jekyll
Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website. You can tweak how you want the site URLs to look, what data gets displayed on the site, and more.
To add a new page to the site, all you need to do is create a markdown file in the root directory. For example, to create a new page at https://zcoregroup.com/about, create a file named about.md and add the following content:
---
layout: page
title: About
permalink: /about/
---
This will create a page that uses the layout found in _layouts/page.html and sets the title of the page to About. The permalink is the URL of the page. The page will be accessible at https://zcoregroup.com/about.

2. Directory Structure
- 2.1 _about - Contains the about page content (about-us.md, years-experience.md).
- 2.2 _action - Contains the action page content (call-to-action.md).
- 2.3 _careers - Contains the careers page content (open-position-1 -- open-position-6.md). These files are used to generate the open positions on the careers page.
- 2.4 _contact - Contains the contact page content (phone.md, email.md, offices.md, contact-us.md). These files are used to generate the contact cards on the contact page.
- 2.5 _counter - Contains the counter page content (counter-1 -- counter-4.md). These files serve text into the counter animation that is handled by the counter.js script.
