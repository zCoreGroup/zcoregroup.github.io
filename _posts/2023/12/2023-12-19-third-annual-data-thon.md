---
author: zCore Group
categories:
  - Announcements
layout: post
post_image: /assets/images/blog/data-thon-event.jpg
tags:
  - tech
  - fsc
  - data-thon
title: "Winning the 2023 FSC Machine Learning Data-Thon"
---

##  Setting the Stage for Innovation

The Third Annual Financial Services Center (FSC) Machine Learning Data-Thon in 2023 marked a proud moment for zCore, with a strong showing from our company. Michael Bastos, our Director of Engineering and a military Veteran, led Team 3 to victory as the Team Lead. His leadership was a crucial factor in the team's success. CEO Erick Zenteno and Michael Nau, our Tech Lead in DevOps, MLOps, and DataOps, also Veterans, were there in support of the FSC challenge, demonstrating the company's commitment to the event.

Their military backgrounds contributed significantly, bringing a sense of duty, dedication, and a deep understanding of the VA's mission. This experience informed their approach to developing not just technologically advanced solutions, but those that are genuinely purpose-driven. For zCore, the Data-Thon was an opportunity to showcase our solidarity and dedication, offering meaningful solutions that resonate with the needs of fellow Veterans. The strong participation from the majority of our company highlighted our collective support and commitment to the cause.

##  The zCore Spirit

At the heart of our ethos is a deep commitment to innovation, where we utilize advanced technologies and effective team leadership to create solutions that empower Veterans. Our approach involves not just using the latest technologies (Azure Machine Learning) and data analytics (Databricks), but also ensuring that each solution we develop has a real impact on Veterans' lives.

By focusing on the needs of our end-users, we strive to make systems more user-friendly, improve communication, and provide easy access to information. This approach helps us transform the landscape of services for Veterans.

![Michael Bastos Speaking](/assets/images/blog/data-thon.jpg)

##  Preparation and Dedication

The Data-Thon served as a crucible for innovation, fostering collaboration and enhancing data analysis for VA. With a focus on VHA Supply Chain Undelivered Orders (UDOs), the event aimed to encourage participants to ideate, innovate, and learn from one another, all within the overarching theme of Predictive Modeling.

Team 3 embraced a clear principal goal: to develop an interpretable binary classification model predicting if an order would remain undelivered 60 days (about 2 months) after the estimated delivery date (EDDT). Going beyond this, the team undertook two stretch goals – predicting the number of late days for an order and offering insightful summaries elucidating the reasons for expected lateness using the available data.

Leveraging Azure Databricks, Python, and SQL, the team embarked on the journey of data exploration, cleanup, and transformation. The choice of Light GBM for modeling was deliberate – its explainability and scalability perfectly aligned with the team's commitment to delivering results that could be understood and implemented seamlessly within the VA's operations.

![Team 3 Lead](/assets/images/blog/data-thon-team-3.jpg)

**Steps Taken:**

**Data Exploration:** Meticulously explored the provided data using a combination of SQL and Python, analyzing each column, conducting data profiling, and ensuring a comprehensive understanding of the dataset.

**Data Cleanup:** Recognizing the importance of data quality, the team performed cleanup tasks, addressing issues such as duplicates, null values, and validating date formats.

**Transform and Vectorize:** The data was transformed and vectorized to ensure compatibility with the modeling process, setting the stage for the creation of a final data frame for test execution.

**Modeling with LightGBM:** The team chose the Light Gradient Boosting Machine (LightGBM) for its modeling phase, emphasizing its explainability and scalability. This choice facilitated an interpretable binary classification model, aligning with the overarching goal.

**Validation and Evaluation:** The final model underwent rigorous validation, computing end results, and assessing metrics using the predictive test set. Plots, graphs, and accuracy scores were generated with the LightGBM Library.

##  Showcasing Veteran-Centric Solutions

The resulting outcome is not merely a solution, but a versatile toolset poised to bring tangible benefits to the VA.

![Team 3](/assets/images/blog/data-thon-winners.jpg)

1. **API Integration for Decision Tree Insights:** The Decision Tree-based model is not a static achievement confined to competition metrics. Instead, it emerges as a dynamic resource that can be seamlessly integrated into the VA's operations. The team envisioned the model serving as an API, allowing for the exportation of decision trees to Python tables. This functionality ensures that decision-makers within the VA can access and leverage the insights derived from the model in a manner that aligns with their existing workflows.

2. **ETL for Visualization Tools:** The clean and transformed data served a dual purpose. Beyond the modeling phase, this data became a valuable Extract, Transform, Load (ETL) resource. It fed into visualization tools such as Power BI and Tableau, providing a visual narrative of predictive analytics. This not only enhanced the interpretability of results but also empowered VA stakeholders to make informed decisions based on rich, accessible insights.

3. **Station, VISN, CPAC Deployment:** The final data, refined through meticulous exploration and modeling, is not a one-size-fits-all solution. Instead, it becomes a dynamic asset that can be deployed across Stations, Veterans Integrated Service Networks (VISNs), and Consolidated Patient Account Centers (CPACs). This widespread deployment facilitates predictions of on-time, late, or undelivered orders based on a 90-day policy. The granularity of this application ensures that solutions resonate with the specific operational contexts of different VA entities.

4. **Vendor Performance Analysis:** Beyond predicting order outcomes, the solution opens the door to a deeper understanding of vendor performance. The data-driven approach allows the VA to identify vendors consistently falling behind on delivery commitments. Armed with this insight, the VA can take targeted steps to address issues, foster better collaboration, or explore alternative partnerships. This proactive stance ensures a continuous improvement loop in the supply chain ecosystem.

##  The Winning Moment

![Data-thon Certificate](/assets/images/blog/data-thon-certificate.jpg)

The victory of Team 3 in the Data-Thon was more than just a win; it underscored our commitment to innovative and mission-driven solutions. The team's approach, which combines a deep understanding of VA data and technical environments with a focus on real-world applications, proved effective in meeting and surpassing the challenges of the competition. At zCore, we are dedicated to continuously pushing the boundaries in Machine Learning within the VA, aiming to develop transformative solutions that directly benefit Veterans. This commitment is not just about technology; it's about honoring and supporting those who have served our nation, with every solution we create.
