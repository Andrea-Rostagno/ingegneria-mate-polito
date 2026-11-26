---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["fundamental solution of the Laplacian", "soluzione fondamentale di Laplace", "potenziale newtoniano", "G(x)"]
tags: [competenza, area/analisi]
---

# Soluzione fondamentale del laplaciano

> La funzione radiale $G$, logaritmica nel piano e proporzionale a $|x|^{2-n}$ per $n>2$, che risolve $-\Delta G=\delta_0$ nel senso delle distribuzioni.

## Definizione / enunciato
Per $x\ne0$:
$$G(x):=\begin{cases}-\dfrac1{2\pi}\log|x| & n=2,\\[2mm] \dfrac1{(n-2)\sigma_{n-1}}\cdot\dfrac1{|x|^{n-2}} & n>2,\end{cases}\qquad(3.13)$$
($\sigma_{n-1}$ misura di $\partial B_1$). $G$ è la **soluzione fondamentale del laplaciano** in $\mathbb R^n$:
$$-\Delta G=\delta_0\quad\text{in }\mathcal D'(\mathbb R^n).\qquad(3.14)$$

## Formule chiave
La fonte scrive "per ogni $n\ge2$, $G\in L^1(\mathbb R^n)$" (da verificare sul PDF: per definire $T_G$ basta e serve l'integrabilità locale), quindi definisce la distribuzione $\langle T_G,\varphi\rangle=\int G\varphi$. Basta provare $\langle T_G,\Delta\varphi\rangle=-\varphi(0)$:
$$\langle T_G,\Delta\varphi\rangle=\int_{\mathbb R^n\setminus B_\varepsilon}G\,\Delta\varphi\,dx+\int_{B_\varepsilon}G\,\Delta\varphi\,dx .$$
Il secondo integrale tende a zero; nel primo la formula di Green lascia due termini di bordo su $\partial B_\varepsilon$ (il termine di volume contiene $\Delta G=0$): quello con $G\,\partial_\nu\varphi$ tende a zero, quello con $\varphi\,\partial_\nu G$ tende a $-\varphi(0)$.

Centrata in $x$: $G^x(y):=G(y-x)$ (3.15) risolve $-\Delta_yG(y-x)=\delta_x$.

## Intuizione
Si parte dalle armoniche radiali $u(x)=v(|x|)$ (l'equazione per $v$ è un'ODE) e si sceglie la costante in modo che il flusso di $-\nabla G$ attraverso ogni sfera sia 1: tutta la "massa" del laplaciano sta nell'origine. Per $n=3$ è, a meno della costante, il potenziale di una carica puntiforme.

## Come si usa
- Una soluzione di $-\Delta u=f$ in $\mathbb R^n$ è $u=G*f$ (Prop. 5.4.3, con $f$ a supporto compatto).
- Ingrediente della formula di rappresentazione di Green e della funzione di Green per la palla.
- In dimensione 1 l'analogo è $U(x)=|x|/2$ per $U''=\delta_0$ (Es. 5.4.4), soluzione fondamentale dell'opposto del laplaciano.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §3.3 "La soluzione fondamentale" (Lezione 5), con la verifica distribuzionale abbozzata; ripresa in §5.4. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 25-26, 55-56).

## Prerequisiti
- [[Soluzione fondamentale di un operatore differenziale]]: definizione generale $LU=\delta_0$
- [[Delta di Dirac]]: secondo membro dell'equazione (3.14)

## Porta a
- [[Formula di rappresentazione di Green]]: $G^x$ rappresenta $u$ tramite laplaciano e dati al bordo
- [[Principio del massimo di Hopf]]: la funzione barriera ha la forma di $G$

## Collegati
- [[Equazione di Poisson]]: per $n=3$ il potenziale $V=\frac1{4\pi\varepsilon_0}\int\frac{\rho}{|r-r'|}$ è la convoluzione con $G$
- [[Soluzione fondamentale dell'equazione del calore]]: analogo parabolico
