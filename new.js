const timeBox = document.getElementById("time")
const times = [];

async function fetchdata() {
    const res = await fetch(
        "https://islomapi.uz/api/present/day?region=Toshkent"
      );
      const data = await res.json();
      return data;
}

async function displayTime() {
    const prayerTime = await fetchdata();
    for (const prop in prayerTime.times) {
        times.push(prayerTime.times[prop]);
      }

    const nearestTime = findNearestTime(times)
    for (const prop in prayerTime.times) {
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        div.className = "time";
        h3.innerText = prop;
        p.innerText = prayerTime.times[prop];
        div.appendChild(h2);
        div.appendChild(p);
        timeBox.appendChild(div);
        if (nearestTime == prayerTime.times[prop]) {
          div.className = "time-box active";
        }
    }
}




function findNearestTime(times) {
    // Get the current time in minutes
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    let nearestTime = null;
    let smallestDifference = Infinity;

    // Convert each time string to minutes and find the nearest time
    times.forEach(time => {
        const [hours, minutes] = time.split(':').map(Number);
        const timeInMinutes = hours * 60 + minutes;

        const difference = Math.abs(currentMinutes - timeInMinutes);

        if (difference < smallestDifference) {
            smallestDifference = difference;
            nearestTime = time;
        }
    });

    return nearestTime;
}
