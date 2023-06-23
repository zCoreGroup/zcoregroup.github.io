import os
import frontmatter

# Directory containing the markdown files to be updated. This concept can be extended to any files in the repo that use frontmatter and need to be updated.
dir_path = "_posts"

# Iterate over all files in the directory
for filename in os.listdir(dir_path):
    if filename.endswith(".md"):
        filepath = os.path.join(dir_path, filename)

        # Then load the file to be read
        with open(filepath, 'r', encoding='utf8') as f:
            post = frontmatter.load(f)

        # Then this update tags and categories to use the correct format
        if 'tags' in post.keys():
            if isinstance(post['tags'], str):
                post['tags'] = [tag.strip() for tag in post['tags'].split(',')]
        if 'categories' in post.keys():
            if isinstance(post['categories'], str):
                post['categories'] = [category.strip()
                                      for category in post['categories'].split(',')]

        # Writes the file back to the disk / directory
        with open(filepath, 'w', encoding='utf8') as f:
            f.write(frontmatter.dumps(post))
# Path: frontmatterizer.py ends
# To run this script, run the following command in the terminal:
# $ python frontmatterizer.py
