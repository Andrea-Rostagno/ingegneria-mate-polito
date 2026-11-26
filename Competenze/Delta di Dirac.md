---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità, Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Dirac delta", "delta di Dirac", "impulso unitario", "treno di impulsi", "pettine di Dirac", "Dirac comb"]
tags: [competenza, area/analisi]
---

# Delta di Dirac

> La distribuzione che valuta una funzione test in un punto: modello di un impulso concentrato, non è associata a nessuna funzione.

## Definizione / enunciato
**Esempio 4.10.** Per $a\in\mathbb R$:
$$\langle\delta_a,\varphi\rangle=\varphi(a),\qquad\varphi\in\mathcal D.$$
È lineare e continua, quindi una distribuzione, ma **non è regolare**: non esiste $f\in\mathcal R^1_{loc}$ con $\int f\varphi=\varphi(a)$ per ogni $\varphi$ (una funzione fa sempre una media, non una valutazione esatta).

## Formule chiave
- $\psi\,\delta_a=\psi(a)\,\delta_a$ per $\psi\in C^\infty$ (Esempio 4.16); in particolare $x\,\delta_0=0$.
- $T_H'=\delta_0$ (derivata della funzione di Heaviside); $\langle\delta_a^{(q)},\varphi\rangle=(-1)^q\varphi^{(q)}(a)$.
- $\delta_{x_0}*T=T(x-x_0)$ (Esempio 4.51): $\delta_0$ è l'unità della convoluzione.
- **Treno di impulsi**: $\big\langle\sum_{n\in\mathbb Z}\delta_n,\varphi\big\rangle=\sum_{n\in\mathbb Z}\varphi(n)$, limite in $\mathcal D'$ di $\sum_{k=-n}^n\delta_k$ (Esempio 4.33).
- $\mathcal F(\delta_{x_0})(\nu)=e^{-2\pi i x_0\nu}$, in particolare $\mathcal F(\delta_0)=1$; $\mathcal L(\delta_0)=1$.

## Intuizione
È il limite di impulsi sempre più stretti e alti di area 1: le funzioni $f_n=n\,p_{1/n}$ (porte di base $1/n$ e altezza $n$) convergono a $\delta_0$ in $\mathcal D'$ (Esempio 4.41).

## Come si usa
Compare ogni volta che si deriva una funzione con un salto ($T_f'$ contiene $[f(x_0^+)-f(x_0^-)]\delta_{x_0}$), come soluzione di $xT=0$ ($T=c\,\delta_0$) e nelle trasformate: la trasformata di Fourier di una costante è una delta.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §4.4-4.8 e §5.4-5.6. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 4 (1).pdf` (Es. 4.10, 4.16, 4.33, 4.41, 4.51); `Capitolo 5 (3).pdf` §5.4; `formulario_analisi.pdf` (tavole). Nelle lezioni di probabilità (`2023Lezione02(09-03-23) (2).pdf`, p. 7) compare la **misura** di Dirac $\delta_{x_0}(A)=\mathbb 1_A(x_0)$, che agisce sulle funzioni proprio come questa distribuzione.
- **Equazioni alle derivate parziali** (triennale): Es. 5.1.5, $\langle\delta_{x_0},\varphi\rangle=\varphi(x_0)$ in $\mathcal D'(\Omega)$, $\Omega\subset\mathbb R^n$, con la prova che non è di tipo funzione (lemma fondamentale su $\Omega\setminus\{x_0\}$); $\check\delta_0=\delta_0$, $\delta_0*\psi=\psi$ (5.16), $u*\delta_0=u$ (5.18). È il secondo membro delle equazioni per le soluzioni fondamentali: $-\Delta G=\delta_0$, $\partial_tU-\Delta_xU=\delta_{(0,0)}$. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 49-50, 53-54).

## Prerequisiti
- [[Distribuzione (funzione generalizzata)]]: esempio fondamentale non regolare

## Porta a
- [[Spazio di Hilbert]]: la relazione di completezza di una base è una rappresentazione della delta (Quantum physics)
- [[Notazione di Dirac]]: autostati della posizione $\phi_\xi(x)=\delta(x-\xi)$ (Quantum physics)
- [[Soluzione fondamentale di un operatore differenziale]]: $LU=\delta_0$ (Equazioni alle derivate parziali)
- [[Soluzione fondamentale del laplaciano]]: $-\Delta G=\delta_0$ (Equazioni alle derivate parziali)

## Collegati
- [[Supporto di una distribuzione]]: unica soluzione di $xT=0$ a meno di costanti
- [[Spazio di misura]]: la misura di Dirac della lezione 2
- [[Derivata distribuzionale]]: $H'=\delta$
- [[Convergenza di distribuzioni]]: limite di nuclei che si concentrano
- [[Trasformata di Fourier di distribuzioni temperate]]: $\mathcal F(\delta)=1$
- [[Formula di sommazione di Poisson]]: treno di impulsi
- [[Trasformata di Laplace di distribuzioni]]: $\mathcal L(\delta)=1$
