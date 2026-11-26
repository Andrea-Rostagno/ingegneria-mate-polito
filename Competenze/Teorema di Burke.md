---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [Burke's theorem, output process, processo di uscita, teorema di Burke 1956]
tags: [competenza, area/probabilita]
---

# Teorema di Burke

> In regime stazionario il processo delle uscite di una coda M/M/* è un processo di Poisson con lo stesso tasso degli arrivi, indipendente dallo stato attuale della coda.

## Definizione / enunciato
**Processo di uscita.** $U_t$ = numero di individui usciti dalla coda entro il tempo $t$ (processo di conteggio).
**Teorema (Burke, 1956).** Sia $(X_t)$ una coda di tipo M/M/* ($1$, $s$ o $\infty$ server) in regime stazionario, con tasso di arrivo $\lambda$. Allora
1. $(U_t)_{t\ge0}$ è un processo di Poisson di tasso $\lambda$;
2. per ogni $t\ge0$, $X_t$ è indipendente da $(U_s)_{s\in[0,t]}$.

## Formule chiave
Catena invertita nel tempo: se $X_0\sim\pi$ e la catena è non esplosiva, $Z_t=X_{T-t}$ è una CTMC con
$$\hat p_t(i,j)=\frac{\pi(j)p_t(j,i)}{\pi(i)},\qquad \hat q(i,j)=\frac{\pi(j)q(j,i)}{\pi(i)} .$$
Se $\pi$ è bilanciata ($\pi(i)q(i,j)=\pi(j)q(j,i)$), $Z$ ha la stessa legge di $X$.

## Intuizione
Le code M/M/* sono nascita-morte non esplosive, quindi la loro stazionaria è bilanciata e la catena è reversibile. Guardando il film all'indietro le uscite diventano gli arrivi, che sono Poisson($\lambda$); e gli arrivi futuri sono indipendenti dallo stato presente, quindi le uscite passate lo sono da $X_t$. Il risultato non dipende da $\mu$ né da $s$: a regime servizio e arrivi si equilibrano.

## Come si usa
Ufficio postale M/M/$s$ a regime, arrivi $\lambda$ al minuto:
- il numero di uscite in $[20,50]$ è Poisson di media $30\lambda$;
- se ogni cliente uscente è soddisfatto con probabilità $p$ indipendente, i soddisfatti formano un Poisson di tasso $p\lambda$ (thinning);
- osservare 4 uscite negli ultimi 10 minuti non cambia la legge di $X_t$: $\mathbb P(X_t=10\mid\cdot)=\pi(10)$.

Nelle reti in tandem l'output a regime del primo nodo è l'input Poisson del secondo, indipendente dallo stato del primo: da qui la forma prodotto.

## Nei corsi
- **Processi stocastici** (magistrale): argomento 9. Fonti: `magistrale/Processi stocastici/Lezione_14_04_11.pdf` (lezione 14, inversione temporale, output process, Burke ed esempi dell'ufficio postale), `magistrale/Processi stocastici/Lezione_15_10_11.pdf` (lezione 15, recap e uso nelle reti). Non presente nel `.tex`. Le slide pongono gli esempi come domande: le risposte sopra seguono direttamente da Poisson e thinning.

## Prerequisiti
- [[Bilancio dettagliato]]: reversibilità temporale della coda
- [[Coda M-M-1]]: processo di uscita in regime stazionario
- [[Processo di Poisson]]: le uscite formano un Poisson

## Porta a
- [[Rete di Jackson]]: indipendenza dei nodi in tandem

## Collegati
- —
