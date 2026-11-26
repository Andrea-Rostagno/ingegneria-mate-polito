---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["closed and exact forms", "forma chiusa", "forma esatta", "closed form", "exact form", "lemma di Poincaré", "Poincaré lemma", "potenziale di una forma", "condizioni di integrabilità", "forma localmente esatta", "forma integrabile"]
tags: [competenza, area/algebra-geometria]
---

# Forme chiuse ed esatte

> Una forma è esatta se è un differenziale, $\omega=d\theta$, e chiusa se $d\omega=0$. Esatta implica chiusa. Il viceversa vale localmente, e su tutto il dominio se questo è semplicemente connesso.

## Definizione / enunciato
- $\omega$ ($k$-forma) è **esatta** se $\omega=d\theta$ per una $(k-1)$-forma $\theta$, detta **potenziale**.
- $\omega$ è **chiusa** se $d\omega=0$. Si dice anche "(localmente) integrabile".

**Proposizione.** Esatta ⇒ chiusa, perché $d^2=0$. È dimostrata per 0-forme e 1-forme. Il viceversa è falso.

**Proposizioni (senza dimostrazione):**
1. Una forma chiusa è **localmente esatta**: se $d\omega=0$ su $\Omega$, esiste un aperto $A\subseteq\Omega$ e una $\theta$ con $d\theta=\omega$ su $A$.
2. **Lemma di Poincaré:** una $k$-forma chiusa su un insieme semplicemente connesso è esatta.

## Formule chiave
Condizioni di integrabilità per una 1-forma (necessarie per l'esattezza):
$$\frac{\partial\theta_i}{\partial x_j}-\frac{\partial\theta_j}{\partial x_i}=0\quad\forall i,j$$
Per una 2-forma $a\,dx\wedge dy+b\,dx\wedge dz+c\,dy\wedge dz$ in $\mathbb R^3$: $\partial_za-\partial_yb+\partial_xc=0$.

## Intuizione
"L'implicazione chiusa ⇒ esatta dipende fortemente dalla topologia di $\Omega$" (L25 p. 12): un buco nel dominio può impedire di incollare i potenziali locali.

## Come si usa
- **Esempio esatto:** $\theta=x\,dx+yz\,dy+\frac{y^2}{2}dz$ è chiusa ed esatta, con potenziale $f=\frac12x^2+\frac12y^2z$.
- **Controesempio:** su $\mathbb R^2\setminus\{0\}$ la forma $\theta=\frac{-y\,dx+x\,dy}{x^2+y^2}$ è chiusa ma non esatta. Il potenziale $\arctan(y/x)+c$ esiste solo fuori dall'asse $y$: lì $\theta$ è esatta, su tutto $\Omega$ no.

## Nei corsi
- **Geometria differenziale** (triennale): fonte `triennale/ANNO 2/geometria differenziale/Lezione25_GD.pdf` (pp. 8-17).

## Prerequisiti
- [[Differenziale esterno]]: definisce chiusa e dà d² = 0

## Porta a
- Nessuno.

## Collegati
- [[Forma differenziale]]: df è il prototipo di 1-forma esatta; x dx + x dy non lo è (L16 p. 10)
- [[Campo conservativo]]: 1-forma esatta ↔ campo con potenziale (Analisi 2)
- [[Campo irrotazionale]]: le derivate in croce sono la condizione di chiusura
- [[Insieme semplicemente connesso]]: ipotesi del lemma di Poincaré
