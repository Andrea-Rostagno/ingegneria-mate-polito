---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità, Prob e statistica]
livello: [triennale]
aliases: ["exponential distribution", "legge esponenziale", "Exp(lambda)", "Esponenziale(lambda)", "tempi di vita", "tempi d'attesa"]
tags: [competenza, area/probabilita]
---

# Distribuzione esponenziale

> La legge continua dei tempi d'attesa e dei tempi di vita senza usura: l'unica senza memoria fra le assolutamente continue del corso.

## Definizione / enunciato
$X\sim Exp(\lambda)$, $\lambda>0$, se è assolutamente continua con densità
$$f_X(x)=\lambda e^{-\lambda x}\mathbb 1_{(0,+\infty)}(x).$$
È una densità: $\int_0^{+\infty}\lambda e^{-\lambda x}dx=1$; la legge è concentrata su $(0,+\infty)$.

## Formule chiave
$$F_X(x)=(1-e^{-\lambda x})\mathbb 1_{[0,+\infty)}(x),\qquad S_X(x)=e^{-\lambda x}\ (x\ge0),$$
$$\mathbb E[X]=\frac1\lambda,\quad \mathbb E[X^2]=\frac2{\lambda^2},\quad \operatorname{Var}(X)=\frac1{\lambda^2}=\mathbb E[X]^2.$$
**Mancanza di memoria**: $\mathbb P(X>s+t\mid X>s)=\mathbb P(X>t)$ per ogni $s,t>0$.

## Intuizione
$\frac{S_X(s+t)}{S_X(s)}=\frac{e^{-\lambda(s+t)}}{e^{-\lambda s}}=e^{-\lambda t}$: un oggetto che ha già funzionato per un tempo $s$ è "come nuovo". Per questo modella componenti non soggetti a usura. È l'analogo continuo della geometrica.

## Come si usa
Dispositivo a stato solido (Foglio, es. 11, svolto a lezione) di media $10^4$ ore: $\lambda=10^{-4}$; $\mathbb P(T>10^2)=e^{-10^{-2}}\approx0.99$; $\mathbb P(T<10^4\mid T>10^2)=1-e^{-0.99}=0.6284$ per mancanza di memoria. Se si sostituisce il dispositivo quando dura meno di $10^2$ ore, il numero di prove fino alla prima sostituzione è geometrico con $p=0.01$, media 100.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 14 (appunto manoscritto); densità nel formulario (che scrive l'indicatrice su $[0,+\infty)$). Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione14(08-06-23).pdf` (lezione 14, pp. 8-11); `formularioprobabilita (1).pdf`.
- **Prob e statistica** (triennale): caso $\alpha=1$ della Gamma; tempi fra gli eventi di un processo di Poisson; $\mathrm{Exp}(\lambda)+\mathrm{Exp}(\lambda)$ indipendenti $=\Gamma(2,\lambda)$; $\min$ di esponenziali indipendenti di parametri $\lambda,\mu$ è $\mathrm{Exp}(\lambda+\mu)$ (affidabilità di sistemi in serie); $\lfloor X\rfloor+1$ è geometrica di parametro $1-e^{-\lambda}$; $X,Y$ i.i.d. $\mathrm{Exp}(\lambda)$ e $X|X+Y=z\sim U(0,z)$; stimatore dei momenti $\hat\lambda=1/\bar X$. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione01&02(04&05-10-2023).pdf` (pp. 2-5); `2023Lezione07(18-10-2023).pdf` (pp. 10-12); `2023Lezione09(20-10-2023).pdf` (pp. 1-10); `2023Lezione13(03-11-2023).pdf` (pp. 3-4); `statistica/Stime Puntuali lez5.pdf` (Metodo dei Momenti VII).

## Prerequisiti
- [[Variabile aleatoria assolutamente continua]]: densità esponenziale

## Porta a
- [[Distribuzione Gamma]]: caso $\alpha=1$ e somme di esponenziali (Prob e statistica)
- [[Massimo e minimo di variabili aleatorie]]: minimo di esponenziali (Prob e statistica)

## Collegati
- [[Proprietà di assenza di memoria]]: mancanza di memoria
- [[Distribuzione geometrica]]: analogo discreto
- [[Corsa di esponenziali]]: minimo di esponenziali
