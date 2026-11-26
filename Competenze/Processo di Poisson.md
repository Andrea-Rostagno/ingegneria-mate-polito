---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Prob e statistica]
livello: [magistrale, triennale]
aliases: ["Poisson process", "definizioni equivalenti", "distribuzione di Erlang", "Gamma degli arrivi"]
tags: [competenza, area/probabilita]
---

# Processo di Poisson

> Il processo di conteggio con inter-arrivi esponenziali i.i.d.: incrementi indipendenti, stazionari e di legge Poisson. È il modello base degli arrivi casuali.

## Definizione / enunciato
**Definizione.** Un processo di Poisson di tasso $\lambda$ è un processo di conteggio $(N(s))_{s\ge0}$ con $N(0)=0$ e tempi inter-arrivo i.i.d. $\exp(\lambda)$.

**Teorema (definizioni equivalenti).** $N$ è Poisson di tasso $\lambda$ se e solo se è un processo di conteggio con
- (i) $N(0)=0$, (ii) incrementi indipendenti, (iii) $N(t+s)-N(s)\sim\mathrm{Pois}(\lambda t)$;

oppure, se e solo se valgono
- (i) $N(0)=0$, (ii) incrementi indipendenti, (iii) incrementi stazionari, (iv) $\lim_{h\to0}\frac{\mathbb P(N(h)=1)}{h}=\lambda$ e $\lim_{h\to0}\frac{\mathbb P(N(h)\ge2)}{h}=0$.

## Formule chiave
$$\mathbb P(N(t)=n)=e^{-\lambda t}\frac{(\lambda t)^n}{n!},\qquad N_t-N_s\sim\mathrm{Pois}(\lambda(t-s)).$$
Tempo dell'$n$-esimo arrivo (somma di $n$ esponenziali, Gamma/Erlang):
$$f_{T_n}(t)=\lambda e^{-\lambda t}\frac{(\lambda t)^{n-1}}{(n-1)!},\quad t\ge0.$$
Se $N\sim\mathrm{Pois}(\lambda)$, allora $\mathbb E[N]=\mathrm{Var}(N)=\lambda$, e la somma di Poisson indipendenti è Poisson con somma dei parametri.

## Intuizione
Gli inter-arrivi senza memoria fanno sì che il processo "riparta" in ogni istante. Per questo gli incrementi su intervalli disgiunti sono indipendenti e dipendono solo dalla lunghezza dell'intervallo. La dimostrazione che $N(s)\sim\mathrm{Pois}(\lambda s)$ usa $\{N(s)=n\}=\{T_n\le s<T_{n+1}\}$.

## Come si usa
Schema dal `.tex`:
- numero di eventi in un intervallo: si usa la legge Poisson dell'incremento;
- tempo dell'$n$-esimo evento: si usa la Gamma;
- più tipi di eventi: thinning; più sorgenti: sovrapposizione.

Esempi:
- Lezione 3: clienti con tasso 3/h. $\mathbb P(N(2)=0)=e^{-6}$, oppure equivalentemente $\mathbb P(t_1>2)=e^{-6}$.
- Lezione 4 (rane): tasso 2/h. $\mathbb P(N(3)\le1)=e^{-6}(1+6)$.

## Nei corsi
- **Processi stocastici** (magistrale): Lezioni 2-5; `magistrale/Processi stocastici/riassunto_del_corso.tex` § Processo di Poisson; esercizi in `magistrale/Processi stocastici/suggested_exercises_PP.pdf` (Durrett 2.1-2.14, 2.22-2.33, 2.42-2.62). Fonti principali: `magistrale/Processi stocastici/Lezione_03_29_09.pdf` (lezione 3), `magistrale/Processi stocastici/Lezione_04_30_09.pdf` (lezione 4), `magistrale/Processi stocastici/Lezione_05_06_10.pdf` (lezione 5); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Processo di Poisson; `magistrale/Processi stocastici/suggested_exercises_PP.pdf`.
- **Prob e statistica** (triennale): introdotto in modo informale nelle lezioni 1-2 come applicazione della Gamma: $N_t\sim\mathcal P(\lambda t)$ numero di eventi in $[0,t]$, $S_1,\dots,S_n$ tempi fra eventi i.i.d. $\mathrm{Exp}(\lambda)$, $T_m=S_1+\dots+S_m\sim\Gamma(m,\lambda)$ istante dell'$m$-esimo evento, con $\mathbb P(T_m\le t)=\mathbb P(N_t\ge m)$ e $S_{T_m}(t)=\mathbb P(N_t<m)$. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione01&02(04&05-10-2023).pdf` (pp. 4-5).

## Prerequisiti
- [[Processo di rinnovo]]: rinnovo con inter-arrivi esponenziali
- [[Proprietà di assenza di memoria]]: inter-arrivi esponenziali senza memoria

## Porta a
- [[Thinning di Poisson]]: classificazione indipendente di ogni arrivo
- [[Sovrapposizione di processi di Poisson]]: somma di processi indipendenti
- [[Condizionamento degli arrivi di Poisson]]: incrementi indipendenti e poissoniani
- [[Processo di Poisson non omogeneo]]: tasso costante sostituito da lambda(t)
- [[Coda M-M-1]]: arrivi secondo processo di Poisson
- [[Teorema di Burke]]: le uscite formano un Poisson

## Collegati
- [[Catena di Markov a tempo continuo]]: il Poisson è la CTMC più semplice
- [[Martingala]]: Poisson compensato è martingala
- [[Moto browniano]]: incrementi indipendenti e stazionari
- [[Paradosso dell'ispezione]]: esempio delle slide con inter-arrivi esponenziali
- [[Distribuzione Gamma]]: istante dell'$m$-esimo arrivo (legge di Erlang, Prob e statistica)
