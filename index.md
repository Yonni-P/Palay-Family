# Palay Family

Welcome to our journey together! This page captures our favorite memories and milestones.

## Key Moments

### 💍 Engaged – 27 August 2020
![Engagement Photo](/images/engagement.jpeg)
Let's gooooo! (to the park 🧺😉)

### 🤵‍💍️👰 Wedding Day – 16 February 2021
![Wedding Photo](/images/wedding.jpeg)
A beautiful day surrounded by friends and family.

<script type="module">
    import { db, storage } from "./firebase-init.js";
    import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

    async function loadEvents() {
        const querySnapshot = await getDocs(collection(db, "events"));
        let eventsHTML = "";

        querySnapshot.forEach((doc) => {
            const event = doc.data();
            eventsHTML += `
                <div>
                    <h3>${event.name} - ${event.date}</h3>
                    <img src="${event.image}" width="200">
                    <p>${event.caption}</p>
                </div>
            `;
        });

        document.getElementById("timeline").innerHTML = eventsHTML;
    }

    loadEvents();
</script>

<div id="timeline">Loading events...</div>

<a href="add-event.html">
    <button style="font-size: 16px; padding: 10px; margin: 10px;">Add Event</button>
</a>


