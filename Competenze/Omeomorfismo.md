---
tipo: competenza
area: analisi
corsi: [Analisi funzionale, Istituzioni topologia]
livello: [triennale]
aliases: ["homeomorphism", "omeomorfismi", "funzione bicontinua", "invariante topologico", "continuità e aperti", "spazi omeomorfi", "proiezione stereografica", "stereographic projection", "isometria tra spazi metrici"]
tags: [competenza, area/analisi]
---

# Omeomorfismo

> Una funzione continua e invertibile con inversa continua: identifica due spazi dal punto di vista topologico (aperti, chiusi, compatti, convergenza).

## Definizione / enunciato
Siano $(M,d_M)$, $(N,d_N)$ spazi metrici. $f:M\to N$ è un **omeomorfismo** se è continua, invertibile e $f^{-1}:N\to M$ è continua.
Caratterizzazioni della continuità (Prop. 2.28-2.29): sono equivalenti
1. $f$ continua;
2. $f^{-1}(A)$ aperto in $M$ per ogni aperto $A$ di $N$;
3. $f^{-1}(C)$ chiuso per ogni chiuso $C$;
e $f$ è continua in $x$ se e solo se $x_n\to x\Rightarrow f(x_n)\to f(x)$.

## Formule chiave
$$\forall x\in M\ \forall\epsilon>0\ \exists\delta>0\ \forall x'\in M:\ d_M(x,x')<\delta\Rightarrow d_N(f(x),f(x'))<\epsilon\quad(\text{continuità di }f),$$
e la stessa condizione per $f^{-1}$. Se $\|\cdot\|$ e $\|\cdot\|'$ sono norme equivalenti, $\mathrm{id}_X:(X,\|\cdot\|)\to(X,\|\cdot\|')$ è bilipschitziana, dunque un omeomorfismo.

## Intuizione
Un omeomorfismo può deformare le distanze ma non "strappare" né "incollare": per questo conserva tutte le proprietà definite tramite aperti (convergenza, continuità, compattezza, densità), che si chiamano invarianti topologici.

## Come si usa
- Norme equivalenti danno la stessa topologia: si può scegliere la norma più comoda senza cambiare convergenze e compatti (Cor. 4.11).
- Nella dimostrazione della completezza della base dei coseni in $L^2(0,\pi)$ si usa che $\arccos:[-1,1]\to[0,\pi]$ è un omeomorfismo, così $f\in C[0,\pi]$ diventa $f\circ\arccos\in C[-1,1]$, a cui si applica Stone-Weierstrass (Prop. 6.51).
- Attenzione: un omeomorfismo non conserva la completezza né la limitatezza (proprietà metriche, non topologiche).

## Nei corsi
- **Analisi funzionale** (triennale): Def. 2.27(d), Prop. 2.28-2.29 (§2.5); usato in Cor. 4.11 e nella Prop. 6.51. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 19, 32-33, 84-86); `triennale/ANNO 3/analisi funzionale/02_spazimetrici_handout.pdf` (pp. 16-17).
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): definizione per spazi topologici qualsiasi (Def. 3.2). L'omeomorfismo è una relazione di equivalenza fra spazi (Prop. 3.13). **Teor. 3.18:** $f$ è un omeomorfismo se e solo se è biunivoca, continua e aperta (o chiusa). Ogni isometria è un omeomorfismo (Prop. 1.18). Esempi (Es. 3.19): gli intervalli aperti e le semirette sono omeomorfi a $\mathbb R$ (tramite $\arctan$ ed $e^x$); la palla euclidea è omeomorfa al cubo e a $\mathbb R^n$; la **proiezione stereografica** $f(x)=\frac{1}{1-x_{n+1}}(x_1,\dots,x_n,0)$ è un omeomorfismo $S^n\setminus\{e_{n+1}\}\to\mathbb R^n$, con inversa $g(x)=\big(\frac{2x_1}{1+\|x\|^2},\dots,\frac{2x_n}{1+\|x\|^2},\frac{\|x\|^2-1}{\|x\|^2+1}\big)$. Compattezza, connessione e connessione per archi sono invarianti topologici (Teor. 5.14, Cor. 6.10 e 6.24); la completezza no (Es. 5.29). Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (§1.3, §3.2, pp. 6, 26-31, 38, 46, 49-50).

## Prerequisiti
- [[Funzione continua]]: continuità di f e della sua inversa
- [[Aperti e chiusi in uno spazio metrico]]: caratterizzazione con controimmagini di aperti

## Collegati
- [[Norme equivalenti]]: l'identità è un omeomorfismo bilipschitziano
- [[Caratteristica di Eulero]]: esempio di invariante per omeomorfismi
- [[Funzione lipschitziana tra spazi metrici]]: bilipschitziana implica omeomorfismo
- [[Funzione continua tra spazi topologici]]: un omeomorfismo è una biiezione continua e aperta (Istituzioni topologia)
- [[Spazio topologico compatto]]: biiezione continua da un compatto a un Hausdorff è un omeomorfismo (Istituzioni topologia)
