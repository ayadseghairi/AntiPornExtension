async function getRandomAyah() {
    try {
        let response = await fetch("https://api.alquran.cloud/v1/ayah/random/ar.alafasy");
        let data = await response.json();

        let ayahText = data.data.text;
        let surah = data.data.surah.name;
        let ayahNumber = data.data.numberInSurah;
        let audioUrl = data.data.audio;

        document.getElementById("ayah").innerText = `${ayahText} \n [${surah} - ${ayahNumber}]`;

        let audioPlayer = document.getElementById("audio");
        audioPlayer.src = audioUrl;

        // محاولة تشغيل الصوت تلقائيًا
        audioPlayer.play().catch(error => {
            console.log("يجب على المستخدم التفاعل لتشغيل الصوت تلقائيًا", error);
        });
    } catch (error) {
        document.getElementById("ayah").innerText = "⚠️ حدث خطأ أثناء تحميل الآية!";
    }
}

// تنفيذ الكود عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", getRandomAyah);
