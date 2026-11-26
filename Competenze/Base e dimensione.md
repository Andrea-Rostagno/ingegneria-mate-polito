---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Istituzioni algebra, Analisi funzionale]
livello: [triennale]
aliases: ["basis", "dimension", "dimensione", "base canonica", "standard basis", "componenti rispetto a una base", "coordinate", "metodo degli scarti successivi", "estrarre una base"]
tags: [competenza, area/algebra-geometria]
---

# Base e dimensione

> Una base è un insieme ordinato e libero di generatori; tutte le basi di uno spazio finitamente generato hanno lo stesso numero di elementi, la dimensione.

## Definizione / enunciato
Una **base** di $V$ è un insieme **libero e ordinato di generatori** $B=(v_1,\dots,v_n)$. Equivalentemente, la mappa $K^n\to V$, $(\lambda^1,\dots,\lambda^n)\mapsto\sum\lambda^iv_i$ è biiettiva, cioè **ogni vettore si scrive in modo unico** come c.l. degli elementi della base. I coefficienti sono le **componenti** (coefficienti di Fourier) rispetto a $B$.

Il numero di elementi di una base non dipende dalla base: è la **dimensione** $\dim V$. Per convenzione $\dim\{0_V\}=0$ (base vuota). Base canonica di $K^n$: $E_n=(e_1,\dots,e_n)$.

## Formule chiave
$$\dim\mathrm{Col}(A)=\mathrm{rank}(A)=\dim\mathrm{Row}(A),\qquad \dim\mathrm{Ker}(A)=n-\mathrm{rank}(A)\quad(A\in K^{m\times n})$$
$$U\subseteq V\ \Rightarrow\ \dim U\le\dim V,\qquad \dim U=\dim V\iff U=V$$
Se $\dim V=n$, $n$ vettori sono una base se e solo se sono liberi (o se e solo se generano).

## Intuizione
La base è un insieme di generatori "ridotto all'osso". Scegliere una base in $V_n$ dà a ogni vettore astratto un'"etichetta" $(c^1,\dots,c^n)\in K^n$, come un numero di matricola: per questo da un certo punto in poi si può lavorare solo con $K^n$.

## Come si usa
- $((1,1),(1,-1))$ è una base di $\mathbb R^2$: il sistema $a+b=x$, $a-b=y$ ha soluzione unica per ogni $(x,y)$ (p. 4 di `10_Spazi_Vettoriali_II.pdf`).
- **Estrarre una base** da generatori (metodo degli scarti successivi): si scartano i vettori che sono c.l. dei precedenti. In $K^n$ si mettono i generatori in riga e si riduce. Esempio: $\mathcal L\{(1,2,3,4),(5,6,7,8),(9,10,11,12)\}$ ha base $((1,0,-1,-2),(0,1,2,3))$ (p. 16).
- Base di $\{2x+y=0\}$: $(t,-2t)=t(1,-2)$, base $((1,-2))$, dimensione 1.
- $\mathbb R_3[x]$ ha base $(1,x,x^2,x^3)$; $\{p\mid p(1)=0\}$ ha base $((x-1),(x-1)x,(x-1)x^2)$ (p. 10-11).

## Nei corsi
- **Algebra lineare** (triennale): spazi vettoriali parte II (slide di S. Mercadante). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/10_Spazi_Vettoriali_II.pdf` (p. 2-22, 33-34); `Appunti, riassunti e formulari/3_Calcolo_vettori_in_R^3.pdf` (p. 23-24); `Appunti, riassunti e formulari/SpaziSottospazi1_SpaziRn.pdf`.
- **Istituzioni algebra** (triennale): generatori e insiemi liberi sono definiti anche per famiglie infinite, cioè ogni sottofamiglia finita è linearmente indipendente. Prop. 15: ogni spazio vettoriale non nullo ha una base, dimostrato con il Lemma di Zorn sull'insieme dei sottoinsiemi liberi ordinato per inclusione. Il grado di un'estensione di campi è una dimensione: $[\mathbb C:\mathbb R]=2$ con base $\{1,i\}$. Fonti: `triennale/ANNO 2/istituzioni/Alg-28-09-22.pdf` (lezione 1-2, pp. 16-18); `triennale/ANNO 2/istituzioni/Alg-14-12-22.pdf` (lezioni 33/34, p. 4).
- **Analisi funzionale** (triennale): richiamo nel cap. 1 (Teor. 1.13, senza dimostrazione): ogni spazio ha una base e, dati $A\subseteq G$ con $A$ libero e $\operatorname{span}G=V$, esiste una base $B$ con $A\subseteq B\subseteq G$; tutte le basi hanno la stessa cardinalità. Esempi di dimensione infinita: $\dim\mathcal P=\infty$ (base dei monomi), $\dim F(S,V)=\infty$ per $S$ infinito, $\dim C_{\mathbb F}(I)=\infty$; $\dim_{\mathbb R}\mathbb C^n=2n$. Le coordinate rispetto a una base sono combinazioni **finite**: per questo negli spazi di Hilbert si introduce la diversa nozione di base ortonormale (in $\ell^2$ lo span della base canonica è solo $c_{00}$). In dimensione finita tutte le norme sono equivalenti. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (§1.2, pp. 5-7; Oss. 6.42, p. 80); `triennale/ANNO 3/analisi funzionale/01_spazivettoriali_handout.pdf` (pp. 7-9).

## Prerequisiti
- [[Sottospazio generato]]: una base è un insieme libero di generatori
- [[Dipendenza e indipendenza lineare]]: una base è un insieme libero di generatori

## Porta a
- [[Cambiamento di base]]: componenti dello stesso vettore in basi diverse
- [[Formula di Grassmann]]: relazione tra dimensioni di somma e intersezione
- [[Teorema della dimensione]]: dim U = dim Ker f + dim Im f
- [[Procedimento di Gram-Schmidt]]: costruisce una base ortonormale

## Collegati
- [[Lemma di Zorn]]: garantisce l'esistenza di basi anche negli spazi non finitamente generati
- [[Estensione di campi]]: il grado $[E:F]$ è la dimensione di $E$ su $F$
- [[Sottospazio vettoriale]]: la dimensione di un sottospazio è al più quella dello spazio
- [[Isomorfismo di spazi vettoriali]]: la scelta di una base dà V ≅ K^n
- [[Base ortonormale di uno spazio di Hilbert]]: base con combinazioni infinite, diversa dalla base algebrica (Analisi funzionale)
- [[Norme equivalenti]]: in dimensione finita tutte le norme sono equivalenti (Analisi funzionale)
