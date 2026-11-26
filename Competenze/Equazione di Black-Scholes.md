---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [Black-Scholes equation, Black-Scholes PDE, PDE di Black-Scholes, equazione alle derivate parziali di Black-Scholes, contratto logaritmico]
tags: [competenza, area/finanza]
---

# Equazione di Black-Scholes

> Il prezzo di ogni derivato europeo nel modello di Black-Scholes risolve la PDE $\Pi_t+rs\Pi_s+\frac12\sigma^2s^2\Pi_{ss}=r\Pi$ con dato finale il payoff.

## Definizione / enunciato
**Teorema** (teo. c16-pde-bs): se $\Pi\in C^{1,2}([0,T)\times(0,\infty))$ e $\Pi(t,S_t)$ è il prezzo di non arbitraggio di un derivato con payoff $\varphi(S_T)$, allora
$$\frac{\partial\Pi}{\partial t}+rs\frac{\partial\Pi}{\partial s}+\frac12\sigma^2s^2\frac{\partial^2\Pi}{\partial s^2}=r\Pi,\qquad\Pi(T,s)=\varphi(s).$$
Con le greche: $\Theta+rS\Delta+\frac12\sigma^2S^2\Gamma=r\Pi$.

**Strategia di replica** (prop. c16-replica): se $\Pi$ risolve la PDE con $\Pi(T,s)=\varphi(s)$, la strategia $y_t=\partial_s\Pi(t,S_t)$ azioni e $x_t=(\Pi(t,S_t)-y_tS_t)/B(t)$ quote del conto in banca è autofinanziante, vale $\Pi(t,S_t)$ e replica $\varphi(S_T)$.

## Formule chiave
Derivazione: con Itô $d\Pi=(\Pi_t+\mu S\Pi_s+\frac12\sigma^2S^2\Pi_{ss})dt+\sigma S\Pi_s\,dW$; il portafoglio "$\Delta=\Pi_s$ azioni, −1 derivato" non ha termine in $dW$, quindi deve rendere $r$; il drift $\mu$ si cancella.

## Intuizione
Eliminato il rischio, il portafoglio coperto deve rendere il tasso privo di rischio: è la versione continua del portafoglio senza rischio del binomiale. È un caso particolare della formula di Feynman-Kac con $k=r$, $b(x)=rx$, $\sigma(x)=\sigma x$: la soluzione è $e^{-r(T-t)}\mathbb E^{\mathbb Q}[\varphi(S_T)]$.

## Come si usa
Esempio del libro: il contratto che paga $\ln S_T$ vale $f=e^{-r(T-t)}[\ln S+(r-\frac12\sigma^2)(T-t)]$; con $f_t=rf-e^{-r(T-t)}(r-\frac12\sigma^2)$, $f_S=e^{-r(T-t)}/S$, $f_{SS}=-e^{-r(T-t)}/S^2$ i termini si cancellano e resta $rf$; $f(T,S)=\ln S$. La stessa relazione, letta sulle greche, lega theta, delta e gamma di un portafoglio.

## Nei corsi
- **Financial engineering** (magistrale): cap. 16 §§L'equazione di Black-Scholes, La replica dinamica; cap. 17 cor. c17-relazione-greche; cap. 19 (Feynman-Kac). Fonti: `Libri/Financial engineering/capitoli/cap16.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/37 - lez 24 aprile a - formula Black Scholes.pdf`.

## Prerequisiti
- [[Formula di Itô]]: differenziale del prezzo dell'opzione
- [[Strategia autofinanziante]]: portafoglio di replica
- [[Delta hedging]]: portafoglio delta-neutrale

## Porta a
- [[Formula di Feynman-Kac]]: rappresentazione della soluzione come attesa
- [[Greche]]: relazione tra theta, delta e gamma

## Collegati
- [[Formula di Black-Scholes]]: soluzione per la call
- [[Opzioni call e put]]: dato finale $\varphi(s)=(s-K)^+$ o $(K-s)^+$
