/*Un  nombre premier est divisible uniquement par : 1 et lui-même*/

var N = parseInt(prompt("entrez un nombre"))

for (i = 2; i < N; i++) {
    if (N % i == 0) {
        alert(N + "n'est pas un nombre premier");
    }
    else {
        alert(N + "est un nombre premier");
    }
}