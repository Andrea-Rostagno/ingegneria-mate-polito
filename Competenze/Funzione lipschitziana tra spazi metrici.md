---
tipo: competenza
area: analisi
corsi: [Analisi funzionale, Istituzioni topologia]
livello: [triennale]
aliases: ["Lipschitz function between metric spaces", "L-lipschitziana", "lipschitziana di costante L", "funzione bilipschitziana", "bi-Lipschitz map", "costante di Lipschitz"]
tags: [competenza, area/analisi]
---

# Funzione lipschitziana tra spazi metrici

> Una funzione che aumenta le distanze al più di un fattore costante $L$: è la forma più forte e più comoda di continuità, ed è esattamente ciò che sono gli operatori lineari limitati.

## Definizione / enunciato
Siano $(M,d_M)$, $(N,d_N)$ spazi metrici e $L\ge0$. $f:M\to N$ è **$L$-lipschitziana** se
$$d_N(f(x),f(x'))\le L\,d_M(x,x')\qquad\forall x,x'\in M.$$
$f$ è lipschitziana se lo è per qualche $L$; è **bilipschitziana** se è lipschitziana con inversa lipschitziana.

## Formule chiave
$$f\ L\text{-lipschitziana}\ \Longrightarrow\ f\ \text{uniformemente continua}\quad(\text{dato }\epsilon,\ \delta=\epsilon/L)$$
Esempi su $\mathbb R$ (Es. 2.35): $\sqrt t$ su $[0,1]$ è uniformemente continua ma non lipschitziana; $t\mapsto t$ è 1-lipschitziana; $t\mapsto t^2$ su $\mathbb R$ è continua ma non uniformemente continua.
In uno spazio normato la norma è 1-lipschitziana: $\big|\|x\|-\|y\|\big|\le\|x-y\|$.

## Intuizione
Lipschitz $\Rightarrow$ uniformemente continua $\Rightarrow$ continua, e nessuna implicazione si inverte. Per le mappe lineari tra spazi normati però le tre nozioni coincidono con la limitatezza.

## Come si usa
- Un operatore lineare $T$ è limitato se e solo se è lipschitziano, e allora è $\|T\|_{op}$-lipschitziano.
- Due norme sono equivalenti se e solo se l'identità è bilipschitziana.
- La proiezione ortogonale $P_Y$ in uno spazio di Hilbert è lineare e 1-lipschitziana.

## Nei corsi
- **Analisi funzionale** (triennale): Def. 2.33 ed Es. 2.35 (§2.5), Prop. 4.6 (norma 1-lipschitziana), Prop. 4.10, Prop. 7.6. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 20, 30, 32, 90); `triennale/ANNO 3/analisi funzionale/02_spazimetrici_handout.pdf` (p. 18).

- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): definita per $f:X\to X$ con costante $C\ge0$. L'estremo inferiore delle costanti è la "costante di Lipschitz", e per $C<1$ $f$ è una contrazione (Def. 1.35). Una funzione lipschitziana è continua con $\delta=\epsilon/C$ (Prop. 1.36). Serve al teorema del punto fisso. Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (p. 11); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (Prop. 5.25: ogni mappa lipschitziana è uniformemente continua).

## Prerequisiti
- [[Spazio metrico]]: distanze nel dominio e nel codominio

## Porta a
- [[Teorema del punto fisso di Banach]]: le contrazioni sono lipschitziane con costante minore di 1 (Istituzioni topologia)
- [[Operatore lineare limitato]]: limitato equivale a lipschitziano
- [[Norme equivalenti]]: identità bilipschitziana

## Collegati
- [[Teorema di Heine-Cantor]]: altra via alla continuità uniforme
- [[Omeomorfismo]]: una biiezione bilipschitziana è un omeomorfismo
- [[Stabilità dei punti di equilibrio]]: le contrazioni sono lipschitziane con L<1
- [[Teorema di esistenza e unicità locale]]: condizione di Lipschitz per le EDO
