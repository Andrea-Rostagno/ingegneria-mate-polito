---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Ottimizzazione in condizione di incertezza, Dinamiche su network]
livello: [magistrale]
aliases: [M/M/1 queue, M/M/1, coda a un server, intensità di traffico rho, legge di Little, Little's law]
tags: [competenza, area/probabilita]
---

# Coda M-M-1

> Coda con arrivi di Poisson, servizi esponenziali e un solo server: la catena di nascita e morte più semplice, stabile se e solo se $\lambda<\mu$.

## Definizione / enunciato
Notazione di Kendall: arrivi / servizio / numero di server / capacità / disciplina (M = markoviano, D = deterministico, G = generale). Nella M/M/1 gli arrivi sono Poisson di tasso $\lambda$, i servizi i.i.d. $\mathrm{Exp}(\mu)$, un server; $X_t$ = clienti nel sistema (in servizio compreso), $S=\{0,1,2,\dots\}$:
$$q(j,j+1)=\lambda\ (j\ge0),\qquad q(j,j-1)=\mu\ (j\ge1).$$
**Teorema (riassunto).** La M/M/1 è sempre non esplosiva ($\lambda(0)=\lambda$, $\lambda(j)=\lambda+\mu$, tassi limitati). Inoltre
- $\lambda<\mu$: ricorrente positiva, con unica stazionaria geometrica (spostata);
- $\lambda=\mu$: ricorrente nulla;
- $\lambda>\mu$: transiente.

## Formule chiave
$$M=\sum_{j\ge0}\Big(\frac\lambda\mu\Big)^j=\frac{1}{1-\lambda/\mu}\ (\lambda<\mu),\qquad \pi(j)=\Big(1-\frac\lambda\mu\Big)\Big(\frac\lambda\mu\Big)^j=(1-\rho)\rho^j .$$

## Intuizione
La embedded ha $r(0,1)=1$, $r(j,j+1)=\frac{\lambda}{\lambda+\mu}$, $r(j,j-1)=\frac{\mu}{\lambda+\mu}$: è una passeggiata parzialmente riflessa, ricorrente se e solo se $\lambda\le\mu$. Non c'è esplosione, quindi la ricorrenza si eredita; per $\lambda<\mu$ esiste $\pi$ (ricorrenza positiva), per $\lambda=\mu$ no (ricorrenza nulla). $\rho=\lambda/\mu$ è l'intensità di traffico.

## Come si usa
Es. I (barista): la frazione di tempo in cui il barista è inattivo è $\pi(0)=1-\lambda/\mu$ se $\lambda<\mu$ e $0$ se $\lambda\ge\mu$; la durata media di un periodo di lavoro senza interruzioni è $\frac1{\mu-\lambda}$ se $\lambda<\mu$, infinita altrimenti. In una rete di Jackson ogni nodo M/M/1 con tasso effettivo $\lambda_i$ richiede $\lambda_i<\mu_i$.

## Nei corsi
- **Processi stocastici** (magistrale): argomento 9 ("code markoviane e reti di Jackson"). Fonti: `magistrale/Processi stocastici/Lezione_14_04_11.pdf` (lezione 14), `magistrale/Processi stocastici/Lezione_15_10_11.pdf` (lezione 15, recap), `riassunto_del_corso.tex` §Code markoviane e reti di Jackson (il `.tex` dice solo "per $\rho\ge1$ non c'è stazionaria"; la tricotomia è nelle slide), `suggested_exercises_CTMC.pdf` (es. I).
- **Ottimizzazione in condizione di incertezza** (magistrale): sistema di prova per la simulazione a eventi discreti: attese simulate con la ricorsione di Lindley, stabilità $\rho=\lambda/\mu<1$, e confronto con l'attesa teorica $(\lambda/\mu)/(\mu-\lambda)$ calcolata negli script; con $\lambda=1$, $\mu=1.1$ gli intervalli di confidenza ingenui risultano incoerenti per l'autocorrelazione delle attese. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/02 - IntroSimulation.pdf` (p. 7-13); codice `magistrale/Ottimizzazione in condizione di incertezza/codici/ScriptMM1.m`.
- **Dinamiche su network** (magistrale): interpretazione della nascita-morte continua con tassi costanti $\lambda$, $\mu$ su $\{0,\dots,n\}$: $\pi_i=\rho^i/(1+\dots+\rho^n)\to(1-\rho)\rho^i$ per $n\to\infty$ se $\rho<1$; occupazione media $\mathbb E[X]\to\rho/(1-\rho)$, tempo di soggiorno $\mathbb E[T]=(1+\mathbb E[X])/\mu\to\frac1{\mu(1-\rho)}=\frac1{\mu-\lambda}$, e $\mathbb E[T]=\mathbb E[X]/\lambda$ è la **legge di Little**. Fonti: `magistrale/Dinamiche su network/slide/Slides-7-MarkovChains+RandomWalks.pdf` (pp. 53-54).

## Prerequisiti
- [[Catena di nascita e morte continua]]: nascita-morte con tassi costanti
- [[Processo di Poisson]]: arrivi secondo processo di Poisson

## Porta a
- [[Coda M-M-s]]: generalizza a $s$ server paralleli
- [[Teorema di Burke]]: processo di uscita in regime stazionario

## Collegati
- [[Simulazione a eventi discreti]]: la M/M/1 simulata con la ricorsione di Lindley (Ottimizzazione in condizione di incertezza)
