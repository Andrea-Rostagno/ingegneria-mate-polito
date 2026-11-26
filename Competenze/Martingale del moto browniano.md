---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Financial engineering]
livello: [magistrale]
aliases: [Brownian martingales, "W_t^2 - t", moto browniano martingala, moto browniano geometrico martingala, martingala esponenziale del browniano, tre martingale browniane]
tags: [competenza, area/probabilita]
---

# Martingale del moto browniano

> Il moto browniano è una martingala rispetto alla filtrazione naturale e a quella aumentata; da esso si costruiscono altre martingale ($W_t^2-t$, browniano geometrico) a cui applicare tutta la teoria di Doob.

## Definizione / enunciato
**Teorema.** $(W_t)$ è una martingala rispetto alla filtrazione naturale $(\mathcal F_t)$ e alla filtrazione aumentata $(\mathcal F_{t+})$.

Integrabilità: $\mathbb E[|W_t|]=\sqrt{2t/\pi}<\infty$ (legge half-normal; radice persa nell'OCR, da verificare sul PDF). Martingalità, da Markov e indipendenza degli incrementi:
$$\mathbb E[W_{t+h}\mid\mathcal F_t]=\mathbb E[W_{t+h}-W_t]+W_t=W_t,$$
e analogamente $\mathbb E[W_{t+h}\mid\mathcal F_{t+}]=W_t$ per la Markov forte "più forte".

## Formule chiave
Esercizio D: $Y_t=W_t^2-t$ è martingala (naturale e aumentata).
Esercizio E (moto browniano geometrico):
$$S_t=s_0\exp\Big(\big(\mu-\tfrac{\sigma^2}2\big)t+\sigma W_t\Big),$$
di cui si chiede per quali parametri è martingala, sub- o supermartingala, e $\mathbb E[S_t]$, $\mathrm{Var}(S_t)$, $\mathrm{Cov}(S_t,S_{t+h})$ (risultati non riportati nel materiale).

## Intuizione
Gli incrementi gaussiani sono centrati e indipendenti dal passato: il browniano è il gioco equo per eccellenza in tempo continuo. Avendo traiettorie continue (quindi càdlàg), "the power of martingales is unlocked": optional stopping, convergenza e disuguaglianze valgono senza modifiche.

## Come si usa
- **Uscita da $[-A,B]$**: optional stopping su $W_t$ dà $P(W_\tau=-A)=B/(A+B)$, $P(W_\tau=B)=A/(A+B)$.
- **Tempo medio di uscita** (esercizio H): optional stopping su $W_t^2-t$, come nel caso discreto dove $X_n^2-n$ dava $\mathbb E[\tau]=(A+x_0)(B-x_0)$; il risultato continuo non è scritto nel materiale.
- Esercizio P: se $f\ge0$ e $f(W_t)$ è supermartingala, $f$ è costante (convergenza di Doob).
- Nella prova dell'inversione, $W_t^2$ è submartingala (Jensen) e si applica la massimale di Doob.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 17 ("è una martingala"). Fonti: `magistrale/Processi stocastici/Lezione_23_09_12.pdf` (lezione 23), `magistrale/Processi stocastici/Lezione_24_15_12.pdf` (lezione 24), `riassunto_del_corso.tex` §Moto browniano, `suggested_exercises_brownian_motion.pdf` (es. D, E, H, P).
- **Financial engineering** (magistrale): tre martingale browniane (prop. c11-martingale-browniano): $W_t$, $W_t^2-t$, $Z^\theta_t=\exp\{\theta W_t-\frac12\theta^2t\}$; inoltre $\mathbb E[W_t^2\mid\mathcal F_s]=W_s^2+(t-s)$, quindi $W_t^2$ è una submartingala (errore frequente: $\mathbb E[W_t^2\mid\mathcal F_s]=W_s^2$). Nel cap. 16 la martingala esponenziale con il segno opposto, $\mathcal E_t(\theta)=e^{-\theta W_t-\theta^2t/2}$, $d\mathcal E_t=-\theta\mathcal E_t\,dW_t$, è la densità del teorema di Girsanov; il GBM $S_t$ è martingala sse $\mu=0$ e $e^{-rt}S_t$ sse $\mu=r$ (teo. c15-gbm-proprieta). Fonti: `Libri/Financial engineering/capitoli/cap11.tex`, `cap15.tex`, `cap16.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/34 - 15 aprile - Lesson 1 -WP-SC_Italiano.pdf`, `35 - lez 17 aprile - moto browniano geometrico.pdf`.

## Prerequisiti
- [[Moto browniano]]: incrementi gaussiani centrati
- [[Martingale a tempo continuo]]: teoria di Doob in tempo continuo

## Porta a
- [[Probabilità di uscita del moto browniano]]: optional stopping applicato a W_t

## Collegati
- [[Moto browniano geometrico]]: è martingala se e solo se $\mu=0$, il prezzo scontato se e solo se $\mu=r$ (corso Financial engineering)
- [[Teorema di Girsanov]]: la martingala esponenziale definisce il cambio di misura
- [[Formula di Itô]]: $d(W_t^2-t)=2W_t\,dW_t$ ha solo il termine stocastico
