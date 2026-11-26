---
tipo: competenza
area: statistica
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["power function", "potenza di un test", "power of a test", "beta(theta)", "dimensione campionaria per una potenza data", "sample size calculation"]
tags: [competenza, area/statistica]
---

# Funzione potenza

> $\beta(\theta)=\mathbb P(\mathbf X\in R;\theta)$: probabilità di rifiutare $H_0$ al variare del vero parametro; sotto $H_0$ è l'errore di prima specie, sotto $H_1$ è 1 meno l'errore di seconda specie.

## Definizione / enunciato
$$\beta(\theta)=\mathbb P(\mathbf X\in R;\theta)=\begin{cases}\mathbb P(\text{errore di prima specie};\theta)&\theta\in\Theta_0\\1-\mathbb P(\text{errore di seconda specie};\theta)&\theta\in\Theta_0^c\end{cases}$$
Il **livello** del test è $\sup_{\theta\in\Theta_0}\beta(\theta)$.

## Formule chiave
- Brexit, $R=\{T\notin[2386-c,2386+c]\}$: $\beta(p)=1-\sum_{i=2386-c}^{2386+c}\binom{4772}ip^i(1-p)^{4772-i}$.
- Test unilaterale sulla media normale con $\sigma^2$ noto, $R=\{\frac{\bar x-\mu_0}{\sqrt{\sigma^2/n}}\ge z_\alpha\}$:
$$\beta(\mu)=\mathbb P\Big(Z\ge z_\alpha+\frac{\mu_0-\mu}{\sqrt{\sigma^2/n}}\Big),$$
uguale ad $\alpha$ in $\mu=\mu_0$ e crescente in $\mu$.
- Numerosità per avere potenza 0.8 in $\mu$: $n=\sigma^2\Big(\frac{z_{0.8}-z_\alpha}{\mu_0-\mu}\Big)^2$.

## Intuizione
Un buon test ha $\beta$ piccola su $\Theta_0$ e grande su $\Theta_0^c$. Se il vero parametro è vicino a $H_0$ è difficile rifiutare anche quando $H_0$ è falsa; aumentando $n$ la potenza sotto $H_1$ cresce. Per $\mu\to\mu_0$ servirebbero infinite osservazioni.

## Come si usa
Brexit con il $c$ di livello 0.05: $\beta(0.3)=1$, $\beta(0.4)=1$, $\beta(0.45)=0.99$, $\beta(0.49)=0.27$. Sonniferi con $\sigma^2=10$, $H_0:\mu\le0$: per rifiutare con probabilità 0.8 se l'effetto vero è di 2 ore, $n=10\big(\frac{z_{0.8}-z_\alpha}{0-2}\big)^2=15.456$, quindi basta $n=16$.

## Nei corsi
- **Prob e statistica** (triennale): slide sui test. Fonti: `triennale/ANNO 3/prob e statistica/statistica/Test d'Ipotesi e Intervalli di Confidenza lez6.pdf` (Costruzione del test III-IX, XXI; Rapporto di verosimiglianza XV-XIX).

## Prerequisiti
- [[Test d'ipotesi]]: regione di rifiuto ed errori

## Porta a
- [[Test uniformemente più potente]]: confronto fra test dello stesso livello

## Collegati
- [[Test z sulla media]]: potenza calcolata in forma chiusa
