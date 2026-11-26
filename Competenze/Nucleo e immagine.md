---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["kernel", "image", "nucleo", "immagine", "Ker(f)", "Im(f)", "null space", "nullità", "rango di un'applicazione lineare", "rank(f)", "null(f)"]
tags: [competenza, area/algebra-geometria]
---

# Nucleo e immagine

> I due sottospazi associati a un'applicazione lineare $f:U\to V$: il nucleo $\mathrm{Ker}(f)$ (ciò che va in 0) in $U$ e l'immagine $\mathrm{Im}(f)$ (ciò che viene raggiunto) in $V$.

## Definizione / enunciato
$$\mathrm{Ker}(f):=\{u\in U\mid f(u)=0_V\}=f^{-1}(0_V),\qquad \mathrm{Im}(f):=\{f(u)\mid u\in U\}.$$
- $\mathrm{Ker}(f)$ è un ss.v. di $U$; la sua dimensione è la **nullità** $\mathrm{null}(f)$.
- $\mathrm{Im}(f)$ è un ss.v. di $V$; la sua dimensione è il **rango** $\mathrm{rank}(f)$.
- Le immagini di un insieme di generatori di $U$ generano $\mathrm{Im}(f)$. Più in generale $f(W)$ e $f^{-1}(W)$ sono sottospazi se $W$ lo è.

Con la matrice associata $F$:
$$\mathrm{Ker}(f)=\mathrm{Ker}(F),\quad \mathrm{null}(f)=\mathrm{null}(F)=n-\mathrm{rank}F,\quad \mathrm{Im}(f)=\mathrm{Col}(F),\quad \mathrm{rank}(f)=\mathrm{rank}(F).$$

## Formule chiave
$$f\ \text{iniettiva}\iff\mathrm{Ker}(f)=\{0_U\}\iff\dim\mathrm{Ker}(f)=0$$
$$f\ \text{suriettiva}\iff\mathrm{Im}(f)=V\iff\dim\mathrm{Im}(f)=\dim V$$

## Intuizione
Il nucleo misura quanta informazione $f$ "perde" (vettori diversi con la stessa immagine differiscono per un elemento del nucleo). L'immagine misura quanto di $V$ viene "coperto". Per una matrice: il nucleo sono le soluzioni del sistema omogeneo, l'immagine i termini noti $b$ per cui $Ax=b$ è compatibile.

## Come si usa
- Base del nucleo (p. 53 di `11_Linear_Mappings.pdf`): $f:\mathbb R^5\to\mathbb R^3$ con $\mathrm{rank}F=2$ ha nullità $5-2=3$ e $\mathrm{Ker}(f)=\mathcal L\{(1,2,1,0,0),(-2,-3,0,1,0),(-3,-4,0,0,1)\}$.
- Base dell'immagine: metodo degli scarti sulle colonne di $F$, fermandosi a $\mathrm{rank}F$ colonne indipendenti (p. 47).
- Appartenenza all'immagine (p. 48): $(-2,\lambda,\lambda^2)\in\mathrm{Im}(f)$ se e solo se il sistema è compatibile (Rouché-Capelli), cioè $\lambda^2+\lambda-2=0$, quindi $\lambda=1$ o $\lambda=-2$.
- $f(x,y,z,t)=(x-y-t,\ x-z-t,\ y-z)$: $\mathrm{rank}F=2$, quindi $\mathrm{null}(f)=4-2=2$ (p. 51).

## Nei corsi
- **Algebra lineare** (triennale): applicazioni lineari (slide di S. Mercadante); nel modulo numerico nucleo e immagine si leggono dalla SVD. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/11_Linear_Mappings.pdf` (p. 44-58); `Appunti, riassunti e formulari/8_Sistemi_lineari.pdf` (p. 17); `Appunti, riassunti e formulari/AlgebraGeometriaLineare.pdf` (C. Sisto, §4.2, §6.2).

## Prerequisiti
- [[Applicazione lineare]]: i due sottospazi che descrivono f
- [[Matrice associata a un'applicazione lineare]]: Ker f = Ker F, Im f = Col F
- [[Sottospazio vettoriale]]: nucleo e immagine sono sottospazi
- [[Soluzioni di un sistema lineare]]: Ker(A) è il nucleo dell'applicazione x ↦ Ax

## Porta a
- [[Teorema della dimensione]]: dim U = null(f) + rank(f)
- [[Isomorfismo di spazi vettoriali]]: iniettiva se Ker = {0}, suriettiva se Im = V
- [[Autospazio]]: l'autospazio è il nucleo di A − λI

## Collegati
- [[Decomposizione ai valori singolari]]: le colonne di U e V danno basi di immagine e nucleo
