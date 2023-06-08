---
title: "Open Position Title"
description: "Description,<br> Skills,<br> and Scope"
apps_logo: "/assets/images/solutions/professional_services.jpeg"
apps_icon: 'pe-7s-copy-file'
link: "https://www.linkedin.com/company/zcoregroup/jobs/view/open-position-id"
order: 1
tags:
---
{% assign job = site.data.jobs | where: "url", page.link | first %}
{% if job %}
    <h1>{{ job.title }}</h1>
    <p>{{ job.description | newline_to_br }}</p>
    <a href="{{ job.link }}">Apply here</a>
{% else %}
    <p>No job information available.</p>
{% endif %}
