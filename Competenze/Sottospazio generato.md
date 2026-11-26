---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["linear span", "span", "combinazione lineare", "linear combination", "insieme di generatori", "spazio finitamente generato", "retta vettoriale", "piano vettoriale", "Row(A)", "Col(A)", "spazio delle righe", "spazio delle colonne"]
tags: [competenza, area/algebra-geometria]
---

# Sottospazio generato

> L'insieme $\mathcal L\{v_1,\dots,v_k\}$ di tutte le combinazioni lineari di vettori dati: il più piccolo sottospazio che li contiene.

## Definizione / enunciato
Una **combinazione lineare** (c.l.) di $v_1,\dots,v_k\in V$ è $\lambda^1v_1+\dots+\lambda^kv_k$ con $\lambda^i\in K$ (sia l'operazione sia il risultato).
$$\mathcal L\{v_1,\dots,v_k\}:=\{\lambda^1v_1+\dots+\lambda^kv_k\mid\lambda^i\in K\}$$
è lo **spazio generato** (linear span), e $v_1,\dots,v_k$ ne sono i **generatori**. Uno s.v. generato da un numero finito di vettori è **finitamente generato**.

Casi particolari:
- $\mathcal L\{v\}$ con $v\neq0$ è una **retta vettoriale** (direzione);
- $\mathcal L\{v_1,v_2\}$ con $v_1,v_2$ non collineari è un **piano vettoriale**.

**Spazi associati a una matrice** $A\in K^{m\times n}$: $\mathrm{Row}(A)=\mathcal L\{r_1,\dots,r_m\}$ e $\mathrm{Col}(A)=\mathcal L\{c_1,\dots,c_n\}$.

## Formule chiave
$$\dim\mathrm{Col}(A)=\mathrm{rank}(A)=\dim\mathrm{Row}(A),\qquad \mathcal L\{G_1\}+\mathcal L\{G_2\}=\mathcal L\{G_1\cup G_2\}$$

## Intuizione
Ogni span è un sottospazio e, viceversa, ogni sottospazio di uno spazio finitamente generato è lo span di un numero finito di generatori. Se il campo è infinito, lo span di un numero finito di vettori ha comunque infiniti elementi.

## Come si usa
- $\mathcal L\{i,k\}=\{(x,0,z)\}\subset\mathbb R^3$ (p. 20 di `7_Spazi_vettoriali.pdf`).
- Riconoscere se $x$ è c.l. di $x_1,\dots,x_k$: si studia la compatibilità del sistema $\lambda^1x_1+\dots+\lambda^kx_k=x$. Esempio (Esercizio 14, p. 10-12 di `3_Calcolo_vettori_in_R^3.pdf`): $x=[1,0,-1]$ rispetto a $[1,1,2],[-1,1,0],[0,0,1]$.
- Una $n$-pla generica a componenti lineari omogenee, per esempio $(a,a,-a)$, si riscrive come span: $a(1,1,-1)$.

## Nei corsi
- **Algebra lineare** (triennale): spazi vettoriali parte I (slide di S. Mercadante). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/7_Spazi_vettoriali.pdf` (p. 12-21, 40-45); `Appunti, riassunti e formulari/3_Calcolo_vettori_in_R^3.pdf` (p. 10-12); `Appunti, riassunti e formulari/SpaziSottospazi1_SpaziRn.pdf`.

## Prerequisiti
- [[Spazio vettoriale]]: combinazioni lineari di vettori dati

## Porta a
- [[Dipendenza e indipendenza lineare]]: un vettore è dipendente se sta nello span degli altri
- [[Base e dimensione]]: una base è un insieme libero di generatori
- [[Somma e intersezione di sottospazi]]: la somma è lo span dell'unione dei generatori

## Collegati
- [[Sottospazio vettoriale]]: ogni span è un sottospazio e viceversa
