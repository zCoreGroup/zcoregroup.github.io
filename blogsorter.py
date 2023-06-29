import os
import shutil

# define the root directory
root_dir = '.'

# define the source directory
source_dir = os.path.join(root_dir, '_posts')

# loop through all files in the source directory
for filename in os.listdir(source_dir):
    # ensure we're working with files not directories
    if os.path.isfile(os.path.join(source_dir, filename)):
        # parse out the year and month from the filename
        year, month, *_ = filename.split('-')

        # define the destination directory
        destination_dir = os.path.join(root_dir, year, month)

        # ensure the destination directory exists
        os.makedirs(destination_dir, exist_ok=True)

        # define the source file path
        source_file = os.path.join(source_dir, filename)

        # define the destination file path
        destination_file = os.path.join(destination_dir, filename)

        # move the file
        shutil.move(source_file, destination_file)

print("Sorting completed.")
