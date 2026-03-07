const btnSearch = document.querySelector("#btnSearch");
const searchInp = document.querySelector("#searchInp");
const cityName = document.querySelector("#cityName");
const currentDate = document.querySelector("#currentDate");
const icon = document.querySelector("#weatherIcon");

let today = new Date();
let options = { year: "numeric", month: "long", day: "numeric" };
let formattedDate = today.toLocaleDateString("en-US", options);

let getInpValue = () => {
    if (searchInp.value !== "") {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInp.value}&appid=3adc9743c9d3f0086af833159edfd64a&units=metric`)
            .then(res => res.json())
            .then(data => {
                if (data.cod !== 200) { alert("City Not Found ❌"); return; }

                let condition = data.weather[0].main.toLowerCase();

                gsap.to("body", {
                    opacity: 0.3,
                    duration: 0.2,
                    onComplete: () => {
                        document.body.className = "";

                        if (condition.includes("clear")) {
                            document.body.classList.add("sunny");
                            icon.innerHTML = `<img src="image/sun.png" width="120px">`;
                        }
                        else if (condition.includes("thunder")) {
                            document.body.classList.add("thunder");
                            icon.innerHTML = `<img src="image/thundCloud.png" width="120px">`;
                        }
                        else if (condition.includes("cloud")) {
                            document.body.classList.add("cloudy");
                            icon.innerHTML = `<img src="image/Sun-And-Cloud.png" width="120px">`;
                        }
                        else {
                            icon.innerHTML = "🌤️"; /* default icon */
                        }

                        gsap.to("body", { opacity: 1, duration: 0.3 });
                    }
                });

                cityName.innerHTML = data.name.toUpperCase();
                currentDate.innerText = formattedDate;
                document.querySelector(".temperature").innerHTML = `${Math.round(data.main.temp)}°`;
                document.querySelector(".condition").innerHTML = data.weather[0].description;
                document.querySelector("#Humidity").innerHTML = `${data.main.humidity}%`;
                document.querySelector("#wind").innerHTML = (data.wind.speed * 3.6).toFixed(1);

                gsap.fromTo(".temperature", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" });
                gsap.fromTo("#weatherIcon", { rotation: -180, scale: 0 }, { rotation: 0, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.6)" });
                gsap.from(".detail-box", { y: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" });
            })
            .catch(() => alert("Not Found ❌"));
    } else { alert("City Not Found ❌"); }

    searchInp.value = "";
};

btnSearch.addEventListener("click", () => {
    gsap.fromTo(btnSearch, { scale: 1 }, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
    getInpValue();
});

searchInp.addEventListener("keypress", (e) => { if (e.key === "Enter") getInpValue(); });

window.onload = () => { searchInp.value = "surat"; getInpValue(); };

gsap.from(".weather-card", { y: 80, opacity: 0, duration: 1.2, ease: "power4.out" });