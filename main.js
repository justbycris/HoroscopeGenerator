function zodiac() {
    var name = document.getElementById("user").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var error = "Error. Please enter a valid date.";


    if (month === 'january' && day >= 20 || month === 'february' && day <= 18) {
        return (
            document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Aquarius.`,
            document.getElementById('yoursign-description').innerHTML = `Aquarius-born are shy and quiet , but on the other hand they can be eccentric 
            and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see 
            without prejudice, on both sides, which makes them people who can easily solve problems.Although they can easily adapt to the energy that 
            surrounds them, Aquarius-born have a deep need to be some time alone and away from everything, in order to restore power. People born 
            under the Aquarius sign, look at the world as a place full of possibilities.`);

    } else if (month === 'february' && day >= 19 || month === 'march' && day <= 20) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Pisces.`,
            document.getElementById('yoursign-description').innerHTML = `Pisces personalities are known for being one of the most empathetic of the 
                zodiac signs, and they'll do whatever they can to make sure the people around them are happy. They're also artistic and use their vivid 
                imaginations to think up ideas many others wouldn't. These kind souls can also be moody though when things aren't going their way, and 
                their generous nature makes them easily taken advantage of by less selfless types. Pisces can even become emotionally closed off if they've 
                been hurt too often. In general though, Pisces are compassionate, thoughtful, and well attuned to their emotions and the emotions of those around them.`);

    } else if (month === 'march' && day >= 21 || month === 'april' && day <= 19) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is an Aries.`,
            document.getElementById('yoursign-description').innerHTML = `Aries is the first sign of the zodiac, and that’s pretty much how those born 
                under this sign see themselves: first. Aries are the leaders of the pack, first in line to get things going. Whether or not everything gets 
                done is another question altogether, for an Aries prefers to initiate rather than to complete. Do you have a project needing a kick-start? 
                Call an Aries, by all means. The leadership displayed by Aries is most impressive, so don’t be surprised if they can rally the troops against 
                seemingly insurmountable odds—they have that kind of personal magnetism.`);

    } else if (month === 'april' && day >= 20 || month === 'may' && day <= 20) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Taurus.`,
            document.getElementById('yoursign-description').innerHTML = `Smart, ambitious, and trustworthy, Taurus is the anchor of the Zodiac. Amazing friends, 
                colleagues, and partners, Taureans value honesty above all else and are proud that their personal relationships tend to be drama free. Bulls get the 
                reputation of being stubborn, but they're not always stuck in their ways. This searching sign is willing to see another point of view, but they won't 
                flip-flop on an opinion just to make someone else happy. They will shift their thinking only if they truly have a change of heart.`);

    } else if (month === 'may' && day >= 21 || month === 'june' && day <= 20) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Gemini.`,
            document.getElementById('yoursign-description').innerHTML = `Smart, passionate, and dynamic, Gemini is characterized by the Twins, Castor and Pollux,
                and is known for having two different sides they can display to the world. Expert communicators, Gemini is the chameleon of the Zodiac, adept at blending 
                into different groups based on the vibe and energy they perceive. While they're also amazing at showcasing surface traits, the Gemini well runs deep, which 
                is why the Twins are one of the Zodiac's most emotionally intelligent signs.`);

    } else if (month === 'june' && day >= 21 || month === 'july' && day <= 22) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Cancer.`,
            document.getElementById('yoursign-description').innerHTML = `Emotional, intuitive, and practically psychic; ruled by the moon and characterized 
                by the crab, Cancer has so much going on in its watery depths. Cancers may seem prickly and standoffish at first meeting, once they make the decision 
                to become friends with someone, that person has a friend for life.`);

    } else if (month === 'july' && day >= 23 || month === 'august' && day <= 22) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Leo.`,
            document.getElementById('yoursign-description').innerHTML = `Bold, intelligent, warm, and courageous, fire sign Leo is a natural leader of the Zodiac, 
                ready to blaze a trail, vanquish injustice, and make a name for themselves along the way. Blessed with high self-esteem, Lions know that they possess 
                enviable traits—and they're proud of them. They don't believe in false modesty and will be the first to praise themselves for a job well done. But Leo 
                isn't self-aggrandizing or unwilling to roll up those sleeves and do the work: this sign knows that in order to be respected and admired, he or she needs 
                to put in the effort worthy of a leader.`);

    } else if (month === 'august' && day >= 23 || month === 'september' && day <= 23) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Virgo.`,
            document.getElementById('yoursign-description').innerHTML = `Smart, sophisticated, and kind, Virgo gets the job done without complaining. Virgos are amazing 
                friends, always there to lend a hand and also lend advice. Practical Virgos are incredibly adept at big picture thinking, and planning out their life, their 
                vacations, and what they're going to do today isn't a drag it makes them feel in control and secure.`);

    } else if (month === 'september' && day >= 24 || month === 'october' && day <= 22) {
        return (
            document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Libra.`,
            document.getElementById('yoursign-description').innerHTML = `People born under the sign of Libra are peaceful, fair, and they hate being alone. 
            Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves. These individuals are 
            fascinated by balance and symmetry, they are in a constant chase for justice and equality, realizing through life that the only thing that should 
            be truly important to themselves in their own inner core of personality. This is someone ready to do nearly anything to avoid conflict, keeping 
            the peace whenever possible.`);

    } else if (month === 'october' && day >= 23 || month === 'november' && day <= 21) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Scorpio.`,
            document.getElementById('yoursign-description').innerHTML = `Passionate, independent, and unafraid to blaze their own trail no matter what others 
                think, Scorpios make a statement wherever they go. They love debates, aren't afraid of controversy, and won't back down from a debate. They also 
                hate people who aren't genuine, and are all about being authentic—even if authentic isn't pretty.`);

    } else if (month === 'november' && day >= 22 || month === 'december' && day <= 19) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Sagittarius.`,
            document.getElementById('yoursign-description').innerHTML = `Independent and strong-willed, Sagittarius personalities are all about going off the 
                beaten path. Sagittarius isn’t afraid to step away from the pack, and is a natural born leader who goes after what he or she wants, regardless of what 
                other people think. Sagittarius is a born adventurer, and loves solo travel and exploration. Sagittarius also loves exploring the inner workings of their 
                minds, and love stretching their horizons through a good book or movie.`);

    } else if (month === 'december' && day >= 20 || month === 'january' && day <= 19) {
        return (document.getElementById('yoursign').innerHTML = `Hey ${name}, your astrology sign is Capricorn.`,
            document.getElementById('yoursign').innerHTML = `Smart, hardworking, and fully in control of their destiny, a Capricorn will always get what they set 
                their mind to, in both personal and professional life—no excuses. Capricorns may get a reputation as stubborn, but they simply know what they want, and also 
                know how they wish other people would behave.`);

    } else(day >= 32 || day == 0); {
        return document.getElementById("yoursign").innerHTML = error;
    }
}
