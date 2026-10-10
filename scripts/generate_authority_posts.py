# -*- coding: utf-8 -*-
"""
Authority Blog Posts Generator for salihmaral.com
Generates 15 in-depth, non-commodity, strategic pillar guides in Turkish (TR) and English (EN).
Strictly adheres to:
- UTF-8 encoding (no LaTeX escaping)
- 45-60 chars Title, 120-160 chars Meta Description
- Princeton GEO direct answer in lead paragraph
- E-E-A-T: Salih Maral, Official Google Partner, 17+ years experience
- Detailed technical comparison tables
- Step-by-step actionable guides & FAQ
"""

import os
import sys

POSTS_DIR = os.path.join(os.path.dirname(__file__), "..", "content", "blog")

posts_data = []

def add_post(slug, category, date, read_time, cover_image,
             title_tr, excerpt_tr, content_tr,
             title_en, excerpt_en, content_en):
    posts_data.append({
        "slug": slug,
        "category": category,
        "date": date,
        "readTime": read_time,
        "coverImage": cover_image,
        "tr": {
            "title": title_tr,
            "excerpt": excerpt_tr,
            "content": content_tr
        },
        "en": {
            "title": title_en,
            "excerpt": excerpt_en,
            "content": content_en
        }
    })

print("Generator module initialized.")
