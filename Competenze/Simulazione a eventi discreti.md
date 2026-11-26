---
tipo: competenza
area: probabilita
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["discrete-event simulation", "DES", "DEDS", "discrete-event dynamic systems", "sistemi dinamici a eventi discreti", "ricorsione di Lindley", "Lindley's recursion", "coda degli eventi", "event queue"]
tags: [competenza, area/probabilita]
---

# Simulazione a eventi discreti

> Simulazione di sistemi il cui stato è costante a tratti e cambia solo quando avviene un evento (arrivo, fine servizio), come code e reti di code.

## Definizione / enunciato
Nei **sistemi dinamici a eventi discreti** (DEDS: catene di Markov a tempo continuo, processi di Poisson, reti di code) lo stato è costante a tratti: un evento cambia lo stato e programma altri eventi. Il simulatore tiene una **coda degli eventi**, lista ordinata degli eventi futuri. In una coda: un arrivo programma l'arrivo successivo e, secondo lo stato del server, allunga la coda oppure occupa il server e programma la fine servizio; una fine servizio programma la successiva oppure libera il server se la coda è vuota.

## Formule chiave
Se interessano solo i tempi d'attesa di una coda a un server FIFO basta la **ricorsione di Lindley**:
$$W_j=\max\{0,\ W_{j-1}+S-I\},$$
con $W_j$ attesa del cliente $j$, $S$ tempo di servizio e $I$ tempo di interarrivo aleatori. Per la M/M/1 ($I\sim\mathrm{Exp}(\lambda)$, $S\sim\mathrm{Exp}(\mu)$) la condizione di stabilità è $\rho=\lambda/\mu<1$.

## Intuizione
Il tempo non avanza a passi fissi ma salta da un evento al successivo. Le statistiche sono di due tipi: somme discrete (attesa media dei clienti) e integrali nel tempo (lunghezza media della coda), che sono somme di rettangoli e richiedono di registrare gli istanti degli eventi.

## Come si usa
La funzione MATLAB `MM1_Queue(lambda, mu, howmany)` genera interarrivi e servizi esponenziali e applica Lindley (il primo cliente attende 0). Per reti di code si usano ambienti dedicati come Arena o SIMIO. Il passo critico viene dopo: l'analisi statistica dei tempi simulati, che sono correlati.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Discrete-event dynamic systems" e simulazione della coda M/M/1. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/02 - IntroSimulation.pdf` (p. 3, 6-9); codice `magistrale/Ottimizzazione in condizione di incertezza/codici/ScriptMM1.m`, `MM1PlotSampleMean.m`.

## Prerequisiti
- [[Coda M-M-1]]: il sistema simulato, risolubile anche analiticamente
- [[Processo di Poisson]]: arrivi a interarrivi esponenziali
- [[Metodo Monte Carlo]]: generazione dei tempi aleatori

## Porta a
- [[Analisi dell'output di simulazione]]: intervalli di confidenza corretti per dati correlati

## Collegati
- [[Catena di Markov a tempo continuo]]: modello analitico dello stesso tipo di sistema
- [[Coda (struttura dati)]]: la lista degli eventi futuri è una coda ordinata
