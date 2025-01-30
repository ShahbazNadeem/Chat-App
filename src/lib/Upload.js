const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dg7uqpwvo/upload";
const UPLOAD_PRESET = "user_img";

export const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
        const res = await fetch(CLOUDINARY_URL, {
            method: "POST",
            body: formData,
        });
        const data = await res.json();
        return data.secure_url; // Cloudinary returns a direct image URL
    } catch (error) {
        console.error("Image upload failed", error);
        return null;
    }
};