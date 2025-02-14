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
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
    import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

    const firebaseConfig = {
      apiKey: "AIzaSyCw9yMDHMnUXsrB6WW2rumAI-qFZINJCtU",
      authDomain: "palay-family.firebaseapp.com",
      projectId: "palay-family",
      storageBucket: "palay-family.firebasestorage.app",
      messagingSenderId: "237207501947",
      appId: "1:237207501947:web:617fa5617b1834eadaf6de"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    console.log(firebase.SDK_VERSION);

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


