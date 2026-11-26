---
tipo: competenza
area: finanza
corsi: [Prova finale]
livello: [triennale]
aliases: ["multi-asset option pricing with copulas", "opzioni multivariate", "opzioni basket", "basket options", "opzioni arcobaleno", "rainbow options", "opzioni barriera", "super-replicazione", "super-replication bounds", "limiti di prezzo con copule"]
tags: [competenza, area/finanza]
---

# Pricing di opzioni multi-asset con copule

> Per opzioni su più sottostanti la copula costruisce la legge congiunta dei prezzi a scadenza; il prezzo è il valore atteso scontato del payoff, e al variare della copula si ottengono limiti di prezzo.

## Definizione / enunciato
Procedura (tesi §3.3.1):
1. una copula costruisce la **distribuzione congiunta dei prezzi** dei sottostanti alla scadenza;
2. con essa si calcola il **valore atteso del payoff** su tutti gli scenari possibili;
3. **attualizzando** al tasso privo di rischio si ottiene il prezzo.
Nei mercati incompleti, dove non esiste un'unica misura di probabilità priva di arbitraggio, le copule servono a derivare strategie di **super-replicazione** e quindi limiti superiori e inferiori al prezzo, al variare delle ipotesi sulla dipendenza.

## Formule chiave
La tesi non dà formule di prezzo. Lo schema è prezzo $=$ valore atteso del payoff sotto la legge congiunta $C(F_1,\dots,F_d)$, scontato al tasso risk-free; i limiti si ottengono facendo variare $C$, e i casi estremi di dipendenza sono le copule di Fréchet-Hoeffding (collegamento mio).

## Intuizione
Il payoff di un'opzione su un paniere dipende da come i sottostanti si muovono insieme, non solo dalle singole leggi: con le stesse marginali, una dipendenza diversa cambia il prezzo. La flessibilità delle copule permette, secondo la tesi (§1.1), di calibrare i modelli ai dati di mercato e di simulare scenari realistici che tengano conto della dipendenza.

## Come si usa
Esempi della tesi:
- **opzioni arcobaleno**, sul minimo o massimo di un paniere: le copule catturano la dipendenza fra i rendimenti e danno limiti di prezzo per super-replicazione;
- **opzioni basket** e altri derivati multi-asset (§1.1);
- **opzioni barriera**: la copula lega il processo del prezzo all'evento di attivazione della barriera.

## Nei corsi
- **Prova finale** (triennale): §3.3.1 "Tariffare le opzioni", solo descrittivo. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§1.1, p. 12; §3.3.1, p. 22).

## Prerequisiti
- [[Teorema di Sklar]]: legge congiunta da marginali e copula
- [[Valore atteso]]: prezzo come valore atteso scontato del payoff

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Limiti di Fréchet-Hoeffding]]: dipendenze estreme che delimitano i prezzi
- [[Copule nel rischio di credito]]: altra applicazione finanziaria
- [[Massimo e minimo di variabili aleatorie]]: payoff delle opzioni arcobaleno su minimo e massimo
