---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Analisi funzionale]
livello: [triennale]
aliases: ["eigenspace", "autospazi", "E_A(λ)", "V_λ", "autodirezione", "Ker(A − λI)", "spettro", "Spec(f)"]
tags: [competenza, area/algebra-geometria]
---

# Autospazio

> Il sottospazio $E_A(\lambda)=\mathrm{Ker}(A-\lambda\mathbb 1)$ formato dagli autovettori relativi a $\lambda$ e dal vettore nullo: la "direzione invariante" di un endomorfismo per l'autovalore $\lambda$.

## Definizione / enunciato
Per $A\in K^{n\times n}$ e un suo autovalore $\lambda$:
$$E_A(\lambda):=\{x\in K^n\mid Ax=\lambda x\}=\mathrm{Ker}(A-\lambda\mathbb 1).$$
Contiene lo 0, ma per avere un autovalore serve almeno un vettore **non nullo** (altrimenti ogni scalare sarebbe un autovalore). Un autospazio di dimensione 1 si chiama **autodirezione**. Lo **spettro** $\mathrm{Spec}(f)$ è l'insieme degli autovalori.

**Autospazi di autovalori distinti** hanno in comune solo il vettore nullo: autovettori relativi ad autovalori diversi sono linearmente indipendenti. Per matrici reali simmetriche sono anche **ortogonali**.

## Formule chiave
$$\dim E_A(\lambda)=n-\mathrm{rank}(A-\lambda\mathbb 1)=\mu_g(\lambda),\qquad \lambda\ \text{autovalore}\iff A-\lambda\mathbb 1\ \text{singolare}$$
Se $Ax_1=\lambda x_1$ e $Ax_2=\lambda x_2$, allora $A(ax_1+bx_2)=\lambda(ax_1+bx_2)$: per linearità l'insieme è un sottospazio.

## Intuizione
Più che di autovettori bisognerebbe parlare di autodirezioni: ogni multiplo di un autovettore lo è ancora. L'autospazio è il luogo dove $A$ si comporta "in maniera gentile", come una semplice moltiplicazione per lo scalare $\lambda$.

## Come si usa
Procedura (p. 12-14 di `12_Eigenvalues,_Eigenvectors,_Eigenspaces_Diagonalisation_v1_11.pdf`):
1. Si trova $\lambda$ dal polinomio caratteristico.
2. Si calcola $\dim E_A(\lambda)=n-\mathrm{rank}(A-\lambda\mathbb 1)$.
3. Si risolve il sistema omogeneo $(A-\lambda\mathbb 1)x=0$.

Esempio (p. 13-14): $\lambda=1$ doppio, $\mathrm{rank}(A-\mathbb 1)=1$, quindi $\dim E_A(1)=1$ e $E_A(1)=\mathcal L\{(1,-1)\}$. Endomorfismo di $V_4$ che permuta ciclicamente la base (p. 7): $b_1+b_2+b_3+b_4$ è autovettore per $1$, $b_1-b_2+b_3-b_4$ per $-1$.

## Nei corsi
- **Algebra lineare** (triennale): autovalori e diagonalizzazione (slide di S. Mercadante). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/12_Eigenvalues,_Eigenvectors,_Eigenspaces_Diagonalisation_v1_11.pdf` (p. 5-8, 11-14, 25, 39); `Appunti, riassunti e formulari/Diagonalizzazione1_SpaziRn.pdf`; `Appunti, riassunti e formulari/AlgebraGeometriaLineare.pdf` (C. Sisto, §7.4).
- **Analisi funzionale** (triennale): per $T\in\mathcal B(H)$ su uno spazio di Hilbert, $E_T(\lambda)=\operatorname{Ker}(T-\lambda I)$ (Prop. 10.26): autospazi di autovalori distinti sono in somma diretta; se $TS=ST$, $\operatorname{Im}T$ e gli $E_T(\lambda)$ sono invarianti per $S$; se $T$ è **normale**, $E_T(\lambda)\perp E_T(\mu)$ per $\lambda\ne\mu$; se $V$ è invariante per $T$, $V^\perp$ è invariante per $T^*$. In dimensione infinita lo spettro non è fatto solo di autovalori; per $T$ compatto e $\lambda\ne0$ in $\sigma(T)$ si ha $0<\dim E_T(\lambda)<\infty$. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 162-163, 177); `triennale/ANNO 3/analisi funzionale/09_aggiunto_handout.pdf` (p. 13).

## Prerequisiti
- [[Autovalori e autovettori]]: autovettori relativi allo stesso λ
- [[Nucleo e immagine]]: l'autospazio è il nucleo di A − λI

## Porta a
- [[Molteplicità algebrica e geometrica]]: la geometrica è la dimensione dell'autospazio

## Collegati
- [[Somma e intersezione di sottospazi]]: autospazi di autovalori distinti hanno intersezione nulla
- [[Endomorfismo simmetrico]]: autospazi distinti sono ortogonali
- [[Spettro di un operatore limitato]]: in dimensione infinita lo spettro contiene più degli autovalori (Analisi funzionale)
- [[Operatore normale]]: autospazi ortogonali per operatori normali (Analisi funzionale)
