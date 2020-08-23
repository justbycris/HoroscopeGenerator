function zodiac() {
    var name = document.getElementById("user").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var error = "Error. Please enter a valid date.";


    if (day >= 32 || day === 0) {
        return document.getElementById("yoursign").innerHTML = error;

    } else if (month === 'january' && day >= 20 || month === 'february' && day <= 18) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Aquarius!`);

    } else if (month === 'february' && day >= 19 || month === 'march' && day <= 20) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Pisces!`);

    } else if (month === 'march' && day >= 21 || month === 'april' && day <= 19) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is an Aries!`);

    } else if (month === 'april' && day >= 20 || month === 'may' && day <= 20) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Taurus!`);

    } else if (month === 'may' && day >= 21 || month === 'june' && day <= 20) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Gemini!`);

    } else if (month === 'june' && day >= 21 || month === 'july' && day <= 22) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Cancer!`);

    } else if (month === 'july' && day >= 23 || month === 'august' && day <= 22) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Leo!`);

    } else if (month === 'august' && day >= 23 || month === 'september' && day <= 23) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Virgo!`);

    } else if (month === 'september' && day >= 24 || month === 'october' && day <= 22) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Libra!`);

    } else if (month === 'october' && day >= 23 || month === 'november' && day <= 21) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Scorpio!`);

    } else if (month === 'november' && day >= 22 || month === 'december' && day <= 19) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Sagittarius`);

    } else(month === 'december' && day >= 20 || month === 'january' && day <= 19); {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Capricorn!`);

    }
}