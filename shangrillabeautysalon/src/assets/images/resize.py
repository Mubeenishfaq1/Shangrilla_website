from PIL import Image
import os

def resize_images(directory):
    # Ensure the directory exists
    if not os.path.exists(directory):
        print(f"Directory '{directory}' does not exist.")
        return

    # Create a directory for resized images
    resized_dir = os.path.join(directory, "resized")
    os.makedirs(resized_dir, exist_ok=True)

    # Iterate over all files in the directory
    for filename in os.listdir(directory):
        filepath = os.path.join(directory, filename)

        # Skip directories
        if not os.path.isfile(filepath):
            continue

        try:
            # Open the image
            with Image.open(filepath) as img:
                width, height = img.size

                # Check if the image exceeds 1500 pixels in width or height
                if width > 1500 or height > 1500:
                    # Calculate the new size (60% of the original size)
                    new_size = (int(width * 0.8), int(height * 0.8))

                    # Resize the image
                    # resized_img = img.resize(new_size, Image.ANTIALIAS)
                    resized_img = img.resize(new_size, resample=Image.Resampling.LANCZOS)


                    # Save the resized image in the "resized" directory
                    resized_img.save(os.path.join(resized_dir, filename))

                    print(f"Resized '{filename}' to {new_size}.")
                else:
                    print(f"'{filename}' does not exceed 1500 pixels. Skipping.")

        except Exception as e:
            print(f"Error processing '{filename}': {e}")

# Replace 'your_directory_path' with the path to the folder containing your images
resize_images('.')
