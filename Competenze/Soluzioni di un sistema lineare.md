---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["solution set of a linear system", "sistema lineare", "sistema omogeneo", "sistema inomogeneo", "sistema lineare omogeneo associato", "soluzione particolare più omogenea", "spazio delle soluzioni", "gradi di libertà", "sistemi equivalenti"]
tags: [competenza, area/algebra-geometria]
---

# Soluzioni di un sistema lineare

> Struttura dell'insieme delle soluzioni di $Ax=b$: per un sistema omogeneo è il sottospazio $\mathrm{Ker}(A)$; per uno non omogeneo compatibile è una soluzione particolare più $\mathrm{Ker}(A)$.

## Definizione / enunciato
Un sistema lineare (s.l.) di $m$ equazioni in $n$ incognite si scrive $Ax=b$, con $A\in K^{m\times n}$; in forma vettoriale è $x^1c_1+\dots+x^nc_n=b$ (colonne di $A$). $\mathrm{Sol}(S)=\mathrm{Sol}(E_1)\cap\dots\cap\mathrm{Sol}(E_m)$. Due sistemi sono **equivalenti** se hanno le stesse soluzioni.

- **Omogeneo** ($b=0$): sempre compatibile (soluzione banale). Le combinazioni lineari di soluzioni sono soluzioni, quindi $\mathrm{Sol}=\mathrm{Ker}(A)$ è un sottospazio di $K^n$. Ha solo la soluzione banale se e solo se $\mathrm{rank}A=n$.
- **Inomogeneo** compatibile:
$$S=\{x_0+x\mid Ax_0=b,\ x\in\mathrm{Ker}(A)\},$$
che **non** è uno spazio vettoriale; la differenza di due soluzioni sta in $\mathrm{Ker}(A)$.

## Formule chiave
$$A\sim B\ (\text{righe-equivalenti})\iff\mathrm{Ker}(A)=\mathrm{Ker}(B)\iff\mathrm{Row}(A)=\mathrm{Row}(B)$$
$$\mathrm{Ker}(A)=\{x\in K^n\mid r\cdot x=0\ \ \forall r\in\mathrm{Row}(A)\},\qquad \#\text{parametri liberi}=n-\mathrm{rank}A$$

## Intuizione
Un sistema racconta "libertà negate": si parte da $n$ incognite libere e ogni equazione significativa (linearmente indipendente dalle altre) ne blocca una. Le mosse di Gauss non cambiano lo spazio delle righe e quindi non cambiano le soluzioni: per questo si risolve riducendo.

## Come si usa
- Algoritmo: ridurre (o super-ridurre) $(A|b)$, scegliere come parametri le incognite delle colonne non marcate, risolvere all'indietro.
- Esempio (p. 26 di `8_Sistemi_lineari.pdf`): dopo la super-riduzione il sistema diventa $\{x-5z=2,\ y+2z=-1\}$. Con $z=t$: $(x,y,z)=(2,-1,0)+t(5,-2,1)$, dove $(2,-1,0)$ è una soluzione particolare e $t(5,-2,1)$ la soluzione generale dell'omogeneo associato.
- $x+y+z=1$ ha soluzioni $(t,s,1-t-s)$; aggiungendo $x-y=0$ restano $(t,t,1-2t)$: un parametro in meno (p. 15).

## Nei corsi
- **Algebra lineare** (triennale): sistemi lineari (slide di S. Mercadante); nel modulo numerico gli stessi sistemi si risolvono con metodi diretti. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/8_Sistemi_lineari.pdf` (p. 2-27); `Appunti, riassunti e formulari/MatriciSisitemi_SISTEMI (1).pdf`; `Appunti, riassunti e formulari/AlgebraGeometriaLineare.pdf` (C. Sisto, §4.1-4.2).

## Prerequisiti
- [[Riduzione a scalini di una matrice]]: si riduce (A|b) e si risolve all'indietro
- [[Sottospazio vettoriale]]: Ker(A) è un sottospazio di K^n

## Porta a
- [[Teorema di Rouché-Capelli]]: quando esistono soluzioni e quante
- [[Nucleo e immagine]]: Ker(A) è il nucleo dell'applicazione x ↦ Ax

## Collegati
- [[Metodo di eliminazione di Gauss]]: risoluzione numerica dello stesso problema
- [[Equazioni matriciali lineari]]: generalizzazione AX = B
