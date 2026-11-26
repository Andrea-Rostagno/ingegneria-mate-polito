---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["rank-nullity theorem", "teorema del rango", "teorema nullità più rango", "dim Ker + dim Im"]
tags: [competenza, area/algebra-geometria]
---

# Teorema della dimensione

> Per ogni applicazione lineare $f:U\to V$ vale $\dim U=\dim\mathrm{Ker}(f)+\dim\mathrm{Im}(f)$: la dimensione del dominio si ripartisce tra ciò che si perde e ciò che si raggiunge.

## Definizione / enunciato
**Teorema della dimensione.** Se $f\in\mathrm{Hom}_K(U,V)$ con $U$ finitamente generato,
$$\dim(U)=\underbrace{\dim(\mathrm{Ker}(f))}_{\mathrm{null}(f)}+\underbrace{\dim(\mathrm{Im}(f))}_{\mathrm{rank}(f)} .$$
In versione matriciale, per $A\in K^{m\times n}$: $\dim\mathrm{Ker}(A)=n-\mathrm{rank}(A)$, cioè il numero $n-r$ di parametri liberi di Rouché-Capelli.

## Formule chiave
$$\mathrm{null}(f)+\mathrm{rank}(f)=\dim U$$
Conseguenze per $f\in\mathrm{Hom}(U_m,V_n)$:
- se $m<n$, $f$ non può essere suriettiva;
- se $m>n$, $f$ non può essere iniettiva;
- se $m=n$, $f$ è iniettiva $\iff$ suriettiva $\iff$ biiettiva (conseguenza diretta del teorema, non scritta esplicitamente nelle slide).

## Intuizione
Ogni dimensione del dominio o viene "schiacciata" nel nucleo o sopravvive nell'immagine. Un'applicazione non può creare dimensioni: $\mathrm{rank}(f)\le\dim U$.

## Come si usa
- Esempio (p. 51 e 53 di `11_Linear_Mappings.pdf`): $f:\mathbb R^5\to\mathbb R^3$ con $\mathrm{rank}F=2$ ha nullità $3$, e infatti $3+2=5$.
- Domande sull'esistenza: per $m>n$ nessuna a.l. $U_m\to V_n$ è iniettiva, per $m<n$ nessuna è suriettiva (p. 56-57). Per esempio un'a.l. $\mathbb R^4\to\mathbb R^3$ ha sempre $\mathrm{null}\ge4-3=1$ (esempio costruito qui).
- Calcolare la dimensione del nucleo senza risolverne il sistema: basta il rango della matrice associata.
- Per un endomorfismo: $\dim\mathrm{Ker}(A-\lambda\mathbb 1)=n-\mathrm{rank}(A-\lambda\mathbb 1)$ dà la molteplicità geometrica di $\lambda$.

## Nei corsi
- **Algebra lineare** (triennale): applicazioni lineari (slide di S. Mercadante). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/11_Linear_Mappings.pdf` (p. 54-58); `Appunti, riassunti e formulari/10_Spazi_Vettoriali_II.pdf` (p. 6); `Appunti, riassunti e formulari/AlgebraGeometriaLineare.pdf` (C. Sisto, §4.2).

## Prerequisiti
- [[Nucleo e immagine]]: dim U = null(f) + rank(f)
- [[Base e dimensione]]: dim U = dim Ker f + dim Im f
- [[Rango di una matrice]]: il rango di A è la dimensione dell'immagine

## Porta a
- [[Isomorfismo di spazi vettoriali]]: tra spazi di uguale dimensione iniettiva equivale a suriettiva
- [[Molteplicità algebrica e geometrica]]: mg(λ) = n − rank(A − λI)

## Collegati
- [[Teorema di Rouché-Capelli]]: n − r è la dimensione del nucleo
- [[Formula di Grassmann]]: altra relazione additiva tra dimensioni
