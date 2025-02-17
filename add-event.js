import { app, db, storage } from "./firebase-init.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

document.getElementById("eventForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitButton = e.target.querySelector("button");
    submitButton.disabled = true;

    try {
        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value || "";
        const caption = document.getElementById("caption").value || "";
        const imageFile = document.getElementById("image").files[0];

        let imageUrl = "";

        if (imageFile) {
            const imageRef = ref(storage, `event-images/${Date.now()}-${imageFile.name}`);
            await uploadBytes(imageRef, imageFile);
            imageUrl = await getDownloadURL(imageRef);
        }

        await addDoc(collection(db, "events"), { name, date, image: imageUrl, caption });

        alert("Event added successfully!");
        e.target.reset();

        window.location.href = "index.html";
    } catch (error) {
        console.error("Error adding event: ", error);
        alert("Failed to add event.");
    } finally {
        submitButton.disabled = false;
    }
});
