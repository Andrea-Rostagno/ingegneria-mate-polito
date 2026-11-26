---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["simply connected set", "aperto semplicemente connesso", "semplice connessione", "s.c.", "insieme senza buchi"]
tags: [competenza, area/analisi]
---

# Insieme semplicemente connesso

> Un aperto in cui ogni curva chiusa si può restringere con continuità a un punto senza uscire dall'insieme.

## Definizione / enunciato
Un aperto $\Omega\subset\mathbb R^n$ è **semplicemente connesso** se ogni curva chiusa $\gamma$ contenuta in $\Omega$ può essere deformata con continuità, restando in $\Omega$, fino a diventare un solo punto. Formalmente: per ogni curva chiusa $\gamma:[a,b]\to\Omega$ esiste una funzione continua $f(t,\tau)$, $(t,\tau)\in[a,b]\times[0,1]$, con $f(t,0)=\gamma(t)$ e $f(t,1)$ costante (le curve $t\mapsto f(t,\tau)$ sono quelle intermedie).

## Formule chiave
Nessuna formula: è una condizione topologica che compare come ipotesi (irrotazionale + semplicemente connesso ⇒ conservativo).

## Intuizione
Immagine dell'elastico: in un dominio con un buco una curva che gira attorno al buco non si può stringere fino a un punto. Nel piano "semplicemente connesso" equivale a "senza buchi"; in dimensione $n\ge3$ invece togliere un punto non crea problemi.

## Come si usa
Esempi della lezione:
- semplicemente connessi: cerchio, quadrato, ogni aperto convesso, $\mathbb R^2$, i semipiani; in $\mathbb R^3$ anche "un cubo meno un punto" e $\mathbb R^3\setminus\{0\}$;
- non semplicemente connessi: la corona circolare, un cerchio privato di un punto, $\mathbb R^2\setminus\{(0,0)\}$, "un cubo meno una retta".
- Attenzione: $\mathbb R^2\setminus\{0\}$ non è semplicemente connesso, ma i campi centrali sono comunque conservativi lì; la semplice connessione è sufficiente, non necessaria.

## Nei corsi
- **Analisi 2** (triennale): lezione "campi conservativi" (data sulla pagina 7/11). Fonti: `triennale/ANNO 2/analisi 2/AII 11 2022 campi conservativi.pdf` (pp. 10-14); `triennale/ANNO 2/analisi 2/AII 12 2022 campi cons e Green.pdf` (p. 11).

## Prerequisiti
- Nessuno.

## Porta a
- [[Campo irrotazionale]]: criterio irrotazionale + semplicemente connesso

## Collegati
- [[Teorema di Cauchy-Goursat]]: ipotesi di semplice connessione
- [[Campo centrale]]: R^2 senza l'origine non è semplicemente connesso, ma i campi centrali sono conservativi
