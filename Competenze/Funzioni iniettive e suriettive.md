---
tipo: competenza
area: analisi
corsi: [Analisi 1, Algebra lineare, Istituzioni algebra]
livello: [triennale]
aliases: ["injective function", "surjective function", "funzione biunivoca", "biiettiva", "immagine di una funzione", "controimmagine", "preimage"]
tags: [competenza, area/analisi]
---

# Funzioni iniettive e suriettive

> Una funzione è iniettiva se punti diversi hanno immagini diverse, suriettiva se ogni elemento del codominio è immagine di qualcosa, biunivoca se è entrambe le cose.

## Definizione / enunciato
Sia $f:A\to B$ (a ogni elemento di $A$ associa un unico elemento di $B$). Si definiscono (Mazzi, def. 1.2):
- **immagine** $f(A)=\operatorname{im}f=\{y\in B:\exists x\in A,\ f(x)=y\}$ e immagine di $C\subseteq A$;
- **grafico** $\Gamma(f)=\{(x,f(x)):x\in A\}\subseteq A\times B$;
- **controimmagine** di $y$: $f^{-1}(y)=\{x\in A:f(x)=y\}$; di $D\subseteq B$: $f^{-1}(D)=\{x\in A:f(x)\in D\}$.

$f$ è (def. 1.4):
- **iniettiva** se $x_1\ne x_2\Rightarrow f(x_1)\ne f(x_2)$, equivalentemente $f(x_1)=f(x_2)\Rightarrow x_1=x_2$, equivalentemente ogni $y\in\operatorname{im}f$ ha controimmagine di un solo elemento (prop. 1.1);
- **suriettiva** se $\operatorname{im}f=B$;
- **biunivoca** (biiettiva) se iniettiva e suriettiva.

## Formule chiave
$$f\ \text{iniettiva}\iff\big(f(x_1)=f(x_2)\Rightarrow x_1=x_2\big),\qquad f\ \text{suriettiva}\iff f(A)=B$$

## Intuizione
Iniettiva: nessuna retta orizzontale taglia il grafico più di una volta. Suriettiva: dipende dal codominio scelto, non solo dalla legge. La controimmagine di un punto può essere vuota, un punto o molti punti.

## Come si usa
Esempi delle fonti: $f(x)=3x-1$ è biunivoca su $\mathbb R$; $f(x)=1/x$ è iniettiva con immagine $\mathbb R\setminus\{0\}$; $f(x)=|x|$ non è iniettiva perché $f^{-1}(y)=\{-y,y\}$ per $y>0$. Nella lezione del 04/10/2021: se $y\notin f(U)$ allora $f^{-1}(y)=\emptyset$, e $f(x)=x^2$ su $\mathbb R$ non è suriettiva (né iniettiva). Esercizio di Morandotti (es. 1.5.17-1): stabilire se la funzione "altezza" degli studenti a valori in $[1,5/2]$ è iniettiva, suriettiva, biunivoca.

## Nei corsi
- **Analisi 1** (triennale): "funzioni: iniettività e suriettività". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Capitolo Funzioni.pdf` (§1.1, def. 1.1-1.4, prop. 1.1, es. 1.3, pp. 1-4); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-10-04.pdf` (p. 1); `triennale/ANNO 1/analisi 1/analisi 1.docx` (definizioni sommarie).
- **Algebra lineare** (triennale): per un'applicazione lineare $f:U\to V$ l'iniettività equivale a $\mathrm{Ker}f=\{0\}$ e la suriettività a $\dim\mathrm{Im}f=\dim V$; le a.l. iniettive, suriettive e biiettive si chiamano monomorfismi, epimorfismi e isomorfismi. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/11_Linear_Mappings.pdf` (p. 2-6, 19-20, 55-58).
- **Istituzioni algebra** (triennale): una funzione è una corrispondenza $F\subseteq X\times Y$ con $\forall x\ \exists!\,y:\ xFy$. Iniettività e suriettività sono caratterizzate dall'esistenza di un'inversa sinistra o destra: per l'inversa destra serve l'assioma della scelta. Fonti: `triennale/ANNO 2/istituzioni/Alg-28-09-22.pdf` (lezione 1-2, pp. 3-10).

## Prerequisiti
- [[Operazioni sugli insiemi]]: immagine e controimmagine sono insiemi
- [[Quantificatori]]: definizioni con per ogni/esiste

## Porta a
- [[Funzione composta e funzione inversa]]: l'inversa esiste solo per le iniettive
- [[Funzioni monotone]]: strettamente monotona implica iniettiva
- [[Inversa destra e inversa sinistra]]: iniettiva se e solo se ha inversa sinistra, suriettiva se e solo se ha inversa destra
- [[Teorema di Cantor-Schröder-Bernstein]]: due iniezioni opposte danno una biiezione

## Collegati
- [[Applicazione lineare]]: nozioni insiemistiche specializzate alle a.l.
