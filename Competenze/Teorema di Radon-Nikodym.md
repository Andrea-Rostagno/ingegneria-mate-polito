---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità, Financial engineering]
livello: [triennale, magistrale]
aliases: ["Radon-Nikodym theorem", "derivata di Radon-Nikodym", "Radon-Nikodym derivative", "misura assolutamente continua", "absolutely continuous measure", "misure equivalenti", "densità rispetto a una misura"]
tags: [competenza, area/analisi]
---

# Teorema di Radon-Nikodym

> Una misura che non dà peso agli insiemi trascurabili di un'altra si scrive come integrale di una densità rispetto a essa: è il fondamento delle densità di probabilità.

## Definizione / enunciato
Su $(X,\mathcal A)$, $\nu$ è **assolutamente continua** rispetto a $\mu$ ($\nu\ll\mu$) se $\mu(A)=0\Rightarrow\nu(A)=0$; se vale in entrambi i sensi le misure sono **equivalenti**.
**Proposizione.** Se $f\ge0$ è misurabile, $\nu(A)=\int_Af\,d\mu$ è una misura e $\nu\ll\mu$ (σ-additività dal corollario di Beppo Levi).
**Teorema.** Se $\mu,\nu$ sono σ-finite e $\nu\ll\mu$, esiste ed è unica q.o. $f\ge0$ misurabile tale che
$$\nu(A)=\int_Af\,d\mu\quad\forall A\in\mathcal A,\qquad f=\frac{d\nu}{d\mu}\ \text{(derivata di Radon-Nikodym)}.$$

## Formule chiave
$$g\in L^1(\nu)\iff gf\in L^1(\mu),\qquad \int_Xg\,d\nu=\int_Xgf\,d\mu=\int_Xg\,\frac{d\nu}{d\mu}\,d\mu.$$
**Corollario.** Se $\mu_\psi\ll\lambda$ con $f_\psi=\frac{d\mu_\psi}{d\lambda}$: $\int_Xg\circ\psi\,d\mu=\int_Yg\,d\mu_\psi=\int_Ygf_\psi\,d\lambda$.

## Intuizione
L'assoluta continuità è proprio la condizione necessaria perché esista una densità (un integrale su un insieme di misura nulla è nullo); il teorema dice che è anche sufficiente.

## Come si usa
In probabilità con $\mu=m$ di Lebesgue: $X$ è assolutamente continua se $\mathbb P_X\ll m$, e $f_X=\frac{d\mathbb P_X}{dm}$ è la sua densità, da cui $\mathbb E[g(X)]=\int_{\mathbb R}g(x)f_X(x)\,dx$. La tabella della lezione 13 mette in parallelo teoria della misura e calcolo delle probabilità.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 13; fonte manoscritta. Fonte: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione13(01-06-23).pdf` (lezione 13, pp. 2-5 e 11).
- **Financial engineering** (magistrale): cambio di misura di probabilità (def. c16-misure-equivalenti, prop. c16-radon-nikodym): $\tilde{\mathbb P}\sim\mathbb P$ se hanno gli stessi eventi nulli; $L=d\tilde{\mathbb P}/d\mathbb P$ con $L\ge0$, $\mathbb E[L]=1$, $\tilde{\mathbb P}(A)=\mathbb E[\mathbf 1_AL]$ ed $\mathbb E_{\tilde{\mathbb P}}[X]=\mathbb E[XL]$; se $L>0$ allora $d\mathbb P/d\tilde{\mathbb P}=1/L$. Nel binomiale $L(\omega)=\mathbb Q(\omega)/\mathbb P(\omega)$ (esempio: $p_u=0.6$, $q_u=0.5$, $L=0.8333$ e $1.25$); nel modello continuo la densità è la martingala esponenziale del teorema di Girsanov. Fonti: `Libri/Financial engineering/capitoli/cap16.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/35 - lez 17 aprile - moto browniano geometrico.pdf`.

## Prerequisiti
- [[Integrale di Lebesgue]]: misura definita da una densità
- [[Misura immagine]]: corollario per le leggi

## Porta a
- [[Variabile aleatoria assolutamente continua]]: densità come derivata RN

## Collegati
- Nessuno.
- [[Teorema di Girsanov]]: densità esponenziale che cambia il drift del browniano (Financial engineering)
- [[Misura neutrale al rischio]]: $q_j/p_j$ come derivata di Radon-Nikodym (Financial engineering)
