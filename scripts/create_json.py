import os
import json
import re

def sanitize_filename(filename):
    # Remove the file extension
    filename_without_extension = os.path.splitext(filename)[0]
    # Remove all non-letter and non-number characters and replace them with |
    sanitized = re.sub(r'[^a-zA-Z0-9]+', '|', filename_without_extension)
    # Ensure it doesn't start or end with |
    sanitized = sanitized.strip('|')
    return sanitized

def create_json():
    images = []
    base_path = "static/"
    for folder in os.listdir(base_path):
        folder_path = os.path.join(base_path, folder)
        if os.path.isdir(folder_path):
            for image in os.listdir(folder_path):
                image_path = os.path.join(folder_path, image)
                if os.path.isfile(image_path):
                    sanitized_image_name = sanitize_filename(image)
                    images.append({
                        "type": sanitize_filename(folder),
                        "path": f"/{folder}/{image}",
                        "text": sanitized_image_name
                    })
    
    with open("static/files.json", "w") as f:
        json.dump({"images": images}, f, indent=4)

if __name__ == "__main__":
    create_json()
