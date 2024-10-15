/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

/** Íslenskir samhljóðar */
const VOWELS = "aeiouyáéýúíóöæ".split("");

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)) {
    longestWord = "";
    for (const word of split(str)) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  return null;
}
console.assert(
  longest("vertu sæll og blessaður") === "blessaður",
  "longest: skilar lengsta orði í streng"
);
console.assert(
  longest(false) === null,
  "longest: ef ekki strengur, þá skila null"
);
console.assert(
  longest("") === "",
  "longest: ef tómur strengur, þá skila tómum streng"
);

function shortest(str) {
  if (isString(str)) {
    let shortestWord = "";
    for (const word of split(str)) {
      if (shortestWord === "" || word.length < shortestWord.length) {
        shortestWord = word;
      }
    }
    return shortestWord;
  }
  return null;
}
console.assert(
  shortest("vertu sæll og blessaður") === "og",
  "shortest: skilar stysta orði í streng"
);
console.assert(
  shortest(false) === null,
  "shortest: ef ekki strengur, þá skila null"
);
console.assert(
  shortest("") === "",
  "shortest: ef tómur strengur, þá skila tómum streng"
);

function reverse(str) {
  if (isString(str)) {
    const split = str.split("");
    const reversed = split.reverse();

    return reversed.join("");
  }
  return null;
}
console.assert(
  reverse("hallo") === "ollah",
  "reverse: snýr við einföldum streng"
);
console.assert(
  reverse(false) === null,
  "reverse: ef ekki strengur, þá skila null"
);

function palindrome(str) {
  if (isString(str) && str != "") {
    return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
  }
  return false;
}
console.assert(
  palindrome("raksápupáskar") === true,
  "palindrome: skilar true ef strengur er samhverfur"
);
console.assert(
  palindrome("haH") === true,
  "palindrome: skilar true ef strengur er samhverfur, óháð stærð stafa"
);
console.assert(
  palindrome("eitthvað") === false,
  "palindrome: skilar false ef strengur er ekki samhverfur"
);
console.assert(
  palindrome(false) === false,
  "palindrome: ef ekki strengur, þá skila false"
);
console.assert(
  palindrome("") === false,
  "palindrome: ef tómur strengur, þá skila false"
);

function vowels(str) {
  count = 0;
  if (isString(str)) {
    const split = str.toLowerCase().split("");

    for (const char of split) {
      if (VOWELS.includes(char)) {
        count++;
      }
    }
  }
  return count;
}
console.assert(
  vowels("lambAkótilettur") === 6,
  "vowles: skilar fjölda sérhljóða í streng, óháð stærð stafa"
);
console.assert(vowels(false) === 0, "vowles: ef ekki strengur, þá skila 0");
console.assert(vowels("") === 0, "vowles: ef tómur strengur, þá skila 0");

function consonants(str) {
  count = 0;
  if (isString(str)) {
    const split = str.toLowerCase().split("");

    for (const char of split) {
      if (CONSONANTS.includes(char)) {
        count++;
      }
    }
  }
  return count;
}
console.assert(
  consonants("Lambakótilettur") === 9,
  "consonants: skilar fjölda samhljóða í streng, óháð stærð stafa"
);
console.assert(
  consonants(false) === 0,
  "consonants: ef ekki strengur, þá skila 0"
);
console.assert(
  consonants("") === 0,
  "consonants: ef tómur strengur, þá skila 0"
);

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert(
    "Sláðu inn streng með nokkrum orðum til að fá upplýsingar um:\n-Lengsta orðið.\n-Stysta orðið.\n-Strenginn snúið við.\n-Fjölda sérhljóða í streng.\n-Fjölda samhljóða í streng.\n-Hvort strengurinn sé samhverfur."
  );
  while (true) {
    let input = null;
    while (true) {
      input = prompt("Sláðu inn streng með nokkrum orðum");
      if (input === null) {
        const aftur = confirm("Viltu prófa aftur?");
        if (aftur) {
          continue;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    let samhverfur = "ekki samhverfur";
    if (palindrome(input)) {
      samhverfur = "samhverfur";
    }
    alert(
      "Lengsta orðið er: " +
        longest(input) +
        "\nStysta orðið er: " +
        shortest(input) +
        "\nStrengurinn snúinn við: " +
        reverse(input) +
        "\nFjöldi sérhljóða í streng: " +
        vowels(input) +
        "\nFjöldi samhljóða í streng: " +
        consonants(input) +
        "\nStrengurinn er " +
        samhverfur +
        "."
    );
    const aftur = confirm("Viltu prófa aftur?");
    if (!aftur) {
      break;
    }
  }
}
