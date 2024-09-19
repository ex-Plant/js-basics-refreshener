# Change directory
- cd /path/to/directory

# Navigate next level
- cd .. 

# Navigate to HOME DIR

- cd ~

# Navigate to previous DIR

- cd -

# Navigate to ROOT DIR

- cd /

# List the dir content

- ls

# You can combine commands 

-  cd .. && ls- 

# Rename a file or directory
- mv oldFileName NewFileName



# Relative vs. Absolute Paths
# Absolute Path:
- Specifies the full path from the root of the file system.
- cd /Users/username/projects

# Relative Path:
- Relative Path: Specifies the path relative to the current working directo
- cd projects/new_project



# Create a directory named "newdir" in the current directory
mkdir newdir

# Create a directory named "subdir" inside "newdir"
mkdir newdir/subdir


# Create a file named "file.txt" in the current directory
touch file.txt

# Create a file named "file.txt" inside "newdir"
touch newdir

- pwd - print current dir

# REMOVE a file
- rm path/to/file

# REMOVE an empty directory

- rmdir path/to/dir

# REMOVE NOT EMPTY directory (recursive)
"recurse" or "recursive" means that the operation should be applied to all files and subdirectories within a directory

- rmdir -r path/to/dir
