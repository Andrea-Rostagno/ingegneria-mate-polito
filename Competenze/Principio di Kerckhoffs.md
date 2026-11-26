---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [Kerckhoffs's principle, Kerckhoffs principle, principio di Kerckhoff, sicurezza tramite segretezza della chiave]
tags: [competenza, area/informatica]
---

# Principio di Kerckhoffs

> La sicurezza di un cifrario deve basarsi sulla segretezza della chiave, non sulla segretezza dell'algoritmo o del meccanismo.

## Definizione / enunciato
**Principio di Kerckhoffs** (`Critto_week1.pdf` p. 7):

> La sicurezza di un cifrario si deve basare sulla segretezza della chiave e non sulla modalità o meccanismo del cifrario.

Si assume quindi che il crittanalista conosca tutto il sistema: gli algoritmi $\mathrm{Gen}$, $\mathrm{Enc}$, $\mathrm{Dec}$ e gli spazi $\mathcal P$, $\mathcal K$, $\mathcal C$. Gli manca solo la chiave $k$.

## Formule chiave
Il principio non ha una formula. Ha però una conseguenza quantitativa: se l'algoritmo è pubblico, l'attacco generico è la forza bruta su $\mathcal K$, quindi la lunghezza della chiave $\log_2|\mathcal K|$ è il parametro di sicurezza ("In most cryptographic functions, the key length is an important security parameter", p. 18).

## Intuizione
Le dispense la illustrano con la citazione di Schneier (p. 2):
- chiudere una lettera in una cassaforte nascosta a New York non è sicurezza, è **oscurità**;
- consegnare la cassaforte con le specifiche di progetto e cento esemplari identici da studiare ai migliori scassinatori, senza che riescano ad aprirla, **è** sicurezza.

Un algoritmo pubblico può essere analizzato da tutti. Un segreto che coincide con l'algoritmo, se viene scoperto, compromette tutti gli utenti, mentre una chiave si cambia.

## Come si usa
- Nel valutare un cifrario si suppone sempre che l'avversario conosca il meccanismo. Ad esempio, un attacco di forza bruta a Cesare ha bisogno solo di sapere che il cifrario è Cesare.
- Tutte le definizioni di sicurezza del corso (COA, KPA, CPA, CCA; IND, NM) sono formulate in questo scenario: l'avversario ha accesso agli oracoli $\mathrm{Enc}_k$ o $\mathrm{Dec}_k$ ma non a $k$.

## Nei corsi
- **Crittografia** (magistrale): enunciato nella prima lezione, nel "gergo basilare". Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week1.pdf` (Critto 1, pp. 2, 7).

## Prerequisiti
- [[Schema di cifratura simmetrica]]: separa algoritmo pubblico e chiave segreta

## Porta a
- [[Modelli di attacco crittografico]]: l'attaccante conosce il cifrario e cerca la chiave

## Collegati
- [[Cifrario di Vigenère]]: omonimia, la "sovrapposizione di Kerckhoffs" è invece un attacco ai polialfabetici
- [[Crittografia a chiave pubblica]]: caso estremo, anche una delle due chiavi è pubblica
